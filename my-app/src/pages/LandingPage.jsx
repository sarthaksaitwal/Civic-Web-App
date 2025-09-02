import React from "react";
import "../styles/LandingPage.css";

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-root">
      <section className="landing-hero">
        <h1>Empowering Citizens, Transforming Cities</h1>
        <p>Report civic issues, track progress, and collaborate for better communities.</p>
        <button className="landing-btn" onClick={onGetStarted}>Get Started</button>
      </section>

      <section className="landing-features">
        <h2>Powerful Features</h2>
        <div className="features-row">
          <div className="feature-card">
            <img src="https://img.icons8.com/fluency/48/000000/task.png" alt="Easy Issue Reporting" />
            <h3>Easy Issue Reporting</h3>
            <p>Quickly report problems in your city with a simple form.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/color/48/000000/track-order.png" alt="Real-time Tracking" />
            <h3>Real-time Tracking</h3>
            <p>Monitor the status of reported issues and get timely updates.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/color/48/000000/combo-chart.png" alt="Analytics & Reports" />
            <h3>Analytics & Reports</h3>
            <p>View insightful analytics and download detailed reports.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/color/48/000000/community-grants.png" alt="Community Collaboration" />
            <h3>Community Collaboration</h3>
            <p>Work together with officials and citizens for faster resolutions.</p>
          </div>
        </div>
      </section>

      <section className="landing-how">
        <h2>How It Works</h2>
        <div className="how-row">
          <div className="how-step">
            <span className="how-icon">📝</span>
            <p>Report Issue</p>
          </div>
          <div className="how-step">
            <span className="how-icon">🏢</span>
            <p>Assigned to Department</p>
          </div>
          <div className="how-step">
            <span className="how-icon">👷‍♂️</span>
            <p>Workers Resolve</p>
          </div>
          <div className="how-step">
            <span className="how-icon">📈</span>
            <p>Track Progress</p>
          </div>
        </div>
      </section>

      <section className="landing-action">
        <h2>See It In Action</h2>
        <div className="action-row">
          <div className="action-card">
            <img src="https://img.icons8.com/color/96/000000/combo-chart.png" alt="Dashboard" />
            <h3>Centralized Overview</h3>
            <p>Get a bird's-eye view of all civic issues and their statuses.</p>
          </div>
          <div className="action-card">
            <img src="https://img.icons8.com/color/96/000000/map.png" alt="Interactive Maps" />
            <h3>Interactive Maps</h3>
            <p>Visualize reported issues on a city map for better planning.</p>
          </div>
          <div className="action-card">
            <img src="https://img.icons8.com/color/96/000000/analytics.png" alt="Analytics & Reports" />
            <h3>Analytics & Reports</h3>
            <p>Analyze trends and generate actionable insights.</p>
          </div>
        </div>
      </section>

      <section className="landing-testimonials">
        <h2>What Users Say</h2>
        <div className="testimonials-row">
          <div className="testimonial-card">
            <p>"Reporting issues has never been easier. Our city is improving every day!"</p>
            <span>- Rahul Sharma</span>
          </div>
          <div className="testimonial-card">
            <p>"I love tracking the progress and seeing real changes in my neighborhood."</p>
            <span>- Meena Verma</span>
          </div>
          <div className="testimonial-card">
            <p>"The analytics help our department prioritize and resolve issues faster."</p>
            <span>- Commissioner Singh</span>
          </div>
        </div>
      </section>

      <section className="landing-cta">
        <h2>Be the change your city needs. Start Reporting Today!</h2>
        <p>Join thousands of citizens making constructive change, one report at a time.</p>
        <button className="landing-btn" onClick={onGetStarted}>Report Now</button>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <div>
            <span className="footer-logo">CivicTrack</span>
            <div className="footer-links">
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
          <div className="footer-social">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
          </div>
        </div>
        <div className="footer-copy">
          © 2025 CivicTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}