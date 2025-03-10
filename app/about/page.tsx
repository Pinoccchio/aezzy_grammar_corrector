"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [mapLoaded, setMapLoaded] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.querySelector("iframe")
      if (iframe && iframe.clientHeight === 0) {
        setMapLoaded(false)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-5xl mx-auto space-y-8 py-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About A&apos;ezzy</h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              A research project by Grade 11 students from the College of Arts and Sciences of Asia and the Pacific
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center mt-8">
            <div className="flex justify-center">
              <Image
                src="/images/casap_logo.png"
                alt="CASAP Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Research</h2>
              <p className="text-muted-foreground">
                A&apos;ezzy is a research project developed by Grade 11 Senior High School students from the College of
                Arts and Sciences of Asia and the Pacific (CASAP) in the Philippines.
              </p>
              <p className="text-muted-foreground font-semibold">
                Research Title: &quot;ACCEPTABILITY OF A&apos;EZZY GRAMMAR CORRECTION: AN ONLINE BOT FOR SELECTED GRADE
                11 SENIOR HIGH SCHOOL STUDENTS AT COLLEGE OF ARTS AND SCIENCES OF ASIA AND THE PACIFIC, A.Y.
                2024-2025&quot;
              </p>
              <p className="text-muted-foreground">
                This website serves as a prototype and demonstration of our research project, aiming to assess the
                acceptability and effectiveness of an AI-powered grammar correction tool for our fellow students.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-center">Research Objectives</h2>
            <div className="grid gap-8 md:grid-cols-3 mt-8">
              <div className="flex flex-col items-center text-center space-y-3 p-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Assess Acceptability</h3>
                <p className="text-muted-foreground">
                  Evaluate how Grade 11 students perceive and accept an AI-powered grammar correction tool.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Improve Writing Skills</h3>
                <p className="text-muted-foreground">
                  Explore how an AI grammar tool can enhance students&apos; writing abilities and confidence.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Integrate Technology</h3>
                <p className="text-muted-foreground">
                  Investigate the potential of integrating AI technology in educational tools for language learning.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Our School</h2>
            <div className="text-center">
              <p className="font-medium">College of Arts and Sciences of Asia and the Pacific (CASAP)</p>
              <p className="text-muted-foreground">P4HG+W2Q, Payatas Rd, Rodriguez, Metro Manila, Philippines</p>
            </div>
            <div className="aspect-video w-full">
              {mapLoaded ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6947926973126!2d121.12024627643561!3d14.72983973723891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bae1e2b914c9%3A0x53e1487358d6844a!2sCollege%20of%20Arts%20a%26%20Sciences%20for%20Asia%20and%20the%20Pacific!5e0!3m2!1sen!2sph!4v1740730839808!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                  <p>Map could not be loaded. Please check your internet connection.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

