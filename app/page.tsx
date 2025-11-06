"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Code,
  Presentation,
  User,
  HomeIcon,
  Moon,
  Sun,
  Loader2,
  Phone,
  MapPin,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [profilePhoto, setProfilePhoto] = useState("/images/profile-photo.jpg")
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isUploadingResume, setIsUploadingResume] = useState(false)
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false)
  const [resumeFileName, setResumeFileName] = useState<string | null>(null)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = isDark || prefersDark

    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    }

    fetchCloudResources()

    // Set up interval to refresh cloud resources every 5 seconds so multiple tabs stay in sync
    const interval = setInterval(fetchCloudResources, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchCloudResources = async () => {
    try {
      const response = await fetch("/api/cloud-resources")
      const data = await response.json()
      console.log("[v0] Cloud resources fetched:", data)

      if (data.resumeUrl) {
        setResumeUrl(data.resumeUrl)
        // If resumeFileName is not set by upload, set a default based on URL or keep it null
        if (!resumeFileName) {
          setResumeFileName("Resume (Uploaded)")
        }
      }
      if (data.profileUrl) {
        setProfilePhoto(data.profileUrl)
      }
    } catch (error) {
      console.error("[v0] Error fetching cloud resources:", error)
    }
  }

  const toggleDarkMode = () => {
    const newState = !isDarkMode
    setIsDarkMode(newState)
    localStorage.setItem("darkMode", String(newState))

    if (newState) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const [editableContent, setEditableContent] = useState({
    name: "Vijay Chalendra",
    title: "Computer Science Undergraduate passionate about AI, Software Development, and System Design",
    about:
      "Currently pursuing B.Tech in Computer Science at Kakatiya Institute of Technology and Science, Warangal, with a strong academic record (CGPA: 9.28). I have a solid foundation in computer science fundamentals and am constantly exploring new technologies and methodologies.",
    email: "chalendravijay09@gmail.com",
    phone: "+91-9848615896",
    location: "Hanamkonda, Telangana 506011, India",
    cgpa: "9.28",
  })

  const navigation = [
    { name: "Home", href: "#home", icon: HomeIcon },
    { name: "About", href: "#about", icon: User },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Presentation },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const skills = {
    programming: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"],
    tools: ["VS Code", "Git/GitHub", "Cloudinary"], // Added Cloudinary
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"], // Added relevant technologies
  }

  const certifications = [
    {
      title: "Introduction to CyberSecurity",
      issuer: "Cisco Networking Academy",
      date: "July 2024",
    },
    {
      title: "Packet Tracer Simulation",
      issuer: "Cisco Networking Academy",
      date: "July 2024",
    },
    {
      title: "Front-End Development (HTML)",
      issuer: "Great Learning Academy",
      date: "November 2024",
    },
  ]

  const projects = [
    {
      title: "Real Estate Management Application",
      description:
        "Developed a responsive and dynamic web application for real estate listings using MongoDB, Express.js, React.js, and Node.js (MERN Stack).",
      year: "2025",
      type: "Capstone Project",
      institution: "Capstone Project",
      details: {
        stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
        concepts: [
          "Full-stack web development",
          "MongoDB schema design",
          "RESTful API creation",
          "React.js UI development",
          "User authentication",
          "CRUD operations",
          "Role-based access control",
          "Cloud deployment",
        ],
      },
    },
    {
      title: "Course Patent Presentation",
      description: "Presented research on data routing algorithms and their applications in modern networking systems.",
      year: "2023",
      type: "Research Presentation",
    },
    {
      title: "Neuralink Seminar",
      description: "Delivered a comprehensive seminar on brain-machine interfaces and the future of neural technology.",
      year: "2024",
      type: "Technical Seminar",
    },
  ]

  const coursework = [
    {
      name: "Data Structures",
      description:
        "Fundamentals of data structures including arrays, linked lists, trees, graphs, hash tables, and their applications in solving complex problems efficiently",
    },
    {
      name: "Software Methodology",
      description:
        "Software development lifecycle, design patterns, software architecture, development best practices, and agile methodologies",
    },
    {
      name: "Algorithms Analysis",
      description:
        "Algorithm design paradigms, complexity analysis (Big O notation), optimization techniques, sorting, searching, and dynamic programming",
    },
    {
      name: "Database Management",
      description:
        "Database design principles, SQL query optimization, normalization, DBMS concepts, indexing, transactions, and integrity constraints",
    },
    {
      name: "Artificial Intelligence",
      description:
        "AI fundamentals, machine learning concepts, neural networks, natural language processing, computer vision, and intelligent systems design",
    },
    {
      name: "Internet Technology",
      description:
        "Web protocols (HTTP/HTTPS), DNS, networking fundamentals, internet architecture, web services, and distributed systems",
    },
    {
      name: "Systems Programming",
      description:
        "Low-level programming, operating systems concepts, system design, memory management, processes, threads, and system calls",
    },
    {
      name: "Computer Architecture",
      description:
        "CPU design, memory hierarchy, instruction sets, assembly language, pipelining, caching, and computer organization principles",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Removed the unused useEffect for resumeFile cleanup as we are now using URL

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleAdminLogin = () => {
    if (adminPassword === "Salendra@2004") {
      // Replace with your actual admin password logic
      setIsAdmin(true)
      setShowAdminLogin(false)
      setAdminPassword("")
    } else {
      alert("Incorrect password")
    }
  }

  const handleAdminLogout = () => {
    setIsAdmin(false)
    setAdminPassword("")
    // Optionally reset other admin-related states if needed
    // setResumeFile(null); // This is now handled by resumeUrl state
  }

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploadingPhoto(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("fileType", "profile")

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.secure_url) {
        console.log("[v0] Profile photo uploaded:", data.secure_url)
        setProfilePhoto(data.secure_url)
        // Then refresh to sync across tabs
        setTimeout(() => fetchCloudResources(), 1000)
        alert("Profile photo updated successfully!")
      } else {
        alert("Error uploading photo. Please check console for details.")
        console.error("[v0] Cloudinary upload response:", data)
      }
    } catch (error) {
      console.error("[v0] Upload error:", error)
      alert("Error uploading photo. Please try again.")
    } finally {
      setIsUploadingPhoto(false)
    }
  }

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file")
      return
    }

    setIsUploadingResume(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("fileType", "resume")

      console.log("[v0] Starting resume upload:", file.name)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      console.log("[v0] Upload response:", data)

      if (data.secure_url) {
        console.log("[v0] Resume uploaded:", data.secure_url)
        setResumeFileName(file.name)
        setResumeUrl(data.secure_url)
        // Then refresh to sync across tabs
        setTimeout(() => fetchCloudResources(), 1000)
        alert("Resume uploaded successfully!")
      } else {
        alert("Error uploading resume. Please check console for details.")
        console.error("[v0] Upload error:", data)
      }
    } catch (error) {
      console.error("[v0] Resume upload error:", error)
      alert("Error uploading resume. Please try again.")
    } finally {
      setIsUploadingResume(false)
    }
  }

  const downloadResume = () => {
    if (resumeUrl) {
      const fileName = resumeFileName || "Vijay_Chalendra_Resume.pdf"
      // Cloudinary download parameter: add ?fl_attachment to force download
      const downloadUrl = `${resumeUrl}${resumeUrl.includes("?") ? "&" : "?"}fl_attachment`

      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = fileName
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log("[v0] Resume downloaded from:", downloadUrl, "as:", fileName)
    } else {
      alert("Resume not available. Please upload one in the admin panel.")
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-slate-950" : "bg-slate-50"}`}>
      <nav
        className="fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-all duration-300 dark:glass-effect-dark"
        style={{
          background: isDarkMode ? undefined : "rgba(255, 255, 255, 0.7)",
          borderColor: isDarkMode ? undefined : "rgba(59, 130, 246, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Vijay.Dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? isDarkMode
                        ? "bg-blue-500/20 text-blue-400 dark:text-blue-400"
                        : "bg-blue-500/15 text-blue-600"
                      : isDarkMode
                        ? "text-gray-300 hover:bg-white/10"
                        : "text-gray-700 hover:bg-blue-500/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}

              <button
                onClick={toggleDarkMode}
                className={`ml-4 p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? "hover:bg-white/10" : "hover:bg-blue-500/10"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? "hover:bg-white/10" : "hover:bg-blue-500/10"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
              </button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? isDarkMode
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-500/15 text-blue-600"
                      : isDarkMode
                        ? "text-gray-300 hover:bg-white/10"
                        : "text-gray-700 hover:bg-blue-500/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Resume Download Button with Cloudinary URL */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={downloadResume}
          disabled={!resumeUrl || isUploadingResume} // Disable if no URL or currently uploading
          className={`group text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2 backdrop-blur-md transition-all duration-200 hover:scale-105 ${
            resumeUrl && !isUploadingResume
              ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-blue-500/50 cursor-pointer"
              : "bg-gradient-to-r from-gray-400 to-gray-600 opacity-50 cursor-not-allowed"
          }`}
          title={resumeUrl ? "Download Resume from Cloudinary" : "Resume not uploaded yet"}
        >
          {isUploadingResume ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Uploading...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Resume</span>
            </>
          )}
        </button>
      </div>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56">
                <div
                  className={`absolute inset-0 rounded-2xl blur-2xl opacity-50 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-500 to-purple-600"
                      : "bg-gradient-to-br from-blue-400 to-purple-500"
                  }`}
                ></div>
                <img
                  src={profilePhoto || "/placeholder.svg"}
                  alt="Vijay Chalendra"
                  className={`relative w-56 h-56 rounded-2xl object-cover border-4 shadow-2xl ${
                    isDarkMode ? "border-white/10" : "border-blue-200/60 shadow-blue-200/40"
                  }`}
                />
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold text-foreground">
                {isAdmin ? (
                  <input
                    type="text"
                    value={editableContent.name}
                    onChange={(e) => setEditableContent({ ...editableContent, name: e.target.value })}
                    className={`bg-transparent border-b-2 border-blue-500 text-center w-full ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  />
                ) : (
                  editableContent.name
                )}
              </h1>
              <p
                className={`text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {isAdmin ? (
                  <textarea
                    value={editableContent.title}
                    onChange={(e) => setEditableContent({ ...editableContent, title: e.target.value })}
                    className={`bg-transparent border-2 border-blue-500 rounded p-2 w-full resize-none ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                    rows={2}
                  />
                ) : (
                  editableContent.title
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button
                size="lg"
                onClick={() => window.open("https://github.com/VijayChCode", "_blank")}
                className={`group backdrop-blur-md transition-all duration-200 ${
                  isDarkMode
                    ? "glass-effect-dark hover:bg-white/20 border-white/20 text-white"
                    : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-300/50 text-blue-700"
                }`}
                variant="outline"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Button>
              <Button
                size="lg"
                onClick={() => window.open("https://linkedin.com/in/vijay-chalendra-3a771428a", "_blank")}
                className={`group backdrop-blur-md transition-all duration-200 ${
                  isDarkMode
                    ? "glass-effect-dark hover:bg-white/20 border-white/20 text-white"
                    : "bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-300/50 text-blue-700"
                }`}
                variant="outline"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900/50 to-slate-800/50"
            : "bg-gradient-to-b from-blue-50/40 to-purple-50/40"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`rounded-2xl p-8 space-y-6 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
              <h3 className="text-2xl font-semibold text-foreground">Academic Background</h3>
              <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {isAdmin ? (
                  <textarea
                    value={editableContent.about}
                    onChange={(e) => setEditableContent({ ...editableContent, about: e.target.value })}
                    className={`bg-transparent border-2 border-blue-500 rounded p-2 w-full resize-none ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                    rows={4}
                  />
                ) : (
                  editableContent.about
                )}
              </p>
            </div>

            <div className={`rounded-2xl p-8 space-y-6 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
              <h3 className="text-2xl font-semibold text-foreground">Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className={
                    isDarkMode
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                      : "bg-blue-500/20 text-blue-700 border-blue-400/60"
                  }
                >
                  AI & Machine Learning
                </Badge>
                <Badge
                  variant="secondary"
                  className={
                    isDarkMode
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                      : "bg-purple-500/20 text-purple-700 border-purple-400/60"
                  }
                >
                  Software Development
                </Badge>
                <Badge
                  variant="secondary"
                  className={
                    isDarkMode
                      ? "bg-pink-500/20 text-pink-300 border-pink-500/50"
                      : "bg-pink-500/20 text-pink-700 border-pink-400/60"
                  }
                >
                  System Design
                </Badge>
                <Badge
                  variant="secondary"
                  className={
                    isDarkMode
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                      : "bg-blue-500/20 text-blue-700 border-blue-400/60"
                  }
                >
                  Data Structures
                </Badge>
                <Badge
                  variant="secondary"
                  className={
                    isDarkMode
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                      : "bg-purple-500/20 text-purple-700 border-purple-400/60"
                  }
                >
                  Networking
                </Badge>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Communication</h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Strong verbal and written communication skills through presentations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teamwork</h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Collaborative approach to problem-solving and development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adaptability</h4>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Quick to learn new technologies and adapt to changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`rounded-2xl overflow-hidden border-white/10 ${
                isDarkMode ? "glass-effect-dark" : "glass-effect-light"
              }`}
            >
              <div className="p-8 space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                    <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                      Kakatiya Institute of Technology and Science, Warangal
                    </p>
                  </div>
                </div>

                <Separator className={isDarkMode ? "bg-white/10" : "bg-blue-200/40"} />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Academic Performance</h4>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                      {isAdmin ? (
                        <input
                          type="text"
                          value={editableContent.cgpa}
                          onChange={(e) => setEditableContent({ ...editableContent, cgpa: e.target.value })}
                          className="bg-transparent border-b border-blue-500 w-full"
                        />
                      ) : (
                        `CGPA: ${editableContent.cgpa}`
                      )}
                    </div>
                    <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                      Maintaining excellent academic performance with consistent high grades across all semesters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto pr-2">
                      {coursework.map((course, index) => (
                        <div key={index} className="group">
                          <div
                            className={`flex items-start space-x-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="flex-1">
                              <p className="font-medium">{course.name}</p>
                              <p className={`text-xs leading-tight ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                                {course.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900/50 to-slate-800/50"
            : "bg-gradient-to-b from-purple-50/40 to-pink-50/40"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Certifications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group ${
                  isDarkMode
                    ? "glass-effect-dark hover:border-blue-400/50 hover:shadow-blue-500/20"
                    : "glass-effect-light hover:border-blue-400/60 hover:shadow-blue-300/30"
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.issuer}</p>
                <Badge
                  className={
                    isDarkMode
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                      : "bg-blue-500/20 text-blue-700 border-blue-400/60"
                  }
                >
                  {cert.date}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Programming Languages", icon: Code, skills: skills.programming },
              { title: "Development Tools", icon: Code, skills: skills.tools },
              { title: "Technologies", icon: Code, skills: skills.technologies },
            ].map((category, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                  isDarkMode
                    ? "glass-effect-dark hover:border-purple-400/50 hover:shadow-purple-500/20"
                    : "glass-effect-light hover:border-purple-400/60 hover:shadow-purple-300/30"
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className={
                        isDarkMode
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/50 hover:bg-purple-500/30"
                          : "bg-purple-500/20 text-purple-700 border-purple-400/60 hover:bg-purple-500/30"
                      }
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode
            ? "bg-gradient-to-b from-slate-900/50 to-slate-800/50"
            : "bg-gradient-to-b from-pink-50/40 to-red-50/40"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects & Presentations</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div
              className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group ${
                isDarkMode
                  ? "glass-effect-dark hover:border-emerald-400/50 hover:shadow-emerald-500/20 border border-emerald-400/20"
                  : "glass-effect-light hover:border-emerald-400/60 hover:shadow-emerald-300/30 border border-emerald-300/40"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="flex gap-2">
                  <Badge
                    className={
                      isDarkMode
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                        : "bg-emerald-500/20 text-emerald-700 border-emerald-400/60"
                    }
                  >
                    2025
                  </Badge>
                  <Badge
                    className={
                      isDarkMode
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                        : "bg-blue-500/20 text-blue-700 border-blue-400/60"
                    }
                  >
                    MERN Stack
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-2">{projects[0].title}</h3>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">{projects[0].type}</p>
              <p className={`text-sm mb-4 font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {projects[0].institution}
              </p>

              <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {projects[0].description}
              </p>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].details?.stack.map((tech, i) => (
                      <Badge
                        key={i}
                        className={
                          isDarkMode
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                            : "bg-emerald-500/20 text-emerald-700 border-emerald-400/60"
                        }
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Concepts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[0].details?.concepts.map((concept, i) => (
                      <div
                        key={i}
                        className={`flex items-start space-x-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group ${
                  isDarkMode
                    ? "glass-effect-dark hover:border-pink-400/50 hover:shadow-pink-500/20"
                    : "glass-effect-light hover:border-pink-400/60 hover:shadow-pink-300/30"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Presentation className="w-6 h-6 text-white" />
                  </div>
                  <Badge
                    className={
                      isDarkMode
                        ? "bg-pink-500/20 text-pink-300 border-pink-500/50"
                        : "bg-pink-500/20 text-pink-700 border-pink-400/60"
                    }
                  >
                    {project.year}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-pink-600 dark:text-pink-400 text-sm font-medium mb-4">{project.type}</p>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`rounded-2xl p-8 space-y-6 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Feel free to reach out through any of these channels
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Email</p>
                      {isAdmin ? (
                        <input
                          type="email"
                          value={editableContent.email}
                          onChange={(e) => setEditableContent({ ...editableContent, email: e.target.value })}
                          className={`bg-transparent border-b border-blue-500 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                        />
                      ) : (
                        <a
                          href={`mailto:${editableContent.email}`}
                          className={`hover:underline font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                        >
                          {editableContent.email}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Phone</p>
                      {isAdmin ? (
                        <input
                          type="tel"
                          value={editableContent.phone}
                          onChange={(e) => setEditableContent({ ...editableContent, phone: e.target.value })}
                          className={`bg-transparent border-b border-purple-500 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                        />
                      ) : (
                        <a
                          href={`tel:${editableContent.phone}`}
                          className={`hover:underline font-medium ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}
                        >
                          {editableContent.phone}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Location</p>
                      {isAdmin ? (
                        <input
                          type="text"
                          value={editableContent.location}
                          onChange={(e) => setEditableContent({ ...editableContent, location: e.target.value })}
                          className={`bg-transparent border-b border-gray-400 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        />
                      ) : (
                        <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>{editableContent.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-2xl p-8 space-y-4 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Profiles</h3>
                <Button
                  onClick={() => window.open("https://linkedin.com/in/vijay-chalendra-3a771428a", "_blank")}
                  className={`w-full justify-start rounded-lg border transition-all duration-200 ${
                    isDarkMode
                      ? "glass-effect-dark border-white/20 text-white hover:bg-white/20"
                      : "bg-gradient-to-br from-white/60 to-white/40 border border-blue-300/50 text-blue-700 hover:from-white/70 hover:to-white/50"
                  }`}
                  variant="outline"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </Button>

                <Button
                  onClick={() => window.open("https://github.com/VijayChCode", "_blank")}
                  className={`w-full justify-start rounded-lg border transition-all duration-200 ${
                    isDarkMode
                      ? "glass-effect-dark border-white/20 text-white hover:bg-white/20"
                      : "bg-gradient-to-br from-white/60 to-white/40 border border-blue-300/50 text-blue-700 hover:from-white/70 hover:to-white/50"
                  }`}
                  variant="outline"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </Button>

                <Separator className={isDarkMode ? "bg-white/10" : "bg-blue-200/40"} />

                <div className="text-center space-y-4">
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Open to internship opportunities and collaborations
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200"
                    onClick={() => window.open("mailto:chalendravijay09@gmail.com", "_blank")}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Admin Login */}
            <div className="mt-12 max-w-md mx-auto px-4">
              {!isAdmin ? (
                <div className={`rounded-2xl p-8 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Admin Access</h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Login to manage portfolio content, upload resume, and update profile photo
                  </p>
                  {!showAdminLogin ? (
                    <Button onClick={() => setShowAdminLogin(true)} className="w-full" variant="outline">
                      Admin Login
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="admin-password" className="block text-sm font-medium text-foreground mb-1">
                          Admin Password
                        </label>
                        <input
                          type="password"
                          id="admin-password"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className={`block w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            isDarkMode
                              ? "bg-white/5 border border-white/10 text-white"
                              : "bg-white/40 border border-blue-200/60 text-gray-900"
                          }`}
                          placeholder="Enter admin password"
                          onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={handleAdminLogin}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600"
                        >
                          Login
                        </Button>
                        <Button onClick={() => setShowAdminLogin(false)} variant="outline" className="flex-1">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className={`rounded-2xl p-8 ${isDarkMode ? "glass-effect-dark" : "glass-effect-light"}`}>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Admin Controls</h3>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Manage portfolio and upload files to Cloudinary
                      </p>
                    </div>
                    <Button onClick={handleAdminLogout} variant="outline" size="sm">
                      Logout
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="resume-upload" className="block text-sm font-medium text-foreground mb-2">
                        Upload Resume to Cloudinary (PDF)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf"
                          onChange={handleResumeUpload}
                          disabled={isUploadingResume}
                          className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500/20 file:text-blue-700 dark:file:text-blue-300
                hover:file:bg-blue-500/30
                disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      {isUploadingResume && (
                        <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1 flex items-center gap-1">
                          <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                        </p>
                      )}
                      {resumeUrl && !isUploadingResume && (
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          ✓ {resumeFileName || "Resume"} uploaded successfully to Cloudinary
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="photo-upload" className="block text-sm font-medium text-foreground mb-2">
                        Update Profile Photo on Cloudinary
                      </label>
                      <input
                        type="file"
                        id="photo-upload"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        disabled={isUploadingPhoto}
                        className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-500/20 file:text-purple-700 dark:file:text-purple-300
                hover:file:bg-purple-500/30
                disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      {isUploadingPhoto && (
                        <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1 flex items-center gap-1">
                          <Loader2 className="w-3 h-3 animate-spin" /> Uploading to Cloudinary...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t backdrop-blur-xl py-8 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? "glass-effect-dark border-white/10" : "bg-white/40 border-blue-200/40"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Vijay Chalendra. Built with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
              Next.js, Tailwind CSS & Cloudinary
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}
