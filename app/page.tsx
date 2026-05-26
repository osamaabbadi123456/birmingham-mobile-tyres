"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
  Car,
  Gauge,
  Navigation,
  HelpCircle,
  Zap,
  Star,
} from "lucide-react";

const phoneNumber = "+447397196257";
const whatsappNumber = "447397196257";
const emailAddress = "BirminghamMobileTyres@gmail.com";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20mobile%20tyre%20assistance%20in%20Birmingham.`;

function Logo() {
  return (
    <div className="leading-none">
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-12 rounded-full border-4 border-red-600 flex items-center justify-center bg-black shadow-lg shadow-red-600/30">
          <div className="w-6 h-6 rounded-full border-4 border-white" />
          <div className="absolute -right-3 top-1/2 w-8 h-1 bg-red-600" />
        </div>

        <div>
          <div className="text-white text-2xl sm:text-3xl font-black italic tracking-tight">
            BIRMINGHAM
          </div>
          <div className="bg-red-600 text-white px-3 py-1 text-sm sm:text-lg font-black tracking-[0.18em]">
            MOBILE TYRES
          </div>
        </div>
      </div>
    </div>
  );
}
function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}
const trustItems = [
  "24/7 Emergency Mobile Tyres",
  "Fast Birmingham Response",
  "Roadside Tyre Assistance",
  "Mobile Tyre Fitting",
  "Puncture Repair",
  "WhatsApp Fast Booking",
  "No Garage Visit Needed",
  "We Come To You",
];

const services = [
  {
    icon: <Car />,
    title: "Emergency Tyre Replacement",
    text: "Fast mobile tyre replacement at your home, workplace or roadside location in Birmingham.",
  },
  {
    icon: <Wrench />,
    title: "Mobile Tyre Fitting",
    text: "We come to you with the tools needed to fit your tyres safely and quickly.",
  },
  {
    icon: <Gauge />,
    title: "Puncture Repair",
    text: "Quick puncture checks and repairs where safe, helping you get back on the road.",
  },
  {
    icon: <ShieldCheck />,
    title: "Roadside Assistance",
    text: "Stranded with a flat tyre? Call or WhatsApp and we’ll help at your location.",
  },
];

const faqs = [
  {
    q: "Do you offer 24/7 mobile tyre fitting in Birmingham?",
    a: "Yes, Birmingham Mobile Tyres provides emergency mobile tyre help across Birmingham including roadside, home and workplace call-outs.",
  },
  {
    q: "Can you come to my location?",
    a: "Yes. We come to your home, workplace, roadside location or wherever the vehicle is safely accessible.",
  },
  {
    q: "What details should I send on WhatsApp?",
    a: "Send your tyre size, vehicle model and Birmingham location for a fast response.",
  },
  {
    q: "Do you repair punctures or replace tyres?",
    a: "If the puncture is repairable safely we may repair it, otherwise a replacement tyre may be required.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-950 overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <Logo />

          <a
            href={`tel:${phoneNumber}`}
            className="hidden sm:flex bg-red-600 hover:bg-red-700 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-full px-7 py-3 items-center gap-2 font-black text-white shadow-xl"
          >
            <Phone size={19} />
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#050505] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(220,38,38,0.22),transparent_34%),radial-gradient(circle_at_18%_84%,rgba(18,60,156,0.18),transparent_38%)]"></div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 pt-36 pb-20 w-full grid lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-20 max-w-[760px]"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Clock3 size={16} className="text-red-500" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                24/7 Emergency Mobile Tyre Service
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-black leading-[0.95] uppercase tracking-tight text-white">
              Birmingham
              <span className="block text-red-500">Mobile</span>
              <span className="block text-red-500">Tyres</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Emergency mobile tyre fitting in Birmingham. Fast roadside tyre
              replacement, puncture repair and mobile tyre assistance at your
              location.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500" size={21} />
                <span className="font-medium">Birmingham & nearby areas</span>
              </div>

              <div className="flex items-center gap-3">
                <Zap className="text-red-500" size={21} />
                <span className="font-medium">Fast mobile response</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-red-500" size={21} />
                <span className="font-medium">Roadside assistance</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-red-500" size={21} />
                <span className="font-medium">24/7 availability</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 hover:bg-red-700 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg text-white shadow-2xl shadow-red-600/30"
              >
                <Phone size={23} />
                Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebe5d] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg text-white shadow-2xl shadow-green-500/30"
              >
                <WhatsAppIcon size={25} />
                WhatsApp Now
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="border border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg text-white"
              >
                <Mail size={22} />
                Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            className="relative hidden lg:block z-10"
          >
            <div className="absolute -inset-5 bg-red-600/20 blur-3xl rounded-full"></div>

            <div
              className="relative h-[620px] xl:h-[660px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero-tyre.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white">
                <p className="text-red-500 font-black uppercase text-xs mb-2">
                  Emergency Tyre Help
                </p>

                <h3 className="text-2xl font-black">
                  Mobile tyre fitting at your location
                </h3>

                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  Send your tyre size and Birmingham location on WhatsApp for a
                  fast mobile tyre response.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOVING BAR */}
      <section className="bg-[#123c9c] text-white overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="flex w-max py-4"
        >
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-8 flex items-center gap-2 text-xs sm:text-sm font-black uppercase"
            >
              <Star size={16} className="text-red-400 fill-red-400" />
              {item}
            </div>
          ))}
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-600 font-black uppercase text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-12">
            Every Tyre Service,
            <span className="block text-[#123c9c]">At Your Location</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND POSTER SECTION */}
      <section className="py-24 px-5 sm:px-6 bg-white text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div
            className="h-[420px] sm:h-[520px] rounded-[2rem] bg-cover bg-center shadow-2xl border border-gray-200"
            style={{
              backgroundImage: "url('/images/birmingham-poster.jpeg')",
            }}
          ></div>

          <div>
            <p className="text-red-600 font-black uppercase text-sm mb-3">
              Birmingham Local Service
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Built For Urgent
              <span className="block text-[#123c9c]">Tyre Call-Outs</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A Birmingham-focused mobile tyre service page designed for fast
              calls, WhatsApp enquiries and local emergency tyre searches.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Emergency tyre replacement",
                "Roadside tyre assistance",
                "WhatsApp location sharing",
                "Birmingham focused SEO",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200 font-black flex items-center gap-2"
                >
                  <Star size={17} className="text-red-600 fill-red-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5 sm:px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500 font-black uppercase text-sm mb-3">
            Simple Process
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-12">
            Back On The Road
            <span className="block text-red-500">In 4 Steps</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              [
                "01",
                "Call Or WhatsApp",
                "Tell us your tyre size and location.",
              ],
              [
                "02",
                "Send Location",
                "Share your Birmingham location with us.",
              ],
              ["03", "We Come To You", "A mobile tyre fitter is dispatched."],
              ["04", "Drive Away Safely", "Your tyre is fitted and checked."],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="relative rounded-2xl border border-white/10 bg-white/10 p-7 min-h-[190px] hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute right-6 top-4 text-7xl font-black text-white/10">
                  {num}
                </div>

                <div className="relative z-10 pt-16">
                  <h3 className="font-black text-lg mb-2 text-white">
                    {title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* COVERAGE */}
      <section className="py-20 px-5 sm:px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-500 font-black uppercase text-sm mb-3">
              Local Coverage
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              Mobile Tyre Fitting
              <span className="block text-red-500">Across Birmingham</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Birmingham Mobile Tyres provides emergency mobile tyre fitting,
              puncture repair and roadside tyre replacement across Birmingham
              and nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Birmingham City Centre",
              "Solihull",
              "Edgbaston",
              "Sutton Coldfield",
              "Smethwick",
              "West Bromwich",
              "Dudley",
              "Walsall",
              "Harborne",
              "Erdington",
              "Moseley",
              "Yardley",
            ].map((area) => (
              <div
                key={area}
                className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center gap-2 text-sm font-bold"
              >
                <Navigation size={16} className="text-red-500" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-600 font-black uppercase text-sm mb-3">FAQs</p>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-10">
            Got Questions?
            <span className="block text-[#123c9c]">We Can Help</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-black text-lg">
                  <span>{faq.q}</span>

                  <HelpCircle className="text-red-600 shrink-0 group-open:rotate-180 transition" />
                </summary>

                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-6 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-5">
            Need Emergency Mobile Tyres In Birmingham?
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Call now or message us on WhatsApp for fast tyre help at your
            location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-red-600 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg"
            >
              <Phone size={23} />
              Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 rounded-xl px-8 py-5 flex items-center justify-center gap-3 font-black text-lg"
            >
              <WhatsAppIcon size={23} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white px-5 sm:px-6 py-10 pb-24 md:pb-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <Logo />

          <div className="text-gray-300 text-sm leading-relaxed">
            <p className="font-black text-white mb-1">
              Birmingham Mobile Tyres
            </p>

            <p>24/7 emergency mobile tyre fitting across Birmingham.</p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-red-600 hover:bg-red-700 rounded-xl px-5 py-3 flex items-center justify-center gap-2 font-black transition"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] rounded-xl px-5 py-3 flex items-center justify-center gap-2 font-black transition"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 md:hidden">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-red-600 text-white py-4 flex items-center justify-center gap-2 font-black"
        >
          <Phone size={20} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-black"
        >
          <WhatsAppIcon size={20} />
          WhatsApp
        </a>
      </div>
    </main>
  );
}
