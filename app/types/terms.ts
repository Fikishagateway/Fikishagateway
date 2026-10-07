export type TermsLang = "en" | "sw";

export type TermsBlock =
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "fields"; items: { label: string; value: string; href?: string }[] };

export interface TermsSection {
    id: string;
    number: string;
    title: string;
    blocks: TermsBlock[];
}

export interface TermsNavItem {
    id: string;
    label: string;
}

export interface TermsCopy {
    backToHome: string;
    eyebrow: string;
    heading: string;
    headingAccent: string;
    intro: string;
    versionLabel: string;
    version: string;
    english: string;
    kiswahili: string;
    effectiveDateLabel: string;
    effectiveDate: string;
    operatorLabel: string;
    operator: string;
    businessNoLabel: string;
    businessNo: string;
    importantLabel: string;
    important: string;
    legalEmailLabel: string;
    legalEmail: string;
    footer: string;
    nav: TermsNavItem[];
    sections: TermsSection[];
}
