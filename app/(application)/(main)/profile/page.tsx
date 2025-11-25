import ProfileForm from "@/components/forms/ProfileForm";
import getUser from "@/lib/get-user";
import axios from "axios";
import { cookies } from "next/headers";

export default async function ProfilePage() {

    const user = await getUser();

    console.log(user);

    if (!user) return null;

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) return null;

    async function updateProfile(formData: any) {
        "use server"
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/update-profile`;
        const response = await axios.put(url,
            formData,
            {
                withCredentials: true,
                headers: { Authorization: accessToken }
            });

        console.log(response);

    }

    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div className="md:max-w-3/5">
                {/* profile form */}
                <ProfileForm user={user} updateProfile={updateProfile} />
            </div>
        </section>
    )
}