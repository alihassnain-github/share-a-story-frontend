"use client";

import { useEffect, useRef } from "react";
import EditorJS, { OutputData, ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import Embed from "./Embed";

interface EditorProps {
    data: undefined | OutputData;
    holder: string;
    onChange: (data: OutputData) => void;
}

const EDITOR_TOOLS: { [key: string]: ToolConstructable | ToolSettings } = {
    code: Code,
    header: {
        class: Header as unknown as ToolConstructable,
        config: {
            levels: [1, 2],
            defaultLevel: 1,
            placeholder: "Title"
        },
    },
    paragraph: {
        class: Paragraph as unknown as ToolConstructable,
        inlineToolbar: true,
        config: {
            placeholder: "Tell your story..."
        }
    },
    embed: Embed,
    LinkTool: {
        class: LinkTool,
        toolbox: {
            title: "Emded",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><path stroke="currentColor" stroke-width="2" d="M5 10H19" ></path><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect></svg>`,
        },
        config: {
            endpoint: "/api/link-preview"
        }
    },
    image: Image,
    quote: Quote,
    delimiter: Delimiter,
};

// Initial data structure with title and paragraph blocks
const INITIAL_DATA: OutputData = {
    time: Date.now(),
    blocks: [
        {
            id: "title-block",
            type: "header",
            data: {
                text: "",
                level: 1
            }
        },
        {
            id: "content-block",
            type: "paragraph",
            data: {
                text: ""
            }
        }
    ],
    version: "2.28.0"
};

export default function Editor({ data, onChange, holder }: EditorProps) {

    const ref = useRef<EditorJS | null>(null);

    //initialize editorjs
    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                // Use initial data if no data is provided
                data: data || INITIAL_DATA,
                async onChange(api) {
                    const content = await api.saver.save();
                    onChange(content);
                },
                defaultBlock: "paragraph",
                onReady: () => {
                    // Focus on the second block (paragraph) after editor is ready
                    setTimeout(() => {
                        const blocks = editor.blocks.getBlocksCount();
                        if (blocks > 1) {
                            editor.caret.setToBlock(1, 'start');
                        }
                    }, 100);
                }
            });
            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div id={holder} className="[&_h1]:font-bold [&_h2]:font-bold [&_h1]:text-4xl [&_h2]:text-2xl [&_h1]:tracking-wider [&_h2]:tracking-wider w-full tracking-wide"></div>
        </>
    );
}