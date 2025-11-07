"use client";

import Image from "next/image";
import { RiCalendarLine, RiGithubFill, RiGlobalFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";

export default function ProfileForm() {

    return (
        <form className="space-y-4">
            <div className="flex items-center flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="avatar avatar-online w-30 relative">
                        <div className="rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <div>
                        <strong className="text-lg tracking-wide">Ali Hassnain</strong>
                        <div className="badge badge-soft badge-info badge-sm ms-2">Writer</div>
                        <small className="block my-2 label">
                            <RiCalendarLine size={16} className="inline me-2 mb-1" />
                            Joined April 2024
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
                        autoComplete="given-name"
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
                        autoComplete="family-name"
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
                    value={"alimurtaza32721@gmail.com"}
                    autoComplete="email"
                />
            </div>
            <div>
                <label htmlFor="bio" className="label">
                    <span className="label-text font-medium text-sm">
                        Your Bio
                    </span>
                </label>
                <textarea className="textarea h-20 block w-full textarea-sm" id="bio" name="bio" placeholder="Bio"></textarea>
            </div>
            <div className="divider divider-vertical">
                Social Links
            </div>
            <div className="grid grid-cols-2 gap-4">
                <label className="input input-sm w-full">
                    <RiGithubFill size={18} />
                    <input type="text" className="grow" placeholder="github.com/username" />
                </label>
                <label className="input input-sm w-full">
                    <RiTwitterXFill size={18} />
                    <input type="text" className="grow" placeholder="x.com/username" />
                </label>
                <label className="input input-sm w-full">
                    <RiLinkedinBoxFill size={18} />
                    <input type="text" className="grow" placeholder="linkedin.com/in/username" />
                </label>
                <label className="input input-sm w-full">
                    <RiGlobalFill size={18} />
                    <input type="text" className="grow" placeholder="yourwebsite.com" />
                </label>
            </div>
            <button type="submit" className="btn btn-neutral btn-sm min-w-26 font-medium tracking-wide mt-4">
                Save
            </button>
        </form>
    )
}