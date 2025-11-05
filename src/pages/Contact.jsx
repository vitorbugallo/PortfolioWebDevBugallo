import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${form.name}\nEmail: ${form.email}\nMensagem: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 text-center bg-#0b1020">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-5">Contato</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 max-w-md mx-auto "
      >
        <input
          name="name"
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

