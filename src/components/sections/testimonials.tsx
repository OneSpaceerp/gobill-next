"use client";

import { Container } from "@/components/ui/container";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "GoBill has transformed the way we handle our claims. Faster approvals and fewer headaches. Our revenue increased by 30% in just 3 months.",
        author: "Dr. Michael R.",
        role: "Orthopedic Clinic",
        initials: "MR",
        color: "bg-blue-100 text-blue-600"
    },
    {
        quote: "GoBill helped us reduce denials by 40% in 3 months! Their team is professional, responsive, and truly understands medical billing.",
        author: "Dr. Sarah L.",
        role: "Family Medicine Practice",
        initials: "SL",
        color: "bg-purple-100 text-purple-600"
    },
    {
        quote: "The transition to GoBill was seamless. Their credentialing services saved us countless hours and their billing accuracy is unmatched.",
        author: "Dr. James P.",
        role: "Cardiology Center",
        initials: "JP",
        color: "bg-teal-100 text-teal-600"
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white" id="testimonials">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gobill-dark mb-4">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how GoBill helps practices like yours achieve financial excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 rounded-2xl p-8 relative border border-slate-100 group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6 group-hover:text-gobill-cyan/20 transition-colors" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <blockquote className="text-slate-700 mb-8 leading-relaxed relative z-10">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-lg`}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
