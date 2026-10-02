import type { Difference as DifferenceType } from "../types/Difference";
import { Zap, Timer, MessageCircle } from "lucide-react";

export const Difference: DifferenceType[] = [
    {
        title: "Both tokens, one place",
        description: "Buy your TANESCO token and get the matching submeter token without chasing anyone.",
        icon: Zap,
    },
    {
        title: "Built for the moments that matter",
        description: "No more waiting until tomorrow. Fikisha keeps your power moving when you need it.",
        icon: Timer,
    },
    {
        title: "Sent straight to you",
        description: "Get your tokens by message, ready to enter into your meter and submeter.",
        icon: MessageCircle,
    },
];
