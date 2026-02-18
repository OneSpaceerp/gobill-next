import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const footerLinks = {
    solutions: [
        { name: "Medical Billing", href: "#" },
        { name: "RCM Services", href: "#" },
        { name: "Denial Management", href: "#" },
        { name: "Patient Engagement", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Why GoBill", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "FAQs", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gobill-dark text-white border-t border-white/10 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-3xl font-display font-extrabold text-white tracking-tight">
                                GO<span className="text-gobill-cyan">bill</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
                            From Billing to Brilliance. We combine certified expertise with AI-powered technology to maximize your practice&apos;s revenue.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gobill-cyan hover:text-gobill-dark transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gobill-cyan hover:text-gobill-dark transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gobill-cyan hover:text-gobill-dark transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gobill-cyan hover:text-gobill-dark transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gobill-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gobill-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gobill-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 GoBill. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
