"use client"

import { useState } from "react"
import Link from "next/link"

export default function Nutrition() {
  const [meals, setMeals] = useState([])
  const [newMeal, setNewMeal] = useState({ name: "", calories: "", protein: "", carbs: "", fat: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewMeal({ ...newMeal, [name]: value })
  }

  const handleAddMeal = () => {
    if (newMeal.name && newMeal.calories) {
      setMeals([...meals, newMeal])
      setNewMeal({ name: "", calories: "", protein: "", carbs: "", fat: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Nutrition Monitor</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Add Meal</h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="meal-name" className="block text-sm font-medium text-gray-700">
                      Meal Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="meal-name"
                      value={newMeal.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
                      Calories
                    </label>
                    <input
                      type="number"
                      name="calories"
                      id="calories"
                      value={newMeal.calories}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="protein" className="block text-sm font-medium text-gray-700">
                      Protein (g)
                    </label>
                    <input
                      type="number"
                      name="protein"
                      id="protein"
                      value={newMeal.protein}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
                      Carbs (g)
                    </label>
                    <input
                      type="number"
                      name="carbs"
                      id="carbs"
                      value={newMeal.carbs}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="fat" className="block text-sm font-medium text-gray-700">
                      Fat (g)
                    </label>
                    <input
                      type="number"
                      name="fat"
                      id="fat"
                      value={newMeal.fat}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    onClick={handleAddMeal}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Meal
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Meal Log</h3>
                <div className="mt-5">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Calories
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Protein
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Carbs
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fat
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {meals.map((meal, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{meal.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{meal.calories}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{meal.protein}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{meal.carbs}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{meal.fat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

