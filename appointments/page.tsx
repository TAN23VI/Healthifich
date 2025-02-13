"use client"

import { useState } from "react"
import Link from "next/link"

const doctors = [
  { id: 1, name: "Dr. John Doe", specialty: "General Practitioner" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Cardiologist" },
  { id: 3, name: "Dr. Mike Johnson", specialty: "Pediatrician" },
]

export default function Appointments() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [appointmentDate, setAppointmentDate] = useState("")

  const handleBookAppointment = () => {
    if (selectedDoctor && appointmentDate) {
      alert(`Appointment booked with ${selectedDoctor.name} on ${appointmentDate}`)
    } else {
      alert("Please select a doctor and date")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Select a Doctor</h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {doctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      onClick={() => setSelectedDoctor(doctor)}
                      className={`relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${
                        selectedDoctor?.id === doctor.id ? "ring-2 ring-indigo-500" : ""
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">{doctor.name}</p>
                        <p className="text-sm text-gray-500 truncate">{doctor.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-5">
                  <label htmlFor="appointment-date" className="block text-sm font-medium text-gray-700">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    name="appointment-date"
                    id="appointment-date"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <button
                    onClick={handleBookAppointment}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-900">
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

