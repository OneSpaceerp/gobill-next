"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-gobill-dark mt-20">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-hero-gradient opacity-80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-gobill-dark via-transparent to-transparent opacity-90" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-gobill-cyan text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gobill-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gobill-cyan"></span>
                        </span>
                        New AI-Powered Collections Optimization
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight"
                    >
                        From Billing to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gobill-cyan to-white">Brilliance</span>
                        <br />
                        <span className="text-3xl md:text-5xl text-slate-300 font-medium mt-2 block">
                            Financial Excellence Powered by AI
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        Boost your practice revenue by up to 25% with certified, HIPAA-compliant billing and revenue cycle solutions. GoBill cuts through the chaos of rejections and red tape.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-gobill-cyan text-gobill-dark hover:bg-gobill-cyan/90 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            Book a Meeting
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2">
                            <PlayCircle className="w-5 h-5" />
                            See How It Works
                        </Button>
                    </motion.div>

                    {/* Trust/Social Proof Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-12 flex items-center justify-center gap-8 opacity-70 grayscale"
                    >
                        <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Trusted by 500+ Practices</p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
