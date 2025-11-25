export interface Social {
    github: string;
    linkedIn: string;
    portfolio: string;
    x: string;
}

export default interface User {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    about: string;
    avatarUrl: null | string;
    createdAt: string;
    interests: string[];
    isVerified: boolean;
    role: "writer" | "admin";
    social: Social;
}