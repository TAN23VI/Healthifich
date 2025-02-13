import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/appointments" className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Book Appointment</h3>
                  <p className="mt-1 text-sm text-gray-500">Schedule an appointment with a registered doctor.</p>
                </div>
              </Link>
              <Link href="/nutrition" className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Nutrition Monitor</h3>
                  <p className="mt-1 text-sm text-gray-500">Track your diet and nutritional intake.</p>
                </div>
              </Link>
              <Link href="/documents" className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Medical Documents</h3>
                  <p className="mt-1 text-sm text-gray-500">Access and manage your medical records.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

