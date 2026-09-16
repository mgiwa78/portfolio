import type { Metadata } from "next";
import WorkIndexContent from "./WorkIndexContent";

export const metadata: Metadata = {
  title: "Work | Giwa Muhammad",
  description:
    "Ten platforms: multi-tenant SaaS, marketplaces with real payment rails, an institutional LMS, and the infrastructure underneath each of them.",
};

export default function WorkIndexPage() {
  return <WorkIndexContent />;
}
