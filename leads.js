module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    console.log('Lead reçu:', req.body);
    // TODO: connecter un envoi d'email (Resend, SMTP) ou un webhook (Make/Zapier)
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
