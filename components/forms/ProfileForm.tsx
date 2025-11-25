"use client";

import { formatDistanceToNow } from "date-fns"
import Image from "next/image";
import { RiCalendarLine, RiCamera4Line, RiGithubFill, RiGlobalFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import User from "@/types/User";
import { ChangeEvent, FormEvent, useState } from "react";

interface ProfileFormProps {
    user: User;
    updateProfile: (formData: any) => void;
}

export default function ProfileForm({ user, updateProfile }: ProfileFormProps) {

    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        about: user.about,
        github: user.social.github,
        linkedIn: user.social.linkedIn,
        portfolio: user.social.portfolio,
        x: user.social.x,
    });
    const [loading, setLoading] = useState(false);

    const [avatarPreview, setAvatarPreview] = useState<string | null>(user.avatarUrl || null);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    function handleAvatarChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        // Create preview
        const previewURL = URL.createObjectURL(file);
        setAvatarPreview(previewURL);
        setAvatarFile(file);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("about", formData.about);
        formDataToSend.append("linkedIn", formData.linkedIn);
        formDataToSend.append("github", formData.github);
        formDataToSend.append("x", formData.x);
        formDataToSend.append("portfolio", formData.portfolio);

        if (avatarFile) formDataToSend.append("avatar", avatarFile);

        await updateProfile(formDataToSend);
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className={`avatar avatar-online relative ${!user.avatarUrl && "avatar-placeholder"}`}>
                        {avatarPreview ? (
                            <div className="rounded-full w-24">
                                {/* <Image src={avatarPreview} alt={user.fullName} width={96} height={96} /> */}
                                <img src={avatarPreview} alt={user.fullName} />
                            </div>
                        ) : (
                            <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                <span className="text-xl">{user.firstName[0] + user.lastName[0]}</span>
                            </div>
                        )}
                        <label htmlFor="avatar" className="btn btn-circle btn-sm absolute end-0 bottom-0">
                            <RiCamera4Line size={14} />
                        </label>
                    </div>
                    <div>
                        <strong className="text-lg tracking-wide">{user.fullName}</strong>
                        <div className="badge badge-soft badge-info badge-sm ms-2">{user.role[0].toUpperCase() + user.role.slice(1)}</div>
                        <small className="block my-2 label">
                            <RiCalendarLine size={16} className="inline me-2 mb-1" />
                            Joined {formatDistanceToNow(user.createdAt, { addSuffix: true })}
                        </small>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <strong>1000</strong>
                        <small className="block label">Followers</small>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <strong>100</strong>
                        <small className="block label">Following</small>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div>
                        <strong>10</strong>
                        <small className="block label">Stories</small>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="avatar" id="avatar" className="hidden" accept="image/*" type="file" onChange={handleAvatarChange} />
                <div>
                    <label htmlFor="firstName" className="label">
                        <span className="label-text font-medium text-sm">
                            First name *
                        </span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder=""
                        className="input input-bordered w-full input-sm"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="label">
                        <span className="label-text font-medium text-sm">
                            Last name *
                        </span>
                    </label>
                    <input
                        type="text"
                        required
                        className="input input-bordered w-full input-sm"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="label">
                    <span className="label-text font-medium flex items-center gap-2 text-sm">
                        Email
                        <Image src={"/verified.png"} alt="Verified" width={15} height={15} />
                    </span>
                </label>
                <input
                    type="email"
                    readOnly
                    disabled
                    className="input input-bordered w-full input-sm"
                    id="email"
                    name="email"
                    value={user.email}
                />
            </div>
            <div>
                <label htmlFor="bio" className="label">
                    <span className="label-text font-medium text-sm">
                        Your Bio
                    </span>
                </label>
                <textarea className="textarea h-20 block w-full textarea-sm" id="bio" name="bio" placeholder="Bio" value={formData.about} onChange={handleChange}></textarea>
            </div>
            <div className="divider divider-vertical">
                Social Links
            </div>
            <div className="grid grid-cols-2 gap-4">
                <label className="input input-sm w-full">
                    <RiGithubFill size={18} />
                    <input type="text" className="grow" placeholder="github.com/username" value={formData.github} onChange={handleChange} />
                </label>
                <label className="input input-sm w-full">
                    <RiTwitterXFill size={18} />
                    <input type="text" className="grow" placeholder="x.com/username" value={formData.x} onChange={handleChange} />
                </label>
                <label className="input input-sm w-full">
                    <RiLinkedinBoxFill size={18} />
                    <input type="text" className="grow" placeholder="linkedin.com/in/username" value={formData.linkedIn} onChange={handleChange} />
                </label>
                <label className="input input-sm w-full">
                    <RiGlobalFill size={18} />
                    <input type="text" className="grow" placeholder="yourwebsite.com" value={formData.portfolio} onChange={handleChange} />
                </label>
            </div>
            <button type="submit" disabled={loading} className="btn btn-neutral btn-sm min-w-26 font-medium tracking-wide mt-4">
                {loading && <span className="loading loading-spinner loading-xs"></span>} Save
            </button>
        </form>
    )
}