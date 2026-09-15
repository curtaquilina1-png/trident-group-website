import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const pages = [
  'index.html','rockscape-solutions.html','construction-solutions.html','our-work.html',
  'for-periti-and-contractors.html','about.html','equipment-and-access.html',
  'request-a-quote.html','contact.html','insights.html','privacy.html','cookies.html',
  'website-terms.html','excavation-malta.html','mini-excavation-difficult-access.html',
  'demolition-works.html','trenching-drainage.html','concrete-breaking.html',
  'interior-excavation-garage-lowering.html','structural-alterations.html'
];

test('every required page exists with unique SEO basics', () => {
  const titles = new Set();
  for (const page of pages) {
    assert.equal(existsSync(page), true, `${page} is missing`);
    const html = readFileSync(page, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title, `${page} needs a title`);
    assert.equal(titles.has(title), false, `${page} title is duplicated`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.match(html, /<link rel="canonical" href="https:\/\/tridentgroupmt\.com\/[^"]*">/);
    assert.match(html, /<main[^>]*id="main-content"/);
  }
});

test('shared assets and technical SEO files exist', () => {
  for (const file of ['assets/site.css','assets/site.js','robots.txt','sitemap.xml','site.webmanifest','CNAME']) {
    assert.equal(existsSync(file), true, `${file} is missing`);
  }
});

test('homepage contains the agreed primary journey', () => {
  const html = readFileSync('index.html', 'utf8');
  assert.match(html, /Excavation, demolition and construction works across Malta/);
  assert.match(html, /Send Project Details/);
  assert.match(html, /View Our Work/);
  assert.match(html, /How we work/);
  assert.doesNotMatch(html, /carousel/i);
});

test('quote form contains role-adaptive professional fields and privacy wording', () => {
  const html = readFileSync('request-a-quote.html', 'utf8');
  for (const field of ['clientRole','accessWidth','occupiedSite','quotationDeadline','drawingRevision','siteMeeting']) {
    assert.match(html, new RegExp(`(?:name|id)="${field}"`));
  }
  assert.match(html, /Drawings, BOQ or method statement/i);
  assert.match(html, /privacy/i);
  const js = readFileSync('assets/site.js', 'utf8');
  assert.match(js, /professional-fields/);
  assert.match(js, /QUICK PROJECT ENQUIRY/);
  assert.match(js, /PROFESSIONAL PROJECT ENQUIRY/);
});

test('unverified contact and legal facts are not guessed', () => {
  const combined = pages.map(page => readFileSync(page, 'utf8')).join('\n');
  assert.doesNotMatch(combined, /\[(PHONE|WHATSAPP|EMAIL|ADDRESS OR SERVICE AREA|LEGAL NAME|REGISTRATION NUMBER|VAT NUMBER IF REQUIRED|BUSINESS HOURS|LICENCE DETAILS|INSURANCE DETAILS|SOCIAL LINKS|RESPONSE EXPECTATION)\]/);
});

test('enquiry page offers quick and professional WhatsApp routes', () => {
  const html = readFileSync('request-a-quote.html', 'utf8');
  assert.match(html, /Quick WhatsApp Enquiry/);
  assert.match(html, /Professional Project Enquiry/);
  assert.match(html, /Continue on WhatsApp/);
  assert.match(html, /35679990305/);
  assert.doesNotMatch(html, /type="file"/);
  assert.doesNotMatch(html, /type="email"[^>]*required/);
  const js = readFileSync('assets/site.js', 'utf8');
  assert.match(js, /wa\.me\/35679990305/);
  assert.match(js, /encodeURIComponent/);
});

test('brand hierarchy and expanded confirmed services are clear', () => {
  const home = readFileSync('index.html', 'utf8');
  const rockscape = readFileSync('rockscape-solutions.html', 'utf8');
  const equipment = readFileSync('equipment-and-access.html', 'utf8');
  assert.ok(home.indexOf('Trident Group Solutions') < home.indexOf('Trident Rockscape Solutions'));
  assert.match(rockscape, /jackhammer/i);
  assert.match(rockscape, /building demolition/i);
  assert.match(equipment, /Coming soon/i);
  assert.match(equipment, /drum cutter/i);
  assert.match(equipment, /site dumper/i);
});
