"use client";
import { useState } from "react";

const SAMPLE_BOOKS = [
  {
    title: "The Dragon Who Was Afraid of the Dark",
    character: "Ember",
    theme: "🐉 Brave Little Dragon",
    color: "from-orange-400 to-pink-500",
    bg: "#FFE4D6",
    accent: "#FF6B35",
    pages: 24,
    age: "3–7",
  },
  {
    title: "Lily and the Lost Unicorn",
    character: "Lily",
    theme: "🦄 Magical Adventures",
    color: "from-purple-400 to-pink-400",
    bg: "#F5D7F7",
    accent: "#C77DFF",
    pages: 28,
    age: "4–8",
  },
  {
    title: "Captain Finn Finds His Sea",
    character: "Finn",
    theme: "⚓ High Seas Explorer",
    color: "from-blue-400 to-cyan-400",
    bg: "#D7EEF7",
    accent: "#4CC9F0",
    pages: 32,
    age: "5–9",
  },
];

const STEPS = [
  {
    icon: "📖",
    title: "Pick a Story",
    desc: "Browse 50+ magical tales — adventures, friendships, and bedtime dreams.",
    color: "#4CC9F0",
  },
  {
    icon: "✏️",
    title: "Make It Theirs",
    desc: "Add the child's name, hair color, skin tone, and their best friend's name.",
    color: "#FF6B9D",
  },
  {
    icon: "🎨",
    title: "Preview & Polish",
    desc: "See every page illustrated with your custom characters before you order.",
    color: "#FFD93D",
  },
  {
    icon: "📦",
    title: "Gift-Wrapped & Shipped",
    desc: "Beautiful hardcover delivered to your door — or direct to the lucky kid!",
    color: "#C77DFF",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Melbourne, AU",
    text: "My daughter cried happy tears when she saw herself as the main character. Worth every penny!",
    stars: 5,
    avatar: "👩‍🦰",
  },
  {
    name: "James T.",
    location: "Sydney, AU",
    text: "Bought one for my nephew's birthday — the whole family gathered to read it. Absolutely magical.",
    stars: 5,
    avatar: "👨🏽",
  },
  {
    name: "Priya K.",
    location: "Auckland, NZ",
    text: "The quality of the illustrations and the printing is stunning. Already ordered a second one!",
    stars: 5,
    avatar: "👩🏽‍🦱",
  },
];

