import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Set" : "Not set")

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set in the environment variables")
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(request: Request) {
  const { text } = await request.json()

  if (!text) {
    return NextResponse.json({ message: "Text is required" }, { status: 400 })
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

    const prompt = `
      Check the following text for grammar, spelling, punctuation, and style issues. 
      Provide corrections in this JSON format, without any markdown formatting:
      {
        "corrections": [
          {
            "original": "original text",
            "corrected": "corrected text",
            "type": "grammar|spelling|punctuation|style",
            "explanation": "explanation of the correction"
          }
        ],
        "correctedText": "full corrected text"
      }

      Text to check: "${text}"
    `

    const result = await model.generateContent(prompt)
    const response = result.response
    let generatedText = response.text()

    // Remove any potential Markdown formatting
    generatedText = generatedText.replace(/```json\n?|\n?```/g, "").trim()

    // Log the generated text before parsing
    console.log("Generated text:", generatedText)

    // Parse the JSON response
    let parsedResponse
    try {
      parsedResponse = JSON.parse(generatedText)
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError)
      throw new Error("Failed to parse the generated content as JSON")
    }

    return NextResponse.json(parsedResponse)
  } catch (error: unknown) {
    console.error("Error checking grammar:", error)

    let errorMessage = "An unknown error occurred"
    let errorDetails = {}
    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = { name: error.name, stack: error.stack }
    }

    return NextResponse.json(
      {
        message: "Error checking grammar",
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}

