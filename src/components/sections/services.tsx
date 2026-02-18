"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, DollarSign, FileX, Users, Calendar, Shield, Activity, Phone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Revenue Cycle Management",
        description: "End-to-end financial optimization for your practice.",
        icon: Activity,
        color: "bg-blue-500",
    },
    {
        title: "Medical Billing",
        description: "Accurate coding and submission for faster payments.",
        icon: DollarSign,
        color: "bg-green-500",
    },
    {
        title: "Denial Management",
        description: "We fight for every claim so you don't have to.",
        icon: FileX,
        color: "bg-red-500",
    },
    {
        title: "Credentialing",
        description: "Get enrolled with payers quickly and correctly.",
        icon: Shield,
        color: "bg-purple-500",
    },
    {
        title: "Patient Engagement",
        description: "Virtual front desk and appointment scheduling.",
        icon: Users,
        color: "bg-orange-500",
    },
    {
        title: "Pre-Authorization",
        description: "Secure approvals before services are rendered.",
        icon: Stethoscope,
        color: "bg-teal-500",
    },
];

export function Services() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="solutions">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gobill-dark mb-4">
                        Complete Practice Solutions
                    </h2>
                    <p className="text-lg text-slate-600">
                        From authorization to payment, we handle the complexities of medical billing so you can focus on patient care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-gobill-cyan/20 h-full">
                                <div className={`w-14 h-14 rounded-xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.color.replace("bg-", "text-")}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gobill-blue transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gobill-blue to-gobill-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
