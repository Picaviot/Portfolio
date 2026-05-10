import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Méthode non autorisée' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is missing");
    return response.status(500).json({ error: "Config error: API key missing" });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, email, subject, message } = request.body;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['joel2second2@gmail.com'],
      subject: `Contact Portfolio: ${subject || 'Nouveau message'}`,
      replyTo: email,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return response.status(400).json(error);
    }

    return response.status(200).json({
      success: true,
      message: 'Message envoyé avec succès !',
      data
    });
  } catch (error) {
    console.error('Erreur API:', error);
    return response.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
