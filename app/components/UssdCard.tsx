import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router";

export default function UssdCard() {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="max-w-5xl mx-auto bg-[#102820] py-6.5 px-7.5 text-white rounded-[20px]">
                    <div className="flex flex-row items-center gap-8">
                        <div>
                            <div className="bg-[#b9ef5e] text-[#102820] rounded-7 text-[25px] font-bold p-11.5 rounded-[20px]">*</div>
                        </div>
                        <div className="max-w-162.5">
                            <div className="flex flex-col items-start">
                                <div className="uppercase text-[10px] text-[#b9ef5e] font-bold">
                                    No Android? No Problem
                                </div>
                                <div>
                                    <h2 className="text-[25px] mt-2">Use Fikisha by USSD.</h2>
                                </div>
                                <div className="text-[#bfd0c5] text-[13px] ">
                                    Dial <strong className="text-white">*150*50*1#</strong>, choose the Fikisha company number, enter your submeter number, then press <strong className="text-white">1</strong> to confirm. Enter your password to pay and your TANESCO and submeter tokens will arrive in your inbox.
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/" className="text-[#2c9a58] flex flex-row items-center gap-2">
                                <span>
                                    See the steps
                                </span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
