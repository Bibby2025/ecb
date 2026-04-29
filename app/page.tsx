"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Disc3, Mic2, Camera, MapPin, Calendar, Clock, Star, Menu, X, Mail, Phone, CheckCircle2, ChevronDown } from 'lucide-react';

const reviews = [
  { text: "Best DJ in Lowestoft! Kept the family entertained.", author: "Sarah J." },
  { text: "Amazing sound quality, not too loud for the grandparents!", author: "Mark R." },
  { text: "Karaoke was a huge hit! Incredible song selection.", author: "Dave P." },
  { text: "Kept the floor full all night with the classics.", author: "Elena M." },
  { text: "Fantastic photo booth props, everyone loved getting prints!", author: "Tom S." },
  { text: "DJ Steve was fantastic at our wedding, totally reliable.", author: "Grace W." },
];

const ReviewScroller = () => {
  // Multiply reviews to ensure seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="overflow-hidden bg-white/5 border-y border-white/10 py-5 flex items-center mb-0 relative z-10 w-full">
      <div className="scroller-track gap-16 pr-16 items-center">
        {duplicatedReviews.map((r, i) => (
          <div key={i} className="flex items-center text-slate-300 whitespace-nowrap">
            <div className="flex text-yellow-500 mr-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-sm tracking-wider uppercase italic">"{r.text}" — {r.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqs = [
  { question: "Do you take song requests?", answer: "Yes, absolutely! We encourage requests beforehand and on the night. It's your party, and we play the music you want to hear." },
  { question: "How far do you travel?", answer: "We primarily cover Lowestoft, Great Yarmouth, and surrounding rural areas. We can travel further afield for an additional mileage fee, just let us know your venue." },
  { question: "Is your equipment safe for venues?", answer: "Yes. Every piece of equipment is fully PAT tested for electrical safety, and we carry full Public Liability Insurance (PLI), which most venues require." },
  { question: "How long does it take to set up?", answer: "Depending on the package, setup takes between 45 to 90 minutes. We always aim to arrive well before your guests to ensure a seamless start." },
  { question: "What is 'Disco Bingo'?", answer: "It's a fun interactive game we can add to your disco for free! Instead of numbers, your bingo card has song titles. When you hear the song, mark it off. It's a great icebreaker!" }
];

const FaqItem = ({ faq }: { faq: { question: string, answer: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl bg-[#050508]/40 backdrop-blur-md overflow-hidden transition-all duration-300 mb-4 hover:border-purple-500/50">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full p-6 text-left cursor-pointer"
      >
        <h4 className="font-bold text-lg">{faq.question}</h4>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-purple-400' : 'text-slate-400'}`} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 px-6 py-0'}`}
      >
        <p className="text-slate-300 leading-relaxed text-sm">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default function EastCoastBeatsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success">("idle");

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sectionMeta = {
      home: {
        title: "East Coast Beats | DJ Steve Mitchell - Lowestoft",
        description: "Premium DJ & Karaoke systems for weddings, corporate events, and private sets in Lowestoft and surrounding areas.",
        keywords: "DJ Lowestoft, East Coast Beats, DJ Steve Mitchell, Mobile Disco, Party DJ, Wedding DJ, DJ Hire"
      },
      about: {
        title: "About Us | East Coast Beats - DJ in Lowestoft",
        description: "Learn about DJ Steve Mitchell. Traditional family disco values with modern, reliable, fully insured, and PAT tested equipment.",
        keywords: "Reliable DJ, PAT Tested DJ, Fully Insured DJ Lowestoft, Family Disco, Professional DJ"
      },
      services: {
        title: "Our Services | Mobile Disco, Karaoke & Photo Booth",
        description: "Discover our premium entertainment services: Ultimate Family Disco, Professional Karaoke Spotlight, and Modern Photo Booths.",
        keywords: "Mobile Disco Lowestoft, Karaoke Hire, Photo Booth Hire, Wedding Entertainment, DJ Packages"
      },
      faq: {
        title: "Frequently Asked Questions | East Coast Beats",
        description: "Find answers to our most common questions regarding DJ setup times, song requests, and safety testing.",
        keywords: "DJ FAQ, East Coast Beats FAQ, Song Requests, PAT Testing DJ, Party Setup"
      },
      pricing: {
        title: "Pricing & Packages | East Coast Beats",
        description: "Transparent pricing for DJ, Karaoke, and Photo Booth hire in Lowestoft. No hidden surcharges, honest rates.",
        keywords: "DJ Prices Lowestoft, Karaoke Hire Cost, Affordable Photo Booth, Wedding DJ Pricing, Party DJ Packages"
      },
      booking: {
        title: "Book Your Event | East Coast Beats Entertainment",
        description: "Secure your event date with East Coast Beats. Fill out our quick booking request for DJ, Karaoke, or Photo Booth services.",
        keywords: "Book DJ Lowestoft, Hire DJ Steve Mitchell, Booking Request East Coast Beats, Reserve Event DJ"
      }
    };

    const updateMetaTags = (sectionId: keyof typeof sectionMeta) => {
      const meta = sectionMeta[sectionId];
      if (meta) {
        document.title = meta.title;
        
        let descMeta = document.querySelector('meta[name="description"]');
        if (!descMeta) {
          descMeta = document.createElement('meta');
          descMeta.setAttribute('name', 'description');
          document.head.appendChild(descMeta);
        }
        descMeta.setAttribute('content', meta.description);

        let keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (!keywordsMeta) {
          keywordsMeta = document.createElement('meta');
          keywordsMeta.setAttribute('name', 'keywords');
          document.head.appendChild(keywordsMeta);
        }
        keywordsMeta.setAttribute('content', meta.keywords);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateMetaTags(entry.target.id as keyof typeof sectionMeta);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'services', 'faq', 'pricing', 'booking'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitting");
    setTimeout(() => {
      setBookingStatus("success");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <div className="mesh-bg"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050508]/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="font-black text-xl italic drop-shadow-md">E</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic drop-shadow-sm">
              East Coast Beats
            </span>
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-xs tracking-widest uppercase items-center text-gray-400">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#faq" className="hover:text-purple-400 transition">FAQ</a>
            <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
            <a href="#gallery" className="hover:text-purple-400 transition">Gallery</a>
            <a href="#booking" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">Book Now</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0a0a0f] border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <a href="#about" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-gray-300">About</a>
                <a href="#services" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-gray-300">Services</a>
                <a href="#faq" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-gray-300">FAQ</a>
                <a href="#pricing" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-gray-300">Pricing</a>
                <a href="#gallery" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-gray-300">Gallery</a>
                <a href="#booking" onClick={closeMenu} className="font-bold uppercase text-sm tracking-widest p-2 text-purple-400">Book Now</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="md:col-span-7"
          >
            <span className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xs mb-4 block">DJ Steve Mitchell — Lowestoft</span>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.85] font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-sm">
              ELEVATE<br/>THE BEAT.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              We bring the party to Lowestoft & beyond with high-quality entertainment. Discover the ultimate traditional family disco, premium karaoke setups, and sleek photo booths for your perfect event.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <a href="#booking" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-purple-500/20 transition-all uppercase tracking-widest text-sm text-center transform hover:-translate-y-1">
                Check Availability
              </a>
              <a href="#services" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl transition-all uppercase tracking-widest text-sm text-center backdrop-blur-xl">
                Explore Services
              </a>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="hidden md:grid md:col-span-5 grid-cols-2 gap-4 h-[500px]"
          >
            <div className="rounded-3xl bg-gray-900 border border-white/10 overflow-hidden relative group row-span-2 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" alt="Main Stage Party" fill className="object-cover group-hover:scale-105 transition duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.3em] text-white">Main Stage</div>
            </div>
            <div className="rounded-3xl bg-gray-900 border border-white/10 overflow-hidden relative group shadow-xl">
              <Image src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=400&q=80" alt="Disco Lighting" fill className="object-cover group-hover:scale-105 transition duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white">Lighting</div>
            </div>
            <div className="rounded-3xl bg-gray-900 border border-white/10 overflow-hidden relative group shadow-xl">
              <Image src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80" alt="Karaoke Screen" fill className="object-cover group-hover:scale-105 transition duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white">Karaoke</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050508]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Traditional Values,<br/>Modern Equipment.</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              East Coast Beats was founded on the fundamental belief that a truly great party shouldn't be defined by volume alone, but by the shared memories created on the dance floor. DJ Steve Mitchell brings decades of rich, hands-on experience in reading the room and expertly playing the perfect tracks that bridge the generation gap, ensuring grandpas and granddaughters alike are celebrating together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-3xl text-center border-t border-white/10 shadow-lg shadow-purple-900/5 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 mx-auto bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold uppercase tracking-widest mb-3">100% Reliable</h3>
               <p className="text-sm text-slate-400 leading-relaxed">We never let a client down. Punctual, professional, and dedicated to your event's success.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center border-t border-white/10 shadow-lg shadow-purple-900/5 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold uppercase tracking-widest mb-3">PAT Tested</h3>
               <p className="text-sm text-slate-400 leading-relaxed">All our modern equipment is fully safety certified and regularly checked for top-tier performance.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center border-t border-white/10 shadow-lg shadow-purple-900/5 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 mx-auto bg-pink-500/20 text-pink-400 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold uppercase tracking-widest mb-3">PLI Insured</h3>
               <p className="text-sm text-slate-400 leading-relaxed">Enjoy total peace of mind with our Comprehensive Public Liability Insurance coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xs mb-4 block">Entertainment Stack</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Our Services</h2>
          </div>

          <div className="space-y-32">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl">
                 <Image src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80" alt="Family Disco Setup" fill className="object-cover group-hover:scale-105 transition duration-700" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                    <Disc3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">Ultimate Family Disco</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 text-lg">
                  We curate a spectacular journey through the decades. From the electric rock 'n' roll of the 60s and disco fever of the 70s, to neon-drenched 80s pop and massive floor-filling anthems of the 90s/00s. 
                </p>
                <div className="glass-card p-6 rounded-2xl mt-8">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-purple-300 mb-4">What's Included:</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Professional Sound System & Crystal Clear Audio</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Sophisticated Lighting Rig (No blinding strobes)</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Live Requests dynamically integrated all night</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" /> Optional "Disco Bingo" integration completely free</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                    <Mic2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">Professional Karaoke Spotlight</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 text-lg">
                  Transform your private event into a dazzling, interactive stage. This isn't a tiny screen shoved in the corner; it's a full-throttle entertainment experience with over 10,000 top-tier tracks across all genres.
                </p>
                <div className="glass-card border-blue-500/20 p-6 rounded-2xl pt-6 mt-8">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">The Setup:</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Dual Continuous-Screen support for singer and audience</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Studio-Grade Mics with digital vocal processing</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Massive 10k+ Track Library (Elvis to Ed Sheeran!)</li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Full management of singer rotation</li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl">
                 <Image src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" alt="Karaoke Singer" fill className="object-cover group-hover:scale-105 transition duration-700" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent mix-blend-overlay"></div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative aspect-[4/3] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl bg-slate-800 grid grid-cols-2 gap-2 p-2">
                 <div className="relative rounded-2xl overflow-hidden w-full h-full">
                   <Image src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=400&q=80" alt="Booth Prop" fill className="object-cover grayscale" referrerPolicy="no-referrer" />
                 </div>
                 <div className="relative rounded-2xl overflow-hidden w-full h-full mt-8">
                   <Image src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=400&q=80" alt="Booth Fun" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20">
                    <Camera className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">Modern Photo Booth Memories</h3>
                <p className="text-slate-300 leading-relaxed font-light mb-6 text-lg">
                  The music fades, but photos last forever. Our state-of-the-art photo booths perfectly bridge the gap between modern digital demands and the nostalgic love for physical prints.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="glass-card p-5 rounded-2xl border-l-4 border-l-pink-500">
                    <h4 className="font-bold mb-1 text-white">Digital Only Package</h4>
                    <p className="text-slate-400 text-sm">Sends high-quality snaps directly to phones via email or SMS—perfect for immediate social media sharing. Includes gallery access post-event.</p>
                  </div>
                  <div className="glass-card p-5 rounded-2xl border-l-4 border-l-purple-500">
                    <h4 className="font-bold mb-1 text-white">Premium Print Package</h4>
                    <p className="text-slate-400 text-sm">Lightning-fast thermal printers provide gorgeous physical copies in seconds. Complete with premium props, beautiful backdrops, and an attendant.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xs mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Frequently Asked</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10 bg-[#050508]/80 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Transparent Pricing</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400">Fair, honest pricing with no hidden surcharges. Quoted prices are based in Lowestoft and surrounding areas.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Disco */}
            <div className="glass-card rounded-[2.5rem] p-10 flex flex-col hover:border-purple-500/50 transition duration-300 relative group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition"><Disc3 className="w-24 h-24 text-white" /></div>
               <h3 className="text-2xl font-black mb-2 uppercase italic relative z-10">Disco Packages</h3>
               <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-6 relative z-10">Full sound and sophisticated lighting included.</p>
               
               <div className="space-y-6 mb-8 relative z-10 flex-grow">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-300 font-medium tracking-wide">Private Parties</span>
                    <span className="text-2xl font-bold text-white">£275</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-slate-300 font-medium tracking-wide">Wedding Packages</span>
                    <span className="text-2xl font-bold text-white">£300</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-slate-300 font-medium tracking-wide">Under 18's Event</span>
                    <span className="text-2xl font-bold text-white">£200</span>
                  </div>
               </div>
               
               <div className="bg-purple-900/20 rounded-xl p-4 text-center mt-auto border border-purple-500/20 relative z-10">
                 <p className="text-xs text-purple-200">Price covers the first 2 hours.<br/><span className="font-bold">£75</span> per hour thereafter.</p>
               </div>
            </div>

            {/* Karaoke */}
            <div className="bg-gradient-to-b from-purple-900/40 to-[#050508] border border-purple-500/30 rounded-[2.5rem] p-10 flex flex-col shadow-2xl scale-100 lg:scale-105 z-10 relative">
               <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 text-white text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-bl-2xl rounded-tr-[2.5rem]">Popular Add-on</div>
               <h3 className="text-2xl font-black mb-2 uppercase italic text-white mt-4">Karaoke Options</h3>
               <p className="text-slate-300 text-sm mb-8 border-b border-white/10 pb-6">Standalone heroic setups or seamless integration.</p>
               
               <div className="space-y-6 mb-8 flex-grow">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-200 font-medium tracking-wide">Standalone (2hrs)</span>
                    <span className="text-3xl font-black text-white">£275</span>
                  </div>
                  <div className="flex justify-between items-end text-purple-300">
                    <span className="font-medium tracking-wide text-sm">+ Extra Hour</span>
                    <span className="text-xl font-bold">£75</span>
                  </div>
               </div>
               
               <div className="bg-white/5 rounded-xl p-5 border border-white/10 mt-auto">
                 <h4 className="font-bold mb-2 text-white uppercase tracking-widest text-xs">Disco Integration</h4>
                 <p className="text-sm text-slate-300">Add an extra <span className="font-bold text-purple-400">£25 per hour</span> to seamlessly mix karaoke into your family disco booking.</p>
               </div>
            </div>

            {/* Booth */}
            <div className="glass-card rounded-[2.5rem] p-10 flex flex-col hover:border-pink-500/50 transition duration-300 relative group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition"><Camera className="w-24 h-24 text-white" /></div>
               <h3 className="text-2xl font-black mb-2 uppercase italic relative z-10">Photo Booth</h3>
               <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-6 relative z-10">Sleek setups with digital sharing and print options.</p>
               
               <div className="space-y-6 mb-8 relative z-10 flex-grow">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-300 font-medium tracking-wide">Digital Share Base</span>
                    <span className="text-2xl font-bold text-white">£200</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-slate-300 font-medium tracking-wide">Add Thermal Printer</span>
                    <span className="text-2xl font-bold text-pink-400">+£250</span>
                  </div>
               </div>
               
               <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4 mt-auto relative z-10">
                 <p className="text-[10px] text-yellow-500 font-black uppercase tracking-widest mb-1">Important Notice</p>
                 <p className="text-xs text-yellow-200/70">A damage deposit is required for all booth bookings. Contact us for detailed Terms & Conditions.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form + Contact Info */}
      <section id="booking" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-8 md:p-12 lg:p-16 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              
              {/* Contact Information */}
              <div>
                <span className="text-purple-400 font-bold tracking-[0.25em] uppercase text-xs mb-4 block">Get In Touch</span>
                <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tighter uppercase italic">Secure Your<br/>Event Date</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Have a date in mind or specific questions? Fill out the form, or reach out directly. We're dedicated to making your event extraordinary and usually respond within 24 hours.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-purple-400 border border-white/10 shadow-inner">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">Direct Dial (Mon-Fri 08:00-17:00)</p>
                      <a href="tel:07356214700" className="text-2xl font-black tracking-wide hover:text-purple-400 transition">07356 214 700</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-pink-400 border border-white/10 shadow-inner">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-1">Email Support</p>
                      <a href="mailto:info@eastcoastbeats.co.uk" className="text-xl font-bold tracking-wide hover:text-pink-400 transition text-wrap break-all">info@eastcoastbeats.co.uk</a>
                      <p className="text-xs text-slate-500 mt-1 italic">Monitored out of hours for quick response.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Form */}
              <div className="bg-[#050508]/60 p-8 rounded-[2rem] border border-white/10 shadow-xl">
                {bookingStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/10">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">Request Sent!</h3>
                    <p className="text-slate-400 mb-8 max-w-xs">We'll review your details and be in touch very soon. A copy has been sent to your email.</p>
                    <button onClick={() => setBookingStatus("idle")} className="font-bold text-sm uppercase tracking-widest text-purple-400 hover:text-white transition">Submit Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Full Name</label>
                        <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition placeholder:text-gray-700" placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Phone Number</label>
                        <input type="tel" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition placeholder:text-gray-700" placeholder="07... " />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
                      <input type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition placeholder:text-gray-700" placeholder="john@example.com" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Event Date</label>
                        <input type="date" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition text-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Location / Venue</label>
                        <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition placeholder:text-gray-700" placeholder="Town or Postcode" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Services Needed</label>
                      <select required defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition text-slate-300 appearance-none">
                        <option value="" disabled>Select Primary Service</option>
                        <option value="disco">Ultimate Family Disco</option>
                        <option value="karaoke">Standalone Karaoke</option>
                        <option value="disco-karaoke">Disco & Karaoke Combo</option>
                        <option value="booth">Photo Booth Only</option>
                        <option value="package">Full Package (Disco + Booth)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">More Details</label>
                      <textarea rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition placeholder:text-gray-700" placeholder="Tell us about guest count, times, and music vibes..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={bookingStatus === "submitting"}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black py-4 rounded-xl shadow-xl shadow-purple-500/20 transition-all uppercase tracking-[0.2em] text-sm flex items-center justify-center disabled:opacity-70"
                    >
                      {bookingStatus === "submitting" ? "Sending Request..." : "Send Booking Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Scroller inserted at the bottom */}
      <ReviewScroller />

      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-white/10 relative z-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded flex items-center justify-center">
                    <span className="font-black text-sm italic">E</span>
                </div>
                <span className="text-lg font-bold tracking-tighter uppercase italic text-white">East Coast Beats</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed uppercase tracking-widest font-medium mb-6">
                Professional entertainment services for the East Coast. Lowestoft, Great Yarmouth, and beyond.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:border-purple-500 hover:bg-white/5 transition text-gray-400 hover:text-white">IG</a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:border-purple-500 hover:bg-white/5 transition text-gray-400 hover:text-white">FB</a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 italic">Quick Links</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-400">
                  <li><a href="#about" className="hover:text-purple-400 transition">About DJ Steve</a></li>
                  <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
                  <li><a href="#pricing" className="hover:text-purple-400 transition">Pricing Guide</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 italic">Legal</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6 italic">Support</h4>
                <a href="mailto:info@eastcoastbeats.co.uk" className="text-sm font-bold tracking-wider hover:text-purple-400 transition block mb-2 break-all">info@eastcoastbeats.co.uk</a>
                <a href="tel:07356214700" className="text-xl font-black italic hover:text-purple-400 transition block">07356 214 700</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest italic leading-normal text-center md:text-left">
              © 2024 East Coast Beats Entertainment.<br/>DJ Steve Mitchell. All rights reserved.
            </span>
            <div className="text-[10px] text-gray-600 italic tracking-widest uppercase font-bold text-center md:text-right">
              Trusted by Lowestoft's top venues
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
