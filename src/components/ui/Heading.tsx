export default function Heading({ children, color }: { children: string, color?: string }) {
    return (
        <>
            <h1 className={`text-4xl md:text-5xl title-font font-black mb-4 ${color ? `text-${color}` : "text-[#D2042D]"} text-center tracking-widest mx-auto`}>
                {children}
            </h1>
        </>
    )
}