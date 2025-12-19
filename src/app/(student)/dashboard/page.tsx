export default function StudentDashboardPage() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">📊 Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Stats cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <span className="text-2xl">💬</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">AI Conversations</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Problems Solved</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <span className="text-2xl">📝</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Saved Notes</p>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="text-center py-12 text-gray-500">
            <span className="text-5xl mb-4 block">📊</span>
            <p>No activity yet. Start chatting with the AI Assistant!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
