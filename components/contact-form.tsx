"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, Send } from "lucide-react"

const services = [
  "Building Construction & Renovations",
  "Property Maintenance",
  "Plumbing Services",
  "Electrical Repairs & Installations",
  "Roofing & Roof Leak Repairs",
  "Waterproofing Services",
  "Carpentry Services",
  "Kitchen & Bathroom Cupboards",
  "Painting, Tiling & Finishing",
  "Paving, Driveways & Surfacing",
  "Road Construction & Civil Works",
  "Concrete Works & Bricklaying",
  "Fencing, Gates & Access Control",
  "CCTV, Alarm & Surveillance Systems",
  "Solar & Energy Solutions",
  "Air Conditioning Services",
  "Other",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-accent/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          Your message has been received. Our team will get back to you within 24 hours with a detailed quotation and
          project support tailored to your needs.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+27 00 000 0000" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required *</Label>
        <Select name="service" required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Project Location</Label>
        <Input id="location" name="location" placeholder="e.g., Sandton, Johannesburg" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your project requirements, timeline, and any specific details we should know..."
          rows={5}
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Request
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        By submitting this form, you agree to our privacy policy. We will never share your information with third
        parties.
      </p>
    </form>
  )
}
