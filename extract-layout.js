const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dumpDir = path.join(__dirname, '..', 'original-site-dump', 'dump');
const componentsDir = path.join(__dirname, 'src', 'components', 'layout');
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');

if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

// Read original HTML
const html = fs.readFileSync(path.join(dumpDir, 'index.html'), 'utf8');
const $ = cheerio.load(html);

// Extract Header
const headerSticky = $('#sticky').parent().html(); // This gets the outer HTML if we query the parent, but wait, cheerio $() returns the element.
// Let's just use string parsing for safety on original HTML to avoid cheerio formatting issues
const bodyContent = html.substring(html.indexOf('<body>') + 6, html.indexOf('</body>'));

// The header starts with <main class="main"> and ends right before <section class="new-banner-2023">
let headerHtml = '';
let footerHtml = '';

const bannerIndex = bodyContent.indexOf('<section class="new-banner-2023">');
if (bannerIndex !== -1) {
    headerHtml = bodyContent.substring(0, bannerIndex);
}

const footerIndex = bodyContent.indexOf('<footer class="footer pt-5 pb-5">');
if (footerIndex !== -1) {
    footerHtml = bodyContent.substring(footerIndex);
} else {
    // fallback
    footerHtml = bodyContent.substring(bodyContent.length - 5000);
}

// Clean up backticks and variables
const cleanHtmlForJsx = (str) => str.replace(/`/g, '\\`').replace(/\$/g, '\\$');

fs.writeFileSync(path.join(componentsDir, 'RawHeader.tsx'), `
import React from 'react';
export default function RawHeader() {
  return <div dangerouslySetInnerHTML={{ __html: \`${cleanHtmlForJsx(headerHtml)}\` }} />;
}
`);

fs.writeFileSync(path.join(componentsDir, 'RawFooter.tsx'), `
import React from 'react';
export default function RawFooter() {
  return <div dangerouslySetInnerHTML={{ __html: \`${cleanHtmlForJsx(footerHtml)}\` }} />;
}
`);

// Now write the new page.tsx
const newPageTsx = `
import React from 'react';
import RawHeader from '../components/layout/RawHeader';
import RawFooter from '../components/layout/RawFooter';
import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import Services from '../components/home/Services';
import Cases from '../components/home/Cases';
import Process from '../components/home/Process';
import LeadMagnet from '../components/home/LeadMagnet';
import Faq from '../components/home/Faq';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <RawHeader />
      <main className="bg-white">
        <Hero />
        <SocialProof />
        <Services />
        <LeadMagnet />
        <Cases />
        <Process />
        <Faq />
        <CTA />
      </main>
      <RawFooter />
    </>
  );
}
`;

fs.writeFileSync(pagePath, newPageTsx);
console.log('Successfully generated layout components and updated page.tsx');
