import type { Route } from "./+types/terms-and-conditions"
import TermsPage from "../components/terms/TermsPage"
import { JsonLd } from "~/components/seo/JsonLd"
import { breadcrumbJsonLd, seoMeta, SITE } from "~/lib/seo"

export function meta({ location }: Route.MetaArgs) {
    const isSw = new URLSearchParams(location.search).get("lang") === "sw"
    const path = isSw ? "/terms-and-conditions?lang=sw" : "/terms-and-conditions"

    return [
        ...seoMeta({
            title: isSw
                ? "Masharti ya Kununua Tokeni za TANESCO | Fikisha"
                : "Terms for Buying TANESCO & Submeter Tokens | Fikisha",
            description: isSw
                ? "Soma Masharti ya Fikisha kuhusu kununua tokeni za TANESCO na sub-meter kupitia programu, USSD na wavuti, pamoja na gharama, faragha na wajibu wa mteja."
                : "Read Fikisha terms for buying TANESCO and submeter tokens via app, USSD and web, including service charges, privacy and customer responsibilities.",
            path,
            locale: isSw ? SITE.localeSw : SITE.locale,
            type: "article",
        }),
        {
            tagName: "link",
            rel: "alternate",
            hrefLang: "en",
            href: `${SITE.url.replace(/\/$/, "")}/terms-and-conditions`,
        },
        {
            tagName: "link",
            rel: "alternate",
            hrefLang: "sw",
            href: `${SITE.url.replace(/\/$/, "")}/terms-and-conditions?lang=sw`,
        },
        {
            tagName: "link",
            rel: "alternate",
            hrefLang: "x-default",
            href: `${SITE.url.replace(/\/$/, "")}/terms-and-conditions`,
        },
    ]
}

export default function TermsAndConditions() {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Terms and Conditions", path: "/terms-and-conditions" },
                ])}
            />
            <TermsPage />
        </>
    )
}
