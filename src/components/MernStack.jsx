import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  GraduationCap, Briefcase, RefreshCw, TrendingUp, Building, DollarSign,
  Terminal, Hammer, Brain, Target, BookOpen, Bot, Phone, Rocket, Mail,
  Lock, CalendarDays, CreditCard, Play, X, Loader2, AlertCircle, Code, Award, Globe, Database, Layers, Cpu
} from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_ar60q9f';
const EMAILJS_TEMPLATE_ID = 'template_c302i4n';
const EMAILJS_PUBLIC_KEY = '2CGO8qiSosH5K1xfS';

const Fullstack = () => {
  const [showFloatCta, setShowFloatCta] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ fullName: '', phone: '', email: '' });
  const [emailChecking, setEmailChecking] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);
  const toolsRef = useRef(null);

  const handleScrollToForm = () => {
    setHighlightForm(true);
    setTimeout(() => setHighlightForm(false), 2000);
    setTimeout(() => document.getElementById('fullName')?.focus(), 100);
  };

  // ── White + Red Brand Theme ──────────────────────────────────────
  const themeColors = {
    red: 'rgba(238, 47, 68)',
    redDark: 'rgba(238, 47, 68)',
    redLight: 'rgba(238, 47, 68)',
    redBg: 'rgba(238, 47, 68, 0.08)',
    redBorder: 'rgba(238, 47, 68, 0.25)',
    white: '#ffffff',
    offWhite: '#f8f8f8',
    lightGray: '#f0f0f0',
    border: '#e5e7eb',
    text: '#1a1a2e',
    textMuted: '#6b7280',
    textLight: '#9ca3af',
    surface: '#ffffff',
    surfaceSub: '#f9fafb',
    gradientRed: 'rgba(238, 47, 68)',
    gradientRedLight: 'rgba(238, 47, 68)',
    gradientHero: '#ffffff',
  };

  const videoTestimonials = [
    { id: 'fCjrbK3KFg4', name: 'PEOPLECLICK ALUMNI', role: 'FULL STACK DEV', salary: '6 LPA', isShort: true, thumbnail: '/thumbnails/thumb1.png' },
    { id: 'PPvIpS4UAEI', name: 'PEOPLECLICK ALUMNI', role: 'REACT DEVELOPER', salary: '5 LPA', isShort: true, thumbnail: '/thumbnails/thumb2.png' },
    { id: 'bZ4I48o02b4', name: 'PEOPLECLICK ALUMNI', role: 'FULL STACK', salary: '7 LPA', isShort: true, thumbnail: '/thumbnails/thumb3.png' },
    { id: '0XpBOS5jWW4', name: 'PEOPLECLICK ALUMNI', role: 'NODE.JS DEVELOPER', salary: '5.5 LPA', isShort: true, thumbnail: '/thumbnails/thumb4.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatCta(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // SEO meta info
    document.title = 'MERN Stack Developer Course in Coimbatore | Placement Training | PeopleClick';

    const upsertMeta = (name, content, prop = false) => {
      const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (prop) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('description', 'Join the best MERN Stack Development course in Coimbatore & Bangalore. Learn MongoDB, Express, React, Node.js & more with real projects. 100% placement support.');
    upsertMeta('keywords', 'MERN Stack Developer Course in Coimbatore, MERN Training in Bangalore, Web Development Course with Placement, MERN Stack Course for Beginners, React JS Training in Coimbatore, Node JS Course in Bangalore, Best MERN stack developer course in Coimbatore with placement');
    upsertMeta('robots', 'index, follow');
    upsertMeta('author', 'PeopleClick Learning');
    upsertMeta('og:title', 'MERN Stack Developer Course in Coimbatore | Placement Training | PeopleClick', true);
    upsertMeta('og:description', 'Join the best MERN Stack Development course in Coimbatore & Bangalore. Learn MongoDB, Express, React, Node.js & more with real projects. 100% placement support.', true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', 'MERN Stack Developer Course in Coimbatore | Placement Training | PeopleClick');
    upsertMeta('twitter:description', 'Join the best MERN Stack Development course in Coimbatore & Bangalore. Learn MongoDB, Express, React, Node.js & more with real projects. 100% placement support.');

    // JSON-LD Schemas
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best MERN Stack Developer course in Coimbatore with placement support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PeopleClick offers one of the best MERN stack development courses in Coimbatore and all over Tamil Nadu with hands-on training, real-time JavaScript projects, and guaranteed placement assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Which institute provides practical MERN training in Bangalore, Coimbatore and Trichy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PeopleClick provides industry-leading practical training covering React, Node.js, Express, and MongoDB for students across Coimbatore, Chennai, Trichy, and all over Tamil Nadu."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies are covered in this MERN Stack course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The course covers MongoDB, Express.js, React.js, Node.js, Redux, REST APIs, HTML5, CSS3, and JavaScript."
          }
        }
      ]
    };

    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "MERN Stack Development Course",
      "description": "Master MERN Stack development with React and Node.js. Available in Coimbatore, Bangalore, and all over Tamil Nadu.",
      "provider": {
        "@type": "Organization",
        "name": "PeopleClick Learning",
        "sameAs": "https://www.peopleclick.in"
      }
    };

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    const scriptCourse = document.createElement('script');
    scriptCourse.type = 'application/ld+json';
    scriptCourse.innerHTML = JSON.stringify(courseSchema);
    document.head.appendChild(scriptCourse);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(scriptFaq);
      document.head.removeChild(scriptCourse);
    };
  }, []);

  useEffect(() => {
    const el = toolsRef.current;
    if (!el) return;
    if (window.innerWidth >= 768) return;

    let index = 0;
    const cardWidth = 240;
    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextScroll = index * cardWidth;
      if (nextScroll > maxScroll) {
        index = 0;
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: nextScroll, behavior: 'smooth' });
        index += 1;
      }
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // ── Validation helpers ──────────────────────────────────────────
  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-().]/g, '');
    const indiaRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!cleaned) return 'Phone number is required.';
    if (!indiaRegex.test(cleaned)) return 'Enter a valid 10-digit Indian mobile number.';
    return '';
  };

  const validateEmailFormat = (email) => {
    if (!email) return 'Email address is required.';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Enter a valid email address (e.g. you@gmail.com).';
    return '';
  };

  const checkEmailDomainExists = async (email) => {
    try {
      const domain = email.split('@')[1];
      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (!response.ok) return true;
      const json = await response.json();
      if (json.Status !== 0 || !json.Answer || json.Answer.length === 0) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  };

  const handlePhoneBlur = (e) => {
    const err = validatePhone(e.target.value);
    setFieldErrors(prev => ({ ...prev, phone: err }));
  };

  const handleEmailBlur = async (e) => {
    const email = e.target.value;
    const formatErr = validateEmailFormat(email);
    if (formatErr) {
      setFieldErrors(prev => ({ ...prev, email: formatErr }));
      return;
    }
    setEmailChecking(true);
    const domainOk = await checkEmailDomainExists(email);
    setEmailChecking(false);
    if (!domainOk) {
      setFieldErrors(prev => ({
        ...prev,
        email: `The domain "${email.split('@')[1]}" does not appear to exist. Please check your email.`,
      }));
    } else {
      setFieldErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const phoneErr = validatePhone(data.phone || '');
    const emailFormatErr = validateEmailFormat(data.email || '');

    if (phoneErr || emailFormatErr) {
      setFieldErrors(prev => ({
        ...prev,
        phone: phoneErr,
        email: emailFormatErr,
      }));
      return;
    }

    setIsSubmitting(true);
    const domainOk = await checkEmailDomainExists(data.email);
    if (!domainOk) {
      setFieldErrors(prev => ({
        ...prev,
        email: `The domain "${data.email.split('@')[1]}" does not appear to exist. Please use a real email address.`,
      }));
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_phone: data.phone,
          from_email: data.email,
          schedule: data.schedule || 'Not specified',
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(
        'Failed to send your details. Please call us directly or try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG Icons
  const CheckIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={themeColors.red}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );

  const FormCheckIcon = () => (
    <svg className="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ stroke: themeColors.red }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: themeColors.white,
        color: themeColors.text,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(20px); }
          to { opacity:1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .red-card:hover { border-color: rgba(238, 47, 68,0.5) !important; transform: translateY(-4px); }
        input:focus, select:focus { border-color: rgba(238, 47, 68,1) !important; box-shadow: 0 0 0 3px rgba(238, 47, 68,0.1); }
        .gradient-text { color: rgba(238, 47, 68) !important; display: inline-block; }
        `
      }} />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: themeColors.border, boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center">
            <img src={`${process.env.PUBLIC_URL}/peopleclick-logo.svg`} alt="Peopleclick Learning" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-end gap-2 w-full sm:w-auto">
            <a href="tel:+918925449073" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5 border min-w-0"
              style={{ borderColor: themeColors.redBorder, color: themeColors.red, backgroundColor: themeColors.redBg }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide text-gray-500">Coimbatore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 8925 449 073</span>
            </a>

            <a href="tel:+917619343001" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5 border min-w-0"
              style={{ borderColor: themeColors.redBorder, color: themeColors.red, backgroundColor: themeColors.redBg }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide text-gray-500">Bangalore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 7619 343 001</span>
            </a>

            <a href="#lead-form" onClick={handleScrollToForm} className="w-full sm:w-60 md:w-auto text-center text-white font-bold text-xs sm:text-sm py-2 px-5 rounded-full transition-all hover:scale-105"
              style={{ background: themeColors.gradientRed, boxShadow: '0 4px 14px rgba(238, 47, 68,0.35)' }}>
              Get Free Demo
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <div className="relative overflow-hidden w-full" style={{ background: themeColors.gradientHero }}>
        {/* Decorative blobs removed for pure white background */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-8 fade-up text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6"
                style={{ borderColor: themeColors.redBorder, backgroundColor: themeColors.redBg }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: themeColors.red }}></span>
                <span className="gradient-text">Enroll Now — Limited Seats</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black leading-[1.1] mb-6" style={{ color: themeColors.text }}>
                <div className="flex items-center gap-x-2 lg:gap-x-3 whitespace-nowrap">
                  <span>Expert</span>
                  <span className="gradient-text">MERN STACK</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-3xl" style={{ color: themeColors.text }}>
                  <span className="gradient-text" style={{ fontWeight: 300, opacity: 0.7 }}>|</span>
                  <span className="font-bold tracking-tight">Coimbatore</span>
                </div>
              </h1>

              <p className="text-lg mb-8 max-w-2xl leading-relaxed" style={{ color: themeColors.textMuted }}>
                No.1 MERN Stack Development Course in Coimbatore & Bangalore. Learn React, Node.js, Express, MongoDB, and modern web technologies with hands-on projects and placement support. Earn an <a href="#internship-section" className="font-bold transition-all cursor-pointer hover:opacity-80 gradient-text">exclusive IT company internship</a>.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 text-sm font-medium">
                {['Earn an IT Company Internship', '10+ Years Experienced Trainers', 'Real-World Projects', 'Industry Certifications'].map((item, i) => (
                  <span key={i} className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ borderColor: themeColors.border, color: themeColors.text, backgroundColor: themeColors.white }}>
                    <CheckIcon /> {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t max-w-xl" style={{ borderColor: themeColors.border }}>
                <div>
                  <div className="text-3xl font-black mb-1 gradient-text">1500+</div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: themeColors.textMuted }}>Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-1 gradient-text">100%</div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: themeColors.textMuted }}>Placement Support</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-1 gradient-text">₹3-8LPA</div>
                  <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: themeColors.textMuted }}>Avg. Salary Post-Course</div>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="lg:col-span-4 relative scroll-mt-32" id="lead-form">
              <div className={`relative rounded-2xl p-6 sm:p-8 shadow-xl border transition-all duration-500 origin-top ${highlightForm ? 'ring-4 ring-offset-2 ring-[#ee2f44] scale-[1.02]' : ''}`}
                style={{ backgroundColor: themeColors.white, borderColor: highlightForm ? themeColors.red : themeColors.border, boxShadow: highlightForm ? '0 12px 50px rgba(238, 47, 68,0.25)' : '0 8px 40px rgba(238, 47, 68,0.10)' }}>
                {/* Red top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: themeColors.gradientRed }}></div>

                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-1 flex items-center gap-2" style={{ color: themeColors.text }}>
                      Get Free Demo Class <Rocket className="w-6 h-6" color={themeColors.red} />
                    </h3>
                    <p className="text-sm mb-5" style={{ color: themeColors.textMuted }}>Fill in your details and we'll call you within 2 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: themeColors.text }}>Full Name *</label>
                        <input
                          required
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="Your full name"
                          className="w-full border text-sm rounded-lg px-4 py-3 focus:outline-none transition-all"
                          style={{ borderColor: themeColors.border, color: themeColors.text, backgroundColor: themeColors.offWhite }}
                          onBlur={(e) => setFieldErrors(prev => ({ ...prev, fullName: e.target.value.trim() ? '' : 'Full name is required.' }))}
                        />
                        {fieldErrors.fullName && (
                          <p className="flex items-center gap-1 text-red-500 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.fullName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: themeColors.text }}>Phone Number *</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          maxLength={15}
                          className={`w-full border text-sm rounded-lg px-4 py-3 focus:outline-none transition-all ${fieldErrors.phone ? 'border-red-500' : ''}`}
                          style={{ borderColor: fieldErrors.phone ? '#ef4444' : themeColors.border, color: themeColors.text, backgroundColor: themeColors.offWhite }}
                          onBlur={handlePhoneBlur}
                        />
                        {fieldErrors.phone && (
                          <p className="flex items-center gap-1 text-red-500 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: themeColors.text }}>Email Address *</label>
                        <div className="relative">
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="you@email.com"
                            className={`w-full border text-sm rounded-lg px-4 py-3 focus:outline-none transition-all pr-10 ${fieldErrors.email ? 'border-red-500' : ''}`}
                            style={{ borderColor: fieldErrors.email ? '#ef4444' : themeColors.border, color: themeColors.text, backgroundColor: themeColors.offWhite }}
                            onBlur={handleEmailBlur}
                          />
                          {emailChecking && (
                            <Loader2 className="absolute right-3 top-3.5 w-4 h-4 animate-spin" style={{ color: themeColors.textMuted }} />
                          )}
                        </div>
                        {fieldErrors.email && (
                          <p className="flex items-center gap-1 text-red-500 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.email}</p>
                        )}
                      </div>

                      {/* Schedule */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: themeColors.text }}>Preferred Schedule</label>
                        <select name="schedule" className="w-full border text-sm rounded-lg px-4 py-3 focus:outline-none transition-all appearance-none"
                          style={{ borderColor: themeColors.border, color: themeColors.text, backgroundColor: themeColors.offWhite }}>
                          <option value="">Select Schedule</option>
                          <option value="weekday">Weekday Batches</option>
                          <option value="online">Online Training</option>
                        </select>
                      </div>

                      {/* Submit error banner */}
                      {submitError && (
                        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-xs">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting || emailChecking}
                        className="w-full mt-2 text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ background: themeColors.gradientRed, boxShadow: '0 4px 14px rgba(238, 47, 68,0.35)' }}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                        ) : (
                          'Book My Free Demo →'
                        )}
                      </button>
                      <p className="text-center text-xs mt-4 flex items-center justify-center gap-1" style={{ color: themeColors.textLight }}>
                        <Lock className="w-3 h-3" /> 100% Free. No spam. Cancel anytime.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <FormCheckIcon />
                    <h4 className="text-xl font-bold mb-2" style={{ color: themeColors.text }}>You're Booked!</h4>
                    <p className="text-sm" style={{ color: themeColors.textMuted }}>
                      Our MERN Stack team will call you within 2 hours to confirm your free demo class details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COURSE HIGHLIGHTS ── */}
      <section className="py-20 border-t" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Why Join Us?</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Course Highlights</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Everything you need to kickstart and accelerate your career in MERN Stack Development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-8 h-8" color={themeColors.red} />, title: 'Beginner to Advanced Training', desc: 'Start from HTML/CSS fundamentals and build your way up to full production-ready web applications.' },
              { icon: <Code className="w-8 h-8" color={themeColors.red} />, title: 'Real-Time Projects', desc: 'Work on live projects that simulate real-world scenarios including e-commerce, dashboards, and APIs.' },
              { icon: <Terminal className="w-8 h-8" color={themeColors.red} />, title: 'Hands-on Coding Practice', desc: 'Gain practical experience by building and deploying at least 5 industry-level web applications.' },
              { icon: <Award className="w-8 h-8" color={themeColors.red} />, title: 'Industry Certification', desc: 'Earn recognized training certificates that significantly validate your skills to top global employers.' },
              { icon: <Briefcase className="w-8 h-8" color={themeColors.red} />, title: '100% Placement Assistance', desc: 'Get dedicated support for resume building, mock interviews, and guaranteed job interviews.' },
              { icon: <GraduationCap className="w-8 h-8" color={themeColors.red} />, title: 'Expert Trainers', desc: '10+ years experienced industrial MERN Stack trainers will guide you through every concept.' }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-white border p-8 rounded-2xl transition-all duration-300 red-card group relative overflow-hidden"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'radial-gradient(circle at top right, rgba(228,59,60,0.05), transparent)' }}></div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: themeColors.redBg, border: `1px solid ${themeColors.redBorder}` }}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10" style={{ color: themeColors.text }}>{highlight.title}</h3>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: themeColors.textMuted }}>{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO MARKETING SECTION ── */}
      <section className="py-16 border-b" style={{ backgroundColor: themeColors.white, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-4" style={{ color: themeColors.text }}>MERN Stack Development Course in Coimbatore with Placement Assistance</h2>
          <p className="text-lg mb-3" style={{ color: themeColors.textMuted }}>Build cutting-edge web applications and launch a high-paying career with Peopleclick's MERN Stack Development Course in Coimbatore.</p>
          <p className="text-lg mb-5" style={{ color: themeColors.textMuted }}>Learn from industry experts, build full-stack JavaScript real-world projects, and become job-ready with our placement-focused training program.</p>
          <a href="#lead-form" className="inline-block text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            style={{ background: themeColors.gradientRed }}>Book a Free Demo Class Today</a>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-6 rounded-2xl" style={{ borderColor: themeColors.border, backgroundColor: themeColors.offWhite }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.text }}>How to Actually Build a Career in MERN Stack Development (Simple & Actionable)</h3>
              <ol className="list-decimal list-inside space-y-4" style={{ color: themeColors.textMuted }}>
                <li>
                  <strong style={{ color: themeColors.text }}>Don't just learn theory — build real applications</strong>
                  <p className="mt-2">Most courses teach concepts. Companies hire builders.</p>
                  <ul className="list-disc list-inside pl-5 mt-2" style={{ color: themeColors.textMuted }}>
                    <li>Real-time project development practice</li>
                    <li>Frontend + Backend + Database integration</li>
                    <li>Live deployment on cloud platforms</li>
                  </ul>
                  <p className="mt-2 font-semibold gradient-text">Result: You become job-ready, not just certified</p>
                </li>
                <li>
                  <strong style={{ color: themeColors.text }}>Learn exactly what companies are hiring for</strong>
                  <p className="mt-2">Students fail because they learn outdated stacks.</p>
                  <ul className="list-disc list-inside pl-5 mt-2">
                    <li>React.js & Next.js (Frontend)</li>
                    <li>Node.js & Express (Backend)</li>
                    <li>MongoDB & MySQL (Database)</li>
                    <li>REST APIs & GraphQL</li>
                  </ul>
                  <p className="mt-2 font-semibold gradient-text">Result: You match real job roles like MERN Stack Developer</p>
                </li>
                <li>
                  <strong style={{ color: themeColors.text }}>Build a portfolio, not just certificates</strong>
                  <p className="mt-2">Companies trust skills + proof.</p>
                  <ul className="list-disc list-inside pl-5 mt-2">
                    <li>E-Commerce Application</li>
                    <li>Blog Platform with Authentication</li>
                    <li>REST API with MongoDB</li>
                    <li>Real-time Chat Application</li>
                  </ul>
                  <p className="mt-2 font-semibold gradient-text">Result: Strong GitHub portfolio + interview confidence</p>
                </li>
                <li>
                  <strong style={{ color: themeColors.text }}>Get placement-ready, not just course completion</strong>
                  <p className="mt-2">Learning alone is not enough.</p>
                  <ul className="list-disc list-inside pl-5 mt-2">
                    <li>Resume building</li>
                    <li>Mock interviews</li>
                    <li>Placement assistance</li>
                    <li>Job referrals</li>
                  </ul>
                  <p className="mt-2 font-semibold gradient-text">Result: Faster job placement</p>
                </li>
              </ol>
            </div>

            <div className="border p-6 rounded-2xl" style={{ borderColor: themeColors.border, backgroundColor: themeColors.offWhite }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.text }}>Why Choose MERN Stack Development as a Career?</h3>
              <ul className="list-disc list-inside pl-5 space-y-2" style={{ color: themeColors.textMuted }}>
                <li>Highest demand in India & globally for web developers</li>
                <li>Attractive salary packages (₹3-8 LPA)</li>
                <li>Versatile — work frontend, backend, or both</li>
                <li>Opportunities in startups to Fortune 500 companies</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-3" style={{ color: themeColors.text }}>Course Highlights</h3>
              <ul className="list-disc list-inside pl-5 space-y-2" style={{ color: themeColors.textMuted }}>
                <li>Expert Trainers with 10+ Years of Industry Experience</li>
                <li>Beginner to Advanced Training</li>
                <li>MERN Stack Focus (MongoDB, Express, React, Node)</li>
                <li>Real-Time Web Application Projects</li>
                <li>Industry Certification</li>
                <li>100% Placement Assistance</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black mb-4" style={{ color: themeColors.text }}>MERN Stack Course Syllabus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ color: themeColors.textMuted }}>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Core Modules</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>HTML5, CSS3 & Responsive Design</li>
                  <li>JavaScript (ES6+) & TypeScript</li>
                  <li>React.js & Next.js (Frontend)</li>
                  <li>Node.js & Express.js (Backend)</li>
                  <li>MongoDB & MySQL (Databases)</li>
                  <li>REST API & GraphQL Development</li>
                  <li>Git & Version Control</li>
                  <li>Docker & Deployment (AWS/Vercel/Render)</li>
                  <li>Authentication (JWT, OAuth)</li>
                  <li>Testing (Jest, Postman)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Technologies & Tools</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>React.js, Redux, Tailwind CSS</li>
                  <li>Node.js, Express.js</li>
                  <li>MongoDB Atlas, MySQL</li>
                  <li>Git, GitHub, VS Code</li>
                </ul>

                <p className="font-bold mt-4 mb-2" style={{ color: themeColors.text }}>Capstone Projects</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>Full Stack E-Commerce Platform</li>
                  <li>Real-Time Chat App (Socket.io)</li>
                  <li>Blog CMS with Admin Dashboard</li>
                  <li>REST API with JWT Auth</li>
                  <li>Portfolio Website Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black mb-4" style={{ color: themeColors.text }}>Career Opportunities</h3>
            <ul className="list-disc list-inside pl-5 space-y-1" style={{ color: themeColors.textMuted }}>
              <li>MERN Stack Developer</li>
              <li>Frontend React Developer</li>
              <li>Backend Node.js Developer</li>
              <li>Software Engineer</li>
            </ul>

            <h3 className="text-2xl font-black mt-8 mb-4" style={{ color: themeColors.text }}>Salary in India</h3>
            <ul className="list-disc list-inside pl-5 space-y-1" style={{ color: themeColors.textMuted }}>
              <li>Freshers: ₹3 LPA – ₹8 LPA</li>
              <li>Experienced: ₹7 LPA – ₹25 LPA</li>
            </ul>

            <h3 className="text-2xl font-black mt-8 mb-4" style={{ color: themeColors.text }}>Why Choose Peopleclick?</h3>
            <ul className="list-disc list-inside pl-5 space-y-1" style={{ color: themeColors.textMuted }}>
              <li>Job-Oriented Training</li>
              <li>Real-Time Projects</li>
              <li>Resume & Interview Support</li>
              <li>Placement Assistance</li>
              <li>Industry-Level Lab Training</li>
            </ul>

            <h3 className="text-2xl font-black mt-8 mb-4" style={{ color: themeColors.text }}>Who Can Join This Course?</h3>
            <ul className="list-disc list-inside pl-5 space-y-1" style={{ color: themeColors.textMuted }}>
              <li>Fresh Graduates</li>
              <li>IT Professionals looking to upskill</li>
              <li>Beginners with basic computer knowledge</li>
              <li>Career Switchers</li>
            </ul>

            <h3 className="text-2xl font-black mt-8 mb-4" style={{ color: themeColors.text }}>Skills You Will Gain</h3>
            <ul className="list-disc list-inside pl-5 space-y-1" style={{ color: themeColors.textMuted }}>
              <li>Frontend Development (React, HTML, CSS)</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, MySQL)</li>
              <li>API Design & Integration</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          <div className="mt-10 border p-6 rounded-2xl" style={{ borderColor: themeColors.border, backgroundColor: themeColors.offWhite }}>
            <h3 className="text-2xl font-black mb-4" style={{ color: themeColors.text }}>Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4" style={{ color: themeColors.textMuted }}>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>What technologies are covered in this MERN Stack course?</p>
                <p className="text-sm">The course covers MongoDB, Express.js, React.js, Node.js, Redux, REST APIs, HTML5, CSS3, and modern JavaScript (ES6+).</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Can beginners learn MERN Stack Development without programming experience?</p>
                <p className="text-sm">Yes, our curriculum starts from the absolute basics of HTML, CSS, and JavaScript before diving into advanced frameworks like React and Node.js.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>What is the salary of a MERN Stack Developer in India?</p>
                <p className="text-sm">MERN stack developers are in high demand. Freshers can typically expect ₹4–₹8 LPA, while experienced developers can earn upwards of ₹10 LPA+.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Do MERN Stack courses include real-time projects?</p>
                <p className="text-sm">Yes, you will build multiple real-world applications including e-commerce platforms, social media clones, and real-time chat apps during the course.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Will I get placement assistance after completing the course?</p>
                <p className="text-sm">Yes, we provide 100% placement assistance, including resume workshops, mock interviews, and direct referrals to our hiring partners.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>What happens if I miss a class?</p>
                <p className="text-sm">We provide recorded sessions of all live classes. You can also attend backup sessions or clear your doubts during our dedicated weekend lab hours.</p>
              </div>
              <div>
                <p className="font-bold mb-2" style={{ color: themeColors.text }}>Will I get a certificate after completing the MERN Stack training?</p>
                <p className="text-sm">Yes, you will receive a professional Course Completion Certificate from PeopleClick Learning, which is recognized by many top tech employers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES STRIP ── */}
      <div className="border-y py-12 relative overflow-hidden" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {[
              { val: '1500+', label: 'Students Certified' },
              { val: '100%', label: 'Placement Assistance' },
              { val: '10+', label: 'Live Projects' },
              { val: '15+', label: 'Technologies Mastered' },
              { val: '24/7', label: 'Lab & LMS Access' },
            ].map((stat, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-white border transition-all hover:scale-105 ${i === 4 ? 'hidden lg:block' : ''}`}
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-4xl font-black mb-2 gradient-text">{stat.val}</div>
                <div className="text-sm font-medium" style={{ color: themeColors.textMuted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CURRICULUM SECTION ── */}
      <section className="py-20" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Curriculum</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Full Stack Development Syllabus</h2>
            <p className="max-w-2xl text-lg" style={{ color: themeColors.textMuted }}>From HTML basics to cloud deployment, our curriculum is designed to make you industry-ready from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Frontend Foundations', desc: 'HTML5, CSS3, Flexbox, Grid, Responsive Design & Bootstrap. Build beautiful user interfaces from scratch.', tags: ['HTML5', 'CSS3', 'Responsive'] },
              { num: '02', title: 'JavaScript & ES6+', desc: 'Core JS concepts, DOM manipulation, async/await, Promises, and modern ES6+ features for dynamic web apps.', tags: ['JavaScript', 'ES6+', 'DOM'] },
              { num: '03', title: 'React.js & State Management', desc: 'Component architecture, hooks, Redux, React Router, and Next.js for production-grade frontends.', tags: ['React', 'Redux', 'Next.js'] },
              { num: '04', title: 'Backend with Node.js', desc: 'RESTful APIs, Express.js, middleware, authentication (JWT/OAuth), and server-side logic development.', tags: ['Node.js', 'Express', 'JWT'] },
              { num: '05', title: 'Databases & ORMs', desc: 'MongoDB (NoSQL) with Mongoose, MySQL with Sequelize, data modeling, queries, and aggregations.', tags: ['MongoDB', 'MySQL', 'Mongoose'] },
              { num: '06', title: 'Deployment & DevOps Basics', desc: 'Git/GitHub workflows, CI/CD pipelines, Docker basics, and deploying apps to AWS, Vercel, and Render.', tags: ['AWS', 'Docker', 'Git'] },
            ].map((mod, i) => (
              <div key={i} className="bg-white border p-6 rounded-2xl transition-all red-card group"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center font-black mb-4 text-white"
                    style={{ background: themeColors.gradientRed }}>
                    {mod.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: themeColors.text }}>{mod.title}</h3>
                  <p className="text-sm mb-4" style={{ color: themeColors.textMuted }}>{mod.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {mod.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-md"
                        style={{ backgroundColor: themeColors.redBg, border: `1px solid ${themeColors.redBorder}` }}>
                        <span className="gradient-text">{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD JOIN ── */}
      <section className="py-20 border-t" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Target Audience</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Who Should Take a MERN Stack Course?</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Our comprehensive MERN Stack training is designed for professionals at every stage of their career journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap className="w-10 h-10" color={themeColors.red} />, title: 'Fresh Graduates', desc: 'Recent graduates looking to enter the software industry with no prior coding experience required.' },
              { icon: <Briefcase className="w-10 h-10" color={themeColors.red} />, title: 'IT Professionals', desc: 'System admins, testers, or IT support staff wanting to transition into software development roles.' },
              { icon: <RefreshCw className="w-10 h-10" color={themeColors.red} />, title: 'Career Switchers', desc: 'Professionals from non-IT backgrounds seeking a high-paying career in web development.' },
              { icon: <TrendingUp className="w-10 h-10" color={themeColors.red} />, title: 'Working Professionals', desc: 'Current employees aiming for salary hikes and senior developer roles through modern skills.' },
              { icon: <Building className="w-10 h-10" color={themeColors.red} />, title: 'College Students', desc: 'Students currently pursuing college in computer science or related fields looking to advance their careers in tech.' },
              { icon: <DollarSign className="w-10 h-10" color={themeColors.red} />, title: 'Salary Seekers', desc: 'Individuals looking to break into high-paying MERN Stack roles with structured mentorship.' },
            ].map((audience, i) => (
              <div key={i} className="bg-white border p-8 rounded-2xl transition-all duration-300 red-card"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="mb-4 p-3 w-16 h-16 flex items-center justify-center rounded-2xl" style={{ backgroundColor: themeColors.redBg }}>
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.text }}>{audience.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ROLES ── */}
      <section className="py-20" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Career Paths</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Job Roles For MERN Stack Developers</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Explore diverse career opportunities in the booming web development industry with our specialized training.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Full Stack MERN Developer', salary: '₹3-10 LPA', desc: 'Build and maintain both client-side and server-side of web applications using modern technologies.' },
              { title: 'MERN Stack Developer', salary: '₹4-12 LPA', desc: 'Specialize in MongoDB, Express, React, and Node.js stack for building scalable web applications.' },
              { title: 'Frontend React Developer', salary: '₹3-9 LPA', desc: 'Create responsive, high-performance user interfaces with React.js, Redux, and modern CSS frameworks.' },
              { title: 'Backend Node.js Developer', salary: '₹4-11 LPA', desc: 'Design and build RESTful APIs, microservices, and server-side logic with Node.js and Express.' },
              { title: 'Software Engineer', salary: '₹4-12 LPA', desc: 'Work on software lifecycle from design to deployment in agile teams at top product companies.' },
              { title: 'Web App Architect', salary: '₹7-25 LPA', desc: 'Design scalable system architectures, lead development teams, and define technical standards.' },
              { title: 'DevOps Engineer', salary: '₹6-14 LPA', desc: 'Automate CI/CD pipelines, manage cloud infrastructure, and ensure smooth software delivery.' },
              { title: 'Freelance Developer', salary: '₹3-20 LPA', desc: 'Work on independent projects for global clients and build your own business as a MERN Stack freelancer.' },
            ].map((role, i) => (
              <div key={i} className="bg-white border p-6 rounded-2xl red-card transition-all group"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold" style={{ color: themeColors.text }}>{role.title}</h3>
                  <span className="text-sm font-semibold px-2 py-1 rounded-md border whitespace-nowrap"
                    style={{ backgroundColor: 'rgba(238, 47, 68,0.07)', borderColor: themeColors.redBorder }}>
                    <span className="gradient-text">{role.salary}</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS COVERED ── */}
      <section className="py-20 border-t" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Tech Stack</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Technologies Covered in MERN Stack Course</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Master industry-standard technologies through hands-on practice and real-world project development.</p>
          </div>

          <div ref={toolsRef} className="flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:overflow-visible md:pb-0 snap-x snap-mandatory scrollbar-thin">
            {[
              { name: 'HTML5', icon: <Code className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Markup Language' },
              { name: 'CSS3', icon: <Layers className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Styling' },
              { name: 'JavaScript', icon: <Terminal className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Programming' },
              { name: 'React.js', icon: <Globe className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Frontend Library' },
              { name: 'Node.js', icon: <Terminal className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Backend Runtime' },
              { name: 'Express.js', icon: <Layers className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Node Framework' },
              { name: 'MongoDB', icon: <Database className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'NoSQL Database' },
              { name: 'Redux', icon: <Cpu className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'State Management' },
              { name: 'REST APIs', icon: <Code className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'JSON Comm' },
              { name: 'Git', icon: <Layers className="w-10 h-10 mx-auto" color={themeColors.red} />, desc: 'Version Control' },
            ].map((tool, i) => (
              <div key={i} className="min-w-[220px] md:min-w-0 flex-shrink-0 md:flex-shrink md:mx-0 rounded-2xl bg-white border p-6 red-card transition-all group text-center snap-start"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: themeColors.text }}>{tool.name}</h3>
                <p className="text-xs" style={{ color: themeColors.textMuted }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE PEOPLECLICK & INTERNSHIP ── */}
      <section id="internship-section" className="py-20 border-t scroll-mt-20" style={{ backgroundColor: themeColors.white, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Exclusive Benefit</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ color: themeColors.text }}>Why Choose Peopleclick?</h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: themeColors.textMuted }}>
                We go beyond standard classroom training. Dedicated learners who demonstrate strong technical aptitude unlock the opportunity for <strong style={{ color: themeColors.text }}>real-time industrial internships</strong> in our separate, fully operational IT company.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { title: 'Live Project Experience', desc: 'Work directly on real client web applications and software development projects.' },
                  { title: 'Valid Experience Letter', desc: 'Graduate with a recognized internship certificate from an active IT organization, putting your resume ahead of others.' },
                  { title: 'Corporate Environment', desc: 'Learn professional workflows, Agile methodologies, and corporate communication standards.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full" style={{ backgroundColor: themeColors.redBg }}><CheckIcon /></div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: themeColors.text }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: themeColors.textMuted }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#lead-form" onClick={handleScrollToForm} className="inline-block text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
                style={{ background: themeColors.gradientRed, boxShadow: '0 4px 20px rgba(238, 47, 68,0.35)' }}>
                Start Your Internship Journey
              </a>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: 'radial-gradient(circle, rgba(238, 47, 68,0.12), transparent 70%)' }}></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border transform rotate-1 hover:rotate-0 transition-transform duration-500 group"
                style={{ borderColor: themeColors.border }}>
                <img src={`${process.env.PUBLIC_URL}/fullstack_internship.png`} alt="Real-time Industrial Internship" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg inline-block border" style={{ borderColor: themeColors.border }}>
                    <div className="flex items-center gap-3">
                      <Code className="w-8 h-8" color={themeColors.red} />
                      <div>
                        <div className="font-bold" style={{ color: themeColors.text }}>Peopleclick IT Division</div>
                        <div className="text-xs" style={{ color: themeColors.textMuted }}>Exclusive Internship Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 border-t" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Complete Package</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>What's Included in Our Full Stack Course</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Everything you need to become a certified Full Stack Developer with job-ready skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Hammer className="w-10 h-10" color={themeColors.red} />, title: 'Hands-On Projects', desc: 'Work on 10+ real-world web development projects including e-commerce platforms, real-time chat apps, and REST APIs.' },
              { icon: <Brain className="w-10 h-10" color={themeColors.red} />, title: 'LMS Learning Platform', desc: '24/7 access to recorded sessions, expert videos, and organized learning materials for flexible study at your pace.' },
              { icon: <Target className="w-10 h-10" color={themeColors.red} />, title: 'Interview Preparation', desc: 'Mock interviews, resume building, and company-specific question practice to crack Full Stack developer jobs.' },
              { icon: <BookOpen className="w-10 h-10" color={themeColors.red} />, title: 'Aptitude & Technical Training', desc: 'Free training in logical thinking, data structures, and algorithms to strengthen your foundation for interviews.' },
              { icon: <Bot className="w-10 h-10" color={themeColors.red} />, title: 'AI Interview Practice Portal', desc: 'Practice with AI-powered mock interviews for instant feedback and confidence building before actual interviews.' },
              { icon: <Briefcase className="w-10 h-10" color={themeColors.red} />, title: 'Placement Support', desc: 'Dedicated career mentoring, job referrals, and support until you land your dream Full Stack developer role.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white border p-8 rounded-2xl red-card transition-all group"
                style={{ borderColor: themeColors.border, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="mb-4 group-hover:scale-110 transition-transform w-16 h-16 flex items-center justify-center rounded-2xl"
                  style={{ backgroundColor: themeColors.redBg }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.text }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI & SOCIAL PROOF ── */}
      <section className="py-20 border-t" style={{ backgroundColor: themeColors.white, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Alumni Stories</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Real Results from Peopleclick</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>See what our graduates have accomplished after taking our Full Stack Development course.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Shainisha", time: "2 months ago", init: "S", quote: "I am Shainisha, a student at PeopleClick Learning. This training program was really helpful and practical. The technical sessions were clear and easy to understand. The coding part was explained step by step. I learned many new skills from this course. Hands-on practice was really helpful. Our trainer was very friendly, supportive, and motivating. They provide excellent placement support. Thank you so much for the guidance!", color: themeColors.red },
              { name: "Pavi Pavi", time: "a month ago", init: "PP", quote: "Hi, I am Pavithra, a student at PeopleClick Learning. I had a great learning experience here. The Full Stack course was well-structured and easy to understand. Trainers explained concepts clearly with practical examples, which really helped me gain confidence in development. The support from the staff was also very good. I would definitely recommend this institute to anyone who wants to build a strong career in tech.", color: '#e07b2c' },
              { name: "Shashank Patil", time: "2 months ago", init: "SP", quote: "PeopleClick is a highly professional and reliable training organization. Their team is knowledgeable, responsive, and truly understands student requirements. The quality of teaching and attention to detail are excellent. They maintain clear communication and ensure every student is job-ready. I would definitely recommend PeopleClick to anyone looking for dependable and results-oriented coding training.", color: '#2e7de0' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border p-6 rounded-2xl shadow-sm relative flex flex-col justify-start"
                style={{ borderColor: themeColors.border }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full text-white font-bold flex items-center justify-center text-lg"
                    style={{ backgroundColor: testimonial.color }}>
                    {testimonial.init}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="font-bold text-base leading-tight" style={{ color: themeColors.text }}>{testimonial.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400 text-base">{'★★★★★'}</div>
                  <span className="text-xs mt-0.5" style={{ color: themeColors.textLight }}>{testimonial.time}</span>
                </div>
                <p className="text-sm leading-relaxed text-left" style={{ color: themeColors.textMuted }}>{testimonial.quote}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center overflow-hidden">
            <p className="text-sm font-semibold mb-6 uppercase tracking-widest" style={{ color: themeColors.textLight }}>Our Alumni Work at Leading Tech Companies</p>

            <div className="relative w-full overflow-hidden pb-4">
              <div className="absolute top-0 left-0 w-24 h-full z-10 pointer-events-none hidden sm:block"
                style={{ background: 'linear-gradient(to right, #fff, transparent)' }}></div>
              <div className="absolute top-0 right-0 w-24 h-full z-10 pointer-events-none hidden sm:block"
                style={{ background: 'linear-gradient(to left, #fff, transparent)' }}></div>

              <div className="flex w-max animate-infinite-scroll">
                {[1, 2].map((_, duplicateIndex) => (
                  <div key={duplicateIndex} className="flex gap-4 pr-4">
                    {[
                      { name: 'IBM', image: 'https://icon.horse/icon/ibm.com' },
                      { name: 'TCS', slug: 'tata' },
                      { name: 'Microsoft', image: 'https://icon.horse/icon/microsoft.com' },
                      { name: 'Amazon', image: 'https://icon.horse/icon/amazon.com' },
                      { name: 'Dell', slug: 'dell' },
                      { name: 'HP', slug: 'hp' },
                      { name: 'Cisco', slug: 'cisco' },
                      { name: 'Accenture', slug: 'accenture' },
                      { name: 'Wipro', slug: 'wipro' },
                      { name: 'Infosys', slug: 'infosys' }
                    ].map(company => (
                      <span key={company.name} className="px-5 py-2.5 font-bold rounded-lg border text-sm flex items-center gap-3 shadow-sm whitespace-nowrap cursor-default"
                        style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border, color: themeColors.textMuted }}>
                        <span className="w-8 h-8 flex items-center justify-center bg-white rounded-md overflow-hidden p-1 shadow-inner shrink-0">
                          <img src={company.image || `https://cdn.simpleicons.org/${company.slug}`} alt={`${company.name} logo`} className="w-full h-full object-contain" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
                        </span>
                        {company.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE SUCCESS STORIES ── */}
      <section className="py-20 border-t relative z-10" style={{ backgroundColor: themeColors.offWhite, borderColor: themeColors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: themeColors.text }}>Watch Our Graduates Succeed</h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: themeColors.textMuted }}>Hear directly from our alumni who transformed their careers with Peopleclick Learning.</p>
          </div>

          <div className="relative w-full overflow-hidden pb-6 pt-4">
            <div className="absolute top-0 left-0 w-16 h-full z-10 pointer-events-none hidden md:block"
              style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }}></div>
            <div className="absolute top-0 right-0 w-16 h-full z-10 pointer-events-none hidden md:block"
              style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }}></div>

            <div className="flex w-max animate-infinite-scroll">
              {[1, 2].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-6 pr-6">
                  {videoTestimonials.map((video, index) => (
                    <div
                      key={`${duplicateIndex}-${index}`}
                      className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[220px] sm:h-[240px] rounded-xl overflow-hidden cursor-pointer group flex-shrink-0 border shadow-xl"
                      style={{ borderColor: themeColors.border }}
                      onClick={() => window.open(video.isShort ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer')}
                    >
                      {video.isShort && video.thumbnail && (
                        <div
                          className="absolute inset-0 w-full h-full bg-cover bg-center blur-md opacity-40 scale-110 transition-transform duration-500 group-hover:scale-125"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${video.thumbnail})` }}
                        />
                      )}
                      <img
                        src={video.thumbnail ? `${process.env.PUBLIC_URL}${video.thumbnail}` : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={`${video.name} Testimonial`}
                        className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${video.isShort ? 'object-contain' : 'object-cover'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 transform transition-transform group-hover:scale-110">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 w-full p-4 text-center border-t border-white/10 bg-black/50 backdrop-blur-md">
                        <div className="font-black text-white text-lg tracking-wide drop-shadow-md">{video.name}</div>
                        <div className="text-xs font-bold text-white/80 uppercase tracking-wider mt-1">{video.role}</div>
                        <div className="text-sm font-black text-yellow-400 mt-1">{video.salary}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BATCH & PRICING CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: themeColors.white }}>
        {/* Background gradient removed */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="font-bold text-sm tracking-widest uppercase mb-2 gradient-text">Coimbatore & Bangalore Batches</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ color: themeColors.text }}>Ready to Build Your Future?</h2>
              <p className="text-lg mb-8" style={{ color: themeColors.textMuted }}>Join the elite rank of Full Stack Developers. Choose a schedule that fits your life.</p>

              <div className="space-y-4">
                <div className="border-2 p-5 rounded-xl flex justify-between items-center"
                  style={{ borderColor: themeColors.red, backgroundColor: 'rgba(238, 47, 68,0.04)' }}>
                  <div>
                    <h4 className="font-bold mb-1 flex items-center gap-2" style={{ color: themeColors.text }}>
                      <CalendarDays className="w-5 h-5" color={themeColors.red} /> FULL STACK DEVELOPMENT
                    </h4>
                    <p className="text-xs tracking-wide" style={{ color: themeColors.textMuted }}>ADMISSION AVAILABLE</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: 'rgba(238, 47, 68,0.1)', borderColor: themeColors.redBorder, border: `1px solid ${themeColors.redBorder}` }}>
                    <span className="gradient-text">Filling Fast</span>
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#lead-form" onClick={handleScrollToForm} className="text-white font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105"
                  style={{ background: themeColors.gradientRed, boxShadow: '0 4px 14px rgba(238, 47, 68,0.35)' }}>
                  Book Free Demo Class
                </a>
                <a href="tel:+918925449073" className="border font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2"
                  style={{ borderColor: themeColors.border, color: themeColors.text }}>
                  <Phone className="w-5 h-5" color={themeColors.red} /> Call +91 8925 449 073
                </a>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white border-2 p-8 sm:p-10 rounded-3xl relative max-w-md mx-auto w-full shadow-xl"
              style={{ borderColor: themeColors.red, boxShadow: '0 8px 40px rgba(238, 47, 68,0.15)' }}>
              <div className="absolute top-0 right-10 -translate-y-1/2 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg text-white"
                style={{ background: themeColors.gradientRed }}>
                SPECIAL OFFER
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.text }}>Comprehensive Package</h3>
                <p className="text-sm" style={{ color: themeColors.textMuted }}>Everything you need to land a MERN Stack job.</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '4-6 months intensive training (200+ hrs)',
                  'MERN Stack full curriculum',
                  '10+ Real-World Projects',
                  '100% Placement Assistance',
                  'Resume & Profile Building',
                  '24/7 Access to Recorded Sessions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: themeColors.textMuted }}>
                    <span className="mt-0.5"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#lead-form" className="block text-center w-full text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: themeColors.gradientRed }}>
                Enquire for Pricing →
              </a>
              <p className="text-center text-xs mt-4 flex items-center justify-center gap-1" style={{ color: themeColors.textLight }}>
                <CreditCard className="w-3 h-3" /> Flexible EMI options available
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t pt-16 pb-8" style={{ backgroundColor: themeColors.text, borderColor: '#2d2d2d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">PEOPLECLICK <span style={{ color: themeColors.red }}>LEARNING</span></div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#9ca3af' }}>We are a leading online education platform offering 50+ courses to enhance your skills and abilities. With over 1,000+ success stories, we help learners get job-ready in Full Stack Development.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Bangalore Office</h4>
              <p className="text-sm" style={{ color: '#9ca3af' }}>#230, Level-3,<br />KAS Officers Colony, Stage 2,<br />Bengaluru, Karnataka 560068</p>

              <h4 className="text-white font-bold mt-6 mb-3">Coimbatore Office</h4>
              <p className="text-sm" style={{ color: '#9ca3af' }}>141A, Ratna RK Buildings 1st Floor,<br />Diwan Bahadur Road, RS Puram,<br />Coimbatore, Tamilnadu 641002</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm" style={{ color: '#9ca3af' }}>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+917619343001" className="transition-colors hover:text-white" style={{ color: themeColors.red }}>+91 7619 343 001 - Bangalore</a></li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+918925449073" className="transition-colors hover:text-white" style={{ color: themeColors.red }}>+91 8925 449 073 - Coimbatore</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:training@peopleclick.in" className="transition-colors hover:text-white" style={{ color: themeColors.red }}>training@peopleclick.in</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center border-t pt-8 text-xs" style={{ borderColor: '#2d2d2d', color: '#6b7280' }}>
            © 2026 Peopleclick Learning. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── MOBILE FLOAT CTA ── */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 bg-white border-t flex gap-3 lg:hidden z-50 transition-transform duration-300 transform ${showFloatCta ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ borderColor: themeColors.border, boxShadow: '0 -4px 20px rgba(0,0,0,0.08)' }}>
        <a href="https://wa.me/918925449073?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20Full%20Stack%20Development%20course" target="_blank" rel="noopener noreferrer"
          className="flex-1 text-white text-center font-bold text-xs sm:text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
          style={{ backgroundColor: '#25d366' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg>
          WhatsApp Us
        </a>
        <a href="#lead-form" className="flex-1 text-center text-white font-bold text-xs sm:text-sm py-3 rounded-lg"
          style={{ background: themeColors.gradientRed }}>
          Get Free Demo
        </a>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <div className="fixed bottom-20 right-4 z-50 lg:bottom-6 lg:right-6">
        <a
          href="https://wa.me/918925449073?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Full%20Stack%20Development%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border-2 border-white"
          style={{ backgroundColor: '#25d366', boxShadow: '0 10px 20px rgba(37,211,102,0.35)' }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-20 bottom-2 w-48 bg-white text-slate-900 text-xs font-bold p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us on WhatsApp!
            <div className="absolute right-0 bottom-3 translate-x-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        </a>
      </div>

      {/* ── VIDEO MODAL ── */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/80" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fullstack;
