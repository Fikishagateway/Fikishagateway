import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="border-t border-[#dfe7e2] py-8 md:py-10">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
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
                    <div className="flex flex-col gap-2 text-[13px] leading-[1.4] text-[#687671] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 md:justify-end">
                        <p>
                            &copy; 2026 Fikisha.
                        </p>
                        <p>
                            Arusha, Tanzania
                        </p>
                        <p>
                            <Link to="/terms-and-conditions" className="hover:text-[#2c9a58]">
                                Terms and Conditions
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
