"use client"

import { useState } from "react"
import Link from "next/link"

export default function Documents() {
  const [documents, setDocuments] = useState([])
  const [newDocument, setNewDocument] = useState({ name: "", file: null })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    if (name === "file") {
      setNewDocument({ ...newDocument, file: files[0] })
    } else {
      setNewDocument({ ...newDocument, [name]: value })
    }
  }

  const handleUploadDocument = () => {
    if (newDocument.name && newDocument.file) {
      setDocuments([...documents, newDocument])
      setNewDocument({ name: "", file: null })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Medical Documents</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Document</h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="document-name" className="block text-sm font-medium text-gray-700">
                      Document Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="document-name"
                      value={newDocument.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="document-file" className="block text-sm font-medium text-gray-700">
                      File
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="document-file"
                      onChange={handleInputChange}
                      className="mt-1 block w-full"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    onClick={handleUploadDocument}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Upload Document
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Document List</h3>
                <div className="mt-5">
                  <ul className="divide-y divide-gray-200">
                    {documents.map((doc, index) => (
                      <li key={index} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                            <p className="text-sm text-gray-500 truncate">{doc.file.name}</p>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
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

