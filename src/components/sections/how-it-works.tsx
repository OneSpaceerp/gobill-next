"use client";

import { Container } from "@/components/ui/container";
import { Search, ClipboardCheck, Settings, Play } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Complimentary Assessment",
        description: "We audit your current billing process to find revenue leaks.",
        icon: Search,
    },
    {
        number: "02",
        title: "Customized Strategy",
        description: "Our certified experts build a plan tailored to your specialty.",
        icon: ClipboardCheck,
    },
    {
        number: "03",
        title: "Seamless Integration",
        description: "We connect with your customized EMR without disrupting workflow.",
        icon: Settings,
    },
    {
        number: "04",
        title: "Revenue Optimization",
        description: "Watch your collections increase and denials drop.",
        icon: Play,
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white" id="how-it-works">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gobill-dark mb-6">
                            A Proven 4-Step Process to Boost Your Revenue
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We don't just process claims; we optimize your entire financial workflow. See how easy it is to get started with GoBill.
                        </p>
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 relative">
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-6 top-16 bottom-[-32px] w-0.5 bg-slate-100" />
                                    )}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-gobill-blue font-bold text-lg shadow-sm z-10">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract visual representation of process */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-primary p-1 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
                            <div className="h-full w-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gobill-cyan via-gobill-purple to-transparent" />
                                <div className="text-center p-8 relative z-10">
                                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2">25%</div>
                                    <div className="text-white text-xl font-medium">Revenue Increase</div>
                                    <div className="mt-8 inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
                                        Average Client Result
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
