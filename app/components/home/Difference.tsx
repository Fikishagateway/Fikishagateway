import type { Difference as DifferenceType } from "../../types/Difference";

export default function Difference({ title, description, icon: Icon }: DifferenceType) {
  return (
    <div className="rounded-[18px] border border-[#dfe7e2] p-7.25 text-left">
        <div className="flex h-10.5 w-10.5 items-center justify-center rounded-[12px] bg-[#edf7eb] text-[#2c9a58]">
            <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-7 text-[17px] tracking-[-.04em]">
            {title}
        </h3>
        <p className="mt-2.75 text-[14px] leading-[1.6] text-[#687671]">
            {description}
        </p>
    </div>
  )
}
