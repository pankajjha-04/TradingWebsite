"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CountdownTimerProps {
  initialSpots: number
}

export default function CountdownTimer({ initialSpots }: CountdownTimerProps) {
  const [spots, setSpots] = useState(initialSpots)
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(0)
  const [isExpired, setIsExpired] = useState(false)
  const [registrations, setRegistrations] = useState<{ time: string; spots: number }[]>([])

  // Simulate real-time registrations
  useEffect(() => {
    // Create initial registration history
    const initialRegistrations = [
      { time: "2 minutes ago", spots: 3 },
      { time: "5 minutes ago", spots: 2 },
      { time: "8 minutes ago", spots: 4 },
    ]
    setRegistrations(initialRegistrations)

    // Simulate new registrations coming in
    const registrationInterval = setInterval(() => {
      const newRegistration = {
        time: "Just now",
        spots: Math.floor(Math.random() * 2) + 1,
      }

      setRegistrations((prev) => {
        // Update times of previous registrations
        const updatedRegistrations = prev
          .map((reg) => {
            if (reg.time === "Just now") return { ...reg, time: "1 minute ago" }
            if (reg.time === "1 minute ago") return { ...reg, time: "2 minutes ago" }
            if (reg.time === "2 minutes ago") return { ...reg, time: "5 minutes ago" }
            return reg
          })
          .slice(0, 2) // Keep only the most recent ones

        return [newRegistration, ...updatedRegistrations]
      })

      // Update spots
      setSpots((prevSpots) => {
        const newSpots = Math.max(0, prevSpots - newRegistration.spots)
        return newSpots
      })
    }, 15000) // New registration every 15 seconds

    return () => clearInterval(registrationInterval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else {
        setIsExpired(true)
        clearInterval(timerInterval)
      }
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [minutes, seconds])

  return (
    <div className="mt-6 space-y-4">
      <div className="mx-auto inline-block rounded-lg bg-black/20 px-8 py-4 text-3xl font-bold backdrop-blur-sm">
        {spots > 0 ? `${spots} spots remaining!` : "ALL SPOTS FILLED!"}
      </div>

      {/* Live registration feed */}
      <div className="mx-auto max-w-md rounded-lg bg-black/10 p-3 backdrop-blur-sm">
        <h4 className="mb-2 text-sm font-semibold">Live Registrations:</h4>
        <ul className="space-y-1 text-sm">
          {registrations.map((reg, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="text-xs">{reg.time}</span>
              <span>
                {reg.spots} trader{reg.spots > 1 ? "s" : ""} joined
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-lg">
        {isExpired ? (
          <span className="font-bold text-secondary">OFFER EXPIRED!</span>
        ) : (
          <>
            Offer ends in{" "}
            <span className="font-mono font-bold">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>{" "}
            minutes!
          </>
        )}
      </div>

      <Button asChild size="lg" className="mt-4 bg-secondary text-white hover:bg-secondary/90">
        <Link href="https://t.me/+0mlolh841rk4YjJl" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.313 1.356-.45 1.881-.139.525-.276.994-.42 1.414-.145.42-.302.705-.49.873-.19.168-.38.22-.57.18-.19-.04-.38-.18-.57-.4-.19-.22-.38-.52-.57-.9-.19-.38-.38-.86-.57-1.44-.19-.58-.38-1.24-.57-2-.19-.76-.38-1.58-.57-2.48-.19-.9-.38-1.88-.57-2.94-.19-1.06-.38-2.2-.57-3.4-.19-1.2-.38-2.5-.57-3.9-.19-1.4-.38-2.9-.57-4.5-.19-1.6-.38-3.3-.57-5.1h3.42c.19 1.8.38 3.5.57 5.1.19 1.6.38 3.1.57 4.5.19 1.4.38 2.7.57 3.9.19 1.2.38 2.3.57 3.3.19 1 .38 1.9.57 2.7.19.8.38 1.5.57 2.1.19.6.38 1.1.57 1.5.19.4.38.7.57.9.19.2.38.3.57.3.19 0 .38-.1.57-.3.19-.2.38-.5.57-.9.19-.4.38-.9.57-1.5.19-.6.38-1.3.57-2.1.19-.8.38-1.7.57-2.7.19-1 .38-2.1.57-3.3.19-1.2.38-2.5.57-3.9.19-1.4.38-2.9.57-4.5.19-1.6.38-3.3.57-5.1h3.42c-.19 1.8-.38 3.5-.57 5.1z" />
          </svg>
          {isExpired ? "JOIN WAITLIST" : "CLAIM YOUR FREE SPOT"}
        </Link>
      </Button>
    </div>
  )
}