export default function Home() {
  const [selectedName, setSelectedName] = useState("Mia");
  const [selectedBook, setSelectedBook] = useState(0);

  return (
    <main className="min-h-screen" style={{ background: "#FFFEF5" }}>
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "#FFFEF5", borderBottom: "3px solid #FFD93D", boxShadow: "0 4px 0 #FFD93D30" }}>
        <div className="flex items-center gap-2">
          <span className="text-3xl">📚</span>
          <span className="font-display text-3xl" style={{ color: "#FF6B9D" }}>
            Story<span style={{ color: "#4CC9F0" }}>Bloom</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-bold text-sm" style={{ color: "#1A1035" }}>
          <a href="#how-it-works" className="hover:text-pink-500 transition-colors">How It Works</a>
          <a href="#books" className="hover:text-pink-500 transition-colors">Books</a>
          <a href="#reviews" className="hover:text-pink-500 transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-pink-500 transition-colors">Pricing</a>
        </div>
        <button
          className="font-display text-lg px-6 py-3 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
          style={{ background: "#FF6B9D", boxShadow: "0 4px 0 #c4386b" }}
        >
          Create a Book 🎁
        </button>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden dots-bg" style={{ background: "#FFFEF5" }}>
        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 float-2"
          style={{ background: "#FFD93D", filter: "blur(40px)" }} />
        <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-20 float-1"
          style={{ background: "#FF6B9D", filter: "blur(60px)" }} />
        <div className="absolute top-40 left-1/2 w-48 h-48 rounded-full opacity-15 float-3"
          style={{ background: "#4CC9F0", filter: "blur(30px)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-6"
              style={{ background: "#FFD93D", color: "#1A1035" }}>
              ✨ 10,000+ Happy Families
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6" style={{ color: "#1A1035" }}>
              The Story Is About{" "}
              <span className="relative">
                <span style={{ color: "#FF6B9D" }}>Them!</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M0 8 Q50 0 100 8 Q150 16 200 8" stroke="#FFD93D" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-10 leading-relaxed" style={{ color: "#555" }}>
              Create a personalised children's book where your little one <strong style={{ color: "#4CC9F0" }}>becomes the hero</strong> of their own magical adventure. The perfect gift they'll treasure forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="font-display text-xl px-10 py-5 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
                style={{ background: "#FF6B9D", boxShadow: "0 6px 0 #c4386b" }}>
                🎨 Start Creating — Free Preview
              </button>
              <button className="font-bold text-lg px-8 py-5 rounded-full transition-transform hover:scale-105"
                style={{ background: "#FFD93D", color: "#1A1035", boxShadow: "0 6px 0 #c9a800" }}>
                Browse 50+ Stories →
              </button>
            </div>

            <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
              <div className="flex -space-x-3">
                {["👦🏽","👧🏻","👦🏿","👧🏽","👦🏼"].map((e, i) => (
                  <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 border-white"
                    style={{ background: ["#FFD93D","#FF6B9D","#4CC9F0","#C77DFF","#FF8C42"][i] }}>
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-yellow-500">★★★★★</div>
                <div className="text-sm font-semibold text-gray-500">Loved by 10k+ families</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive book preview */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Floating decoration stars */}
              <div className="absolute -top-6 -left-6 text-4xl float-1">⭐</div>
              <div className="absolute -top-4 -right-8 text-3xl float-2">✨</div>
              <div className="absolute -bottom-4 -left-8 text-3xl float-3">🌟</div>

              {/* Book mockup */}
              <div className="relative w-72 h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-white float-1"
                style={{ background: `linear-gradient(135deg, ${SAMPLE_BOOKS[selectedBook].bg}, white)` }}>
                
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 opacity-30"
                  style={{ background: "linear-gradient(90deg, #0003, transparent)" }} />

                <div className="p-6 h-full flex flex-col">
                  {/* Character illustration area */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-2">
                        {["🐉","🦄","⚓"][selectedBook]}
                      </div>
                      <div className="text-6xl">
                        {["🧒","👧","👦"][selectedBook]}
                      </div>
                    </div>
                  </div>

                  {/* Book title on cover */}
                  <div className="rounded-xl p-3 text-center"
                    style={{ background: SAMPLE_BOOKS[selectedBook].accent + "22", border: `2px solid ${SAMPLE_BOOKS[selectedBook].accent}` }}>
                    <div className="font-display text-sm leading-tight" style={{ color: SAMPLE_BOOKS[selectedBook].accent }}>
                      {SAMPLE_BOOKS[selectedBook].title.replace(
                        SAMPLE_BOOKS[selectedBook].character, selectedName || SAMPLE_BOOKS[selectedBook].character
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>Age {SAMPLE_BOOKS[selectedBook].age}</span>
                    <span>{SAMPLE_BOOKS[selectedBook].pages} pages</span>
                  </div>
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 star-badge flex items-center justify-center text-center"
                style={{ background: "#FFD93D" }}>
                <div className="font-display text-xs leading-tight text-center" style={{ color: "#1A1035" }}>
                  From<br/>$49
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q180 80 360 40 Q540 0 720 40 Q900 80 1080 40 Q1260 0 1440 40 L1440 80 L0 80Z" fill="#FFD93D" opacity="0.3"/>
            <path d="M0 50 Q240 10 480 50 Q720 90 960 50 Q1200 10 1440 50 L1440 80 L0 80Z" fill="#FFD93D"/>
          </svg>
        </div>
      </section>

      {/* ===== CUSTOMISER TEASER ===== */}
      <section style={{ background: "#FFD93D" }} className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "#1A1035" }}>
            Try It Now — What's the Child's Name?
          </h2>
          <p className="font-semibold text-lg mb-8" style={{ color: "#5a4200" }}>
            Watch the book cover update in real time ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <input
              type="text"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              placeholder="Enter a name..."
              className="font-display text-2xl px-8 py-4 rounded-full text-center border-4 border-white outline-none focus:border-pink-400 transition-colors"
              style={{ background: "white", color: "#1A1035", minWidth: "260px" }}
              maxLength={20}
            />
          </div>

          {/* Book selector */}
          <div className="flex gap-4 justify-center flex-wrap">
            {SAMPLE_BOOKS.map((book, i) => (
              <button
                key={i}
                onClick={() => setSelectedBook(i)}
                className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{
                  background: selectedBook === i ? "#1A1035" : "white",
                  color: selectedBook === i ? "#FFD93D" : "#1A1035",
                  boxShadow: selectedBook === i ? "0 4px 0 #0008" : "0 4px 0 #0002",
                }}
              >
                {book.theme}
              </button>
            ))}
          </div>

          {selectedName && (
            <p className="mt-6 font-display text-2xl" style={{ color: "#1A1035" }}>
              ✨ Perfect! <span style={{ color: "#FF6B9D" }}>{selectedName}</span> is going to love this!
            </p>
          )}
        </div>
      </section>

      {/* Yellow to white wave */}
      <div style={{ background: "#FFFEF5", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0 0 Q360 80 720 0 Q1080 -80 1440 0 L1440 0 L0 0Z" fill="#FFD93D"/>
          <path d="M0 80 L1440 80 L1440 0 Q1080 80 720 0 Q360 -80 0 0Z" fill="#FFFEF5"/>
        </svg>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-20 px-6" style={{ background: "#FFFEF5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full font-bold text-sm mb-4"
              style={{ background: "#4CC9F020", color: "#4CC9F0", border: "2px solid #4CC9F0" }}>
              Super Simple
            </div>
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#1A1035" }}>
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="text-center group">
                {/* Step number + connector */}
                <div className="flex items-center justify-center mb-6 relative">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg transition-transform group-hover:scale-110"
                    style={{ background: step.color + "30", border: `4px solid ${step.color}` }}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-display text-lg text-white"
                    style={{ background: step.color }}>
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-3" style={{ color: "#1A1035" }}>{step.title}</h3>
                <p className="font-semibold text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOK GALLERY ===== */}
      <section id="books" className="py-20 px-6" style={{ background: "#F0FBFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full font-bold text-sm mb-4"
              style={{ background: "#FF6B9D20", color: "#FF6B9D", border: "2px solid #FF6B9D" }}>
              50+ Stories
            </div>
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#1A1035" }}>
              Pick Their Adventure
            </h2>
            <p className="mt-4 text-xl font-semibold text-gray-500">Every book personalised with their name, appearance & more</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_BOOKS.map((book, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-white"
                style={{ background: book.bg }}>
                {/* Illustration area */}
                <div className="h-48 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${book.bg}, white)` }}>
                  <div className="text-8xl">
                    {["🐉","🦄","⚓"][i]}
                  </div>
                  <div className="absolute bottom-4 right-4 text-4xl">
                    {["🧒","👧","👦"][i]}
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: book.accent }}>
                    Age {book.age}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-bold mb-2" style={{ color: book.accent }}>{book.theme}</div>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#1A1035" }}>{book.title}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-4">{book.pages} beautiful pages · Hardcover available</p>

                  <button className="w-full py-3 rounded-2xl font-bold text-white transition-transform hover:scale-105"
                    style={{ background: book.accent }}>
                    Personalise This Story →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="font-display text-2xl px-12 py-5 rounded-full border-4 transition-all hover:scale-105"
              style={{ borderColor: "#4CC9F0", color: "#4CC9F0", background: "white" }}>
              Browse All 50+ Stories 📖
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURES / WHY ===== */}
      <section className="py-20 px-6" style={{ background: "#FFFEF5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#1A1035" }}>
              Why Families Love Us 💕
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "🎭", title: "Deep Personalisation", desc: "Name, appearance, skin tone, hair color, pet's name, best friend — every detail woven into the story.", color: "#FF6B9D" },
              { icon: "🖼️", title: "Stunning Illustrations", desc: "Professional illustrators bring each story to life with vibrant, joyful artwork kids absolutely adore.", color: "#4CC9F0" },
              { icon: "📚", title: "Premium Print Quality", desc: "Thick, glossy pages bound in beautiful hardcover — built to last for bedtime reads for years to come.", color: "#FFD93D" },
              { icon: "⚡", title: "Fast Shipping", desc: "Preview your book instantly online, then receive your physical copy in 3–5 business days.", color: "#C77DFF" },
              { icon: "🎁", title: "Gift-Ready Packaging", desc: "Every order arrives in beautiful gift-wrap with a personalised message card. Zero wrapping required!", color: "#FF8C42" },
              { icon: "💚", title: "Eco-Friendly", desc: "Printed sustainably with soy-based inks on FSC-certified paper. Good for kids, good for the planet.", color: "#4CAF50" },
            ].map((f, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border-2 hover:shadow-lg transition-all"
                style={{ borderColor: f.color + "40", background: f.color + "08" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: f.color + "20" }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1" style={{ color: "#1A1035" }}>{f.title}</h3>
                  <p className="font-semibold text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews" className="py-20 px-6" style={{ background: "#FFF0F6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full font-bold text-sm mb-4"
              style={{ background: "#FF6B9D", color: "white" }}>
              ★★★★★ 4.9 from 2,400+ reviews
            </div>
            <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#1A1035" }}>
              What Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 rounded-3xl border-4 border-white shadow-xl"
                style={{ background: "white" }}>
                <div className="text-yellow-400 text-2xl mb-4">{"★".repeat(r.stars)}</div>
                <p className="font-semibold text-lg text-gray-700 mb-6 leading-relaxed italic">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: ["#FFD93D30","#FF6B9D20","#4CC9F020"][i] }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: "#1A1035" }}>{r.name}</div>
                    <div className="text-sm font-semibold text-gray-400">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 px-6" style={{ background: "#FFFEF5" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl mb-4" style={{ color: "#1A1035" }}>
            Simple Pricing
          </h2>
          <p className="text-xl font-semibold text-gray-500 mb-12">No subscriptions. Just one beautiful book.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Softcover",
                price: "$49",
                features: ["24–32 fully illustrated pages", "Full name personalisation", "Character appearance customisation", "Digital PDF preview included", "Gift message card"],
                color: "#4CC9F0",
                shadow: "#2a8fb5",
                popular: false,
              },
              {
                name: "Hardcover",
                price: "$69",
                features: ["Everything in Softcover", "Premium hardcover binding", "Glossy dust jacket", "Gift-wrap box included", "Priority 2-day shipping", "Bookmark keepsake"],
                color: "#FF6B9D",
                shadow: "#c4386b",
                popular: true,
              },
            ].map((plan, i) => (
              <div key={i} className="relative rounded-3xl p-8 border-4 text-left"
                style={{
                  borderColor: plan.color,
                  background: plan.popular ? `${plan.color}10` : "white",
                  boxShadow: plan.popular ? `0 8px 0 ${plan.shadow}40` : "none",
                }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-white text-sm"
                    style={{ background: plan.color }}>
                    ✨ Most Popular
                  </div>
                )}
                <div className="font-display text-3xl mb-2" style={{ color: plan.color }}>{plan.name}</div>
                <div className="font-display text-6xl mb-6" style={{ color: "#1A1035" }}>{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 font-semibold text-gray-600">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                        style={{ background: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl font-display text-xl text-white transition-transform hover:scale-105"
                  style={{ background: plan.color, boxShadow: `0 4px 0 ${plan.shadow}` }}>
                  Choose {plan.name} →
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 font-semibold text-gray-400">
            🔒 Secure payment · 30-day happiness guarantee · Free returns if you're not delighted
          </p>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#FF6B9D" }}>
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute top-4 left-8 text-5xl float-1">🌈</div>
        <div className="absolute top-4 right-8 text-5xl float-2">⭐</div>
        <div className="absolute bottom-4 left-1/4 text-4xl float-3">✨</div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Make Them the Hero Today 🌟
          </h2>
          <p className="text-xl font-semibold text-white opacity-90 mb-10">
            Create a free preview in minutes — no account needed. See every page before you buy.
          </p>
          <button className="font-display text-2xl px-14 py-6 rounded-full transition-transform hover:scale-105 active:scale-95"
            style={{ background: "#FFD93D", color: "#1A1035", boxShadow: "0 8px 0 #c9a800" }}>
            🎨 Create Their Book — Free Preview
          </button>
          <p className="mt-6 text-white opacity-70 font-semibold">No credit card required to preview</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6" style={{ background: "#1A1035", color: "white" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl">📚</span>
              <span className="font-display text-3xl">
                <span style={{ color: "#FF6B9D" }}>Story</span>
                <span style={{ color: "#4CC9F0" }}>Bloom</span>
              </span>
            </div>
            <div className="flex gap-8 font-semibold text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">FAQs</a>
              <a href="#" className="hover:text-white transition-colors">Shipping</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex gap-4">
              {["📘","🐦","📸"].map((icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  style={{ background: "#ffffff15" }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white border-opacity-10 mt-8 pt-8 text-center text-gray-500 text-sm font-semibold">
            © 2026 StoryBloom · Made with 💕 for little readers everywhere
          </div>
        </div>
      </footer>
    </main>
  );
}
