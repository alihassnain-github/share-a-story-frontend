import SidebarProvider from "@/context/sidemenu-provider"

export default function ApplicationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}