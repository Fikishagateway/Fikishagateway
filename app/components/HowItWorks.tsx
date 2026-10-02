import Header from "./universal/Header";
import type { HowItWorks as HowItWorksType } from "../types/HowItWorks";
import { HowItWorks as HowItWorksContent } from "../contents/HowItWorks";
import HowItWorksComponent from "./home/HowItWorks";

export default function HowItWorks() {
    return (
        <div className="bg-[#f7faf5] py-36.25">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <Header title="How It Works" header="Three steps to a" subheader="better power day." />
                    </div>
                    <div className="border-t border-[#dfe7e2]">
                        {HowItWorksContent.map((step: HowItWorksType, index: number) => (
                            <HowItWorksComponent key={step.title} index={index + 1} title={step.title} description={step.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
