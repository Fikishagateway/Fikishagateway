export interface HeaderProps {
    title: string;
    header: string;
    subheader?: string;
}
export default function Header({ title, header, subheader }: HeaderProps) {
    return (
        <div>
            <div className="text-[10px] font-extrabold uppercase text-[#2c9a58] tracking-[.14em] gap-2">
                {title}
            </div>
            <h2 className="text-[clamp(2.5625rem,5vw,4.125rem)] leading-[1.05] tracking-[-0.03em]">
                {header} {subheader && <br />}
                {subheader && <em className="text-[#2c9a58] font-georgia font-normal">{subheader}</em>}
            </h2>
        </div>
    )
}
