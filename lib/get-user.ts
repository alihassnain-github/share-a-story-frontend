import { cookies } from "next/headers";

export default async function getUser() {

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) return null;

    const response = await fetch(`${process.env.BASE_URL}/users/get-user`, {
        method: "GET",
        headers: { "authorization": accessToken },
        cache: "no-cache"
    });

    const data = await response.json();

    const user = data?.data?.user || null;
    return user;
}  