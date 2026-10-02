import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";

export default function UssdCard() {
    return (
        <div className="pt-12 md:pt-20">
            <div className="mx-auto max-w-5xl rounded-[20px] bg-[#102820] px-5 py-5 text-white sm:px-7.5 sm:py-6.5">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
                    <div className="shrink-0">
                        <div className="inline-flex size-16 items-center justify-center rounded-[20px] bg-[#b9ef5e] text-[25px] font-bold text-[#102820] sm:size-auto sm:p-11.5">
                            *
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 md:max-w-162.5">
                        <div className="flex flex-col items-start">
                            <div className="text-[10px] font-bold uppercase text-[#b9ef5e]">
                                No Android? No Problem
                            </div>
                            <h2 className="mt-2 text-xl sm:text-[25px]">
                                Use Fikisha by USSD.
                            </h2>
                            <p className="mt-1 text-[13px] leading-relaxed text-[#bfd0c5]">
                                Dial <strong className="text-white">*150*50*1#</strong>, choose the Fikisha company number, enter your submeter number, then press <strong className="text-white">1</strong> to confirm. Enter your password to pay and your TANESCO and submeter tokens will arrive in your inbox.
                            </p>
                        </div>
                    </div>
                    <div className="shrink-0 md:ml-auto">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-[#2c9a58]"
                        >
                            <span>See the steps</span>
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
