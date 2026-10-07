import type { TermsCopy, TermsLang } from "../types/terms";

const en: TermsCopy = {
    backToHome: "Back to home",
    eyebrow: "Legal / Customer agreement",
    heading: "Terms that keep",
    headingAccent: "every journey clear.",
    intro: "The rules and responsibilities for using Fikisha across the app, USSD and web.",
    versionLabel: "Fikisha Terms",
    version: "Version 1.0 · 10 September 2026",
    english: "English",
    kiswahili: "Kiswahili",
    effectiveDateLabel: "Effective date",
    effectiveDate: "10 September 2026",
    operatorLabel: "Operator",
    operator: "Savannah Tales",
    businessNoLabel: "Business no.",
    businessNo: "550779",
    importantLabel: "Important",
    important:
        "By creating an account, accepting these Terms, or continuing with a Fikisha transaction, you confirm that you have read and agreed to these Terms and the service charge displayed before payment.",
    legalEmailLabel: "Legal enquiries",
    legalEmail: "legal@fikishagateway.co.tz",
    footer: "© 2026 Savannah Tales · Fikisha is a service provided by Savannah Tales",
    nav: [
        { id: "about", label: "About Fikisha" },
        { id: "charges", label: "Service charges" },
        { id: "privacy", label: "Privacy" },
        { id: "support", label: "Support" },
        { id: "contact", label: "Legal contact" },
    ],
    sections: [
        {
            id: "about",
            number: "01",
            title: "1. About Fikisha",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha is a digital service provided by Savannah Tales, a business registered in the United Republic of Tanzania under Business Registration Number 550779. Fikisha provides instant generation and delivery of prepaid sub-meter tokens, sub-meter registration, account management, clear-tamper-token and transaction-recovery services.",
                },
                {
                    type: "p",
                    text: "A valid upstream utility token is required to generate a sub-meter token. Fikisha may obtain the required TANESCO token on your behalf using the TANESCO meter, sub-meter, amount and payment details you authorize. Fikisha is not TANESCO and does not provide or sell electricity as a government utility. Mobile-money collection, TANESCO token acquisition, STS vending, SMS delivery and supporting functions may be performed through authorized third-party systems.",
                },
            ],
        },
        {
            id: "acceptance",
            number: "02",
            title: "2. Acceptance of these Terms",
            blocks: [
                {
                    type: "p",
                    text: "You must accept these Terms before using Fikisha. They apply to the Fikisha mobile application, USSD channel or short code, web application and other approved interfaces. Using, initiating or confirming a service through any channel constitutes acceptance of these Terms, the displayed service charges and your customer responsibilities.",
                },
                {
                    type: "p",
                    text: "By confirming a transaction, you expressly authorize Fikisha to obtain the required TANESCO token on your behalf solely to generate and deliver the corresponding token for your registered sub-meter. If you do not agree, do not continue. Material updates may require you to review and accept the updated version.",
                },
            ],
        },
        {
            id: "eligibility",
            number: "03",
            title: "3. Eligibility and account responsibility",
            blocks: [
                {
                    type: "ul",
                    items: [
                        "Provide complete, accurate and current information.",
                        "Use only a phone number and meter details you are authorized to use.",
                        "Keep your passkey, phone, SIM card and account access secure.",
                        "Notify Fikisha promptly of unauthorized access or incorrect account information.",
                        "Do not use Fikisha for fraud, unlawful activity, system interference or unauthorized resale.",
                    ],
                },
            ],
        },
        {
            id: "process",
            number: "04",
            title: "4. Sub-meter token-generation process",
            blocks: [
                {
                    type: "ul",
                    items: [
                        "Enter or select your registered TANESCO meter, sub-meter, payment number and amount.",
                        "Review the TANESCO token value, Fikisha service charge and total payable.",
                        "Authorize payment through your chosen payment provider.",
                        "After payment is confirmed, Fikisha obtains the required TANESCO token on your behalf.",
                        "Fikisha uses it to generate or retrieve the corresponding registered sub-meter token.",
                        "The token and available transaction details are delivered through the app and/or SMS.",
                    ],
                },
                {
                    type: "p",
                    text: "A payment acknowledgment does not by itself confirm that token generation is finished. Do not pay again because a token is delayed; check the transaction status or contact support with your reference.",
                },
            ],
        },
        {
            id: "charges",
            number: "05",
            title: "5. Service charges and other costs",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha charges for the automated service that obtains the upstream token on your behalf, generates the sub-meter token, maintains transaction records, delivers the token and supports transaction recovery. This is a Fikisha service charge, not a TANESCO tariff or government charge.",
                },
                {
                    type: "ul",
                    items: [
                        "The minimum supported transaction is currently TZS 1,000.",
                        "The Fikisha charge is separate from the TANESCO token value.",
                        "Your mobile-money provider may apply separate charges.",
                        "Sub-meter registration may have a separate fee shown before payment.",
                        "The active schedule is available in the app under App & Services - Service Charges.",
                    ],
                },
                {
                    type: "p",
                    text: "Charges may change. An updated charge applies only after it is shown before confirmation. Continuing after the charge and total are displayed means you accept them.",
                },
            ],
        },
        {
            id: "meters",
            number: "06",
            title: "6. Meter and transaction information",
            blocks: [
                {
                    type: "p",
                    text: "Carefully verify the TANESCO meter, sub-meter, phone number and amount before payment. Tokens are tied to the submitted meter information and may not be transferable after successful generation. If incorrect details prevent processing, Fikisha may review the transaction or request the correct registered sub-meter. Providing corrected information does not guarantee reversal of a TANESCO token already obtained for an incorrect meter.",
                },
            ],
        },
        {
            id: "delays",
            number: "07",
            title: "7. Delays, interruptions and third-party services",
            blocks: [
                {
                    type: "p",
                    text: "Transactions may be delayed by mobile networks, payment providers, TANESCO, STS vending systems, internet connectivity, SMS delivery or planned and unplanned maintenance. Fikisha will make reasonable efforts to reconcile confirmed payments and complete eligible requests. Availability, processing times and SMS delivery cannot be guaranteed where the cause is a third-party system or circumstances beyond reasonable control. Rights that cannot legally be excluded remain unaffected.",
                },
            ],
        },
        {
            id: "disputes",
            number: "08",
            title: "8. Failed, duplicate and disputed transactions",
            blocks: [
                {
                    type: "ul",
                    items: [
                        "If payment is not confirmed, Fikisha may not begin token generation.",
                        "If payment is confirmed but the token is delayed, do not repeat payment until the first transaction is checked.",
                        "Duplicate payments are reviewed individually and are not automatically refundable where a TANESCO or sub-meter token has been generated.",
                        "Refunds or reversals depend on verification, transaction state and applicable system rules.",
                        "Fikisha may request a receipt, phone number, reference, meter details and SMS evidence.",
                    ],
                },
            ],
        },
        {
            id: "tokens",
            number: "09",
            title: "9. Tokens and SMS communication",
            blocks: [
                {
                    type: "p",
                    text: "You authorize operational SMS messages about registration, payments, recovery, TANESCO tokens, sub-meter tokens, clear-tamper tokens and service notices. Keep tokens confidential and verify that each token belongs to the intended meter. Fikisha is not responsible for loss caused by voluntarily sharing a token, passkey or payment authorization.",
                },
            ],
        },
        {
            id: "registration",
            number: "10",
            title: "10. Sub-meter registration and management",
            blocks: [
                {
                    type: "p",
                    text: "Registration uses details supplied by the customer or an authorized field officer. New registration may require the displayed fee and activation may depend on STS verification. A deactivated or deleted sub-meter cannot be used for new token-generation requests. Where a meter code is changed, the replacement meter may need to be registered and verified before the previous meter is removed or deactivated.",
                },
            ],
        },
        {
            id: "privacy",
            number: "11",
            title: "11. Personal data and privacy",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha may process your name, phone number, TANESCO meter, sub-meter, address, payment references, transaction history, device information and support communications to register accounts, verify meters, collect payments, generate tokens, send messages, prevent fraud, retain records and meet legal obligations. Information may be shared only as reasonably necessary with payment processors, mobile networks, utility and STS providers, SMS and hosting providers, regulators and law-enforcement bodies where lawfully required. Further information should be provided in the Fikisha Privacy Policy.",
                },
            ],
        },
        {
            id: "suspension",
            number: "12",
            title: "12. Suspension and termination",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha may suspend or restrict access for suspected fraud, unauthorized activity, abuse, inaccurate information, security risk, legal or regulatory requirements, or material breach. Where reasonably possible, legitimate transactions remain available for review and reconciliation.",
                },
            ],
        },
        {
            id: "liability",
            number: "13",
            title: "13. Limitation of responsibility",
            blocks: [
                {
                    type: "p",
                    text: "To the extent permitted by Tanzanian law, Fikisha is not responsible for indirect or consequential loss arising from network outages, third-party failures, delayed SMS, incorrect customer information, unauthorized access caused by failure to protect credentials, or use contrary to these Terms. Nothing excludes liability or rights that cannot lawfully be excluded.",
                },
            ],
        },
        {
            id: "support",
            number: "14",
            title: "14. Complaints and support",
            blocks: [
                {
                    type: "p",
                    text: "For a delayed token, incorrect status, duplicate payment or other issue, contact support with your phone number, transaction reference, payment receipt, TANESCO meter, sub-meter and payment date where available. Fikisha will acknowledge and investigate within a reasonable time, depending on the information supplied and third-party responses.",
                },
            ],
        },
        {
            id: "changes",
            number: "15",
            title: "15. Changes to the service or these Terms",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha may improve, replace, suspend or discontinue features and revise these Terms when operational, security, commercial, legal or regulatory requirements change. The effective date and version will be updated on this page. Material changes may require fresh acceptance in the app.",
                },
            ],
        },
        {
            id: "law",
            number: "16",
            title: "16. Governing law",
            blocks: [
                {
                    type: "p",
                    text: "These Terms are governed by the laws of the United Republic of Tanzania. The parties should first attempt resolution through the Fikisha complaint process. Unresolved disputes may be referred to the competent authority, tribunal or court under applicable law.",
                },
            ],
        },
        {
            id: "contact",
            number: "17",
            title: "17. Contact and legal operator",
            blocks: [
                {
                    type: "fields",
                    items: [
                        { label: "Service", value: "Fikisha" },
                        { label: "Operator", value: "Savannah Tales" },
                        { label: "Business Registration Number", value: "550779" },
                        { label: "Country", value: "United Republic of Tanzania" },
                        {
                            label: "Legal Department",
                            value: "legal@fikishagateway.co.tz",
                            href: "mailto:legal@fikishagateway.co.tz",
                        },
                    ],
                },
            ],
        },
        {
            id: "enquiries",
            number: "18",
            title: "18. Legal enquiries and clarification",
            blocks: [
                {
                    type: "p",
                    text: "For questions or clarification about these Terms, your rights, obligations, consent or the legal basis of Fikisha, contact the Legal Department before accepting these Terms or continuing to use the service:",
                },
                {
                    type: "fields",
                    items: [
                        {
                            label: "",
                            value: "legal@fikishagateway.co.tz",
                            href: "mailto:legal@fikishagateway.co.tz",
                        },
                    ],
                },
            ],
        },
        {
            id: "confirmation",
            number: "19",
            title: "19. Customer confirmation",
            blocks: [
                {
                    type: "p",
                    text: "By selecting “I Agree”, registering an account or confirming a transaction after the service charge is displayed, you confirm that you have read and understood these Terms, supplied correct transaction details, accepted the displayed charge and total, authorized Fikisha to obtain the TANESCO token on your behalf, authorized necessary operational communications and understand that mobile-money charges may apply separately.",
                },
            ],
        },
    ],
};

