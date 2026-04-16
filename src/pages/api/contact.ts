export const prerender = false;

import type { APIRoute } from 'astro';

function sanitize(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const POST: APIRoute = async ({ request }) => {
  const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, subject, message } = body;

  const errors: string[] = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.');
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Invalid email.');
  if (!subject || subject.trim().length < 3) errors.push('Subject must be at least 3 characters.');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters.');

  if (errors.length > 0) {
    return new Response(JSON.stringify({ error: errors[0] }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const safeName = sanitize(name.trim());
  const safeEmail = sanitize(email.trim());
  const safeSubject = sanitize(subject.trim());
  const safeMessage = sanitize(message.trim()).replace(/\n/g, '<br>');

  // Add contact to list #1
  await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      email: email.trim(),
      listIds: [1],
      updateEnabled: true,
      attributes: { FIRSTNAME: name.trim() },
    }),
  });

  // Send transactional email
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: 'cesar.ships Contact Form',
        email: 'cesar.ardila@gmail.com',
      },
      to: [{
        email: 'cesar.ardila@gmail.com',
        name: 'Cesar Ardila',
      }],
      replyTo: { email: email.trim(), name: name.trim() },
      subject: '[cesar.ships] ' + subject.trim(),
      htmlContent: '<h2>New transmission from ' + safeName + '</h2>' +
        '<p><strong>From:</strong> ' + safeName + ' (' + safeEmail + ')</p>' +
        '<p><strong>Subject:</strong> ' + safeSubject + '</p>' +
        '<hr>' +
        '<p>' + safeMessage + '</p>',
    }),
  });

  if (res.ok) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ error: 'Failed to send' }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });
};
