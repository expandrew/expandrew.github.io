---
title: Resume
footer: false
layout: resume
permalink: /resume/
date: 20180503
---

{::nomarkdown}
<!-- Overrides for regular site styles -->
<style>
  .wrapper { max-width: calc(960px - (30px * 2)) !important; }
  .post-content { margin-bottom: 0; }
  .page-content { padding-bottom: 0; }
  a, a:visited, a:active, a:hover {
    color: unset;
    text-decoration: none;
  }
  @media print {
    .page-content { padding: 0; }
    .site-header { display: none !important; }
  }
</style>

<!-- Tachyons -->
<link rel="stylesheet" href="{{ "/assets/css/tachyons.min.css" | relative_url }}"/>
<link rel="stylesheet" href="{{ "/assets/css/tachyons-print.css" | relative_url }}">

<!-- Resume -->
<article class="sans-serif">
  <!-- Greeting (Large) -->
  <section id="top" class="db-ns dn mb4 w-100-ns">
    <h1 class="f3 lh-title mb3 mt0">👋 Hi, I'm Andrew M Westling, a software engineer in <span class="dib">Brooklyn, NY.</span></h1>
    <a class="b--gray ba black br2 dib f6 ph3 pv1" onclick="ga('send','event', 'Resume', 'download')" href="{{ "/assets/resume/andrew_westling_resume.pdf" | relative_url }}" target="_blank" download>📄 Download as PDF</a>
    <a class="b--gray ba black br2 dib f6 ph3 pv1" onclick="ga('send','event', 'Resume', 'print')" href="javascript:window.print()">🖨 Print this page</a>
  </section>
  <!-- Greeting (Small) -->
  <section id="contact-s" class="db dn-ns mb4 w-100-ns">
    <a class="b--gray ba black br2 dib dn-p f6 mb4 ph3 pv2" onclick="ga('send','event', 'Resume', 'download')" href="{{ "/assets/resume/andrew_westling_resume.pdf" | relative_url }}" target="_blank" download>📄 Download as PDF</a>
    <div class="fl-p">
      <img class="dib-p dn" src="/assets/a.png" style="height: 48px; width: 48px; margin-right: 10px; border-radius: 50%;"/>
    </div>
    <div id="date-updated" class="dn db-p fr-p">
      <p class="f7 light-gray">{{ page.date }}</p>
    </div>
    <div>
      <h1 class="f4 lh-title mb0-p mf3 mt0"><strong class="dib">Andrew M Westling</strong>, <span class="dib f5">Software Engineer</span></h1>
      <p class="lh-title mb0-p mf3 mt0">
        <a class="black db dib-p link" onclick="ga('send','event', 'Resume', 'email')" href="mailto:a@andrewwestling.com" target="_blank">a@andrewwestling.com</a>
        <span class="dib-p dn"> | </span>
        <a class="black db dib-p link" onclick="ga('send','event', 'Resume', 'phone')" href="tel:16468010105" target="_blank">+1 (646) 801-0105</a>
        <span class="dib-p dn"> | </span>
        <span class="db dib-p">Brooklyn, NY</span>
      </p>
    </div>
  </section>
  <div class="fl-p flex flex-column-reverse flex-row-ns flex-wrap w-100-p">
    <!-- Sidebar -->
    <section id="sidebar" class="f6 fl-p flex flex-column flex-grow pr3-ns pr3-p w-40-ns w-third-p">
      <!-- Contact -->
      <div id="contact-ns" class="db-ns dn mb3">
        <h1 class="b f4 lh-title mb2 mt0">Say Hello</h1>
        <p class="lh-copy mt0-ns">
          <a class="db link underline-hover" onclick="ga('send','event', 'Resume', 'email')" href="mailto:a@andrewwestling.com" target="_blank">a@andrewwestling.com</a>
          <a class="db link underline-hover" onclick="ga('send','event', 'Resume', 'phone')" href="tel:16468010105" target="_blank">+1 (646) 801-0105</a>
        </p>
      </div>
      <!-- Education -->
      <div id="education" class="mb3 order-1-ns order-2">
        <h1 class="b f4 lh-title mb2 mt0">Education</h1>
        <p><span class="dib">Bachelor of Architecture,</span> <span class="dib">University of Oregon, 2014</span></p>
      </div>
      <!-- Tools -->
      <div id="tools" class="mb3 order-2-ns order-1">
        <h1 class="b f4 lh-title mb2 mt0">Tools</h1>
        <p class="mb2"><strong>JavaScript</strong><br>ES6+, AngularJS, Next.js, React/Redux, Node.js, GraphQL, webpack, grunt/gulp, jQuery</p>
        <p class="mb2"><strong>UI</strong><br>Storybook, styled-components, HTML5/SCSS/CSS, Foundation, Bootstrap, Tachyons</p>
        <p class="mb2"><strong>Testing</strong><br>Jest, Enzyme, Jasmine, Karma, Mocha, Chai</p>
        <p class="mb2"><strong>General</strong><br>Django, Docker, nginx, Solr, Git, Bash, Amazon Web Services (AWS), Segment, CircleCI, Heroku, Rails</p>
      </div>
      <div id="date-updated" class="dn-p order-3">
        <p class="f7 light-gray">{{ page.date }}</p>
      </div>
    </section>
    <!-- Experience -->
    <section id="experience" class="fl-p flex flex-column flex-grow w-60-ns w-two-thirds-p">
      <h1 class="b f4 lh-title mb2 mt0">Experience</h1>
      <!-- Architizer -->
      <div class="mb3">
        <div class="mb2">
          <span class="db f5 mt0 lh-title"><strong><a class="link underline"href="https://architizer.com" target="_blank">Architizer</a></strong>, Software Engineer</span>
          <span class="db f7 gray i lh-copy mt0">September 2015 – present, New York City</span>
        </div>
        <div class="f6 lh-copy mb3">
          <p class="mb2">Full-stack/frontend-focused feature development and infrastructure maintenance for Architizer’s marketplace for building-products.</p>
          <ul class="lh-copy ml3">
            <li>Led frontend efforts for large feature projects, including a private messaging interface, and directory interfaces to Solr search indexes <span class="dib f7 gray i">(AngularJS, SCSS, Django, Solr, Haystack)</span></li>
            <li>Established and maintained a UI component system to facilitate faster feature development and improve collaboration with designers <span class="dib f7 gray i">(React, Next.js, Storybook, styled-components, SCSS)</span></li>
            <li>Managed and extended integrations with external tools for analytics, error logging, marketing, and customer support <span class="dib f7 gray i">(Segment)</span></li>
            <li>Optimized frontend infrastructure to speed up deployment and improve test coverage <span class="dib f7 gray i">(Node.js, CircleCI, AWS, Docker, gulp)</span></li>
            <li>Assisted in infrastructure cleanup, including pruning AWS resources to reduce costs, and cleanly refactoring stale application code</li>
            <li>Demonstrated technical leadership in onboarding new hires, code reviews, and promoting collaborative engineering culture</li>
          </ul>
        </div>
      </div>
      <!-- EyeCue Lab -->
      <div class="mb3">
        <div class="mb2">
          <span class="db f5 mt0 lh-title"><strong><a class="link underline" href="http://eyecuelab.com/" target="_blank">EyeCue Lab</a></strong>, Software Engineer</span>
          <span class="db f7 gray i lh-copy mt0">October 2014 – August 2015, Portland, Oregon</span>
        </div>
        <div class="f6 lh-copy mb3">
          <p class="mb2">Internship-to-hire. Consultancy/agency setting.</p>
          <ul class="lh-copy ml3">
            <li>Built marketing pages and full-stack features for web applications and client projects <span class="dib f7 gray i">(Rails, AngularJS)</span></li>
            <li>Delivered three client projects during my employment</li>
          </ul>
        </div>
      </div>
      <!-- Epicodus -->
      <div class="mb3">
        <div class="mb2">
          <span class="db f5 mt0 lh-title"><strong><a class="link underline" href="https://epicodus.com/" target="_blank">Epicodus</a></strong>
          <span class="db f7 gray i lh-copy mt0">July 2014 – October 2014, Portland, Oregon</span>
        </div>
        <div class="f6 lh-copy mb3">
          <p class="mb2">Code school. Learned Ruby on Rails, JavaScript, and other tools.</p>
          <ul class="lh-copy ml3">
            <li>Learned full-stack web development via test-driven development and daily pair programming</li>
            <li>Attained internship-to-hire with EyeCue Lab after Epicodus</li>
          </ul>
        </div>
      </div>
      <!-- Apple -->
      <div class="mb3">
        <div class="mb2">
          <span class="db f5 mt0 lh-title"><strong><a class="link underline" href="https://support.apple.com" target="_blank">Apple</a></strong>, AppleCare Advisor</span>
          <span class="db f7 gray i lh-copy mt0">June 2013 – May 2014, Eugene, Oregon</span>
        </div>
        <div class="f6 lh-copy mb3">
          <p class="mb2">Tier I technical support while completing my degree. Remote position.</p>
          <ul class="lh-copy ml3">
            <li>Provided technical phone support for macOS products, and customer service for Apple ID, fraud/billing, and account security</li>
            <li>Provided email customer service for iTunes Store purchase issues</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</article>
{:/}

