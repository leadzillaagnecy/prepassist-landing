'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, X, Shield, Clock, Gift, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Constants - Expo App URLs
const APP_URL = 'https://www.prepassist.in/login';

// PrepAssist Logo Component
function PrepAssistLogo() {
    return (
        <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
                <path d="M30 70 L30 30 L50 15 L50 35 L40 42 L40 58 L50 65 L50 85 Z" fill="#F5A623" />
                <path d="M70 30 L70 70 L50 85 L50 65 L60 58 L60 42 L50 35 L50 15 Z" fill="#2196F3" />
            </svg>
            <span className="font-bold text-gray-900 text-xl heading-display">
                Prep<span className="text-gray-500">Assist</span>
            </span>
        </div>
    );
}

// Pricing Feature Row
function PricingFeature({ text, included, muted = false }: { text: string; included: boolean; muted?: boolean }) {
    return (
        <div className={`flex items-center gap-3 py-2.5 ${muted ? 'opacity-50' : ''}`}>
            {included ? (
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            ) : (
                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
            )}
            <span className={`text-sm ${included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>{text}</span>
        </div>
    );
}

// FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 flex items-center justify-between text-left"
            >
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pb-5 text-gray-600 text-sm leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function PricingPage() {
    const basicFeatures = [
        { text: 'Unlimited MCQs Practice', included: true },
        { text: 'Current Affairs Updates', included: true },
        { text: 'Unlimited Notes & Tags', included: true },
        { text: 'AI MCQ Generator', included: true },
        { text: 'PDF MCQ Extraction', included: true },
        { text: 'Essay Practice Mode', included: true },
        { text: 'Basic Analytics', included: true },
        { text: 'Email Support', included: true },
        { text: 'Personalized Study Roadmap', included: false, muted: true },
        { text: 'Mind Map Builder', included: false, muted: true },
        { text: 'Visual Reference Library', included: false, muted: true },
        { text: 'Priority Support 24/7', included: false, muted: true },
    ];

    const premiumFeatures = [
        { text: 'Everything in Basic', included: true },
        { text: 'Personalized Study Roadmap', included: true },
        { text: 'Mind Map Builder', included: true },
        { text: 'Visual Reference Library', included: true },
        { text: 'Offline Access', included: true },
        { text: 'Mock Test Series', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Priority Support 24/7', included: true },
        { text: 'Early Access to Features', included: true },
        { text: 'Personalized Guidance', included: true },
        { text: 'Interview Prep Material', included: true },
        { text: 'Weekly Study Reports', included: true },
    ];

    const faqs = [
        {
            question: 'Can I cancel my subscription anytime?',
            answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
        },
        {
            question: 'Is there a free trial?',
            answer: 'Yes! Both plans include a 7-day free trial. You can explore all features before committing to a subscription.',
        },
        {
            question: 'Can I switch between plans?',
            answer: 'Absolutely. You can upgrade or downgrade your plan at any time. The price difference will be prorated.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe.',
        },
        {
            question: 'Is my data secure?',
            answer: 'Yes, we use industry-standard encryption and security measures to protect your data. Your information is never shared with third parties.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    href="/"
                    className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                </Link>
            </div>

            {/* Header */}
            <section className="pt-24 pb-12 px-6 text-center">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">PRICING</span>
                <h1 className="heading-display text-4xl md:text-5xl text-gray-900 mt-4 mb-4">
                    Simple, transparent pricing
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Choose the plan that fits your UPSC preparation needs
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Basic Plan */}
                        <div className="pricing-card">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 heading-display">Basic</h3>
                            <p className="text-gray-500 text-sm mb-6">Great for getting started with UPSC prep</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-2xl font-bold text-gray-900">₹</span>
                                <span className="text-5xl font-bold text-gray-900 heading-display">399</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <div className="space-y-1 mb-8">
                                {basicFeatures.map((feature, i) => (
                                    <PricingFeature key={i} {...feature} />
                                ))}
                            </div>

                            <a
                                href={APP_URL}
                                className="w-full bg-gray-100 text-gray-900 font-semibold py-4 px-6 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                Get Basic Plan <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Premium Plan */}
                        <div className="pricing-card popular">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 heading-display">Premium</h3>
                            <p className="text-gray-500 text-sm mb-6">Complete UPSC preparation toolkit</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-2xl font-bold text-gray-900">₹</span>
                                <span className="text-5xl font-bold text-gray-900 heading-display">599</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <div className="space-y-1 mb-8">
                                {premiumFeatures.map((feature, i) => (
                                    <PricingFeature key={i} {...feature} />
                                ))}
                            </div>

                            <a
                                href={APP_URL}
                                className="w-full btn-blue font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2"
                            >
                                Get Premium Plan <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-8 mt-12 py-6">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Shield className="w-5 h-5 text-green-500" />
                            <span className="text-sm font-medium">Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-medium">7-Day Free Trial</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Gift className="w-5 h-5 text-orange-500" />
                            <span className be className="text-sm font-medium">Cancel Anytime</span>
                        </div>
                    </div>

                    {/* Info Banner */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center mt-8">
                        <p className="text-blue-700 text-sm">
                            <strong>ℹ️</strong> Both plans include a 7-day free trial. Upgrade to Premium for complete access to all features.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="heading-display text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="bg-white rounded-2xl border border-gray-100 px-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="cta-section p-12 text-center">
                        <h3 className="heading-display text-2xl font-bold text-white mb-3">Still have questions?</h3>
                        <p className="text-gray-400 mb-6">Our team is here to help you choose the right plan</p>
                        <button className="btn-blue font-semibold py-3 px-8 rounded-xl inline-flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <PrepAssistLogo />
                    <p className="text-gray-400 text-sm">© 2026 PrepAssist. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
