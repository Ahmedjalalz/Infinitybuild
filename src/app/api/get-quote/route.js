import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const data = await req.json()

    if (!data.email || !data.name) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Website <onboarding@resend.dev>',
      to: 'admin@infinitybuild.fr',
    //   reply_to: data.email,
      subject: 'New Get Quote Request',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || '-'}</p>
        <p><strong>Budget:</strong> ${data.budget || '-'}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('EMAIL ERROR:', error)

    return Response.json(
      { error: 'Email failed to send' },
      { status: 500 }
    )
  }
}
