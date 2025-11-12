declare module '@editorjs/embed' {
    import { ToolConstructable } from '@editorjs/editorjs';
    const Embed: ToolConstructable;
    export default Embed;
}

declare module '@editorjs/link' {
    import { ToolConstructable } from '@editorjs/editorjs';
    const LinkTool: ToolConstructable;
    export default LinkTool;
}