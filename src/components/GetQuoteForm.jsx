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
          placeholder="Votre nom"
          className={inputClasses}
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votreemail@exemple.com"
          className={inputClasses}
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+33 6 12 34 56 78"
          className={inputClasses}
        />
        
        {/* Budget input */}
        <div className="relative">
          <input
            name="budget"
            value={formData.budget.replace(' €', '')}
            onChange={(e) => {
              const value = e.target.value.replace(/[^\d]/g, '')
              setFormData({
                ...formData,
                budget: value ? `${value} €` : '',
              })
            }}
            placeholder="Budget estimé"
            className={`${inputClasses} pr-10`}
            inputMode="numeric"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            €
          </span>
        </div>

      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        placeholder="Parlez-nous de votre projet..."
        className={`${inputClasses} mt-6 resize-none`}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full py-4 rounded-xl text-white font-semibold
                   bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90"
      >
        {loading ? 'Envoi en cours...' : 'Envoyer la demande ✈'}
      </button>

      {success && (
        <p className="text-green-600 text-sm mt-4 text-center">
          ✅ Votre demande a été envoyée avec succès !
        </p>
      )}
    </form>
  )
}
