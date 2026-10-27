import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateQuoteRequest,
  buildWhatsAppQuoteUrl,
  checkQatarBusinessHours,
  OFFICIAL_WHATSAPP_NUMBER,
} from './quote';

test('validateQuoteRequest detects empty mandatory fields', () => {
  const result = validateQuoteRequest({
    name: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    serviceType: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.movingFrom);
  assert.ok(result.errors.movingTo);
  assert.ok(result.errors.movingDate);
  assert.ok(result.errors.serviceType);
});

test('validateQuoteRequest passes on valid inputs', () => {
  const result = validateQuoteRequest({
    name: 'Ahmed Al-Kuwari',
    phone: '+974 5035 4956',
    movingFrom: 'The Pearl, Porto Arabia Tower 12',
    movingTo: 'Lusail Fox Hills',
    movingDate: '2026-11-05',
    serviceType: 'Villa Moving',
    propertyType: '4 Bedroom Villa',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('buildWhatsAppQuoteUrl generates properly formatted URL with encoded parameters', () => {
  const url = buildWhatsAppQuoteUrl({
    name: 'Sarah Connor',
    phone: '+974 33112233',
    movingFrom: 'West Bay',
    movingTo: 'Al Wakrah',
    movingDate: '2026-11-10',
    serviceType: 'Apartment Relocation',
    additionalDetails: 'Includes 1 double-door fridge and 3 king beds',
  });

  assert.ok(url.startsWith(`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=`));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Sarah Connor'));
  assert.ok(decoded.includes('West Bay'));
  assert.ok(decoded.includes('Al Wakrah'));
  assert.ok(decoded.includes('Apartment Relocation'));
  assert.ok(decoded.includes('Includes 1 double-door fridge'));
});

test('checkQatarBusinessHours correctly detects open/closed based on Qatar AST time', () => {
  // 10:00 UTC is 13:00 (1 PM) in Qatar -> Open
  const midDayUtc = new Date(Date.UTC(2026, 9, 25, 10, 0, 0));
  const midDayStatus = checkQatarBusinessHours(midDayUtc);
  assert.equal(midDayStatus.isOpen, true);

  // 01:00 UTC is 04:00 (4 AM) in Qatar -> Closed
  const nightUtc = new Date(Date.UTC(2026, 9, 25, 1, 0, 0));
  const nightStatus = checkQatarBusinessHours(nightUtc);
  assert.equal(nightStatus.isOpen, false);
});

import { BLOG_POSTS } from '../data/blog';
import { getRelatedArticles } from './blog';

test('BLOG_POSTS dataset contains all 12 unique articles with required SEO fields', () => {
  assert.equal(BLOG_POSTS.length, 12);

  const slugs = new Set<string>();
  for (const post of BLOG_POSTS) {
    assert.ok(post.slug, 'Post must have a slug');
    assert.ok(!slugs.has(post.slug), `Duplicate slug detected: ${post.slug}`);
    slugs.add(post.slug);

    assert.ok(post.title && post.title.length > 5, 'Post must have a valid title');
    assert.ok(post.metaDescription && post.metaDescription.length > 10, 'Post must have metaDescription');
    assert.ok(post.content && post.content.length > 50, 'Post must have substantial content');
  }
});

test('getRelatedArticles returns exactly 3 relevant articles excluding current article', () => {
  const currentPost = BLOG_POSTS[0]; // 'how-to-find-the-best-movers-in-doha-qatar'
  const related = getRelatedArticles(currentPost, BLOG_POSTS, 3);

  assert.equal(related.length, 3);
  for (const item of related) {
    assert.notEqual(item.post.slug, currentPost.slug, 'Current article must not be in related articles');
    assert.ok(item.matchReason, 'Related article should have a match reason');
  }
});

test('getRelatedArticles prioritizes same-category and complementary topics for storage', () => {
  const storagePost = BLOG_POSTS.find((p) => p.category === 'Storage Services')!;
  assert.ok(storagePost, 'Storage post should exist');

  const related = getRelatedArticles(storagePost, BLOG_POSTS, 3);
  assert.equal(related.length, 3);

  // At least one of the recommendations should also be in Storage Services or related furniture/care
  const matchesCategoryOrStorage = related.some(
    (r) => r.post.category === 'Storage Services' || r.post.slug.includes('storage') || r.post.slug.includes('furniture')
  );
  assert.equal(matchesCategoryOrStorage, true);
});

import { TRANSLATIONS } from '../context/LanguageContext';

test('TRANSLATIONS dictionary contains non-empty English and Arabic values for all keys', () => {
  const keys = Object.keys(TRANSLATIONS);
  assert.ok(keys.length > 20, 'Should have comprehensive translations');

  for (const key of keys) {
    const entry = TRANSLATIONS[key];
    assert.ok(entry.en && entry.en.trim().length > 0, `Missing English translation for ${key}`);
    assert.ok(entry.ar && entry.ar.trim().length > 0, `Missing Arabic translation for ${key}`);
  }
});

