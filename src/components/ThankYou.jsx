import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  const themeColors = {
    red: 'rgba(238, 47, 68)',
    redBg: 'rgba(238, 47, 68, 0.08)',
    redBorder: 'rgba(238, 47, 68, 0.25)',
    white: '#ffffff',
    text: '#1a1a2e',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    gradientRed: 'rgba(238, 47, 68)',
  };

  useEffect(() => {
    document.title = 'Thank You | PeopleClick';

    // Add noindex meta tag to prevent search engines from indexing the thank you page
    // This is SEO best practice for post-conversion pages.
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'noindex, nofollow';

    return () => {
      // Cleanup when leaving the page (optional, depending on if you want it indexed later)
      metaRobots.content = 'index, follow';
    };
  }, []);

  const FormCheckIcon = () => (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ stroke: themeColors.red }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center border" style={{ borderColor: themeColors.border }}>
        <FormCheckIcon />
        <h2 className="text-3xl font-black mb-4" style={{ color: themeColors.text }}>You're Booked!</h2>
        <p className="text-base mb-8 leading-relaxed" style={{ color: themeColors.textMuted }}>
          Thank you for your interest. Our Digital Marketing team will call you within 2 hours to confirm your free demo class details.
        </p>
        
        <div className="bg-red-50 p-6 rounded-2xl border mb-8 text-left" style={{ borderColor: themeColors.redBorder }}>
          <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: themeColors.text }}>
            <CheckCircle className="w-5 h-5" style={{ color: themeColors.red }} /> What happens next?
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: themeColors.textMuted }}>
            <li className="flex items-start gap-2">
              <span className="font-bold text-gray-400">1.</span> We review your details.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-gray-400">2.</span> A career counselor reaches out.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-gray-400">3.</span> Your demo slot is confirmed.
            </li>
          </ul>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center w-full gap-2 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
          style={{ background: themeColors.gradientRed, boxShadow: '0 4px 14px rgba(238, 47, 68,0.35)' }}
        >
          <ArrowLeft className="w-5 h-5" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