const sw: TermsCopy = {
    backToHome: "Rudi nyumbani",
    eyebrow: "Sheria / Makubaliano ya mteja",
    heading: "Masharti yanayofanya",
    headingAccent: "kila safari iwe wazi.",
    intro: "Sheria na wajibu wa kutumia Fikisha kwenye programu, USSD na wavuti.",
    versionLabel: "Masharti ya Fikisha",
    version: "Toleo 1.0 · 10 Septemba 2026",
    english: "English",
    kiswahili: "Kiswahili",
    effectiveDateLabel: "Tarehe ya kuanza",
    effectiveDate: "10 Septemba 2026",
    operatorLabel: "Mtoa huduma",
    operator: "Savannah Tales",
    businessNoLabel: "Namba ya biashara",
    businessNo: "550779",
    importantLabel: "Muhimu",
    important:
        "Kwa kufungua akaunti, kukubali Masharti haya, au kuendelea na muamala wa Fikisha, unathibitisha kuwa umesoma na kukubali Masharti haya na gharama ya huduma iliyoonyeshwa kabla ya malipo.",
    legalEmailLabel: "Maswali ya kisheria",
    legalEmail: "legal@fikishagateway.co.tz",
    footer: "© 2026 Savannah Tales · Fikisha ni huduma inayotolewa na Savannah Tales",
    nav: [
        { id: "about", label: "Kuhusu Fikisha" },
        { id: "charges", label: "Gharama za huduma" },
        { id: "privacy", label: "Faragha" },
        { id: "privacy", label: "Msaada" },
        { id: "contact", label: "Mawasiliano ya kisheria" },
    ],
    sections: [
        {
            id: "about",
            number: "01",
            title: "1. Kuhusu Fikisha",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha ni huduma ya kidijitali ya Savannah Tales, iliyosajiliwa kwa namba 550779, inayotengeneza na kuwasilisha tokeni za sub-meter. Fikisha si TANESCO wala haiuzi umeme wa serikali.",
                },
            ],
        },
        {
            id: "acceptance",
            number: "02",
            title: "2. Kukubali Masharti",
            blocks: [
                {
                    type: "p",
                    text: "Masharti haya yanatumika kwenye programu, USSD, tovuti na njia nyingine zilizoidhinishwa. Kutumia au kuthibitisha muamala kunamaanisha masharti na gharama iliyoonyeshwa.",
                },
            ],
        },
        {
            id: "eligibility",
            number: "03",
            title: "3. Ustahiki na wajibu",
            blocks: [
                {
                    type: "p",
                    text: "Toa taarifa sahihi, tumia namba na mita ulizoidhinishwa kutumia, linda namba yako ya siri na usitumie huduma kwa udanganyifu au shughuli haramu.",
                },
            ],
        },
        {
            id: "process",
            number: "04",
            title: "4. Utaratibu",
            blocks: [
                {
                    type: "p",
                    text: "Chagua mita, sub-meter, namba ya malipo na kiasi; kagua gharama; thibitisha malipo; Fikisha hupata tokeni ya TANESCO kwa niaba yako na kukutumia tokeni ya sub-meter kupitia programu au SMS.",
                },
            ],
        },
        {
            id: "charges",
            number: "05",
            title: "5. Gharama",
            blocks: [
                {
                    type: "p",
                    text: "Gharama ya Fikisha ni tofauti na thamani ya tokeni ya TANESCO na gharama za mtoa huduma wa simu. Kiasi cha chini ni TZS 1,000 na ada mpya itaonyeshwa kabla ya uthibitisho.",
                },
            ],
        },
        {
            id: "meters",
            number: "06",
            title: "6–10. Mita, ucheleweshaji na usajili",
            blocks: [
                {
                    type: "p",
                    text: "Hakikisha taarifa ni sahihi. Miamala inaweza kuchelewa kwa sababu ya mitandao au mifumo ya wahusika wengine. Usilipe tena ikiwa tokeni imechelewa; wasiliana na msaada. Usajili unaweza kuwa na ada tofauti.",
                },
            ],
        },
        {
            id: "privacy",
            number: "11",
            title: "11–14. Faragha, kusimamisha huduma na malalamiko",
            blocks: [
                {
                    type: "p",
                    text: "Fikisha inaweza kuchakata taarifa zinazohitajika kwa huduma, malipo, tokeni, usalama na wajibu wa kisheria. Wasiliana nasi kwa kumbukumbu ya muamala ukipata tatizo.",
                },
            ],
        },
        {
            id: "contact",
            number: "15",
            title: "15–19. Mabadiliko, sheria na uthibitisho",
            blocks: [
                {
                    type: "p",
                    text: "Masharti yanaweza kusasishwa. Yanasimamiwa na sheria za Tanzania. Kwa maswali ya kisheria wasiliana na legal@fikishagateway.co.tz. Kwa kubofya “Ninakubali” unathibitisha makubaliano yako.",
                },
            ],
        },
    ],
};

export const termsContent: Record<TermsLang, TermsCopy> = { en, sw };
