"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    "Boost revenue by up to 25% within 90 days.",
    "Fewer Denials – 99% first-pass claim approval rate.",
    "Certified Expertise – Managed by AAPC & AHIMA-certified billers.",
    "Seamless Integration – Works with your existing EMR.",
];

const stats = [
    { label: "Revenue Increase", value: "25%", icon: TrendingUp },
    { label: "Approval Rate", value: "99%", icon: CheckCircle2 },
    { label: "Faster Payments", value: "30%", icon: Clock },
    { label: "Client Retention", value: "98%", icon: Users },
];

export function WhyGoBill() {
    return (
        <section className="py-24 bg-slate-50 relative" id="why-gobill">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gobill-dark mb-6">
                            Outsource Medical Billing Services That Drive Real Growth
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Discover how GoBill helps medical practices reduce denials, improve reimbursements, and scale efficiently through expert billing and data-backed strategy.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-gobill-cyan flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <Button size="lg" className="bg-gobill-blue hover:bg-gobill-blue/90 font-bold px-8 shadow-lg shadow-gobill-blue/20">
                            Transform Your Practice
                        </Button>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-gobill-purple">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-gobill-dark mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
