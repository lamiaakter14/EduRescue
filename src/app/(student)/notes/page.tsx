export default function NotesPage() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">📝 My Notes</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            ➕ New Note
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center py-12 text-gray-500">
            <span className="text-5xl mb-4 block">📝</span>
            <p className="mb-2">No notes yet</p>
            <p className="text-sm">Save important answers from the AI Assistant to create your notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
