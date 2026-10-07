import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Hero } from "../components/Hero";
import FikishaDifference from "../components/FikishaDifference";
import HowItWorks from "~/components/HowItWorks";
import OurFee from "~/components/home/OurFee";
import ServiceFees from "~/components/home/ServiceFees";
import Faq from "~/components/home/Faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <FikishaDifference />
      <HowItWorks/>
      <OurFee />
      <ServiceFees />
      <Faq />
    </div>
  );
}
