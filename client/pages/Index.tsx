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
                🌙 Tarot Reader
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
              title="Quick Insight"
              duration="15 minutes"
              price="$25"
              description="A focused tarot reading to gain quick clarity on a specific question or situation. Perfect for when you need guidance in the moment."
            />
            <ServiceCard
              title="Love & Relationship"
              duration="30 minutes"
              price="$50"
              description="Deep insights into matters of the heart. Whether seeking clarity on a current relationship or guidance on love, this reading explores all romantic dimensions."
            />
            <ServiceCard
              title="Career & Finance"
              duration="30 minutes"
              price="$50"
              description="Navigate career transitions and financial decisions with confidence. Gain insight into professional opportunities and abundance in your life."
            />
            <ServiceCard
              title="General Guidance"
              duration="45 minutes"
              price="$75"
              description="A comprehensive reading covering all areas of your life: work, relationships, health, and personal growth. An ideal choice for transformation."
            />
            <ServiceCard
              title="Past Life Reading"
              duration="45 minutes"
              price="$75"
              description="Explore connections and patterns from past incarnations that influence your current life. Unlock deeper understanding of your soul's journey."
            />
            <ServiceCard
              title="Full Year Forecast"
              duration="60 minutes"
              price="$100"
              description="Get a comprehensive outlook for the year ahead. Monthly breakdown of energies, opportunities, and challenges to help you prepare and manifest."
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
                name: "Sarah M.",
                rating: 5,
                text: "The reading was incredibly insightful and helped me see my relationship from a new perspective. Highly recommended!",
              },
              {
                name: "James K.",
                rating: 5,
                text: "I was skeptical at first, but the accuracy and depth of the guidance was truly remarkable. Life-changing session.",
              },
              {
                name: "Emma R.",
                rating: 5,
                text: "Such a calming and warm energy. The tarot reader's intuition about my career situation was spot-on. Thank you!",
              },
              {
                name: "Michael T.",
                rating: 5,
                text: "Professional, thoughtful, and deeply meaningful. I feel more aligned with my purpose after this reading.",
              },
              {
                name: "Lisa P.",
                rating: 5,
                text: "The reading helped me gain clarity on my next steps. I appreciate the compassion and wisdom shared.",
              },
              {
                name: "David L.",
                rating: 5,
                text: "Exceptional experience from start to finish. The guidance resonated deeply with where I am in life.",
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
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card to-purple-900/20 border-2 border-accent/40 flex items-center justify-center text-6xl">
                  🌙
                </div>
              </div>
            </div>

            {/* About Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Welcome to Your Journey
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm a dedicated tarot reader with a passion for helping others
                discover clarity and direction in their lives. With years of
                experience in the mystical arts, I offer warm, intuitive readings
                that honor your unique journey and spiritual path.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach blends traditional tarot wisdom with contemporary
                insight, creating a safe, nurturing space for exploration and
                growth. Whether you're seeking answers about love, career,
                personal development, or spiritual direction, I'm here to help
                you unlock the wisdom within.
              </p>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                <p className="text-sm text-muted-foreground italic">
                  ✨ <span className="font-medium">Disclaimer:</span> Tarot reading is for
                  guidance and reflection only. It is not a substitute for
                  professional medical, legal, or financial advice. Always
                  consult qualified professionals for serious matters.
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
            © 2024 Tarot Reader. All rights reserved. Created with ✨ and intuition.
          </p>
          <p className="text-xs">
            Tarot readings are for guidance and reflection only and are not a
            substitute for professional advice.
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
