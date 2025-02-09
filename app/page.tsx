import TodoList from "./components/TodoList"
import PomodoroTimer from "./components/PomodoroTimer"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TodoList />
      <PomodoroTimer />
    </div>
  )
}

