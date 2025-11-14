import Image from "next/image"

const writers = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?img=12",
        fullName: "Sarah Mitchell",
        bio: "Tech writer sharing insights on AI, web development, and digital innovation. Coffee enthusiast",
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?img=33",
        fullName: "James Chen",
        bio: "Software engineer turned storyteller. Writing about code, startups, and the future of technology.",
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?img=45",
        fullName: "Emma Rodriguez",
        bio: "Creative writer exploring design, UX, and human-centered technology. Always learning, always sharing.",
    },
    {
        id: 4,
        avatar: "https://i.pravatar.cc/150?img=68",
        fullName: "Michael Thompson",
        bio: "Full-stack developer documenting my journey. Tutorials, tips, and lessons learned along the way.",
    },
]

const topics = [
    {
        id: 1,
        title: "JavaScript",
        stories: "248K stories",
        writers: "86K writers",
    },
    {
        id: 2,
        title: "Software Development",
        stories: "270K stories",
        writers: "84K writers",
    },
    {
        id: 3,
        title: "Programming",
        stories: "386K stories",
        writers: "111K writers",
    },
]

export default function FollowingPage() {
    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div>
                <div className="tabs tabs-border">
                    <input type="radio" name="following_tab" className="tab" aria-label="Following" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <h5 className="font-bold tracking-wide">Writers</h5>
                        <div>
                            {writers.map((writer) => (
                                <div
                                    key={writer.id}
                                    className="flex items-start gap-4 max-w-2xl border-b border-gray-200 py-4"
                                >
                                    {/* Avatar */}
                                    <div className="avatar avatar-online shrink-0">
                                        <div className="rounded-full w-12 h-12 overflow-hidden">
                                            <Image
                                                width={48}
                                                height={48}
                                                src={writer.avatar}
                                                alt={writer.fullName}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Name + Bio */}
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-lg">{writer.fullName}</h2>
                                        <p className="text-sm text-gray-400">{writer.bio}</p>
                                    </div>

                                    {/* Follow button */}
                                    <div className="shrink-0 self-start">
                                        <button className="btn btn-neutral btn-outline font-medium rounded-full btn-sm">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divider"></div>
                        <h5 className="font-bold tracking-wide">03 Topics</h5>
                        <div>
                            {topics.map((topic) => (
                                <div
                                    key={topic.id}
                                    className="flex items-start gap-4 max-w-2xl border-b border-gray-200 py-4"
                                >
                                    {/* Avatar */}
                                    <div className="avatar shrink-0">
                                        <div className="rounded-full w-12 h-12 overflow-hidden">

                                        </div>
                                    </div>

                                    {/* Name + Bio */}
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-lg">{topic.title}</h2>
                                        <p className="text-gray-400 text-sm">{topic.stories} . {topic.writers}</p>
                                    </div>

                                    {/* Follow button */}
                                    <div className="shrink-0 self-start">
                                        <button className="btn btn-neutral btn-outline font-medium rounded-full btn-sm">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <input type="radio" name="following_tab" className="tab" aria-label="Reading history" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                    <input type="radio" name="following_tab" className="tab" aria-label="Suggestions" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
                </div>
            </div>
        </section>
    )
}