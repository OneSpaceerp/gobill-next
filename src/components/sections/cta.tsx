import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gobill-blue">
                <div className="absolute inset-0 bg-gradient-cta opacity-90" />
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
            </div>

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                    Ready to Optimize Your Revenue?
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join hundreds of practices that are increasing collections and reducing stress with GoBill.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg bg-white text-gobill-blue hover:bg-white/90 font-bold shadow-xl">
                        Start Your Complimentary Assessment
                    </Button>
                </div>
            </Container>
        </section>
    );
}
