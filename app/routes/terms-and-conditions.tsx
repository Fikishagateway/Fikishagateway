import type { Route } from "./+types/terms-and-conditions"
import TermsPage from "../components/terms/TermsPage"

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Terms and Conditions | Fikisha" },
        {
            name: "description",
            content:
                "The rules and responsibilities for using Fikisha across the app, USSD and web.",
        },
    ]
}

export default function TermsAndConditions() {
    return <TermsPage />
}
