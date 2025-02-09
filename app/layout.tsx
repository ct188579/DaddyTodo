import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "./components/ThemeToggle"
import { Footer } from "./components/Footer"
import type React from "react"
import { CheckCircle, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import About from "./components/About"


export const metadata: Metadata = {
  title: "DaddyTodo清单&番茄钟",
  description: "A simple todo list and pomodoro timer app DaddyTodo清单&番茄钟",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col min-h-screen"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="bg-white dark:bg-gray-800 shadow">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-indigo-500" />
                  <h1 className="text-xl font-semibold">DaddyTodo清单</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  <ThemeToggle />
                  <Link href="https://ctblog.top" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center space-x-1 px-3 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <ExternalLink className="h-4 w-4" />
                      <span>Blog</span>
                    </button>
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <About />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

