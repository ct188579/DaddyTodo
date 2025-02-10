"use client"
import { useState } from "react";
import { Info } from "lucide-react";

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            {/* Info Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center 
                 shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
                <Info className="w-6 h-6 text-white" />
            </button>

            {/* Modal Backdrop */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center 
               transition-opacity duration-300 z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Modal Content */}
                    <div
                        className="
            bg-white rounded-xl p-4 sm:p-6 md:p-8 
            w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
            mx-auto transform transition-all duration-300 animate-modal-enter
        "
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">关于本站</h2>

                        {/* Feature Sections */}
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">📝 TodoList</h3>
                                <p className="text-gray-600">
                                    TodoList 是一个高效的任务管理工具，帮助你组织日常任务并保持专注。你可以轻松创建任务、标记已完成，通过清晰的界面和简单的操作，确保每个目标都按时完成。您的数据会一直存储于浏览器中，保障隐私。
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">⏲️ 番茄钟</h3>
                                <p className="text-gray-600">
                                    番茄钟是一种基于时间管理的工作方法，帮助你高效利用每一刻。通过设定工作和休息时间，确保专注与放松的平衡。
                                </p>
                                <p className="text-gray-600">
                                    📣 语音提醒：当番茄钟倒计时结束时，系统会发出语音提醒，确保你不会错过任何工作或休息时间。
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    我知道了
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}
