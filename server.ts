import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log("Nouveau message de contact :");
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY manquante. Simulation de l'envoi.");
      return res.json({ success: true, message: "Message reçu (mode simulation) !" });
    }

    const resend = new Resend(resendApiKey);

    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['joel2second2@gmail.com'],
        subject: `Contact Portfolio: ${subject || 'Nouveau message'}`,
        replyTo: email,
        html: `
          <h3>Nouveau message de contact (Direct Server)</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(400).json({ success: false, error });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ success: false, error: "Erreur serveur" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

startServer();
