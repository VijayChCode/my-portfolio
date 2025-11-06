import { v2 as cloudinary } from "cloudinary"
import { type NextRequest, NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET(request: NextRequest) {
  try {
    // Get the latest resume
    const resumeResult = await cloudinary.api.resources({
      type: "upload",
      prefix: "portfolio/resume",
      max_results: 1,
      resource_type: "raw",
    })

    // Get the latest profile image
    const profileResult = await cloudinary.api.resources({
      type: "upload",
      prefix: "portfolio/profile",
      max_results: 1,
      resource_type: "image",
    })

    const resumeUrl =
      resumeResult.resources.length > 0
        ? cloudinary.url(resumeResult.resources[0].public_id, {
            resource_type: "raw",
            secure: true,
          })
        : null

    const profileUrl =
      profileResult.resources.length > 0
        ? cloudinary.url(profileResult.resources[0].public_id, {
            resource_type: "image",
            secure: true,
            transformation: [{ quality: "auto", fetch_format: "auto" }],
          })
        : null

    return NextResponse.json({ resumeUrl, profileUrl }, { status: 200 })
  } catch (error: any) {
    console.error("[v0] Error fetching cloud resources:", error)
    return NextResponse.json({ error: "Failed to fetch resources", details: error.message }, { status: 500 })
  }
}
