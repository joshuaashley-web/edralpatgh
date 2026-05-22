import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Truck, ShoppingBag, Megaphone, Menu } from "lucide-react";

const slides = [
  {
    title: "EdralpatGH Distribution & Sales",
    subtitle: "Trusted supplier of tires, rice, and essential commodities.",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Quality Tires for Every Road",
    subtitle: "Car tires, truck tires, commercial tires, and bulk supply for businesses.",
    image:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Rice & Everyday Commodities",
    subtitle: "Reliable wholesale and retail supply for homes, shops, and companies.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Advertise Your Products With Us",
    subtitle: "Promote your products and services through EdralpatGH.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  },
];

const services = [
  {
    icon: Truck,
    title: "Tire Distribution",
    text: "We supply reliable tires for personal vehicles, transport businesses, shops, and corporate fleets.",
  },
  {
    icon: ShoppingBag,
    title: "Rice & Commodities",
    text: "We distribute rice and other essential goods for wholesale and retail buyers.",
  },
  {
    icon: Megaphone,
    title: "Product Advertising",
    text: "Businesses can advertise products on our platform and reach more customers.",
  },
];

const products = [
  {
    name: "Vehicle Tires",
    category: "Tires",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Truck Tires",
    category: "Commercial Tires",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rice Bags",
    category: "Food Commodities",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Advertise Here",
    category: "Promotion Slot",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80",
  },
];

export default function EdralpatGH() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Edralpat<span className="text-orange-400">GH</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#about" className="hover:text-orange-400">About</a>
            <a href="#products" className="hover:text-orange-400">Products</a>
            <a href="#gallery" className="hover:text-orange-400">Gallery</a>
            <a href="#contact" className="hover:text-orange-400">Contact Us</a>
            <a href="#products" className="hover:text-orange-400">Products</a>
            <a href="#advertise" className="hover:text-orange-400">Advertise</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
          </nav>
          <Menu className="md:hidden" />
        </div>
      </header>

      <section id="home" className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="mb-4 text-orange-400 font-semibold uppercase tracking-widest">
                Distribution • Sales • Advertising
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/233000000000"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-2xl font-semibold text-center shadow-lg"
                >
                  WhatsApp Us
                </a>
                <a
                  href="#products"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 px-7 py-4 rounded-2xl font-semibold text-center"
                >
                  View Products
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-5 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-slate-300">
              Built to grow from tires and rice into a full distribution and advertising platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-slate-950 border border-white/10 rounded-3xl p-8 shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                    <Icon className="text-orange-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <p className="text-slate-300">Explore our tire distribution and commodity gallery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80" className="rounded-3xl h-72 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" className="rounded-3xl h-72 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80" className="rounded-3xl h-72 w-full object-cover" />
          </div>
        </div>

      <section id="products" className="py-24 px-5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
              <p className="text-slate-300 max-w-2xl">
                These sections can be updated as more products are added to the business.
              </p>
            </div>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-semibold text-center">
              Request Price
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10 group">
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-orange-400 text-sm font-semibold mb-2">{product.category}</p>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advertise" className="py-24 px-5 bg-orange-500 text-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Advertise Your Products</h2>
            <p className="text-lg leading-relaxed mb-6">
              EdralpatGH creates room for businesses to promote their products directly on the website through banners, featured product cards, and special promotion sections.
            </p>
            <a href="#contact" className="inline-block bg-slate-950 text-white px-7 py-4 rounded-2xl font-semibold">
              Book Advertising Space
            </a>
          </div>
          <div className="bg-white/30 rounded-3xl p-8 border border-slate-950/10">
            <h3 className="text-2xl font-bold mb-4">Advertising Options</h3>
            <ul className="space-y-4 font-medium">
              <li>• Homepage banner placement</li>
              <li>• Featured product card</li>
              <li>• Monthly promotion slot</li>
              <li>• Business contact visibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-5 bg-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Contact EdralpatGH</h2>
            <p className="text-slate-300 mb-8">
              Reach out for tire supply, rice orders, bulk commodities, or advertising opportunities.
            </p>
            <div className="space-y-5 text-slate-200">
              <p className="flex items-center gap-3"><Phone className="text-orange-400" /> +233 00 000 0000</p>
              <p className="flex items-center gap-3"><Mail className="text-orange-400" /> info@edralpatgh.com</p>
              <p className="flex items-center gap-3"><MapPin className="text-orange-400" /> Accra, Ghana</p>
            </div>
          </div>

          <form className="bg-slate-950 border border-white/10 rounded-3xl p-8 space-y-5">
            <input className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Your name" />
            <input className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Phone or email" />
            <select className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none">
              <option>Tire inquiry</option>
              <option>Rice / commodity order</option>
              <option>Advertising request</option>
              <option>General inquiry</option>
            </select>
            <textarea className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 outline-none h-32" placeholder="Message" />
            <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-5 bg-slate-950 border-t border-white/10 text-center text-slate-400">
        <p>© 2026 EdralpatGH. Distribution, Sales & Advertising Platform.</p>
      </footer>
    </div>
  );
}
