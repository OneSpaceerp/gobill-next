"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Solutions", href: "/#solutions" },
    { name: "Why GoBill", href: "/#why-gobill" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-gobill-light" : "bg-transparent"
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-display font-extrabold text-gobill-blue tracking-tight">
                            GO<span className="text-gobill-cyan">bill</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 hover:text-gobill-blue transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-gobill-blue font-semibold">
                            Sign In
                        </Button>
                        <Button variant="default" className="bg-gobill-blue hover:bg-gobill-blue/90 shadow-lg shadow-gobill-blue/20">
                            Book a Meeting
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-slate-700 py-2 border-b border-slate-50 last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <Button variant="outline" className="w-full justify-center">
                            Sign In
                        </Button>
                        <Button className="w-full justify-center bg-gobill-blue">
                            Book a Meeting
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
