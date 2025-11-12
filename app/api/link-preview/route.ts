import * as cheerio from "cheerio";
import axios from "axios";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
        return Response.json({ error: "URL is required" }, { status: 400 });
    }

    try {

        const { data } = await axios.get(url);

        const $ = cheerio.load(data);

        const getMeta = (name: string) =>
            $(`meta[property='${name}']`).attr("content") ||
            $(`meta[name='${name}']`).attr("content");

        const meta = {
            title: getMeta("og:title") || $("title").text(),
            site_name: "",
            description: getMeta("og:description") || getMeta("description"),
            image: {
                url: getMeta("og:image")
            },
        };

        return Response.json({
            success: 1,
            meta
        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return Response.json({ success: 0, error: "Failed to fetch metadata" }, { status: 500 });
    }

}