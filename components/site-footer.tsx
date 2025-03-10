import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-4 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-center mb-2">
          <GraduationCap className="h-5 w-5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            &copy; {new Date().getFullYear()} A&apos;ezzy Grammar Correction. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 mt-2">
          {/*
          <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
            Help
          </Link>
          */}
        </div>
      </div>
    </footer>
  )
}