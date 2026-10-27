import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BlogPost } from '../data/blog';
import {
  BookOpen,
  Clock,
  ArrowRight,
  MessageCircle,
  Tag,
  Search,
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';
import { useSEO } from '../utils/seo';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useSEO({
    title: 'Moving & Storage Guides for Qatar Residents | Doha Local Movers & Packers',
    description: 'Expert relocation guides, villa moving advice, office shifting checklists, and secure storage tips for residents and businesses in Doha, Qatar.',
    canonicalPath: '/blog',
    ogType: 'website',
    ogImage: '/hero-moving-truck.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Qatar Moving & Storage Insights',
      description: 'Practical moving checklists and storage tips for residents across Doha, Lusail, The Pearl, and Qatar.',
      publisher: {
        '@type': 'Organization',
        name: 'Doha Local Movers & Packers',
        url: 'https://wa.me/97450354956',
      },
    },
  });

  const categories = ['All', 'Moving Tips', 'Relocation Guide', 'Checklists', 'Office Moving', 'Storage Services', 'Furniture Care'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <nav className="flex items-center gap-2 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400 font-medium">Moving & Storage Guides</span>
          </nav>
          <span className="hidden sm:inline text-slate-400">Qatar Relocation Knowledge Base</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Doha Moving & Storage Insights
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
            Qatar Relocation & Storage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Expert Guides
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Practical advice, checklists, and packing tips written for homeowners, tenants, and businesses relocating in Doha and across Qatar.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g., permits, storage, villa moving, checklist)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Filter Chips Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
              {selectedCategory === 'All' ? 'All Moving & Storage Articles' : `${selectedCategory} Articles`}
              <span className="text-sm font-semibold text-slate-500 ml-2">({filteredPosts.length})</span>
            </h2>

            <span className="text-xs text-slate-500 hidden sm:inline">
              Updated for Qatar residents • October 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-orange-400 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-700/80">
                      {post.category}
                    </span>
                    <span className="absolute bottom-3 right-3 text-slate-300 text-xs flex items-center gap-1 font-medium bg-slate-900/80 px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-orange-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-2.5">
                      <Link to={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    {post.publishedDate}
                  </span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-600 font-semibold text-base">No articles matched your search query.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 px-4 py-2 bg-orange-500 text-white font-bold rounded-xl text-xs"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Help Banner */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Have a Relocation Question?
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Planning a move in Doha or need storage space?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Chat with our relocation specialists. We provide free quotations and coordinate tower permits, packing materials, and video updates.
              </p>
            </div>

            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ask on WhatsApp (+974 50354956)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
