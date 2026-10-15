import { Link } from "react-router";


export default function Footer() {
    return (
        <div className="border-t border-[#dfe7e2] py-10">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <Link
                            to="/"
                            className="relative z-10 flex items-center gap-2"
                        >
                            <img
                                src="/images/logo/logo.png"
                                alt="Fikisha, prepaid TANESCO and submeter tokens in Tanzania"
                                className="h-10 w-auto"
                            />
                            <span>Fikisha</span>
                        </Link>
                        <p className="text-[13px] leading-[1.4] text-[#687671]">
                        Power, without the waiting.
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-[13px] leading-[1.4] text-[#687671]">
                        <p>
                            &copy; 2026 Fikisha.
                        </p>
                        <p>
                            Arusha, Tanzania
                        </p>
                        <p>
                            <Link to="/terms-and-conditions">Terms and Conditions</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
