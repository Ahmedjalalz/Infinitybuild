'use client'
import React, { useState } from 'react'

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/get-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
      })
    }

    setLoading(false)
  }

  const inputClasses =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] " +
    "focus:border-[var(--primary-color)] hover:border-gray-400"

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 max-w-4xl mx-auto shadow-sm">
      
      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={inputClasses}
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="youremail@example.com"
          className={inputClasses}
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className={inputClasses}
        />

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select budget</option>
          <option>$1,000 – $2,000</option>
          <option>$2,000 – $5,000</option>
          <option>$5,000 – $10,000</option>
          <option>$10,000+</option>
        </select>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        placeholder="Tell us about your project..."
        className={`${inputClasses} mt-6 resize-none`}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full py-4 rounded-xl text-white font-semibold
                   bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90"
      >
        {loading ? 'Sending...' : 'Submit Request ✈'}
      </button>

      {success && (
        <p className="text-green-600 text-sm mt-4 text-center">
          ✅ Your request has been sent successfully!
        </p>
      )}
    </form>
  )
}
