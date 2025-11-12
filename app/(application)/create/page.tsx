import StoryEditor from "@/components/StoryEditor";

export default function CreateStory() {
    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div className="md:max-w-3/5">
                <StoryEditor />
            </div>
        </section>
    )
}