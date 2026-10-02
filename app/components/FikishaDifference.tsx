import Header from "./universal/Header";
import Difference from "./home/Difference";
import { Difference as DifferenceContent } from "../contents/Difference";
import type { Difference as DifferenceType } from "../types/Difference";

export default function FikishaDifference() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="text-center">
                    <Header title="The Fikisha difference" header="Powering your day" subheader="should feel this simple." />
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {DifferenceContent.map((item: DifferenceType) => (
                        <Difference
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
