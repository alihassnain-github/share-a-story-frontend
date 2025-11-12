"use client";

import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("./Editor"), {
    ssr: false,
});

export default function StoryEditor() {
    const [content, setContent] = useState<OutputData | undefined>(undefined);

    return (
        <Editor
            data={content}
            onChange={(data) => setContent(data)}
            holder="editor_create"
        />
    )
}