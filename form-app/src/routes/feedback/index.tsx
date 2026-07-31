import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/feedback/')({
  component: FeedbackForm,
})

function FeedbackForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comment: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    rating: '',
    comment: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', email: '', rating: '', comment: '' }

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
      isValid = false
    }

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!formData.rating || formData.rating === '0') {
      newErrors.rating = 'Please select a rating'
      isValid = false
    }

    if (!formData.comment || formData.comment.length < 10) {
      newErrors.comment = 'Comment must be at least 10 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Feedback submitted:', formData)

      navigate({
        to: '/success',
        state: {
          feedback: {
            name: formData.name,
            email: formData.email,
            rating: Number(formData.rating),
            comment: formData.comment,
          },
        },
      })
    }
  }

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">📝 Give Feedback</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-5">We value your opinion!</p>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Rating */}
            <div className="space-y-2">
              <Label htmlFor="rating" className="font-bold">Rating</Label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className={`w-full p-2.5 border rounded-md bg-background text-foreground ${
                  errors.rating ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="0">Select rating...</option>
                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                <option value="4">⭐⭐⭐⭐ (Good)</option>
                <option value="3">⭐⭐⭐ (Average)</option>
                <option value="2">⭐⭐ (Poor)</option>
                <option value="1">⭐ (Terrible)</option>
              </select>
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
              )}
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment" className="font-bold">Comment</Label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className={errors.comment ? 'border-red-500 focus-visible:ring-red-500' : ''}
                placeholder="Tell us about your experience..."
                rows={4}
              />
              {errors.comment && (
                <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}