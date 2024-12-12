import { NextResponse } from 'next/server'

// This would be replaced with your actual email sending logic
async function sendEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Here you would integrate with your email service (SendGrid, AWS SES, etc.)
  console.log('Sending email:', data)
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return true
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message']
    for (const field of requiredFields) {
      if (!data[field]?.trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Send email
    await sendEmail(data)
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

