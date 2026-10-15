import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import FikishaDifference from "../components/FikishaDifference";
import HowItWorks from "~/components/HowItWorks";
import OurFee from "~/components/home/OurFee";
import ServiceFees from "~/components/home/ServiceFees";
import Faq from "~/components/home/Faq";
import { JsonLd } from "~/components/seo/JsonLd";
import { Faq as FaqContent } from "~/contents/Faq";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  faqJsonLd,
  organizationJsonLd,
  seoMeta,
  softwareAppJsonLd,
  websiteJsonLd,
} from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return seoMeta({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  });
}

export default function Home() {
  return (
    <div>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={softwareAppJsonLd()} />
      <JsonLd data={faqJsonLd(FaqContent)} />
      <Hero />
      <FikishaDifference />
      <HowItWorks/>
      <OurFee />
      <ServiceFees />
      <Faq />
    </div>
  );
}
