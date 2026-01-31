'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Play, Star, CheckCircle, Menu, X, Cpu, FileText,
  BarChart3, Map, Zap, Brain, Trophy, MessageSquare
} from 'lucide-react';

// Constants - Expo App URLs
const APP_URL = 'https://www.prepassist.in/login';

// Intersection Observer Hook for Reveal Animation
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = '' }: { end: string; suffix?: string }) {
  return (
    <div className="stat-value">
      {end}{suffix}
    </div>
  );
}

// PrepAssist Logo Component
function PrepAssistLogo({ size = 'default' }: { size?: 'small' | 'default' }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <span className="font-bold text-gray-900 text-lg">
        Prep<span className="text-gray-500 font-medium">Assist</span>
      </span>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, iconColor }: {
  icon: any;
  title: string;
  description: string;
  iconColor: string;
}) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`feature-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`icon-box ${iconColor}`}>
        <Icon className="w-6 h-6" style={{ color: iconColor.includes('orange') ? '#f97316' : iconColor.includes('green') ? '#10b981' : '#2563eb' }} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, role, content, avatar }: {
  name: string;
  role: string;
  content: string;
  avatar: string;
}) {
  return (
    <div className="testimonial-card">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed text-sm">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { icon: Cpu, title: 'Adaptive Question Engine', description: 'Our AI parses The Hindu, Indian Express, and NCERTs to generate exam-ready MCQs. It adapts difficulty based on your performance history.', iconColor: '' },
    { icon: FileText, title: 'Mains Evaluator', description: 'Get feedback on structure, vocabulary, and relevance in seconds. We grade against topper copies.', iconColor: 'icon-box-orange' },
    { icon: Zap, title: 'Smart News Feed', description: 'Auto-tagged current affairs filtered specifically for syllabus relevance.', iconColor: '' },
    { icon: Map, title: 'Dynamic Roadmap', description: 'Missed a day? Our scheduler automatically adjusts your plan to keep you on track.', iconColor: 'icon-box-orange' },
    { icon: BarChart3, title: 'Progress Analytics', description: 'Track performance with beautiful dashboards, identify weak areas and optimize your study time.', iconColor: 'icon-box-green' },
    { icon: Brain, title: 'AI Study Assistant', description: 'Get instant explanations, summaries, and personalized study recommendations.', iconColor: '' },
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'UPSC CSE 2024 - AIR 47', content: 'This platform transformed my preparation. The AI-generated MCQs helped me identify weak areas I never knew existed.', avatar: 'PS' },
    { name: 'Rahul Krishnan', role: 'UPSC CSE 2024 - AIR 156', content: 'The roadmap feature is a game-changer. I could finally see my entire preparation journey mapped out clearly.', avatar: 'RK' },
    { name: 'Ananya Gupta', role: 'UPSC CSE 2024 - AIR 289', content: 'Daily current affairs with smart summaries saved me hours every day. Absolutely essential for serious aspirants.', avatar: 'AG' },
  ];

  const stats = [
    { value: '1,625', suffix: '+', label: 'Active Aspirants' },
    { value: '54', suffix: '+', label: 'Success Stories' },
    { value: '10', suffix: '%', label: 'Selection Rate' },
    { value: '0M', suffix: '+', label: 'MCQs Generated' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto glass-light rounded-2xl px-6 py-3 flex items-center justify-between">
          <PrepAssistLogo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">FEATURES</a>
            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">TESTIMONIALS</a>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">PRICING</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={APP_URL} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-4 py-2">
              Log in
            </a>
            <a href={APP_URL} className="btn-blue text-sm py-2.5 px-5">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass-light rounded-2xl p-6 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">Testimonials</a>
            <Link href="/pricing" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</Link>
            <a href={APP_URL} className="btn-blue w-full text-sm py-3 text-center block">
              Sign Up
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="badge mb-8">
                <span className="badge-dot" />
                <span>NEW: MAINS AI EVALUATOR 2.0</span>
              </div>

              {/* Main Headline */}
              <h1 className="heading-display text-5xl md:text-6xl lg:text-[4.5rem] mb-6 text-gray-900 leading-[1.1]">
                Crack UPSC<br />
                Smarter<br />
                <span className="text-gradient-blue">With AI</span><br />
                <span className="text-gradient-blue">Powered</span><br />
                <span className="text-gradient-yellow">Learning.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base text-gray-500 max-w-md mb-10 leading-relaxed">
                The only AI-powered operating system for serious aspirants. Generate quizzes from news, get instant answer feedback, and visualize your progress.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a href={APP_URL} className="btn-primary">
                  Start Learning Free <ArrowRight className="w-4 h-4" />
                </a>
                <button className="btn-secondary">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4">
                <div className="avatar-stack flex">
                  {['👩‍🎓', '👨‍💼', '👩‍💻', '👨‍🎓'].map((emoji, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-base">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    <strong className="text-gray-900">15,000+</strong> aspirants trusting us
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="phone-mockup float">
                <div className="phone-screen p-4 pt-12">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-gray-900 text-sm">Modern History</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">12/20</span>
                  </div>

                  {/* Question Card */}
                  <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                    <p className="text-gray-900 font-medium text-sm leading-relaxed">
                      Which of the following introduced the principle of communal representation in India?
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2">
                    <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">A</span>
                      <span className="text-sm text-gray-700">Indian Councils Act, 1892</span>
                    </div>
                    <div className="border-2 border-green-500 bg-green-50 rounded-xl p-3 flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-sm text-green-700 font-medium">Indian Councils Act, 1909</span>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-white">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">C</span>
                      <span className="text-sm text-gray-700">Government of India Act, 1919</span>
                    </div>
                  </div>

                  {/* Next Button */}
                  <button className="w-full bg-blue-600 text-white rounded-xl py-3 mt-4 font-medium text-sm">
                    Next Question
                  </button>
                </div>

                {/* Floating Notification */}
                <div className="notification-popup -top-4 -right-4 flex items-center gap-3" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Streak Maintained!</div>
                    <div className="text-xs text-gray-500">12 days in a row</div>
                  </div>
                </div>

                <div className="notification-popup bottom-24 -left-8 flex items-center gap-3" style={{ animationDelay: '1s' }}>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">AI Analysis Ready</div>
                    <div className="text-xs text-gray-500">Evaluation complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="heading-display text-4xl md:text-5xl mb-4 text-gray-900">
              A complete operating system
            </h2>
            <h2 className="heading-display text-4xl md:text-5xl mb-6 text-gray-400">
              for your preparation.
            </h2>
            <p className="text-gray-500 max-w-xl">
              We combined the best study tools into one cohesive platform. No more switching between apps.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
              />
            ))}
          </div>

          {/* View All Features Link */}
          <div className="mt-12 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View all features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl md:text-5xl mb-2 text-gray-900">
              Loved by India's
            </h2>
            <h2 className="heading-display text-4xl md:text-5xl mb-6 text-gradient-yellow">
              top achievers
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Join thousands of aspirants who cleared UPSC with our platform.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="cta-section text-center text-white">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Ready to streamline your prep?
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              Join thousands of serious aspirants using AI to clear the toughest exam in the world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={APP_URL} className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Get Started Free
              </a>
              <button className="border border-gray-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <PrepAssistLogo size="small" />
          <div className="text-gray-400 text-sm">
            © 2026 PrepAssist. All rights reserved. Built with ❤️ for aspirants.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
