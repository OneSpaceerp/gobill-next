import { Container } from "@/components/ui/container";
import { ShieldCheck, Lock, Award, Clock, FileCheck, DollarSign } from "lucide-react";

const badges = [
    { icon: ShieldCheck, text: "HIPAA Compliant" },
    { icon: Lock, text: "SOC 2 Type II" },
    { icon: Award, text: "AAPC Certified" },
    { icon: Clock, text: "24/7 Monitoring" },
    { icon: FileCheck, text: "99% Clean Claims" },
    { icon: DollarSign, text: "25% Rev Increase" },
];

export function TrustBar() {
    return (
        <section className="bg-gobill-blue py-10 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
                    {badges.map((badge, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-gobill-cyan group-hover:text-gobill-dark transition-colors duration-300">
                                <badge.icon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                                {badge.text}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
