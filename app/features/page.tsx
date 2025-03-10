import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle2 } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-5xl mx-auto space-y-8 py-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
              Discover what makes A&apos;ezzy the best grammar correction tool
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Grammar Correction</h3>
              <p className="text-muted-foreground">
                Advanced AI that identifies and corrects grammatical errors in your text with detailed explanations.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Spelling Check</h3>
              <p className="text-muted-foreground">
                Catch and correct spelling mistakes with context-aware suggestions that understand your intended
                meaning.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Style Improvement</h3>
              <p className="text-muted-foreground">
                Get suggestions to enhance your writing style, clarity, and overall readability.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Punctuation Fixes</h3>
              <p className="text-muted-foreground">
                Correct misplaced commas, periods, and other punctuation marks to improve sentence structure.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Instant Feedback</h3>
              <p className="text-muted-foreground">
                Get real-time corrections and suggestions as you type, helping you learn and improve your writing.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Multiple Languages</h3>
              <p className="text-muted-foreground">
                Support for various languages and dialects to help non-native speakers improve their writing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

