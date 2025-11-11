import { getServerSession } from 'next-auth'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(auth)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg font-bold text-xl">
                EduRescue
              </div>
              <span className="ml-4 text-gray-700 font-semibold">ড্যাশবোর্ড</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                👋 {session.user?.name || session.user?.email}
              </span>
              <Link
                href="/"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition text-sm"
              >
                হোমপেজ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">

          {/* Welcome Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <span className="text-green-600 text-2xl">🎓</span>
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    স্বাগতম, {session.user?.name || 'স্টুডেন্ট'}!
                  </h1>
                  <p className="text-gray-600 mt-1">
                    আপনার একাডেমিক সাফল্যের যাত্রা এখান থেকে শুরু হোক
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <span className="text-blue-600 text-xl">📚</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">মোট সেশন</p>
                    <p className="text-2xl font-semibold text-gray-900">০</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <span className="text-green-600 text-xl">⏱️</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">সেশন সময়</p>
                    <p className="text-2xl font-semibold text-gray-900">০ ঘণ্টা</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                    <span className="text-purple-600 text-xl">⭐</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">রেটিং</p>
                    <p className="text-2xl font-semibold text-gray-900">-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Actions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left Column - Quick Actions */}
            <div className="space-y-6">

              {/* Emergency Help */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    🚀 তাৎক্ষণিক সাহায্য চাই
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition font-semibold">
                      🚨 ইমার্জেন্সি একাডেমিক হেল্প
                    </button>
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition font-semibold">
                      💬 লাইভ চ্যাট শুরু করুন
                    </button>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-semibold">
                      📞 ভিডিও কল রিকুয়েস্ট
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    📈 সাম্প্রতিক এক্টিভিটি
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center py-8 text-gray-500">
                      <span className="text-4xl">📝</span>
                      <p className="mt-2">কোনো এক্টিভিটি নেই</p>
                      <p className="text-sm">আপনার প্রথম সেশন শুরু করুন!</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Subjects & Experts */}
            <div className="space-y-6">

              {/* Popular Subjects */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    📖 জনপ্রিয় সাবজেক্ট
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      📊 গণিত
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      🔬 পদার্থবিজ্ঞান
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      🧪 রসায়ন
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      📝 বাংলা
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      🔠 ইংরেজি
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md transition text-sm font-medium">
                      💻 প্রোগ্রামিং
                    </button>
                  </div>
                </div>
              </div>

              {/* Available Experts */}
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    👨‍🏫 এক্সপার্ট এক্সপ্লোর করুন
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                          MS
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">মাহেদি স্যার</p>
                          <p className="text-sm text-gray-600">গণিত এক্সপার্ট</p>
                        </div>
                      </div>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">অনলাইন</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          RS
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">রিয়া ম্যাডাম</p>
                          <p className="text-sm text-gray-600">ইংরেজি এক্সপার্ট</p>
                        </div>
                      </div>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">অনলাইন</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upgrade Section */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center text-white">
                  <h3 className="text-lg font-semibold mb-2">
                    💎 প্রো সাবস্ক্রিপশন
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    আনলিমিটেড সেশন এবং প্রিমিয়াম ফিচার উপভোগ করুন
                  </p>
                  <button className="bg-white text-purple-600 py-2 px-6 rounded-md font-semibold hover:bg-gray-100 transition">
                    আপগ্রেড করুন
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              সাহায্য প্রয়োজন? <Link href="/help" className="text-green-600 hover:text-green-700 font-medium">সাপোর্টে যোগাযোগ করুন</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}