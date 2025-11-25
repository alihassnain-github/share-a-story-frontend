"use client";

import { useState } from "react";
import { stardom } from "@/lib/fonts/stardom";
import { RiAddLine, RiCheckFill } from "@remixicon/react";
import { handleAPIError } from "@/utils/errorHandler";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const INTERESTS = [
    "Fitness", "AWS", "Flutter", "UX Design", "Spirituality", "Creativity", "Nodejs", "UI", "Defi", "Philosophy",
    "NLP", "Economics", "World", "DevOps", "Ethereum", "Product Management", "Data Visualization", "Feminism", "Equality", "Freelancing",
    "Climate Change", "Bitcoin", "IOS", "Future", "Cybersecurity", "Nonfiction", "True Crime", "Web3", "Java", "Religion",
    "Art", "Family", "Fiction", "Kubernetes", "Parenting", "Travel", "Venture Capital", "Poetry", "Food", "Typescript",
    "Language", "Gaming", "Space", "Sports", "Media", "Docker", "Race", "Programming", "Data Science", "Technology",
    "Self Improvement", "Writing", "Relationships", "Machine Learning", "Productivity", "Politics", "Cryptocurrency", "Psychology", "Money",
    "Business", "Python", "Health", "Science", "Mental Health", "Life", "Software Development", "Startup", "Design", "JavaScript",
    "Artificial Intelligence", "Culture", "Software Engineering", "Blockchain", "Coding", "Entrepreneurship", "React", "UX", "Education", "History",
    "Humor", "Web Development", "Work", "Lifestyle", "Society", "Deep Learning", "Marketing", "Books", "Nft", "Social Media",
    "Leadership", "Android", "Apple", "Women", "Mindfulness", "Sexuality", "Math", "Photography", "Music", "Justice",
];

export default function InterestsSelector() {

    const router = useRouter();

    const ITEMS_PER_PAGE = Math.ceil(INTERESTS.length / 3);

    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const startIndex = page * ITEMS_PER_PAGE;
    const visibleInterests = INTERESTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // handle toggle selection
    const handleToggle = (interest: string) => {
        setSelected(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    // handle show more (infinite loop)
    const handleShowMore = () => {
        const nextPage = (page + 1) * ITEMS_PER_PAGE >= INTERESTS.length ? 0 : page + 1;
        setPage(nextPage);
    };

    async function saveInterests() {
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/update-interests`;
            const response = await axios.post(url, { interests: selected }, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                router.replace("/");

                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error saving interests: ", error);
            handleAPIError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[76px]">
                <div className="text-center mb-4">
                    <h1 className={`${stardom.className} tracking-wide font-bold lg:text-2xl text-lg`}>
                        Tell us what interests you the most
                    </h1>
                    <p>Select three or more.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-4 lg:max-w-2xl mx-auto">
                    {visibleInterests.map((item, index) => {
                        const isSelected = selected.includes(item);
                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleToggle(item)}
                                className={`btn btn-sm md:btn-md rounded-full font-medium border 
                  ${isSelected ? "btn-success btn-dash" : "btn-ghost border-gray-100 hover:border-0"}`}
                            >
                                {isSelected ? <RiCheckFill size={18} /> : <RiAddLine size={18} />}
                                {item}
                            </button>
                        );
                    })}
                </div>

                <button
                    type="button"
                    onClick={handleShowMore}
                    className="btn btn-link font-medium tracking-wide"
                >
                    Show more
                </button>
            </div>

            <footer className="py-4 fixed bottom-0 w-full bg-base-200 border-t border-gray-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="flex justify-center">
                    <button
                        onClick={saveInterests}
                        disabled={selected.length < 3 || loading}
                        className="btn btn-neutral font-medium btn-wide btn-sm md:btn-md rounded-full"
                        type="button"
                    >
                        {loading && <span className="loading loading-spinner loading-xs"></span>} Continue
                    </button>
                </div>
            </footer>
        </>
    );
}
