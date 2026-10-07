import { Link, useSearchParams } from "react-router"
import { ArrowLeft, FileText, Mail, ShieldCheck } from "lucide-react"
import { termsContent } from "../../contents/terms"
import type { TermsBlock, TermsLang } from "../../types/terms"

function Blocks({ blocks }: { blocks: TermsBlock[] }) {
    return (
        <div className="space-y-3 text-[14px] leading-[1.7] text-[#5d6b66]">
            {blocks.map((block, index) => {
                if (block.type === "p") {
                    return <p key={index}>{block.text}</p>
                }
                if (block.type === "ul") {
                    return (
                        <ul key={index} className="list-disc space-y-1.5 pl-5">
                            {block.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )
                }
                if (block.type === "ol") {
                    return (
                        <ol key={index} className="list-decimal space-y-1.5 pl-5">
                            {block.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ol>
                    )
                }
                return (
                    <dl key={index} className="space-y-1">
                        {block.items.map((item) => (
                            <div key={`${item.label}-${item.value}`} className="flex flex-wrap gap-x-2">
                                {item.label ? (
                                    <dt className="font-semibold text-[#102820]">{item.label}:</dt>
                                ) : null}
                                <dd>
                                    {item.href ? (
                                        <a href={item.href} className="font-medium text-[#2c9a58]">
                                            {item.value}
                                        </a>
                                    ) : (
                                        item.value
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                )
            })}
        </div>
    )
}

export default function TermsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const lang: TermsLang = searchParams.get("lang") === "sw" ? "sw" : "en"
    const copy = termsContent[lang]

    const setLang = (next: TermsLang) => {
        const nextParams = new URLSearchParams(searchParams)
        if (next === "en") {
            nextParams.delete("lang")
        } else {
            nextParams.set("lang", next)
        }
        setSearchParams(nextParams, { preventScrollReset: true })
    }

    return (
        <div className="min-h-screen bg-[#f3f6f1] text-[#102820]">
            <div className="relative overflow-hidden bg-[radial-gradient(120%_80%_at_85%_10%,#8ed14a_0%,#1f7a3a_28%,#0b3a24_58%,#062416_100%)] text-white">
                <div className="container mx-auto px-4 py-5 lg:px-0">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/images/logo/logo.png" alt="Fikisha" className="h-9 w-auto" />
                            <span className="text-[15px] font-medium">Fikisha</span>
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-[13px] text-white/85 hover:text-white"
                        >
                            <ArrowLeft className="size-4" />
                            {copy.backToHome}
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 pt-10 pb-36 text-center lg:px-0 lg:pt-16 lg:pb-44">
                    <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl bg-white/10">
                        <FileText className="size-6 text-[#b9ef5e]" />
                    </div>
                    <p className="text-[10px] font-extrabold tracking-[0.18em] text-white/70 uppercase">
                        {copy.eyebrow}
                    </p>
                    <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
                        {copy.heading}
                        <br />
                        <em className="font-georgia font-normal text-[#b9ef5e]">{copy.headingAccent}</em>
                    </h1>
                    <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">
                        {copy.intro}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-0">
                <div className="relative z-10 -mt-28 grid grid-cols-1 items-start gap-6 pb-16 md:grid-cols-12 md:gap-8 md:pb-24">
                    <aside className="md:sticky md:top-6 md:col-span-3">
                        <div className="rounded-[20px] border border-white/70 bg-white p-5 shadow-[0_12px_40px_rgba(16,40,32,0.08)]">
                            <div className="flex items-start gap-3">
                                <div className="flex size-9 items-center justify-center rounded-full bg-[#edf7eb] text-[#2c9a58]">
                                    <ShieldCheck className="size-4" />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold">{copy.versionLabel}</p>
                                    <p className="mt-1 text-[12px] text-[#7b8983]">{copy.version}</p>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-6 space-y-4 px-2 text-[14px] text-[#7b8983]">
                            {copy.nav.map((item) => (
                                <a key={item.label} href={`#${item.id}`} className="block hover:text-[#2c9a58]">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <div className="rounded-[24px] bg-white p-5 shadow-[0_16px_50px_rgba(16,40,32,0.08)] sm:p-8 md:col-span-9 lg:p-10">
                        <div className="inline-flex rounded-full bg-[#edf7eb] p-1">
                            <button
                                type="button"
                                onClick={() => setLang("en")}
                                className={`rounded-full px-5 py-2 text-[13px] font-medium ${
                                    lang === "en" ? "bg-[#2c9a58] text-white" : "text-[#5d6b66]"
                                }`}
                            >
                                {copy.english}
                            </button>
                            <button
                                type="button"
                                onClick={() => setLang("sw")}
                                className={`rounded-full px-5 py-2 text-[13px] font-medium ${
                                    lang === "sw" ? "bg-[#2c9a58] text-white" : "text-[#5d6b66]"
                                }`}
                            >
                                {copy.kiswahili}
                            </button>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="rounded-[14px] border border-[#e6eee9] px-4 py-3">
                                <p className="text-[10px] font-bold tracking-[0.12em] text-[#8a9691] uppercase">
                                    {copy.effectiveDateLabel}
                                </p>
                                <p className="mt-1 text-[14px] font-medium">{copy.effectiveDate}</p>
                            </div>
                            <div className="rounded-[14px] border border-[#e6eee9] px-4 py-3">
                                <p className="text-[10px] font-bold tracking-[0.12em] text-[#8a9691] uppercase">
                                    {copy.operatorLabel}
                                </p>
                                <p className="mt-1 text-[14px] font-medium">{copy.operator}</p>
                            </div>
                            <div className="rounded-[14px] border border-[#e6eee9] px-4 py-3">
                                <p className="text-[10px] font-bold tracking-[0.12em] text-[#8a9691] uppercase">
                                    {copy.businessNoLabel}
                                </p>
                                <p className="mt-1 text-[14px] font-medium">{copy.businessNo}</p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-[14px] bg-[#edf7eb] px-4 py-4 text-[13px] leading-relaxed text-[#5d6b66] sm:px-5">
                            <span className="font-semibold text-[#2c9a58]">{copy.importantLabel}</span>
                            <span> {copy.important}</span>
                        </div>

                        <div className="mt-8 divide-y divide-[#e6eee9]">
                            {copy.sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-8 py-7 first:pt-2"
                                >
                                    <div className="flex gap-4">
                                        <span className="w-8 shrink-0 text-[13px] font-medium text-[#8fd18a]">
                                            {section.number}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#102820]">
                                                {section.title}
                                            </h2>
                                            <div className="mt-3">
                                                <Blocks blocks={section.blocks} />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>

                        {lang === "sw" ? (
                            <div className="mt-2 flex items-center gap-3 rounded-[14px] bg-[#edf7eb] px-4 py-4 text-[13px] text-[#5d6b66]">
                                <Mail className="size-4 shrink-0 text-[#2c9a58]" />
                                <p>
                                    {copy.legalEmailLabel}:{" "}
                                    <a href={`mailto:${copy.legalEmail}`} className="font-medium text-[#2c9a58]">
                                        {copy.legalEmail}
                                    </a>
                                </p>
                            </div>
                        ) : null}

                        <p className="mt-8 border-t border-[#e6eee9] pt-6 text-center text-[12px] text-[#8a9691]">
                            {copy.footer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
