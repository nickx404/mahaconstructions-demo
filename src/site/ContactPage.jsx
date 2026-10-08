import { useState } from 'react';
import { ArrowUpRight, List as Menu, MapPin, Phone, WhatsappLogo, X } from '@phosphor-icons/react';
import { sitePath } from './paths.js';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="contact-page">
      <header className={`site-header projects-header${menuOpen ? ' menu-open' : ''}`}>
        <a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home" onClick={closeMenu}><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href={sitePath('/')} onClick={closeMenu}>Home</a><a href={sitePath('/about')} onClick={closeMenu}>About Us</a><a href={sitePath('/projects')} onClick={closeMenu}>Projects</a><a href={sitePath('/#services')} onClick={closeMenu}>What We Do</a><a href={sitePath('/joint-venture')} onClick={closeMenu}>Joint Venture</a><a href={sitePath('/gallery')} onClick={closeMenu}>Gallery</a><a href={sitePath('/contact')} aria-current="page" onClick={closeMenu}>Contact</a><a className="nav-enquiry" href="#contact-form" onClick={closeMenu}>Enquire <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </header>

      <main className="contact-page-main">
        <section className="contact-page-hero section-shell" aria-labelledby="contact-page-title">
          <div><span className="eyebrow">Contact Maha Constructions</span><h1 id="contact-page-title">Let’s start a<br /><em>conversation.</em></h1></div>
          <p>Tell us a little about what you have in mind. Our team will be in touch.</p>
        </section>

        <section className="contact-page-content section-shell" id="contact-form">
          <form className="contact-page-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="contact-page-form-heading"><div><span className="eyebrow">Your enquiry</span><h2>How can we help?</h2></div><span>All fields required</span></div>
            <div className="form-row">
              <label><span>Name</span><input name="name" autoComplete="name" placeholder="Your full name" required /></label>
              <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label>
            </div>
            <label><span>Email address</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <fieldset className="contact-enquiry-types"><legend>What would you like to discuss?</legend>
              {['General inquiry', 'Building contract', 'Joint venture'].map((type) => <label key={type}><input type="radio" name="enquiryType" value={type} required /><span>{type}</span></label>)}
            </fieldset>
            <label><span>Message</span><textarea name="message" rows="5" placeholder="Share a few details about your enquiry" required /></label>
            <button className="button button-green" type="submit">Send enquiry <ArrowUpRight size={16} aria-hidden="true" /></button>
            <p className={`contact-page-form-note${submitted ? ' is-visible' : ''}`} aria-live="polite">{submitted ? 'Thanks for reaching out. Form submission will be enabled once the enquiry service is connected.' : 'This form is a preview and does not send messages yet.'}</p>
          </form>

          <aside className="contact-page-details" aria-label="Contact details">
            <span className="eyebrow">Find us & get in touch</span>
            <h2>We’d be glad<br />to hear from you.</h2>
            <div className="contact-detail"><MapPin size={19} aria-hidden="true" /><div><span>Office</span><p>Chennai, Tamil Nadu<br /><small>Exact office address to be confirmed</small></p></div></div>
            <div className="contact-detail"><Phone size={19} aria-hidden="true" /><div><span>Call us</span><p>Contact number to be confirmed</p></div></div>
            <div className="contact-detail"><WhatsappLogo size={19} aria-hidden="true" /><div><span>WhatsApp</span><p>WhatsApp number to be confirmed</p></div></div>
            <div className="contact-detail"><ArrowUpRight size={19} aria-hidden="true" /><div><span>Email</span><a href="mailto:info@saimaha.com">info@saimaha.com</a></div></div>
          </aside>
        </section>

        <section className="contact-map-section section-shell" aria-labelledby="contact-map-title">
          <div className="contact-map-card">
            <div className="contact-map-copy">
              <span className="eyebrow">Visit us</span>
              <h2 id="contact-map-title">Around Chennai</h2>
              <p>Explore the Chennai area on the map. Our exact office address will be added once confirmed.</p>
              <span className="contact-map-area"><MapPin size={16} aria-hidden="true" /> Chennai, Tamil Nadu</span>
            </div>
            <iframe title="Map search for Chennai, Tamil Nadu" src="https://maps.google.com/maps?q=Chennai%20Tamil%20Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
      </main>

      <footer className="footer contact-page-footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href={sitePath('/')} aria-label="Maha Constructions home"><img src={sitePath('/images/maha-constructions-logo.png')} alt="Maha Constructions" /></a><p>Building spaces.<br />Creating possibilities.</p></div><div className="footer-links"><span className="footer-label">Explore</span><a href={sitePath('/about')}>About Us</a><a href={sitePath('/projects')}>Projects</a><a href={sitePath('/gallery')}>Gallery</a><a href={sitePath('/joint-venture')}>Joint Venture</a></div><div className="footer-links"><span className="footer-label">Get in touch</span><a href="mailto:info@saimaha.com">info@saimaha.com</a><a href="#contact-form">Make an enquiry</a></div></div></footer>
    </div>
  );
}
