"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          <Link href="/" className="font-bold text-base sm:text-lg">
            A&apos;ezzy
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          <div className="hidden md:flex gap-2">
            {/* 
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
            */}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3 bg-background border-b">
            <Link 
              href="/" 
              className="block text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="block text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className="block text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {/* 
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Sign Up
              </Button>
            </div>
            */}
          </div>
        </div>
      )}
    </header>
  );
}