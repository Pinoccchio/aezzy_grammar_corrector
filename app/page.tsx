import { GrammarChecker } from "@/components/grammar-checker"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-5xl mx-auto space-y-8 py-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A&apos;ezzy Grammar Correction
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              An intelligent online bot for grammar correction and text improvement
            </p>
          </div>
          <GrammarChecker />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

