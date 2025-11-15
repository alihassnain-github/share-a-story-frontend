import { stardom } from "@/app/layout";
import { RiMessage3Line, RiThumbUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

interface Author {
    name: string;
    bio: string;
    avatar: string | null;
    followers: number;
    isFollowing: boolean;

}

interface Story {
    id: number;
    title: string;
    description?: string;
    date: string;
    likes: number;
    comments: number;
    image: string;
    author: Author;
}

export default function StoryCard({ story }: { story: Story }) {
    return (
        <div>
            <div className="border-b border-gray-200 py-4 bg-base-100 cursor-pointer max-w-2xl">
                <div className="flex items-center gap-4">
                    <div className="flex-1 gap-0">
                        <div className="flex gap-2 items-center mb-4">
                            {story.author.avatar ? (
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <Image src={story.author.avatar} width={10} height={10} alt={story.author.name} />
                                    </div>
                                </div>
                            ) : (
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span className="text-xs">{story.author.name}</span>
                                    </div>
                                </div>
                            )}
                            <Link href={""} prefetch={false} className="hover:underline text-sm">{story.author.name}</Link>
                        </div>
                        <h2 className={`card-title ${stardom.className} lg:text-xl`}>{story.title}</h2>
                        <p className="lg:text-lg text-md text-gray-500">{story.description}</p>
                        <div className="flex gap-4 items-center mt-4 text-gray-500">
                            <span className="text-xs">
                                {story.date}
                            </span>
                            <span className="text-xs">
                                <RiThumbUpLine size={14} className="inline me-2" />
                                {story.likes}
                            </span>
                            <span className="text-xs">
                                <RiMessage3Line size={14} className="inline me-2" />
                                {story.comments}
                            </span>
                        </div>
                    </div>
                    <div className="relative w-28 h-20 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-32 shrink-0">
                        <Image src={story.image} alt={story.title} fill className="object-cover rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}