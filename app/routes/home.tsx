import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Hero } from "../components/Hero";
import FikishaDifference from "../components/FikishaDifference";
import HowItWorks from "~/components/HowItWorks";

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
    </div>
  );
}
