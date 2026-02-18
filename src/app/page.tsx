import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyGoBill } from "@/components/sections/why-gobill";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <TrustBar />
            <Services />
            <HowItWorks />
            <WhyGoBill />
            <Testimonials />
            <CTA />
        </main>
    );
}
