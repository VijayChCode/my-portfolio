import { v2 as cloudinary } from "cloudinary"
import { type NextRequest, NextResponse } from "next/server"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const fileType = formData.get("fileType") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    console.log("[v0] Starting upload for:", file.name, "Type:", file.type)

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString("base64")
    const dataURI = `data:${file.type};base64,${base64}`

    const uploadOptions: any = {
      resource_type: fileType === "resume" ? "raw" : "auto",
      folder: `portfolio/${fileType}`,
      public_id: fileType === "resume" ? "Vijay_Chalendra_Resume" : `profile_${Date.now()}`,
      overwrite: fileType === "resume",
      use_filename: false,
      unique_filename: fileType === "resume" ? false : true,
    }

    console.log("[v0] Upload options:", uploadOptions)

    const result = await cloudinary.uploader.upload(dataURI, uploadOptions)

    console.log("[v0] Upload successful:", result.secure_url)

    return NextResponse.json(
      {
        secure_url: result.secure_url,
        public_id: result.public_id,
        resource_type: result.resource_type,
        original_filename: file.name,
      },
      { status: 200 },
    )
  } catch (error: any) {
    console.error("[v0] Cloudinary upload error:", error)
    return NextResponse.json({ error: "Upload failed", details: error?.message || "Unknown error" }, { status: 500 })
  }
}
