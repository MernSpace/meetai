"use client"

import { ArrowRight, Bot, Calendar, Clock, Plus, TrendingUp, Zap } from "lucide-react"

export const HomeView = () => {

    const recentMeetings = [
        {
            id: 1,
            title: "Software Development",
            agent: "Meet-ai",
            status: "Completed",
            duration: "45 min",
            date: "Sep 6",
            insights: 8
        },
        {
            id: 2,
            title: "Product Strategy",
            agent: "Meet-ai",
            status: "Processing",
            duration: "32 min",
            date: "Sep 5",
            insights: 12
        }
    ];

    const stats = [
        { label: "Total Meetings", value: "24", change: "+12%", icon: Calendar },
        { label: "Active Agents", value: "1", change: "0%", icon: Bot },
        { label: "Insights Generated", value: "156", change: "+28%", icon: Zap },
        { label: "Hours Saved", value: "18.5", change: "+15%", icon: Clock }
    ];

    return (
        <main className="flex-1 p-6">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sifat!</h1>
                <p className="text-gray-600">Here&apos;s what&apos;s</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
                                    {stat.change} from last month
                                </p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <stat.icon className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Start New Meeting */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white hover:from-green-600 hover:to-green-700 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Start New Meeting</h3>
                            <p className="text-green-100 mb-4">Launch an AI-powered meeting session</p>
                            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center">
                                <Plus className="w-4 h-4 mr-2" />
                                New Meeting
                            </button>
                        </div>
                        <div className="opacity-20 group-hover:opacity-30 transition-opacity">
                            <Calendar className="w-16 h-16" />
                        </div>
                    </div>
                </div>

                {/* Create Agent */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create New Agent</h3>
                            <p className="text-gray-600 mb-4">Build a custom AI agent for your needs</p>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center">
                                <Bot className="w-4 h-4 mr-2" />
                                New Agent
                            </button>
                        </div>
                        <div className="opacity-10 group-hover:opacity-20 transition-opacity">
                            <Bot className="w-16 h-16 text-green-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Meetings</h2>
                        <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                            View all
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {recentMeetings.map((meeting) => (
                        <div key={meeting.id} className="p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                                            <span>👤 {meeting.agent}</span>
                                            <span>📅 {meeting.date}</span>
                                            <span>⏱ {meeting.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${meeting.status === 'Processing'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-green-100 text-green-800'
                                        }`}>
                                        {meeting.status === 'Processing' && (
                                            <div className="flex items-center">
                                                <div className="animate-spin w-3 h-3 border border-yellow-600 border-t-transparent rounded-full mr-1"></div>
                                                Processing
                                            </div>
                                        )}
                                        {meeting.status === 'Completed' && 'Completed'}
                                    </div>
                                    <div className="text-sm text-gray-500 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        {meeting.insights} insights
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}