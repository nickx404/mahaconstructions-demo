import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CaretLeft,
  CaretRight,
  Diamond,
  List as Menu,
  MapPin,
  X,
} from '@phosphor-icons/react';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import { sitePath, siteRoute } from './paths.js';

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    desktop:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=88',
    mobile:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=86',
    alt: 'Contemporary home framed by mature trees',
  },
  {
    desktop:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=88',
    mobile:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=86',
    alt: 'Modern residence opening onto a landscaped courtyard',
  },
];

const services = [
  {
    title: 'Land development',
    detail:
      'Thoughtful planning that brings out the long-term potential of every site, from first study to a place ready for its next chapter.',
  },
  {
    title: 'Joint ventures',
    detail:
      'A clear, collaborative approach for landowners and partners who want to create enduring value together.',
  },
  {
    title: 'Residential',
    detail:
      'Considered homes shaped around everyday rituals, natural light and the way people want to live.',
  },
  {
    title: 'Commercial',
    detail:
      'Purposeful environments for businesses, communities and the activity that helps a neighbourhood thrive.',
  },
];

const projects = [
  {
    name: 'A quieter kind of arrival',
    type: 'Residential · Chennai',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=86',
    alt: 'Light-filled contemporary residential architecture',
  },
  {
    name: 'Room to grow into',
    type: 'Residential · Chennai',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=86',
    alt: 'Warm modern home with an open garden-facing interior',
  },
  {
    name: 'Made for the everyday',
    type: 'Community · Chennai',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1500&q=86',
    alt: 'Minimal architecture with a sheltered outdoor living space',
  },
];

const ongoingProjects = [
  {
    slug: 'ongoing-project-1',
    name: 'Ongoing project name',
    location: 'Location to be updated',
    details: ['Building type', 'Unit type', 'Unit size', 'Bank loan'],
  },
  {
    slug: 'ongoing-project-2',
    name: 'Ongoing project name',
    location: 'Location to be updated',
    details: ['Building type', 'Unit type', 'Unit size', 'Bank loan'],
  },
  {
    slug: 'ongoing-project-3',
    name: 'Ongoing project name',
    location: 'Location to be updated',
    details: ['Building type', 'Unit type', 'Unit size', 'Bank loan'],
  },
];

const completedProjects = [
  { name: 'Maha Amogha', image: sitePath('/images/completed-projects/maha-amogha.png') },
  { name: 'Maha Guru', image: sitePath('/images/completed-projects/maha-guru.png') },
  { name: 'Maha Amrutha', image: sitePath('/images/completed-projects/maha-amrutha.png') },
  { name: 'Maha Dhera', image: sitePath('/images/completed-projects/maha-dhera.png') },
  { name: 'Maha Seyon', image: sitePath('/images/completed-projects/maha-seyon.png') },
  { name: 'Maha Eeshaan', image: sitePath('/images/completed-projects/maha-eeshaan.png') },
  { name: 'Maha Dwaraka', image: sitePath('/images/completed-projects/maha-dwaraka.png') },
  { name: 'Maha Dhanya', image: sitePath('/images/completed-projects/maha-dhanya.png') },
  { name: 'Maha Senthil', image: sitePath('/images/completed-projects/maha-senthil.png') },
  { name: 'Maha Vira', image: sitePath('/images/completed-projects/maha-vira.png') },
  { name: 'Maha Viveha', image: sitePath('/images/completed-projects/maha-viveha.png') },
  { name: 'Maha Krthi', image: sitePath('/images/completed-projects/maha-krthi.png') },
  { name: 'Maha Ganapathy', image: sitePath('/images/completed-projects/maha-ganapathy.png') },
  { name: 'Maha Varuna', image: sitePath('/images/completed-projects/maha-varuna.png') },
  { name: 'Maha Guhan', image: sitePath('/images/completed-projects/maha-gugan.png') },
  { name: 'Maha Velan', image: sitePath('/images/completed-projects/maha-velan.png') },
];

function App() {
  const path = siteRoute();
  if (path === '/about-2') return <AboutPage variant="company" />;
  if (path === '/about') return <AboutPage />;
  if (path === '/joint-venture') return <JointVenturePage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/gallery') return <GalleryPage />;
  const ongoingProject = ongoingProjects.find((project) => `/projects/${project.slug}` === path);
  if (ongoingProject) return <OngoingProjectPage project={ongoingProject} />;
  if (path === '/projects') return <ProjectsPage />;
  return <HomePage />;
}

function JointVenturePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const steps = [
    ['Land enquiry', 'Share your property details with us.'],
    ['Site evaluation', 'The property and its development potential can be reviewed.'],
    ['JV discussion', 'Discuss your requirements and the opportunity.'],
    ['Agreement', 'Review and document the proposed partnership.'],
    ['Planning & design', 'Develop the project plan and pursue required approvals.'],
    ['Construction & handover', 'Project execution through to completion and handover.'],
  ];
  const benefits = [
    ['Experience', 'Construction experience built over time.'],
    ['Local market knowledge', 'Understanding of the Chennai market.'],
    ['Construction expertise', 'Residential building experience.'],
    ['End-to-end execution', 'Planning through construction and handover.'],
    ['Customer trust', 'A growing base of customers.'],
    ['Land development', 'Exploring development potential with landowners.'],
  ];
  const strengths = [
    'Established construction experience',
    'Understanding of the Chennai market',
    'Residential development experience',
    'End-to-end project execution',
    'Focus on quality construction',
    'Clear partnership discussions',
    'Customer-focused development',
    'Long-term value creation',
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const previousTitle = document.title;
    document.title = 'Joint Venture | Maha Constructions';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.jv-hero-image img', { scale: 0.9 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.jv-hero-image', start: 'top 95%', end: 'top 30%', scrub: 0.8 },
      });
      gsap.utils.toArray('[data-jv-reveal]').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 34 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
      });
    });
    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="joint-venture-page">
      <header className={`site-header jv-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home" onClick={closeMenu}>
          <img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" />
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/')} onClick={closeMenu}>Home</a>
          <a href={sitePath('/about')} onClick={closeMenu}>About Us</a>
          <a href={sitePath('/projects')} onClick={closeMenu}>Projects</a>
          <a href={sitePath('/#services')} onClick={closeMenu}>What We Do</a>
          <a href={sitePath('/joint-venture')} aria-current="page" onClick={closeMenu}>Joint Venture</a>
          <a href={sitePath('/gallery')} onClick={closeMenu}>Gallery</a>
          <a href={sitePath('/contact')} onClick={closeMenu}>Contact</a>
          <a className="nav-enquiry" href={sitePath('/contact#contact-form')} onClick={closeMenu}>Enquire <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </header>

      <main className="jv-main">
        <section className="jv-hero" aria-labelledby="jv-title">
          <div className="jv-hero-content">
            <span className="eyebrow">Joint venture</span>
            <h1 id="jv-title">Your land. Our expertise.<br />A partnership built to grow.</h1>
            <p>Partner with Maha Constructions to explore your land’s residential development potential. From planning discussions to construction, we can consider the opportunity together.</p>
            <a className="button button-light" href="#jv-enquiry">Discuss your land <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <figure className="jv-hero-image" data-jv-reveal><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88" alt="Contemporary residential architecture, shown as a visual stand-in" /><figcaption>Residential development · Image for illustration</figcaption></figure>

        <section className="jv-trust-strip" aria-label="Maha Constructions at a glance">
          <div><strong>Since 1990</strong><span>Construction experience</span></div>
          <div><strong>55+</strong><span>Residential projects</span></div>
          <div><strong>100s</strong><span>Customers</span></div>
          <div><strong>Chennai</strong><span>Local expertise</span></div>
        </section>

        <section className="jv-clarity section-shell" id="jv-clarity" aria-labelledby="jv-clarity-title">
          <div className="jv-section-heading" data-jv-reveal>
            <span className="eyebrow">Why partner with Maha?</span>
            <h2 id="jv-clarity-title">Your land, together with our expertise.</h2>
          </div>
          <div className="jv-benefit-grid" data-jv-reveal>
            {benefits.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </section>

        <section className="jv-process" id="jv-process" aria-labelledby="jv-process-title">
          <div className="jv-process-heading section-shell" data-jv-reveal><span className="eyebrow">How our joint venture works</span><h2 id="jv-process-title">A clear path from land to development.</h2><p>Each opportunity is specific to the property and subject to review.</p></div>
          <div className="jv-process-grid section-shell" data-jv-reveal>
            {steps.map(([title, detail], index) => <article key={title}><span className="jv-step-number">0{index + 1}</span><span className="jv-step-rule" aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </section>

        <section className="jv-approach" aria-labelledby="jv-approach-title">
          <div className="jv-approach-heading" data-jv-reveal><span className="eyebrow">Our approach to JV</span><h2 id="jv-approach-title">From land to value creation.</h2></div>
          <div className="jv-approach-flow" data-jv-reveal>
            <article><span>Your land</span><p>Your property becomes the foundation for the discussion.</p></article><i aria-hidden="true">↓</i>
            <article><span>Maha’s expertise</span><p>Planning, design, construction and execution are explored for the opportunity.</p></article><i aria-hidden="true">↓</i>
            <article><span>Development</span><p>A residential development shaped around the property and agreed terms.</p></article>
          </div>
        </section>

        <section className="jv-why section-shell" aria-labelledby="jv-why-title">
          <div className="jv-why-heading" data-jv-reveal><span className="eyebrow">Why Maha Constructions</span><h2 id="jv-why-title">Built on experience.<br />Driven by trust.</h2></div>
          <ul data-jv-reveal>{strengths.map((strength) => <li key={strength}><Diamond size={15} weight="fill" aria-hidden="true" />{strength}</li>)}</ul>
        </section>

        <section className="jv-enquiry-section" id="jv-enquiry" aria-labelledby="jv-enquiry-title">
          <div className="jv-enquiry-intro" data-jv-reveal><span className="eyebrow">Landowner enquiry</span><h2 id="jv-enquiry-title">Have land you want to develop?</h2><p>Tell us about your property. Let’s explore the opportunity together.</p><a href="mailto:info@saimaha.com">info@saimaha.com <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <form className="enquiry-form jv-enquiry-form" onSubmit={(event) => { event.preventDefault(); setFormSubmitted(true); }} data-jv-reveal>
            <fieldset><legend>Your property</legend>
              <label><span>Property location</span><input name="propertyLocation" autoComplete="address-level2" required /></label>
              <div className="form-row"><label><span>Approx. land area</span><input name="landArea" inputMode="decimal" placeholder="e.g. 2,400 sq. ft." required /></label><label><span>Property type</span><select name="propertyType" defaultValue="Residential"><option>Residential</option><option>Commercial</option><option>Mixed use</option><option>Other</option></select></label></div>
              <label><span>Your requirement / message</span><textarea name="message" rows="3" /></label>
            </fieldset>
            <fieldset><legend>Your details</legend>
              <label><span>Name</span><input name="name" autoComplete="name" required /></label>
              <div className="form-row"><label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label></div>
              <label><span>I am a</span><select name="relationship" defaultValue="Landowner"><option>Landowner</option><option>Agent</option></select></label>
              <fieldset className="jv-contact-preference"><legend>Preferred contact</legend><label><input type="radio" name="preferredContact" value="Phone" defaultChecked /><span>Phone</span></label><label><input type="radio" name="preferredContact" value="WhatsApp" /><span>WhatsApp</span></label><label><input type="radio" name="preferredContact" value="Email" /><span>Email</span></label></fieldset>
            </fieldset>
            <button className="button button-green" type="submit">Submit enquiry <ArrowRight size={16} aria-hidden="true" /></button>
            <p className="form-note" role="status">{formSubmitted ? 'Thank you. The form is ready for a submission service to be connected.' : 'Your details are not sent until an enquiry service is connected.'}</p>
          </form>
        </section>

        <section className="jv-testimonial" aria-labelledby="jv-testimonial-title">
          <div className="jv-testimonial-copy" data-jv-reveal><span className="eyebrow">Built on trust</span><h2 id="jv-testimonial-title">What our customers say.</h2><blockquote>Approved customer testimonial to be added.</blockquote><p>Customer name and project details pending approval.</p><div className="jv-testimonial-dots" aria-label="Testimonial placeholder"><span /><i /><i /><i /></div></div>
          <div className="jv-testimonial-image" aria-label="Customer portrait placeholder"><span>Approved customer photo to be added</span></div>
        </section>

        <section className="jv-closing" aria-labelledby="jv-closing-title" data-jv-reveal>
          <h2 id="jv-closing-title">Have land?<br />Let’s build something valuable.</h2>
          <p>Explore a joint development opportunity with Maha Constructions.</p>
          <div><a className="button button-light" href="#jv-enquiry">Start a conversation <ArrowRight size={16} aria-hidden="true" /></a></div>
          <p className="jv-contact-links"><span>Call details to be confirmed</span><span>WhatsApp details to be confirmed</span><a href="#jv-enquiry">Enquire</a></p>
        </section>
      </main>

      <footer className="footer jv-footer">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a><p>Building spaces.<br />Creating possibilities.</p><a href="https://maps.google.com/?q=Chennai+Tamil+Nadu" target="_blank" rel="noreferrer">Chennai, Tamil Nadu <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          <div className="footer-links"><span className="footer-label">Explore</span><a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/#services')}>What We Do</a><a href={sitePath('/joint-venture')}>Joint Venture</a></div>
          <div className="footer-links"><span className="footer-label">Get in touch</span><a href="mailto:info@saimaha.com">info@saimaha.com</a><a href={sitePath('/contact#contact-form')}>Make an enquiry <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          <div className="footer-mark" aria-hidden="true">S<span>M</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Maha</span><span>Thoughtfully shaping what’s next.</span><a href="#jv-title">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

function OngoingProjectPage({ project }) {
  const [activePlan, setActivePlan] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const previousTitle = document.title;
    document.title = `${project.name} | Maha Constructions`;
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.title = previousTitle;
    };
  }, [project.name]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;
    const context = gsap.context(() => {
      gsap.utils.toArray('[data-project-detail-reveal]').forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });
      gsap.utils.toArray('[data-project-detail-image]').forEach((image) => {
        gsap.fromTo(image, { scale: 0.96 }, {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: image, start: 'top 95%', end: 'top 35%', scrub: 0.7 },
        });
      });
    });
    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const projectFacts = [
    ['Location', project.location],
    ['Building type', 'Details to be updated'],
    ['Unit type', 'Details to be updated'],
    ['Unit size', 'Details to be updated'],
    ['Bank loan', 'Details to be updated'],
    ['Status', 'Ongoing'],
  ];

  return (
    <div className="projects-page project-detail-page">
      <header className={`site-header projects-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home" onClick={closeMenu}>
          <img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" />
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/')} onClick={closeMenu}>Home</a>
          <a href={sitePath('/about')} onClick={closeMenu}>About Us</a>
          <a href={sitePath('/projects')} onClick={closeMenu}>Projects</a>
          <a href={sitePath('/#services')} onClick={closeMenu}>What We Do</a>
          <a href={sitePath('/joint-venture')} onClick={closeMenu}>Joint Venture</a>
          <a href={sitePath('/gallery')} onClick={closeMenu}>Gallery</a>
          <a href={sitePath('/contact')} onClick={closeMenu}>Contact</a>
          <a className="nav-enquiry" href={sitePath('/contact#contact-form')} onClick={closeMenu}>Enquire <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </header>

      <main className="project-detail-main">
        <section className="project-detail-hero" aria-labelledby="project-detail-title">
          <div className="project-detail-hero-image" data-project-detail-image aria-label="Project image placeholder">
            <Buildings size={64} weight="thin" aria-hidden="true" />
          </div>
          <div className="project-detail-hero-content section-shell" data-project-detail-reveal>
            <span className="eyebrow">Ongoing project</span>
            <h1 id="project-detail-title">{project.name}</h1>
            <p><MapPin size={16} aria-hidden="true" /> {project.location}</p>
            <a className="button button-light" href={sitePath('/contact#contact-form')}>Enquire now <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <nav className="project-section-nav" aria-label="Project sections">
          <a href="#overview">Overview</a>
          <a href="#project-details">Project details</a>
          <a href="#amenities">Amenities</a>
          <a href="#gallery">Gallery</a>
          <a href="#floor-plans">Floor plans</a>
          <a href="#location">Location</a>
        </nav>

        <section className="project-about section-shell" id="overview" data-project-detail-reveal>
          <div><span className="eyebrow">About the project</span></div>
          <div className="project-about-copy">
            <h2>{project.name}</h2>
            <p>A short introduction to this project will be added when approved project information is available.</p>
          </div>
        </section>

        <section className="project-specs section-shell" id="project-details" data-project-detail-reveal>
          <div className="project-detail-section-title">
            <span className="eyebrow">Project details</span>
            <h2>At a glance</h2>
          </div>
          <dl className="project-spec-grid">
            {projectFacts.map(([label, value]) => (
              <div className="project-spec" key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <p className="project-spec-note">Additional approved project information will appear here.</p>
        </section>

        <section className="project-amenities section-shell" id="amenities" data-project-detail-reveal>
          <div className="project-detail-section-title">
            <span className="eyebrow">Amenities &amp; features</span>
            <h2>Considered for everyday living.</h2>
          </div>
          <div className="project-amenity-grid">
            {Array.from({ length: 8 }, (_, index) => (
              <div className="project-amenity" key={index}>
                <Diamond size={26} weight="thin" aria-hidden="true" />
                <span>Feature details to be updated</span>
              </div>
            ))}
          </div>
        </section>

        <section className="project-gallery section-shell" id="gallery" data-project-detail-reveal>
          <div className="project-detail-section-title">
            <span className="eyebrow">Project gallery</span>
            <h2>A closer look.</h2>
          </div>
          <div className="project-gallery-grid">
            {[0, 1, 2].map((item) => (
              <div className={`project-gallery-placeholder project-gallery-placeholder-${item + 1}`} data-project-detail-image key={item} aria-label="Gallery image placeholder">
                <Buildings size={36} weight="thin" aria-hidden="true" />
              </div>
            ))}
          </div>
          <span className="project-placeholder-note">Approved project photography to be added.</span>
        </section>

        <section className="project-floorplans section-shell" id="floor-plans" data-project-detail-reveal>
          <div className="project-detail-section-title">
            <span className="eyebrow">Floor plans</span>
            <h2>Plan your space.</h2>
          </div>
          <div className="project-plan-tabs" role="tablist" aria-label="Floor plan placeholders">
            {['Plan 01', 'Plan 02', 'Other'].map((plan, index) => (
              <button className={activePlan === index ? 'is-active' : ''} id={`plan-tab-${index}`} type="button" role="tab" aria-selected={activePlan === index} aria-controls="plan-panel" key={plan} onClick={() => setActivePlan(index)}>{plan}</button>
            ))}
          </div>
          <div className="project-plan-placeholder" id="plan-panel" role="tabpanel" aria-labelledby={`plan-tab-${activePlan}`}>
            <Buildings size={42} weight="thin" aria-hidden="true" />
            <span>Approved floor plan to be added</span>
          </div>
        </section>

        <section className="project-location section-shell" id="location" data-project-detail-reveal>
          <div className="project-location-copy">
            <div className="project-detail-section-title"><span className="eyebrow">Location</span><h2>Close to what matters.</h2></div>
            <h3>Project address</h3>
            <p>{project.location}<br />Full address to be updated</p>
            <h3>Nearby landmarks</h3>
            <ul><li>Landmark details to be updated</li><li>Transit details to be updated</li><li>Road access details to be updated</li></ul>
            <a className="text-link" href={sitePath('/projects')}>Explore all projects <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="project-map-placeholder" aria-label="Map placeholder"><MapPin size={34} weight="thin" aria-hidden="true" /><span>Location map to be added</span></div>
        </section>

        <section className="project-all-projects" data-project-detail-reveal>
          <span className="eyebrow">Explore all projects</span>
          <h2>Discover more from Maha Constructions.</h2>
          <a className="button button-light" href={sitePath('/projects')}>View all projects <ArrowRight size={16} aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a><p>Building spaces.<br />Creating possibilities.</p><a href="https://maps.google.com/?q=Chennai+Tamil+Nadu" target="_blank" rel="noreferrer">Chennai, Tamil Nadu <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          <div className="footer-links"><span className="footer-label">Explore</span><a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/#services')}>What We Do</a><a href={sitePath('/joint-venture')}>Joint Venture</a></div>
          <div className="footer-links"><span className="footer-label">Get in touch</span><a href="mailto:info@saimaha.com">info@saimaha.com</a><a href={sitePath('/contact#contact-form')}>Make an enquiry <ArrowUpRight size={13} aria-hidden="true" /></a></div>
          <div className="footer-mark" aria-hidden="true">S<span>M</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Maha</span><span>Thoughtfully shaping what’s next.</span><a href="#project-detail-title">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectStatus, setProjectStatus] = useState('ongoing');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const previousTitle = document.title;
    document.title = 'Projects | Maha Constructions';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => window.clearTimeout(refresh);
  }, [projectStatus]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-projects-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        );
      });

      gsap.utils.toArray('[data-projects-image]').forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.92 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top 95%',
              end: 'top 35%',
              scrub: 0.7,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="projects-page">
      <header className={`site-header projects-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home" onClick={closeMenu}>
          <img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/')} onClick={closeMenu}>Home</a>
          <a href={sitePath('/about')} onClick={closeMenu}>About Us</a>
          <a href={sitePath('/projects')} aria-current="page" onClick={closeMenu}>Projects</a>
          <a href={sitePath('/#services')} onClick={closeMenu}>What We Do</a>
          <a href={sitePath('/joint-venture')} onClick={closeMenu}>Joint Venture</a>
          <a href={sitePath('/gallery')} onClick={closeMenu}>Gallery</a>
          <a href={sitePath('/contact')} onClick={closeMenu}>Contact</a>
          <a className="nav-enquiry" href={sitePath('/contact#contact-form')} onClick={closeMenu}>
            Enquire <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main className="projects-page-main">
        <section className="projects-page-hero section-shell" aria-labelledby="projects-page-title">
          <div className="projects-page-hero-copy" data-projects-reveal>
            <span className="eyebrow">Projects</span>
            <h1 id="projects-page-title">The things we have made.</h1>
            <p>
              A clean project archive for Maha Constructions, ready for approved photography,
              final names and detailed ongoing-project pages.
            </p>
          </div>
          <div className="projects-page-hero-card" data-projects-reveal>
            <span>Projects to explore</span>
            <strong>{ongoingProjects.length + completedProjects.length}</strong>
            <p>Browse current developments and completed work in one place.</p>
          </div>
        </section>

        <section className="project-directory section-shell" id="projects-list" aria-labelledby="project-list-title">
          <div className="project-directory-heading" data-projects-reveal>
            <span className="eyebrow">Our portfolio</span>
            <h2 id="project-list-title">{projectStatus === 'ongoing' ? 'Current developments.' : 'Completed projects.'}</h2>
            <p>{projectStatus === 'ongoing'
              ? 'Explore the projects taking shape now.'
              : 'A visual archive of places we have completed.'}</p>
            <div className="project-status-toggle" role="group" aria-label="Choose project status">
              <button
                type="button"
                className={projectStatus === 'ongoing' ? 'is-active' : ''}
                aria-pressed={projectStatus === 'ongoing'}
                onClick={() => setProjectStatus('ongoing')}
              >Ongoing</button>
              <button
                type="button"
                className={projectStatus === 'completed' ? 'is-active' : ''}
                aria-pressed={projectStatus === 'completed'}
                onClick={() => setProjectStatus('completed')}
              >Completed</button>
            </div>
          </div>
          {projectStatus === 'ongoing' ? (
            <div className="ongoing-project-grid" key="ongoing">
              {ongoingProjects.map((project, index) => (
                <a className="ongoing-project-card" href={sitePath(`/projects/${project.slug}`)} aria-label={`View details for ${project.name}, ${project.location}`} key={`${project.name}-${index}`} data-projects-reveal>
                  <div className="project-placeholder" data-projects-image aria-label="Project image placeholder">
                    <Buildings size={46} weight="thin" aria-hidden="true" />
                  </div>
                  <div className="ongoing-project-details">
                    <span className="project-card-index">0{index + 1}</span>
                    <h3>{project.name}</h3>
                    <p><MapPin size={14} aria-hidden="true" /> {project.location}</p>
                    <div className="project-detail-list" aria-label="Project details placeholders">
                      {project.details.map((detail) => <span key={detail}>{detail}</span>)}
                    </div>
                    <span className="ongoing-project-card-link">View project details <ArrowUpRight size={15} aria-hidden="true" /></span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="completed-project-grid" key="completed">
              {completedProjects.map((project, index) => (
                <article className="completed-project-card" key={project.name} data-projects-reveal>
                  <div className="completed-project-image">
                    <img src={project.image} alt={project.name} loading="lazy" data-projects-image />
                  </div>
                  <h3>{project.name}</h3>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a>
            <p>Building spaces.<br />Creating possibilities.</p>
            <a href="https://maps.google.com/?q=Chennai+Tamil+Nadu" target="_blank" rel="noreferrer">Chennai, Tamil Nadu <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
          <div className="footer-links">
            <span className="footer-label">Explore</span>
            <a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/#services')}>What We Do</a><a href={sitePath('/joint-venture')}>Joint Venture</a>
          </div>
          <div className="footer-links">
            <span className="footer-label">Get in touch</span>
            <a href="mailto:info@saimaha.com">info@saimaha.com</a><a href={sitePath('/contact#contact-form')}>Make an enquiry <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
          <div className="footer-mark" aria-hidden="true">S<span>M</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Maha</span><span>Thoughtfully shaping what’s next.</span><a href="#projects-page-title">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

function GalleryPage() {
  const [galleryType, setGalleryType] = useState('photos');
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = Array.from({ length: 9 }, (_, index) => ({ id: index + 1, title: `Gallery item ${String(index + 1).padStart(2, '0')}` }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const previousTitle = document.title;
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.title = 'Gallery | Maha Constructions';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    if (!selectedItem) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedItem(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedItem]);

  return (
    <div className="gallery-page">
      <header className={`site-header projects-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/')}>Home</a><a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/#services')}>What We Do</a><a href={sitePath('/joint-venture')}>Joint Venture</a><a href={sitePath('/gallery')} aria-current="page">Gallery</a><a href={sitePath('/contact')}>Contact</a><a className="nav-enquiry" href={sitePath('/contact#contact-form')}>Enquire <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </header>
      <main className="gallery-main section-shell">
        <div className="gallery-heading"><span className="eyebrow">A closer look</span><h1 id="gallery-title">Moments that<br />make us.</h1><p>A growing collection of moments from the Maha Constructions community.</p>
          <div className="gallery-toggle" role="group" aria-label="Choose gallery type">
            {['photos', 'videos'].map((type) => <button key={type} type="button" className={galleryType === type ? 'is-active' : ''} aria-pressed={galleryType === type} onClick={() => { setGalleryType(type); setSelectedItem(null); }}>{type === 'photos' ? 'Photo gallery' : 'Video gallery'}</button>)}
          </div>
        </div>
        <div className="gallery-grid" aria-label={galleryType === 'photos' ? 'Photo gallery' : 'Video gallery'}>
          {items.map((item) => <button className={`gallery-card${galleryType === 'videos' ? ' is-video' : ''}`} key={item.id} type="button" aria-label={`View ${galleryType === 'photos' ? 'photo' : 'video'} placeholder ${item.id}`} onClick={() => setSelectedItem(item)}>
            <span className="gallery-card-art" aria-hidden="true">{galleryType === 'videos' && <span className="gallery-play">▶</span>}<span className="gallery-placeholder-label">{galleryType === 'photos' ? 'Photo' : 'Video'} placeholder</span></span>
            <span className="gallery-card-title">{item.title}</span>
          </button>)}
        </div>
      </main>
      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href={sitePath('/')}><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a><p>Building spaces.<br />Creating possibilities.</p></div><div className="footer-links"><span className="footer-label">Explore</span><a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/gallery')}>Gallery</a><a href={sitePath('/joint-venture')}>Joint Venture</a></div><div className="footer-links"><span className="footer-label">Get in touch</span><a href="mailto:info@saimaha.com">info@saimaha.com</a><a href={sitePath('/contact#contact-form')}>Make an enquiry</a></div></div></footer>
      {selectedItem && <div className="gallery-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelectedItem(null)}><div className="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-label={`${galleryType === 'photos' ? 'Photo' : 'Video'} placeholder`}><button type="button" className="gallery-lightbox-close" aria-label="Close viewer" onClick={() => setSelectedItem(null)}><X size={24} aria-hidden="true" /></button><div className="gallery-lightbox-art"><span>{galleryType === 'photos' ? 'Photo' : 'Video'} placeholder</span></div><p>{selectedItem.title}</p></div></div>}
    </div>
  );
}

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [formValues, setFormValues] = useState({ name: '', phone: '', email: '', interest: 'Residential' });
  const heroTimer = useRef(null);

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    heroTimer.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(heroTimer.current);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        );
      });

      gsap.utils.toArray('[data-word-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 78%',
              end: 'bottom 42%',
              scrub: 0.7,
            },
          },
        );
      });

      gsap.utils.toArray('[data-project-card]').forEach((card, index) => {
        gsap.fromTo(
          card.querySelector('img'),
          { scale: 0.88 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 30%',
              scrub: 0.8,
            },
          },
        );
        card.style.setProperty('--stack-index', index);
      });
    });

    return () => context.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleFormChange = (event) => {
    setFormValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState('submitted');
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href="#home" aria-label="Maha Constructions home" onClick={closeMenu}>
          <img src={sitePath('/images/maha-constructions-logo.png')} alt="" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/about')} onClick={closeMenu}>About Us</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>What We Do</a>
          <a href={sitePath('/joint-venture')} onClick={closeMenu}>Joint Venture</a>
          <a href={sitePath('/gallery')} onClick={closeMenu}>Gallery</a>
          <a href={sitePath('/contact')} onClick={closeMenu}>Contact</a>
          <a className="nav-enquiry" href="#enquiry" onClick={closeMenu}>
            Enquire <ArrowUpRight size={14} weight="regular" />
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-label="Featured Sai Maha developments">
          {heroSlides.map((slide, index) => (
            <picture className={`hero-picture${activeSlide === index ? ' is-active' : ''}`} key={slide.desktop} aria-hidden={activeSlide !== index}>
              <source media="(max-width: 700px)" srcSet={slide.mobile} />
              <img src={slide.desktop} alt={slide.alt} fetchPriority={index === 0 ? 'high' : 'auto'} />
            </picture>
          ))}
          <div className="hero-controls" aria-label="Hero image controls">
            <button type="button" aria-label="Previous image" onClick={() => moveSlide(-1)}>
              <CaretLeft size={19} />
            </button>
            <div className="hero-dots" role="tablist" aria-label="Choose hero image">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  role="tab"
                  aria-label={`Show image ${index + 1}`}
                  aria-selected={activeSlide === index}
                  className={activeSlide === index ? 'is-active' : ''}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next image" onClick={() => moveSlide(1)}>
              <CaretRight size={19} />
            </button>
          </div>
        </section>

        <section className="stats section-shell" aria-label="Sai Maha at a glance">
          <div className="stats-intro" data-reveal>
            <span className="eyebrow">A foundation built over time</span>
            <p>Rooted in trust.<br />Growing with purpose.</p>
          </div>
          <div className="stat" data-reveal>
            <strong>30<span>+</span></strong><span>Years of experience</span>
          </div>
          <div className="stat" data-reveal>
            <strong>55<span>+</span></strong><span>Projects completed</span>
          </div>
          <div className="stat" data-reveal>
            <strong>100<span>s</span></strong><span>Happy customers</span>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="about-copy" id="story">
            <span className="eyebrow" data-reveal>Since 1990 · Chennai</span>
            <h1 data-reveal>
              Three decades of building <span className="inline-image" aria-hidden="true" /> trust.
            </h1>
            <p className="body-copy" data-word-reveal>
              Since 1990, Sai Maha has been shaping thoughtful places and property opportunities with a long view of what makes a community thrive.
            </p>
            <a className="text-link" href={sitePath('/joint-venture')} data-reveal>
              Discover our story <ArrowRight size={16} />
            </a>
          </div>
          <figure className="about-image image-frame" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=86"
              alt="A calm, naturally lit home interior"
              loading="lazy"
            />
            <figcaption><span>Grounded in place</span><span>01 / 03</span></figcaption>
          </figure>
        </section>

        <section className="services section-shell" id="services">
          <div className="services-heading" data-reveal>
            <span className="eyebrow">What we do</span>
            <h2>From land to<br />lived-in places.</h2>
            <p className="body-copy">A considered approach at every stage, shaped around people and the potential of a place.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className={`service-item${activeService === index ? ' is-open' : ''}`} key={service.title} data-reveal>
                <button
                  className="service-trigger"
                  type="button"
                  aria-expanded={activeService === index}
                  onClick={() => setActiveService(activeService === index ? -1 : index)}
                >
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-arrow"><ArrowUpRight size={18} /></span>
                </button>
                <div className="service-detail" aria-hidden={activeService !== index}>
                  <div className="service-detail-content">
                    <p>{service.detail}</p>
                    <a href="#enquiry" aria-label={`Enquire about ${service.title}`}>Talk to our team <ArrowRight size={15} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="projects-intro" data-reveal>
            <span className="eyebrow">A few places we’re proud of</span>
            <h2>Built with care.<br />Made to belong.</h2>
            <p className="body-copy">Every project begins with listening—to the land, the neighbourhood and the people who will call it home.</p>
            <a className="text-link" href={sitePath('/projects')}>Explore all projects <ArrowRight size={16} /></a>
            <div className="project-count"><span>01 — 03</span><span>Scroll to explore</span></div>
          </div>
          <div className="project-stack" aria-label="Featured project photography">
            {projects.map((project, index) => (
              <article className="project-card" data-project-card key={project.name}>
                <a href="#enquiry" className="project-image image-frame" aria-label={`Enquire about ${project.name}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-visit"><ArrowUpRight size={18} /></span>
                </a>
                <div className="project-caption">
                  <div><h3>{project.name}</h3><p>{project.type}</p></div>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="joint-venture" id="joint-venture">
          <div className="joint-venture-inner" data-reveal>
            <span className="eyebrow">A partnership with possibility</span>
            <h2>Have land?<br />Let’s build together.</h2>
            <p>Bring your land. Bring your vision. We’ll bring the experience to make the next step count.</p>
            <a className="button button-light" href="#enquiry">Explore joint ventures <ArrowUpRight size={16} /></a>
          </div>
          <span className="joint-venture-mark" aria-hidden="true">SM</span>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-copy" data-reveal>
            <span className="eyebrow">Start a conversation</span>
            <h2>Let’s build<br />something<br />together.</h2>
            <p className="body-copy">Have a project in mind? Tell us a little about it and our team will be in touch.</p>
            <a className="contact-email" href="mailto:info@saimaha.com">info@saimaha.com <ArrowUpRight size={15} /></a>
          </div>
          <form className="enquiry-form" id="enquiry" onSubmit={handleSubmit} data-reveal>
            <div className="form-heading"><span className="eyebrow">Enquiry</span><span>We usually reply within two working days.</span></div>
            <label>
              <span>Your name</span>
              <input name="name" autoComplete="name" value={formValues.name} onChange={handleFormChange} placeholder="e.g. Priya Kumar" required />
            </label>
            <div className="form-row">
              <label>
                <span>Phone number</span>
                <input name="phone" type="tel" autoComplete="tel" value={formValues.phone} onChange={handleFormChange} placeholder="+91" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" value={formValues.email} onChange={handleFormChange} placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              <span>I’m interested in</span>
              <select name="interest" value={formValues.interest} onChange={handleFormChange}>
                <option>Residential</option>
                <option>Land development</option>
                <option>Joint venture</option>
                <option>Commercial</option>
                <option>Something else</option>
              </select>
            </label>
            <button className="button button-green" type="submit">
              Send an enquiry <ArrowUpRight size={16} />
            </button>
            <p className={`form-note${formState === 'submitted' ? ' is-visible' : ''}`} role="status">
              {formState === 'submitted'
                ? 'Thanks for sharing. This form is ready for a submission service to be connected.'
                : 'Your details stay private and are only used to respond to your enquiry.'}
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark" href="#home" aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="" /></a>
            <p>Building spaces.<br />Creating possibilities.</p>
            <a href="https://maps.google.com/?q=Chennai+Tamil+Nadu" target="_blank" rel="noreferrer">Chennai, Tamil Nadu <ArrowUpRight size={13} /></a>
          </div>
          <div className="footer-links">
            <span className="footer-label">Explore</span>
            <a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href="#services">What We Do</a><a href={sitePath('/joint-venture')}>Joint Venture</a>
          </div>
          <div className="footer-links">
            <span className="footer-label">Get in touch</span>
            <a href="mailto:info@saimaha.com">info@saimaha.com</a><a href="#enquiry">Make an enquiry <ArrowUpRight size={13} /></a>
          </div>
          <div className="footer-mark" aria-hidden="true">S<span>M</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Maha</span><span>Thoughtfully shaping what’s next.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  );
}

export default App;
