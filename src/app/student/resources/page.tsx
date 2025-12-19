export default function ResourcesPage() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">📚 Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resource categories */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mathematics</h3>
            <p className="text-sm text-gray-600 mb-4">Study materials, formulas, and practice problems</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Science</h3>
            <p className="text-sm text-gray-600 mb-4">Physics, Chemistry, Biology resources</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
            <p className="text-sm text-gray-600 mb-4">Bangla, English, and other languages</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming</h3>
            <p className="text-sm text-gray-600 mb-4">Coding tutorials and exercises</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exam Prep</h3>
            <p className="text-sm text-gray-600 mb-4">Previous papers and preparation guides</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Guides</h3>
            <p className="text-sm text-gray-600 mb-4">Comprehensive study materials</p>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              Browse →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
