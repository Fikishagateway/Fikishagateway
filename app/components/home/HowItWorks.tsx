export interface HowItWorksProps {
    index: number;
    title: string;
    description: string;
}
export default function HowItWorks({ index, title, description }: HowItWorksProps) {
  return (
    <div className="flex flex-row items-center gap-8 border-b border-[#dfe7e2] py-8">
        <div className="text-[18px] text-[#2c9a58] font-georgia">
            0{index}
        </div>
        <div>
            <h3 className="text-[20px] tracking-[-.04em]">
                {title}
            </h3>
            <p className="text-[#687671] mt-2.75 leading-[1.6]">
                {description}
            </p>
        </div>
    </div>
  )
}