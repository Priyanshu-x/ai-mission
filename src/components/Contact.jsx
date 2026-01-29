import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post("http://localhost:8000/api/contact", {
        name,
        email,
        message,
      });

      setResponseMsg(res.data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setResponseMsg(error.response?.data?.message || "Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-black flex flex-col md:flex-row justify-center items-center p-6 gap-12 border-t border-zinc-900">
      {/* Contact Info */}
      <div className="text-white max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-white uppercase tracking-widest border-b border-gray-800 pb-4 inline-block">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-8 font-light">
          Interested in bringing AI awareness to your institution? Have questions about our training programs? We'd love to hear from you!
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-start group">
            <svg className="w-6 h-6 text-white mr-4 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div>
              <h3 className="font-bold text-lg text-white tracking-wide">Organization</h3>
              <p className="text-gray-500">Scope Global Skills University (SGSU) in Bhopal</p>
              <p className="text-gray-500">AI Mission Team @ SGSU</p>
            </div>
          </div>

          <div className="flex items-start group">
            <svg className="w-6 h-6 text-white mr-4 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg text-white tracking-wide">Email</h3>
              <p className="text-gray-500">info@sgsuniversity.ac.in</p>
            </div>
          </div>

          <div className="flex items-start group">
            <svg className="w-6 h-6 text-white mr-4 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg text-white tracking-wide">Location</h3>
              <p className="text-gray-500">UNIVERSITY CAMPUS</p>
              <p className="text-gray-500">SCOPE Campus, NH-12, Near Misrod, Hoshangabad Road, Bhopal</p>
            </div>
          </div>

          <div className="flex items-start group">
            <svg className="w-6 h-6 text-white mr-4 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg text-white tracking-wide">Phone</h3>
              <p className="text-gray-500">+91-7552432903/904</p>
              <p className="text-gray-500">+91-7552432909</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        className="bg-zinc-900/50 border border-zinc-800 w-full max-w-md p-10 flex flex-col gap-6 text-lg shadow-2xl rounded-none hover:border-white/20 transition-all duration-300"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center text-white uppercase tracking-widest">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 text-sm -mt-4 font-light">
          Send us a message about training inquiries
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 border-b border-zinc-700 bg-transparent text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border-b border-zinc-700 bg-transparent text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-600"
        />
        <textarea
          placeholder="Your Message / Inquiry"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="4"
          className="p-3 border-b border-zinc-700 bg-transparent text-white focus:outline-none focus:border-white transition-colors resize-none placeholder-zinc-600"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black font-bold py-3 px-6 uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
        >
          {loading && <ClipLoader size={20} color="black" />}
          {loading ? "Sending..." : "Send Message"}
        </button>

        {responseMsg && (
          <p className="text-center text-white bg-zinc-800 p-3 border border-zinc-700 text-sm">
            {responseMsg}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;