import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { links, getWhatsAppLink, getWhatsAppServiceLink } from "@/data/links";
import { Star, Menu, X, ChevronRight } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-accent/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-heading font-bold text-accent">
                🌙 Saachan Tarot
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "services", "about", "testimonials", "payment", "social"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item === "home" ? "Home" : item.replace("-", " ")}
                  </button>
                )
              )}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href={getWhatsAppLink()}
              className="hidden md:block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0"
              >
                Chat via WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-accent/20 pt-4 animate-fade-in">
              {["home", "services", "about", "testimonials", "payment", "social"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/5 rounded-lg transition-colors"
                  >
                    {item === "home" ? "Home" : item.replace("-", " ")}
                  </button>
                )
              )}
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0"
                >
                  Chat via WhatsApp
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-medium px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  ✨ Mystical Guidance Awaits
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Tarot Reading for Clarity & Guidance
              </h2>

              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover the wisdom of the cards. Let tarot readings bring clarity,
                insight, and direction to your life's journey. Warm, calming, and
                deeply intuitive guidance tailored just for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto h-12 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-base px-8">
                    Book via WhatsApp
                  </Button>
                </a>
                <button
                  onClick={() => scrollToSection("services")}
                  className="w-full sm:w-auto h-12 px-8 border border-accent/50 rounded-md hover:bg-accent/10 transition-colors text-foreground font-medium flex items-center justify-center gap-2"
                >
                  View Services <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right - Today's Energy Card */}
            <div className="flex justify-center items-center">
              <div className="relative group w-64 h-80 animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <Card className="relative h-full bg-gradient-to-br from-card via-card to-purple-900/20 border-accent/40 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center group-hover:border-accent/60 transition-colors">
                  <div className="text-5xl mb-4">🌙</div>
                  <h3 className="text-xl font-heading font-bold text-accent mb-2">
                    Today's Energy
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Intuition & Reflection
                  </p>
                  <div className="text-2xl font-heading">The Moon</div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Trust your inner wisdom today
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/5"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Tarot Offerings"
            subtitle="Choose the reading that resonates with your needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title="Quick Question"
              duration="1 question only"
              price="Rp5k"
              description="A short tarot reading focused on one clear question.
                          Perfect when you need quick clarity, reassurance, or insight in the moment."
            />
            <ServiceCard
              title="Love & Relationship"
              duration="1–2 questions"
              price="Rp10k"
              description="An intuitive reading to explore love energy and emotional connections.
                          Ideal for understanding feelings, situations, and possible next steps in love."
            />
            <ServiceCard
              title="Career & Life Direction"
              duration="1–2 questions"
              price="Rp10k"
              description="A tarot reading focused on career, work, study, or life direction.
                          Helps you reflect on choices and gain clarity on your next steps."
            />
            <ServiceCard
              title="General Guidance"
              duration="Open reading"
              price="Rp10k"
              description="A gentle overview reading covering your current energy, challenges, and guidance.
                          Suitable if you’re unsure what to ask but seeking direction."
            />
            <ServiceCard
              title="Emotional Healing"
              duration="Gentle & supportive reading"
              price="Rp5k"
              description="A supportive reading to help you understand emotional blocks and inner healing.
                            Focused on self-awareness, release, and gentle guidance."
            />
            <ServiceCard
              title="Monthly Energy"
              duration="Monthly overview"
              price="Rp15k"
              description="A monthly tarot reading to explore upcoming themes and energies.
                          Helpful for intention-setting and emotional preparatio"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="How It Works"
            subtitle="Simple steps to your personalized tarot reading"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                number: "1",
                title: "Choose Your Reading",
                description: "Select a tarot reading that resonates with your current needs and questions.",
                icon: "🎴",
              },
              {
                number: "2",
                title: "Chat & Booking via WhatsApp",
                description: "Send us a message on WhatsApp with your preferred reading type and available times.",
                icon: "💬",
              },
              {
                number: "3",
                title: "Payment & Session",
                description: "Complete payment via QRIS or Saweria, then receive your reading via video call or voice chat.",
                icon: "✨",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="text-5xl animate-float">{step.icon}</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded-full w-12 h-12 flex items-center justify-center mb-6 text-accent font-heading font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] right-[-50%] h-1 bg-gradient-to-r from-accent/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-900/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Testimonials"
            subtitle="What clients are saying about their tarot readings"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "A",
                rating: 5,
                text: "Awalnya cuma iseng, tapi hasilnya kok relate banget ya 😭 dia beneran jelasin kenapa si dia ngilang. Jujur kaget sih seakurat itu.",
              },
              {
                name: "N",
                rating: 5,
                text: "Gue lagi overthinking parah soal relationship, dan readingnya bikin gue jauh lebih tenang. Banyak yang kena banget.",
              },
              {
                name: "R",
                rating: 5,
                text: "Gue skeptis awalnya. Tapi after the session… ok I’m convinced. Banyak detail yang gak gue ceritain tapi kebaca",
              },
              {
                name: "Y",
                rating: 5,
                text: "Reading soal kerjaan gue ternyata masuk banget. Jadi lebih yakin ambil keputusan yang kemarin gue raguin.",
              },
              {
                name: "S",
                rating: 5,
                text: "Sesi voice-nya enak banget, gak ngeburu-buru. Rasanya kayak lagi ngobrol sama temen tapi dapet insight",
              },
              {
                name: "L",
                rating: 5,
                text: "Dia literally bilang ‘dia belum siap komit’ dan ternyata 2 minggu kemudian dia ngomong gitu 😭.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/40 backdrop-blur-sm border-accent/30 hover:border-accent/60 transition-colors p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-medium text-accent">
                  — {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
{/* Photo */}
<div className="flex justify-center">
  <div className="relative">
    {/* Outer glow */}
    <div className="absolute inset-0 -z-20 blur-3xl opacity-40 bg-purple-600/50 rounded-full" />
    {/* Inner glow */}
    <div className="absolute inset-10 -z-10 blur-2xl opacity-30 bg-fuchsia-400/40 rounded-full" />

   <img
  src="/chibi-saachan.png"
  alt="Saachan Tarot Chibi"
  className="
    w-72 
    md:w-80 
    lg:w-96
    h-auto 
    object-contain 
    animate-float
  "
  draggable="false"
/>
  </div>
</div>

            {/* About Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Welcome to Your Journey
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
               Hi, I’m Sania, also known as Saachan, a tarot reader based in Bali.
               At 20 years old (turning 21 this year ✨), I began my journey with tarot as a way to understand myself,
                emotions, and life’s transitions — and along the way, I discovered how deeply tarot can help others too.
                I offer gentle, intuitive tarot readings focused on clarity, reflection, and emotional insight. My approach is  
                calm, honest, and supportive — creating a safe space for you to explore your thoughts, feelings, and current
                situations without judgment.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rather than predicting fixed outcomes, I believe tarot works best as a tool for 
                self-awareness and guidance.Whether you’re seeking clarity about love, life direction, emotions, 
                or personal growth, my readings are meant to help you reconnect with your inner voice and move forward with
                confidence.Every reading is approached with care, respect, and intention — because your journey is unique, 
                  and you deserve guidance that feels personal and grounding.
              </p>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                <p className="text-sm text-muted-foreground italic">
                  ✨ <span className="font-medium">Disclaimer:</span> Tarot readings are
                  offered as intuitive guidance and reflection. They are not a substitute for
                  professional financial, legal, or medical advice. Please use your own judgment
                  and consult qualified professionals for important financial decisions.✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section
        id="payment"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-900/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Payment"
            subtitle="Easy and secure payment options for your reading"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* QRIS Payment */}
            <Card className="bg-card/40 backdrop-blur-sm border-accent/30 p-6 md:p-8 flex flex-col items-center text-center hover:border-accent/60 transition-colors">
              <div className="w-40 h-40 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 flex items-center justify-center border border-accent/30">
                <div className="text-6xl">📱</div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                QRIS Payment
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scan QRIS code for instant payment
              </p>
              <Button
                onClick={() => {
                  if (links.payment.qris.image) {
                    window.open(links.payment.qris.image);
                  }
                }}
                variant="outline"
                className="border-accent/50 hover:bg-accent/10"
              >
                View QRIS Code
              </Button>
            </Card>

            {/* Saweria Payment */}
            <Card className="bg-card/40 backdrop-blur-sm border-accent/30 p-6 md:p-8 flex flex-col items-center text-center hover:border-accent/60 transition-colors">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-600/20 to-purple-600/5 rounded-lg mb-6 flex items-center justify-center border border-accent/30">
                <div className="text-6xl">💸</div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                Saweria Payment
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Support via Saweria platform
              </p>
              <a href={links.payment.saweria} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0">
                  Pay via Saweria
                </Button>
              </a>
            </Card>
          </div>

          {/* Payment Note */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">After payment,</span> please send your payment receipt via
              WhatsApp to confirm your booking
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section
        id="social"
        className="py-20 md:py-32 px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Connect With Me"
            subtitle="Follow for daily tarot insights and spiritual wisdom"
          />

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              {
                icon: "📸",
                name: "Instagram",
                href: links.social.instagram,
              },
              {
                icon: "🎵",
                name: "TikTok",
                href: links.social.tiktok,
              },
              {
                icon: "𝕏",
                name: "X / Twitter",
                href: links.social.twitter,
              },
              {
                icon: "🎥",
                name: "YouTube",
                href: links.social.youtube,
              },
              {
                icon: "💬",
                name: "WhatsApp",
                href: getWhatsAppLink(),
              },
              {
                icon: "✉️",
                name: "Email",
                href: links.social.email,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-accent/30 hover:border-accent/60 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 bg-gradient-to-b from-transparent to-card/30 py-12 px-4 md:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">
            © 2026 Saachan Tarot. All rights reserved. Created with ✨ and intuition.
          </p>
          <p className="text-xs">
            Tarot readings are for guidance and self-reflection only.
            They are not a substitute for professional medical, legal, or financial advice.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 z-40 group animate-bounce"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity group-hover:animate-glow" />
          <button className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.043-5.005 5.644-5.005 9.589 0 1.079.124 2.151.361 3.19l-1.386 5.058 5.181-1.359c1.007.577 2.21.967 3.465.967 5.523 0 10-4.477 10-10S17.325 6.779 11.802 6.779Z" />
            </svg>
          </button>
        </div>
      </a>
    </div>
  );
}
