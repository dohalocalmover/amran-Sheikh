import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { getRelatedArticles } from '../utils/blog';
import { useSEO } from '../utils/seo';
import {
  Clock,
  Calendar,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../utils/quote';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Compute related articles based on category affinity and keyword relevance
  const relatedArticles = useMemo(() => {
    if (!post) return [];
    return getRelatedArticles(post, BLOG_POSTS, 3);
  }, [post]);

  // Structured Data Schema for Search Engines
  const schemaData = useMemo(() => {
    if (!post) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: post.coverImage,
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: {
        '@type': 'Organization',
        name: 'Doha Local Movers & Packers',
        url: 'https://wa.me/97450354956',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Doha Local Movers & Packers',
        logo: {
          '@type': 'ImageObject',
          url: '/assets/aistudio/file_0000000093188207b1a2d13ffb752130_f62f0274.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': typeof window !== 'undefined' ? window.location.href : '',
      },
    };
  }, [post]);

  // Hook to keep Title, Meta Description, Dynamic Canonical, and JSON-LD synchronized
  useSEO({
    title: post ? `${post.title} | Doha Local Movers & Packers` : 'Article Not Found | Doha Local Movers',
    description: post ? post.metaDescription : 'The requested Qatar moving and storage guide could not be found.',
    canonicalPath: post ? `/blog/${post.slug}` : '/blog',
    ogType: 'article',
    ogImage: post ? post.coverImage : undefined,
    structuredData: schemaData,
  });

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">Article Not Found</h1>
        <p className="text-slate-600 mt-2 text-sm">The requested moving or storage guide could not be located.</p>
        <Link
          to="/blog"
          className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors"
        >
          Back to All Guides
        </Link>
      </div>
    );
  }

  const waArticleQuery = encodeURIComponent(
    `Hello Doha Local Movers, I was reading your guide "${post.title}" and would like to ask a question / get a moving quotation in Qatar.`
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-900 text-white border-b border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs">
          <nav className="flex items-center gap-2 text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-orange-400 font-medium truncate max-w-[180px] sm:max-w-xs md:max-w-md">
              {post.title}
            </span>
          </nav>

          <Link
            to="/blog"
            className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold shrink-0 ml-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Metadata */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-xs tracking-wide">
                {post.category}
              </span>
              <span className="text-slate-500 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
              <span className="text-slate-500 text-xs flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.publishedDate}
              </span>
            </div>

            {/* Exactly One Clear H1 on the Page */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {post.summary}
            </p>
          </div>

          {/* Featured Image with High-Quality Alt Attribute */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-10 aspect-[16/9] bg-slate-900 relative">
            <img
              src={post.coverImage}
              alt={`${post.title} - Doha Local Movers & Packers in Qatar`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Key Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="bg-orange-50/70 border border-orange-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4 font-heading">
                <Sparkles className="w-5 h-5 text-orange-600" />
                Key Takeaways for Qatar Residents
              </h2>
              <div className="space-y-2.5">
                {post.keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Body Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h2 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 font-heading">
                    {paragraph.replace('### ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-slate-900 mt-6 mb-2 font-heading">
                    {paragraph.replace('#### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('---')) {
                return <hr key={index} className="my-8 border-slate-200" />;
              }
              if (paragraph.startsWith('* ')) {
                const listItems = paragraph.split('\n* ');
                return (
                  <ul key={index} className="space-y-2 my-4 list-disc pl-5 text-sm sm:text-base text-slate-700">
                    {listItems.map((item, i) => (
                      <li key={i}>{item.replace('* ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const orderedItems = paragraph.split(/\n\d+\.\s/);
                return (
                  <ol key={index} className="space-y-2 my-4 list-decimal pl-5 text-sm sm:text-base text-slate-700">
                    {orderedItems.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Contextual WhatsApp Consultation & Internal Links */}
          <div className="mt-10 p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Relocation & Storage Services in Qatar
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">Need Moving or Storage Support in Doha?</h2>
              <p className="text-xs sm:text-sm text-slate-300">
                In-house storage with real-time video updates, furniture packing, carpentry assembly, and villa moves across Qatar.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/storage-services"
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 text-center transition-colors"
              >
                Storage Facility
              </Link>
              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${waArticleQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* RELATED ARTICLES SECTION - Topic-Driven & Engagement-Focused */}
          <section className="mt-16 pt-12 border-t border-slate-200">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  Related Articles
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                  Suggested Reading for Your Move
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Handpicked guides matched to <strong>{post.category}</strong> to help you plan with confidence.
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors group self-start sm:self-auto shrink-0"
              >
                <span>View all 12 guides</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Related Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.post.slug}
                  className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Card Thumbnail Image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                    <img
                      src={rel.post.coverImage}
                      alt={`${rel.post.title} - Doha Local Movers Guide`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white text-[11px] font-bold">
                        {rel.post.category}
                      </span>
                    </div>

                    {/* Reading Time */}
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-400" />
                        {rel.post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Topic Match Tag */}
                      <div className="mb-2.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/60">
                          <Sparkles className="w-3 h-3 text-orange-500" />
                          {rel.matchReason}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2 leading-snug font-heading">
                        <Link to={`/blog/${rel.post.slug}`}>{rel.post.title}</Link>
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {rel.post.summary}
                      </p>
                    </div>

                    {/* Footer Link */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/blog/${rel.post.slug}`}
                        className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[11px] text-slate-400 font-medium">
                        {rel.post.publishedDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Engagement Banner Below Related Articles */}
            <div className="mt-8 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 rounded-2xl border border-orange-200 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Need Guidance for Your Upcoming Move or Storage?
                  </h3>
                  <p className="text-xs text-slate-600">
                    Our team provides advice, elevator coordination tips, and rapid quotes on WhatsApp (+974 50354956).
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hello Doha Local Movers, I have a question about ${post.title} and moving/storage in Qatar.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};
