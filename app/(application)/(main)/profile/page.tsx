import ProfileForm from "@/components/forms/ProfileForm";

export default function ProfilePage() {
    return (
        <section className="min-h-dvh px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 md:py-6 py-4">
            <div className="md:max-w-3/5">
                {/* profile form */}
                <ProfileForm />
            </div>
        </section>
    )
}