import { CheckCircle, Clock } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-semibold text-gray-800">Todo & Pomodoro</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  )
}

