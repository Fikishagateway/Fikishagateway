import { ArrowRightIcon } from "lucide-react";
import Header from "../universal/Header";
import { Link } from "react-router";

export default function OurFee() {
    return (
        <div>
            <div className="pt-36.25 pb-10">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 items-end gap-7.5 rounded-[25px] bg-[#edf7eb] px-6 py-10 sm:px-10 md:grid-cols-3 md:px-17.5 md:py-15.5">
                        <div className="md:col-span-2">
                            <Header title="Simple from day one" header="One small fee." subheader="A lot less waiting." />
                            <p className="mt-2.75 text-[14px] leading-[1.6] text-[#687671]">
                                Join Fikisha for a one-time registration fee of <strong>TSh 10,000</strong>. Then buy tokens whenever you need them.
                            </p>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2.5 rounded-full bg-[#102820] px-5 py-3 text-white"
                            >
                                <span>Download Fikisha</span>
                                <ArrowRightIcon className="size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
