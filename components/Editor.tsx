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
import styles from "./Editor.module.css";

interface EditorProps {
    data: undefined | OutputData;
    holder: string;
    onChange: (data: OutputData) => void;
}

const EDITOR_TOOLS: { [key: string]: ToolConstructable | ToolSettings } = {
    code: Code,
    header: Header,
    paragraph: {
        class: Paragraph as ToolConstructable,
        inlineToolbar: true,
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

export default function Editor({ data, onChange, holder }: EditorProps) {

    const ref = useRef<EditorJS | null>(null);

    //initialize editorjs
    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                placeholder: "Tell your story...",
                tools: EDITOR_TOOLS,
                data,
                async onChange(api) {
                    const content = await api.saver.save();
                    // console.log(content, "sdfb");
                    onChange(content);
                },
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
            <div id={holder} style={{ width: "100%"}} className={styles.editor}></div>
        </>
    );
}