import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
/* empty css                           */import 'axios';
/* empty css                          *//* empty css                           *//* empty css                          *//* empty css                              *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           *//* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "what-does-soc-2-mean-to-our-customers-and-prospects", "text": "What does SOC 2 mean to our customers and prospects?" }], "source": `Deepgram received a SOC 2 Type II "clean bill of health" from [Cyberguard Compliance](https://www.cgcompliance.com/). Their six-month audit of Deepgram's security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.

The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We've also previously achieved SOC 2 Type I certification. Type I describes a vendor's systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.

## What does SOC 2 mean to our customers and prospects?

The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements *at a minimum* to ensure their customer's data is secure, available, and private. SOC 2 has five main principles:

1. **Security** - Best practices are implemented to prevent unauthorized access to a company's systems.
2. **Availability** - A company can meet its service level agreements (SLAs) for accessibility.
3. **Confidentiality** - The use, access, and protection of information as stipulated in customer contracts can be met.
4. **Process Integrity** - The company and its systems can achieve their stated purpose.
5. **Privacy** - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.

If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at [security@deepgram.com](mailto:deepgram.comnull). This report is valid until February 2023. You can also read more about our [data privacy compliance](https://developers.deepgram.com/documentation/security/data-privacy/).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>Deepgram received a SOC 2 Type II \u201Cclean bill of health\u201D from <a href="https://www.cgcompliance.com/">Cyberguard Compliance</a>. Their six-month audit of Deepgram\u2019s security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.</p>\n<p>The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We\u2019ve also previously achieved SOC 2 Type I certification. Type I describes a vendor\u2019s systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.</p>\n<h2 id="what-does-soc-2-mean-to-our-customers-and-prospects">What does SOC 2 mean to our customers and prospects?</h2>\n<p>The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements <em>at a minimum</em> to ensure their customer\u2019s data is secure, available, and private. SOC 2 has five main principles:</p>\n<ol>\n<li><strong>Security</strong> - Best practices are implemented to prevent unauthorized access to a company\u2019s systems.</li>\n<li><strong>Availability</strong> - A company can meet its service level agreements (SLAs) for accessibility.</li>\n<li><strong>Confidentiality</strong> - The use, access, and protection of information as stipulated in customer contracts can be met.</li>\n<li><strong>Process Integrity</strong> - The company and its systems can achieve their stated purpose.</li>\n<li><strong>Privacy</strong> - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.</li>\n</ol>\n<p>If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at <a href="mailto:deepgram.comnull">security@deepgram.com</a>. This report is valid until February 2023. You can also read more about our <a href="https://developers.deepgram.com/documentation/security/data-privacy/">data privacy compliance</a>.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' };
const frontmatter = { "title": "Deepgram Has Received SOC 2 Type II Certification", "description": "Deepgram has both SOC 2 Type I and Type II certifications, as defined by the American Institute of Certified Public Accountants (AICPA).", "date": "2022-02-04T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981390/blog/deepgram-reached-soc-2-type-1-certification/DG-reached-SOC2-type1-thumb-554x220%402x.png", "authors": ["ehab-el-ali"], "category": "product-news", "tags": ["privacy", "security"], "seo": { "title": "Deepgram Has Received SOC 2 Type II Certification", "description": "Deepgram has both SOC 2 Type I and Type II certifications, as defined by the American Institute of Certified Public Accountants (AICPA)." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981390/blog/deepgram-reached-soc-2-type-1-certification/DG-reached-SOC2-type1-thumb-554x220%402x.png" }, "shorturls": { "share": "https://dpgr.am/03c00c5", "twitter": "https://dpgr.am/d9cb702", "linkedin": "https://dpgr.am/9fb7248", "reddit": "https://dpgr.am/7758006", "facebook": "https://dpgr.am/cd17324" }, "astro": { "headings": [{ "depth": 2, "slug": "what-does-soc-2-mean-to-our-customers-and-prospects", "text": "What does SOC 2 mean to our customers and prospects?" }], "source": `Deepgram received a SOC 2 Type II "clean bill of health" from [Cyberguard Compliance](https://www.cgcompliance.com/). Their six-month audit of Deepgram's security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.

The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We've also previously achieved SOC 2 Type I certification. Type I describes a vendor's systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.

## What does SOC 2 mean to our customers and prospects?

The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements *at a minimum* to ensure their customer's data is secure, available, and private. SOC 2 has five main principles:

1. **Security** - Best practices are implemented to prevent unauthorized access to a company's systems.
2. **Availability** - A company can meet its service level agreements (SLAs) for accessibility.
3. **Confidentiality** - The use, access, and protection of information as stipulated in customer contracts can be met.
4. **Process Integrity** - The company and its systems can achieve their stated purpose.
5. **Privacy** - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.

If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at [security@deepgram.com](mailto:deepgram.comnull). This report is valid until February 2023. You can also read more about our [data privacy compliance](https://developers.deepgram.com/documentation/security/data-privacy/).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`, "html": '<p>Deepgram received a SOC 2 Type II \u201Cclean bill of health\u201D from <a href="https://www.cgcompliance.com/">Cyberguard Compliance</a>. Their six-month audit of Deepgram\u2019s security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.</p>\n<p>The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We\u2019ve also previously achieved SOC 2 Type I certification. Type I describes a vendor\u2019s systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.</p>\n<h2 id="what-does-soc-2-mean-to-our-customers-and-prospects">What does SOC 2 mean to our customers and prospects?</h2>\n<p>The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements <em>at a minimum</em> to ensure their customer\u2019s data is secure, available, and private. SOC 2 has five main principles:</p>\n<ol>\n<li><strong>Security</strong> - Best practices are implemented to prevent unauthorized access to a company\u2019s systems.</li>\n<li><strong>Availability</strong> - A company can meet its service level agreements (SLAs) for accessibility.</li>\n<li><strong>Confidentiality</strong> - The use, access, and protection of information as stipulated in customer contracts can be met.</li>\n<li><strong>Process Integrity</strong> - The company and its systems can achieve their stated purpose.</li>\n<li><strong>Privacy</strong> - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.</li>\n</ol>\n<p>If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at <a href="mailto:deepgram.comnull">security@deepgram.com</a>. This report is valid until February 2023. You can also read more about our <a href="https://developers.deepgram.com/documentation/security/data-privacy/">data privacy compliance</a>.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-reached-soc-2-type-1-certification/index.md" };
function rawContent() {
  return `Deepgram received a SOC 2 Type II "clean bill of health" from [Cyberguard Compliance](https://www.cgcompliance.com/). Their six-month audit of Deepgram's security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.

The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We've also previously achieved SOC 2 Type I certification. Type I describes a vendor's systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.

## What does SOC 2 mean to our customers and prospects?

The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements *at a minimum* to ensure their customer's data is secure, available, and private. SOC 2 has five main principles:

1. **Security** - Best practices are implemented to prevent unauthorized access to a company's systems.
2. **Availability** - A company can meet its service level agreements (SLAs) for accessibility.
3. **Confidentiality** - The use, access, and protection of information as stipulated in customer contracts can be met.
4. **Process Integrity** - The company and its systems can achieve their stated purpose.
5. **Privacy** - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.

If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at [security@deepgram.com](mailto:deepgram.comnull). This report is valid until February 2023. You can also read more about our [data privacy compliance](https://developers.deepgram.com/documentation/security/data-privacy/).

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>`;
}
function compiledContent() {
  return '<p>Deepgram received a SOC 2 Type II \u201Cclean bill of health\u201D from <a href="https://www.cgcompliance.com/">Cyberguard Compliance</a>. Their six-month audit of Deepgram\u2019s security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.</p>\n<p>The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We\u2019ve also previously achieved SOC 2 Type I certification. Type I describes a vendor\u2019s systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.</p>\n<h2 id="what-does-soc-2-mean-to-our-customers-and-prospects">What does SOC 2 mean to our customers and prospects?</h2>\n<p>The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements <em>at a minimum</em> to ensure their customer\u2019s data is secure, available, and private. SOC 2 has five main principles:</p>\n<ol>\n<li><strong>Security</strong> - Best practices are implemented to prevent unauthorized access to a company\u2019s systems.</li>\n<li><strong>Availability</strong> - A company can meet its service level agreements (SLAs) for accessibility.</li>\n<li><strong>Confidentiality</strong> - The use, access, and protection of information as stipulated in customer contracts can be met.</li>\n<li><strong>Process Integrity</strong> - The company and its systems can achieve their stated purpose.</li>\n<li><strong>Privacy</strong> - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.</li>\n</ol>\n<p>If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at <a href="mailto:deepgram.comnull">security@deepgram.com</a>. This report is valid until February 2023. You can also read more about our <a href="https://developers.deepgram.com/documentation/security/data-privacy/">data privacy compliance</a>.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-reached-soc-2-type-1-certification/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Deepgram received a SOC 2 Type II “clean bill of health” from <a href="https://www.cgcompliance.com/">Cyberguard Compliance</a>. Their six-month audit of Deepgram’s security, availability, and confidentiality found no exceptions to the SOC 2 Type II industry standards as defined by the American Institute of Certified Public Accountants (AICPA). Their audit was conducted from July to December 2021.</p>
<p>The SOC 2 Type II report is the gold standard in SOC audits and provides customers the confidence that a SaaS company has security controls in place, monitors the controls, and optimizes security for their customers. We’ve also previously achieved SOC 2 Type I certification. Type I describes a vendor’s systems and whether their design is suitable to meet relevant trust principles, while Type II details the operational effectiveness of those systems.</p>
<h2 id="what-does-soc-2-mean-to-our-customers-and-prospects">What does SOC 2 mean to our customers and prospects?</h2>
<p>The SOC 2 certifications mean that an independent auditor has examined our systems and processes and determined that we have best practices in place for securely managing data to protect the interests and privacy of our customers. We have been a trusted partner for many SaaS and Enterprise companies and this certification confirms our systems are using industry best practices for security, confidentiality, and privacy. If you are engaged with any SaaS company, they should meet SOC 2 Type I certification requirements <em>at a minimum</em> to ensure their customer’s data is secure, available, and private. SOC 2 has five main principles:</p>
<ol>
<li><strong>Security</strong> - Best practices are implemented to prevent unauthorized access to a company’s systems.</li>
<li><strong>Availability</strong> - A company can meet its service level agreements (SLAs) for accessibility.</li>
<li><strong>Confidentiality</strong> - The use, access, and protection of information as stipulated in customer contracts can be met.</li>
<li><strong>Process Integrity</strong> - The company and its systems can achieve their stated purpose.</li>
<li><strong>Privacy</strong> - The disclosure and disposal of data are in line with the privacy notice of the company and the generally accepted principles of the American Institute of CPAs.</li>
</ol>
<p>If you need a copy of our SOC 2 Type I or Type II attestation or report, please contact us at <a href="mailto:deepgram.comnull">security@deepgram.com</a>. This report is valid until February 2023. You can also read more about our <a href="https://developers.deepgram.com/documentation/security/data-privacy/">data privacy compliance</a>.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}`;
});

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
