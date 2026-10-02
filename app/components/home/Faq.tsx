import Header from "../universal/Header";
import { Faq as FaqContent } from "../../contents/Faq";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { cn } from "~/lib/utils";

export default function Faq() {
    return (
        <div className="pb-20">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="max-w-180 mx-auto">
                    <div className="text-center">
                        <Header title="Good to know" header="Questions, answered." />
                    </div>
                    <div className="mt-12.5">
                        <Accordion className="gap-3">
                            {FaqContent.map((faq) => (
                                <AccordionItem key={faq.question} value={faq.question}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent className={cn("text-[13px] leading-[1.4] text-[#687671]")}>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
