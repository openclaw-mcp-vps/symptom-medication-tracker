import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Symptom & Medication Tracker',
  description: 'Track symptoms and medication effectiveness. Daily logging to identify patterns and generate reports for your healthcare provider.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d20fda1c-9f79-4180-95e8-141780b4d0be"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
