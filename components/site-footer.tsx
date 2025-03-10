import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <GraduationCap className="h-5 w-5" />
          <p className="text-sm leading-loose text-center">
            &copy; {new Date().getFullYear()} A&apos;ezzy Grammar Correction. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {/*
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Help
          </Link>
          */}
        </div>
      </div>
    </footer>
  )
}