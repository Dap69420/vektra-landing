import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Music, Shield, Sliders, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/vektraData';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'artists', label: 'For Artists' },
    { id: 'labels', label: 'For Labels' },
    { id: 'discord', label: 'Discord Bot' },
    { id: 'security', label: 'Storage & QC' }
  ];

  const filteredItems = filterCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === filterCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#1f2730]" id="faq">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
          FAQ &amp; Knowledge Base
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e7edf3] tracking-tight">
          Frequently asked questions
        </h2>
        <p className="text-[#9aa6b2] text-base mt-3">
          Everything you need to know about demo submissions, staff dashboards, and per-guild setup.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-[#11161a] text-[#9aa6b2] hover:text-[#e7edf3] border border-[#1f2730]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl bg-[#11161a] border border-[#1f2730] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#161c22]/50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-[#e7edf3]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#9aa6b2] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-[#9aa6b2] leading-relaxed border-t border-[#1f2730]/60 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="mt-12 p-6 rounded-2xl bg-[#11161a] border border-[#1f2730] text-center space-y-3">
        <h4 className="text-base font-bold text-[#e7edf3]">Have more questions or need custom label setup?</h4>
        <p className="text-xs text-[#9aa6b2] max-w-md mx-auto">
          Join our Discord server where label managers and the Vektra engineering team assist with guild onboarding.
        </p>
        <div className="pt-2">
          <a
            href="https://discord.gg/Hysd3GSQxQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161c22] hover:bg-[#1f2730] border border-[#1f2730] text-xs font-semibold text-[#e7edf3]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Join Vektra Discord Community</span>
          </a>
        </div>
      </div>

    </section>
  );
}
