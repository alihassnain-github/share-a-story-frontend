import StoryCard from "@/components/StoryCard";
import Link from "next/link"

const stories = [
    {
        id: 1,
        title: "Link Previews: OG Meta Tags",
        description: "Learn how to set up Open Graph meta tags to generate rich link previews.",
        date: "Jul 15, 2021",
        likes: 76,
        comments: 4,
        image: "https://images.unsplash.com/photo-1696041758578-db4b9b94a4cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "David Polcari",
            bio: "Frontend developer & blogger.",
            avatar: "https://i.pravatar.cc/150?img=12",
            followers: 1200,
            isFollowing: true
        }
    },
    {
        id: 2,
        title: "How to use EditorJS in Next.js?",
        description: "Step-by-step guide for integrating Editor.js with Next.js.",
        date: "Apr 11, 2024",
        likes: 24,
        comments: 0,
        image: "https://images.unsplash.com/photo-1696041758578-db4b9b94a4cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Abhishek",
            bio: "Full-stack engineer and open-source enthusiast.",
            avatar: "https://i.pravatar.cc/150?img=32",
            followers: 890,
            isFollowing: false
        }
    },
    {
        id: 3,
        title: "Advanced React Design Patterns",
        description: "Modern patterns like render props, compound components, and hooks.",
        date: "Jan 9, 2023",
        likes: 142,
        comments: 18,
        image: "https://images.unsplash.com/photo-1696041758578-db4b9b94a4cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Emily Carter",
            bio: "React specialist & UI architect.",
            avatar: "https://i.pravatar.cc/150?img=45",
            followers: 3400,
            isFollowing: true
        }
    },
    {
        id: 4,
        title: "Next.js App Router — Best Practices",
        description: "A deep dive into App Router architecture and performance tips.",
        date: "Aug 2, 2022",
        likes: 98,
        comments: 7,
        image: "https://images.unsplash.com/photo-1696041758578-db4b9b94a4cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "John Smith",
            bio: "Web engineer focused on performance and DX.",
            avatar: "https://i.pravatar.cc/150?img=17",
            followers: 2100,
            isFollowing: false
        }
    },
    {
        id: 5,
        title: "Mastering Tailwind CSS for Production",
        description: "Learn purge, optimization, and architecture for large-scale Tailwind projects.",
        date: "Oct 20, 2023",
        likes: 51,
        comments: 12,
        image: "https://images.unsplash.com/photo-1696041758578-db4b9b94a4cf?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            name: "Sara Khan",
            bio: "UI/UX designer & frontend developer.",
            avatar: "https://i.pravatar.cc/150?img=28",
            followers: 1700,
            isFollowing: true
        }
    }
];


export default function ReadingHistoryPage() {
    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div>
                <div className="tabs tabs-border">
                    <Link href={"/following"} prefetch={false} role="tab" className="tab">Following</Link>

                    <Link href={"/following/readinghistory"} prefetch={false} role="tab" className="tab tab-active">Reading history</Link>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div>
                            <div role="alert" className="alert alert-vertical sm:alert-horizontal">
                                <div></div>
                                <span>You can clear your reading history for a fresh start.</span>
                                <div>
                                    <button className="btn btn-sm md:btn-md rounded-full btn-outline font-medium btn-error">Clear history</button>
                                </div>
                            </div>

                            <div className="grid gap-y-4 my-4">
                                {stories.map((story) => (
                                    <StoryCard key={story.id} story={story} />
                                ))}
                            </div>

                        </div>
                    </div>

                    <Link href={"/following/suggestions"} prefetch={false} role="tab" className="tab">Suggestions</Link>
                </div>
            </div>
        </section>
    )
}