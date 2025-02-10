"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Brain, Coffee, Dumbbell, Box, Settings } from "lucide-react"
import type React from "react"

enum TimerMode {
  FOCUS = "focus",
  BREAK = "break",
  EXERCISE = "exercise",
  CUSTOM = "CUSTOM"
}

interface TimerConfig {
  duration: number
  label: string
  icon: React.ReactNode
}

const timerConfigs: Record<TimerMode, TimerConfig> = {
  [TimerMode.FOCUS]: { duration: 25 * 60, label: "专注模式", icon: <Brain className="h-5 w-5" /> },
  [TimerMode.BREAK]: { duration: 5 * 60, label: "休息模式", icon: <Coffee className="h-5 w-5" /> },
  [TimerMode.EXERCISE]: { duration: 10 * 60, label: "锻炼模式", icon: <Dumbbell className="h-5 w-5" /> },
  [TimerMode.CUSTOM]: { duration: 15 * 60, label: "自定义模式", icon: <Settings className="h-5 w-5" /> }
}

export default function PomodoroTimer() {
  const [time, setTime] = useState(timerConfigs[TimerMode.FOCUS].duration)
  const [isActive, setIsActive] = useState(false)
  const [mode, setMode] = useState<TimerMode>(TimerMode.FOCUS)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
      if (audioRef.current) {
        audioRef.current.play()
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time])

  useEffect(() => {
    audioRef.current = new Audio("/alarm.mp3")
  }, [])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(timerConfigs[mode].duration)
  }

  const changeMode = (newMode: TimerMode) => {
    setMode(newMode)
    setTime(timerConfigs[newMode].duration)
    setIsActive(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Pomodoro Timer</h2>
      <div className="flex justify-center space-x-2 mb-4">
        {Object.entries(timerConfigs).map(([key, config]) => (
          <button
            key={key}
            onClick={() => changeMode(key as TimerMode)}
            className={`px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${mode === key
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              }`}
          >
            {config.icon}
            <span className="sr-only">{config.label}</span>
          </button>
        ))}
      </div>
      <div className="text-6xl font-bold text-center mb-4 dark:text-white">{formatTime(time)}</div>
      <div className="text-center mb-8">
        <span className="text-indigo-500 dark:text-indigo-400">{timerConfigs[mode].label}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className={`px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isActive ? "bg-red-500 hover:bg-red-600 text-white" : "bg-indigo-500 hover:bg-indigo-600 text-white"
            }`}
          onClick={toggleTimer}
        >
          {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button
          className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          onClick={resetTimer}
        >
          <RotateCcw className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}

