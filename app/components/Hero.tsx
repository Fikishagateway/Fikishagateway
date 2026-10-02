import { Button } from "@base-ui/react/button"
import { ArrowRightIcon } from "lucide-react"
import { Link } from "react-router"
import UssdCard from "./UssdCard"

export const Hero = () => {
    return (
        <div className="pt-20">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div>
                        <p className="flex flex-row items-center gap-2">
                            <span className="p-1.5 bg-[#b9ef5e] rounded-full">
                            </span>
                            <span className="text-[10px] font-extrabold uppercase text-[#2c9a58] tracking-[.14em] gap-2">
                                Power, without the waiting
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <h1 className="text-center font-bold text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
                            Stay powered. <br />
                            <em className="font-georgia font-normal text-[#2c9a58]">
                                Stay ahead.
                            </em>
                        </h1>
                    </div>
                    <div className="max-w-125">
                        <p className="text-center text-[#687671] text-[16px]">
                            Buy TANESCO and submeter tokens in one simple app. Fikisha helps you get the power you need, exactly when you need it.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <Link to="/" className="flex items-center gap-2 rounded-full bg-[#102820] px-5 py-3 text-white">
                                <span>
                                    Get Started
                                </span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                            <Link to="/" className="text-[#102820] hover:text-[#2c9a58] flex flex-row items-center gap-2">
                                <span>
                                See how it works
                                </span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-20 flex flex-col items-center justify-center">
                    <img src="/images/hero/fikisha-hero-screens.png" alt="Fikisha Screenshoots" className="w-155 h-auto"/>
                    <p className="text-[#7b8983] text-[12px] pt-8.5 px-2 flex flex-row items-center gap-2">
                        <span className="text-[#b0bbb5]">Trusted by</span>
                        <span>
                        1,000+ households across Tanzania
                        </span>
                    </p>
                </div>

                {/* USSD Instructions */}
                <UssdCard />
            </div>
        </div>
    )
}