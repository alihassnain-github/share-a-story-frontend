import Link from "next/link"

export default function StoriesPage() {
    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div>
                <div className="tabs tabs-border">
                    <Link href={"/stories"} prefetch={false} role="tab" className="tab tab-active">Published (01)</Link>
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                    </div>

                    <Link href={"/stories/draft"} prefetch={false} role="tab" className="tab">Draft (02)</Link>

                </div>
            </div>
        </section>
    )
}