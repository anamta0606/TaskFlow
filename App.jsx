import { useEffect } from 'react';
import './App.css';

const features = [
  {
    icon: '✓',
    title: 'Easy Task Management',
    description: 'Create, organize, and manage your daily tasks in one simple place.',
  },
  {
    icon: '◷',
    title: 'Stay on Schedule',
    description: 'Keep track of deadlines and make every minute count.',
  },
  {
    icon: '↗',
    title: 'Track Your Progress',
    description: 'See your progress clearly and celebrate every completed task.',
  },
];

const reviews = [
  {
    quote: 'TaskFlow makes organizing my university assignments so much easier.',
    name: 'Sarah Ahmed',
    role: 'University Student',
  },
  {
    quote: 'I can plan my day in minutes and focus on what really matters.',
    name: 'Ali Khan',
    role: 'Freelancer',
  },
  {
    quote: 'A clean and simple tool that helps our team stay organized.',
    name: 'Ayesha Malik',
    role: 'Team Leader',
  },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started.',
    items: ['Basic task management', 'Personal task lists', 'Daily planning'],
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'For people ready to do more.',
    items: ['Everything in Free', 'Progress tracking', 'Priority support'],
    featured: true,
  },
  {
    name: 'Team',
    price: '$19',
    description: 'For teams working together.',
    items: ['Everything in Pro', 'Team task lists', 'Team collaboration'],
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home"><span>✦</span> TaskFlow</a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#reviews">Reviews</a>
        <a href="#pricing">Pricing</a>
      </div>
      <a className="nav-button" href="#pricing">Get Started ↗</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="eyebrow"><span className="status-dot"></span> YOUR DAY, ORGANIZED</div>
        <h1>Make time for<br />what <span>matters.</span></h1>
        <p>Plan your tasks, organize your goals, and get more done without the stress. A clearer day starts here.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#pricing">Start for free <span>→</span></a>
          <a className="text-button" href="#features">Explore features ↓</a>
        </div>
        <div className="hero-note"><span>✓</span> Simple to use &nbsp;·&nbsp; No credit card required</div>
      </div>
      <div className="preview-wrap">
        <div className="preview-glow"></div>
        <div className="task-preview">
          <div className="preview-top">
            <div><span className="mini-logo">✦</span><strong>My Workspace</strong></div>
            <span className="avatar">S</span>
          </div>
          <div className="preview-heading">
            <div><small>MONDAY, OCTOBER 26</small><h3>Good morning! ☀️</h3><p>Let's make today count.</p></div>
            <span className="progress-badge">3 of 5 done</span>
          </div>
          <div className="progress-track"><span></span></div>
          <div className="task-label">YOUR TASKS <span>Today</span></div>
          <div className="task-row completed"><span className="check">✓</span><span><strong>Review lecture notes</strong><small>Study · 9:00 AM</small></span><span className="task-tag purple">Study</span></div>
          <div className="task-row completed"><span className="check">✓</span><span><strong>Reply to emails</strong><small>Personal · 10:00 AM</small></span><span className="task-tag green">Personal</span></div>
          <div className="task-row"><span className="empty-check"></span><span><strong>Finish project design</strong><small>Work · 12:00 PM</small></span><span className="task-tag orange">Work</span></div>
          <div className="task-row"><span className="empty-check"></span><span><strong>Plan tomorrow</strong><small>Personal · 4:00 PM</small></span><span className="task-tag green">Personal</span></div>
          <div className="preview-bottom"><span>✦ Small steps add up.</span><span>↗ View all</span></div>
        </div>
        <div className="floating-card"><span className="float-icon">✓</span><span><strong>You're on a roll!</strong><small>3 tasks completed today</small></span></div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="section-heading">
        <span className="section-label">LESS CHAOS, MORE CLARITY</span>
        <h2>Everything you need to<br />get things <span>done.</span></h2>
        <p>Simple tools to help you take control of your day.</p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#pricing">Learn more <span>→</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-heading">
        <span className="section-label">KIND WORDS</span>
        <h2>Made for real life.<br /><span>Loved by people.</span></h2>
        <p>See how TaskFlow fits into everyday routines.</p>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="stars">★★★★★</div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-person">
              <div className="person-avatar">{review.name.charAt(0)}</div>
              <div><strong>{review.name}</strong><small>{review.role}</small></div>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">Sample testimonials for this student project.</p>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="section-label">SIMPLE PRICING</span>
        <h2>A plan for every<br /><span>kind of day.</span></h2>
        <p>Start free and choose what works for you.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
            {plan.featured && <div className="popular-label">MOST POPULAR</div>}
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="price">{plan.price}<span>/ month</span></div>
            <a className={plan.featured ? 'primary-button price-button' : 'outline-button price-button'} href="mailto:hello@taskflow.example">Choose {plan.name}</a>
            <div className="plan-divider"></div>
            <p className="includes">WHAT'S INCLUDED</p>
            <ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <p className="pricing-note">Demo prices for this project. No actual payment is collected.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="logo" href="#home"><span>✦</span> TaskFlow</a>
          <p>A little more focus.<br />A lot more possibility.</p>
        </div>
        <div className="footer-column"><strong>Explore</strong><a href="#features">Features</a><a href="#reviews">Reviews</a><a href="#pricing">Pricing</a></div>
        <div className="footer-column"><strong>Get in touch</strong><a href="mailto:hello@taskflow.example">Email us</a><a href="#home">Back to top ↑</a></div>
        <div className="footer-column"><strong>Follow along</strong><div className="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 TaskFlow.  All rights reserved.</span><a href="#home">Made for a more focused day ✦</a></div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section-heading, .feature-card, .review-card, .price-card').forEach((element) => {
      element.classList.add('reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}