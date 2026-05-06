import React from 'react';
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Gallery from "./Gallery";

export default async function Projects() {
    const supabase = createSupabaseServerClient();

    const { data: works, error } = await supabase
        .from("works")
        .select("id, title, src_url, date_published")
        // .order("date_published", { ascending: false });
        .order("id", { ascending: true })

    if (error) {
        return <pre>Failed to load works: {error.message}</pre>
    }

    return (
        <Gallery works={works} />
    );
}