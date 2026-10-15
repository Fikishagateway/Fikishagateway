import type { MetaDescriptor } from "react-router"

export const SITE = {
    name: "Fikisha",
    legalName: "Savannah Tales",
    tagline: "Buy TANESCO and submeter tokens in Tanzania",
    url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://fikishagateway.co.tz",
    locale: "en_TZ",
    localeSw: "sw_TZ",
    image: "/images/hero/fikisha-hero-screens.png",
    logo: "/images/logo/logo.png",
    email: "legal@fikishagateway.co.tz",
    ussd: "*150*50*1#",
    location: "Arusha, Tanzania",
} as const

export const DEFAULT_TITLE = "Fikisha | Buy TANESCO & Submeter Tokens in Tanzania"
export const DEFAULT_DESCRIPTION =
    "Buy TANESCO and submeter electricity tokens in one place with Fikisha. Pay in the app or dial *150*50*1#. Tokens arrive by SMS for homes across Tanzania."

type SeoInput = {
    title: string
    description: string
    path?: string
    image?: string
    imageAlt?: string
    locale?: string
    type?: "website" | "article"
    noIndex?: boolean
}

const absoluteUrl = (path = "/") => {
    const origin = SITE.url.replace(/\/$/, "")
    if (path.startsWith("http")) return path
    return `${origin}${path.startsWith("/") ? path : `/${path}`}`
}

export function seoMeta({
    title,
    description,
    path = "/",
    image = SITE.image,
    imageAlt = "Fikisha app screens for buying TANESCO and submeter electricity tokens",
    locale = SITE.locale,
    type = "website",
    noIndex = false,
}: SeoInput): MetaDescriptor[] {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)
    const robots = noIndex ? "noindex, nofollow" : "index, follow"

    return [
        { title },
        { name: "description", content: description },
        { name: "robots", content: robots },
        { name: "googlebot", content: robots },
        { name: "author", content: `${SITE.name} by ${SITE.legalName}` },
        { name: "application-name", content: SITE.name },
        { name: "apple-mobile-web-app-title", content: SITE.name },
        { name: "theme-color", content: "#102820" },
        { property: "og:site_name", content: SITE.name },
        { property: "og:type", content: type },
        { property: "og:locale", content: locale },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: imageUrl },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:image:alt", content: imageAlt },
        { tagName: "link", rel: "canonical", href: url },
    ]
}

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: absoluteUrl(SITE.logo),
        email: SITE.email,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Arusha",
            addressCountry: "TZ",
        },
        areaServed: {
            "@type": "Country",
            name: "Tanzania",
        },
        description: DEFAULT_DESCRIPTION,
    }
}

export function websiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        inLanguage: ["en-TZ", "sw-TZ"],
        description: DEFAULT_DESCRIPTION,
        publisher: {
            "@type": "Organization",
            name: SITE.legalName,
        },
    }
}

export function softwareAppJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE.name,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android, USSD",
        offers: {
            "@type": "Offer",
            price: "10000",
            priceCurrency: "TZS",
            description: "One-time Fikisha registration fee",
        },
        featureList: [
            "Buy TANESCO tokens",
            "Buy submeter tokens",
            "USSD payments",
            "Tokens delivered by SMS",
        ],
        description: DEFAULT_DESCRIPTION,
        url: SITE.url,
    }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/<[^>]+>/g, ""),
            },
        })),
    }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    }
}
