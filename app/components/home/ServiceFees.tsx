import { useState } from "react";
import { ChevronDown, ChevronUp, CircleCheck } from "lucide-react";
import { ServiceFees as ServiceFeeContent } from "../../contents/serviceFee";
import type { ServiceFee } from "../../types/serviceFee";

const formatTsh = (amount: number) =>
    `TSh ${amount.toLocaleString("en-US")}`;

const formatRange = (fee: ServiceFee) =>
    `${formatTsh(fee.minAmount)} – ${formatTsh(fee.maxAmount).replace("TSh ", "")}`;

function pairRows(fees: ServiceFee[]) {
    const rows: ServiceFee[][] = [];
    for (let i = 0; i < fees.length; i += 2) {
        rows.push(fees.slice(i, i + 2));
    }
    return rows;
}

function FeeTable({
    fees,
    showHeader = false,
}: {
    fees: ServiceFee[];
    showHeader?: boolean;
}) {
    return (
        <div className="overflow-hidden rounded-[16px] bg-white">
            {showHeader ? (
                <div className="flex items-center justify-between bg-[#102820] px-4 py-3 text-[12px] text-white sm:px-5">
                    <span>Token purchase</span>
                    <span>Service charge</span>
                </div>
            ) : null}
            <div>
                {pairRows(fees).map((row) => (
                    <div
                        key={row.map((item) => item.tierName).join("-")}
                        className="grid grid-cols-1 border-b border-[#edf2ee] last:border-b-0 md:grid-cols-2"
                    >
                        {row.map((fee) => (
                            <div
                                key={fee.tierName}
                                className="flex items-start justify-between gap-3 px-3 py-3 text-[12px] text-[#102820] sm:px-4 sm:text-[13px] md:not-last:border-r md:border-[#edf2ee]"
                            >
                                <span className="leading-snug">{formatRange(fee)}</span>
                                <span className="shrink-0 font-semibold">
                                    {formatTsh(fee.fixedFee)}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ServiceFees() {
    const [showHigherBands, setShowHigherBands] = useState(false);

    const publicFees = ServiceFeeContent.filter((fee) => fee.minAmount >= 1000);
    const everydayFees = publicFees.filter((fee) => fee.maxAmount <= 19999);
    const higherFees = publicFees.filter((fee) => fee.minAmount >= 20000);

    return (
        <div className="pb-36.25">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="overflow-hidden rounded-[25px] bg-[#edf7eb] px-5 py-8 sm:px-8 md:px-10 md:py-12">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-10">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-[#b9ef5e]" />
                                <span className="text-[10px] font-extrabold tracking-[.14em] text-[#2c9a58] uppercase">
                                    Pricing guide
                                </span>
                            </div>
                            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-[#102820]">
                                One clear charge for every token purchase.
                            </h2>
                            <p className="mt-3 max-w-80 text-[14px] leading-[1.6] text-[#687671]">
                                Choose your purchase range below. The service charge is fixed in Tanzanian shillings, not a percentage.
                            </p>
                            <p className="mt-5 flex items-start gap-2 text-[13px] text-[#2c9a58]">
                                <CircleCheck className="mt-0.5 size-4 shrink-0" />
                                <span>Transparent pricing, built for everyday power.</span>
                            </p>
                        </div>

                        <div className="min-w-0 lg:col-span-8">
                            <FeeTable fees={everydayFees} showHeader />

                            <div className="mt-3 flex justify-end">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2c9a58]"
                                    aria-expanded={showHigherBands}
                                    onClick={() => setShowHigherBands((open) => !open)}
                                >
                                    View higher purchase bands
                                    {showHigherBands ? (
                                        <ChevronUp className="size-4" />
                                    ) : (
                                        <ChevronDown className="size-4" />
                                    )}
                                </button>
                            </div>

                            {showHigherBands ? (
                                <div className="mt-3">
                                    <FeeTable fees={higherFees} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
