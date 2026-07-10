import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button, Input } from "@barrelrolla/react-components-library";
import PageContent from "../Page/PageContent";
import { contacts, contactsContent } from "../../data/content";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
};

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not configured in environment variables.");
      
      // Simulation mode if keys are not set
      setTimeout(() => {
        setIsSending(false);
        setStatusMsg({
          type: "success",
          text: "Message simulated successfully! (Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment variables to receive actual emails.)",
        });
        setName("");
        setEmail("");
        setMessage("");
      }, 1200);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          message: message,
          to_name: "Shahid Patel",
        },
        publicKey
      );

      if (result.status === 200) {
        setStatusMsg({
          type: "success",
          text: "Thank you! Your message has been sent successfully.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMsg({
        type: "error",
        text: "Failed to send message. Please check connection or try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageContent>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-10 py-12 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight"
        >
          {contactsContent.heading}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg opacity-60 leading-relaxed"
        >
          {contactsContent.tagline}
        </motion.p>

        {/* Footer-style icon row */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.title}
              variants={itemVariants}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.title}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <contact.icon strokeWidth={10} className="h-7 w-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div variants={itemVariants}>
          <Button as={Link} to="/resume" className="px-8 py-4 text-base">
            {contactsContent.resumeCta}
          </Button>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl border border-current/10 bg-current/3 p-8 text-left shadow-lg backdrop-blur-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-center mb-2">Send a Message</h2>
          
          <div>
            <Input
              id="name"
              label="Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full"
            />
          </div>

          <div>
            <Input
              id="email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium opacity-85">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              className="w-full rounded-md border border-current/20 bg-transparent px-3 py-2 text-sm placeholder-current/40 focus:border-current focus:outline-none focus:ring-1 focus:ring-current/50"
            />
          </div>

          {statusMsg && (
            <div
              className={`rounded-lg p-4 text-sm ${
                statusMsg.type === "success"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : "bg-red-500/10 text-red-600 dark:text-red-400"
              }`}
            >
              {statusMsg.text}
            </div>
          )}

          <Button
            type="submit"
            loading={isSending}
            disabled={isSending}
            className="w-full justify-center"
          >
            Send Message
          </Button>
        </motion.form>
      </motion.div>
    </PageContent>
  );
}
