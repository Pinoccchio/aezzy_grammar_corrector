"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react"

interface Correction {
  original: string
  corrected: string
  type: "grammar" | "spelling" | "punctuation" | "style"
  explanation: string
}

export function GrammarChecker() {
  const [text, setText] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [corrections, setCorrections] = useState<Correction[]>([])
  const [correctedText, setCorrectedText] = useState("")
  const [activeTab, setActiveTab] = useState("input")

  const checkGrammar = async () => {
    if (!text.trim()) return

    setIsChecking(true)
    setActiveTab("input")

    try {
      const response = await fetch("/api/check-grammar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error("Failed to check grammar")
      }

      const data = await response.json()

      setCorrections(data.corrections || [])
      setCorrectedText(data.correctedText || text)
    } catch (error) {
      console.error("Error checking grammar:", error)
      alert("An error occurred while checking grammar. Please try again.")
    } finally {
      setIsChecking(false)
      setActiveTab("results")
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    // Reset corrections when text changes
    if (corrections.length > 0) {
      setCorrections([])
      setCorrectedText("")
    }
  }

  const handleApplyAll = () => {
    setText(correctedText)
    setCorrections([])
    setCorrectedText("")
    setActiveTab("input")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Grammar Checker</CardTitle>
        <CardDescription>
          Enter your text below and let A&apos;ezzy check it for grammar, spelling, and style issues.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="input">Input</TabsTrigger>
            <TabsTrigger value="results" disabled={!correctedText}>
              Results {corrections.length > 0 && `(${corrections.length})`}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="input" className="space-y-4">
            <Textarea
              placeholder="Type or paste your text here..."
              className="min-h-[200px] resize-none"
              value={text}
              onChange={handleTextChange}
            />
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">{text.length} characters</div>
              <Button onClick={checkGrammar} disabled={!text.trim() || isChecking}>
                {isChecking ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Check Grammar
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="results" className="space-y-4">
            {correctedText && (
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Corrected Text</div>
                  <p className="mt-2 whitespace-pre-wrap">{correctedText}</p>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Corrections ({corrections.length})</div>
                  {corrections.map((correction, index) => (
                    <div key={index} className="rounded-md border p-3 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          <span className="font-medium">
                            <span className="line-through">{correction.original}</span> → {correction.corrected}
                          </span>
                        </div>
                        <Badge variant="outline">{correction.type}</Badge>
                      </div>
                      <p className="mt-2 text-muted-foreground">{correction.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setText("")
            setCorrections([])
            setCorrectedText("")
            setActiveTab("input")
          }}
        >
          Clear All
        </Button>
        {correctedText && (
          <Button onClick={handleApplyAll}>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Apply All Corrections
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

