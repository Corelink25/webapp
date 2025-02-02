import React from 'react';
import '../styles/HomePage.css'; 
import { useNavigate } from 'react-router-dom'; // Import the separate CSS file

export default function Home() {
const navigate = useNavigate();
const handleSubmit = () => {
navigate('/contact');
};

return (
<div className="homepage">
    {/* Hero Section */}
    <section className="hero-section">
    <h1 className="hero-title">
        Bringing Top Brands to Your Fingertips — Shop the Best, Anytime, Anywhere!
    </h1>
    <p className="hero-subtext">
        At <strong>Cornerstone Vision Services</strong>, we connect you with trusted brands
        at unbeatable prices. Enjoy fast delivery, secure checkouts, and top-notch customer care.
    </p>

    {/* Container for "Join Us" text, arrow line, and button */}
    <div className="hero-join">
        <div className="hero-join-info">
        <h3>Join Us</h3>
        <p>
            If you are a wholesaler or brand with high-quality products,
            we invite you to partner with us. Together, we can deliver excellence
            to customers around the world and create a winning partnership
            that benefits your brand, our customers, and the future of retail.
        </p>
        </div>

        {/* Line (with arrow) pointing to button */}
        <div className="hero-join-line"></div>

        {/* "Start Shopping" button */}
        <button className="hero-button" onClick={handleSubmit}>Join Us</button>
    </div>
    </section>

    {/* Key Benefits */}
    <section className="benefits-section">
    <div className="benefit-card">
        <div className="benefit-icon">🚚</div>
        <h3 className="benefit-title">Fast Delivery</h3>
        <p className="benefit-description">
        Quick shipping straight to your doorstep.
        </p>
    </div>
    <div className="benefit-card">
        <div className="benefit-icon">🔒</div>
        <h3 className="benefit-title">Safe & Secure</h3>
        <p className="benefit-description">
        Payments and data protected at every step.
        </p>
    </div>
    <div className="benefit-card">
        <div className="benefit-icon">🛍️</div>
        <h3 className="benefit-title">Top Brands</h3>
        <p className="benefit-description">
        Curated selections you can truly trust.
        </p>
    </div>
    <div className="benefit-card">
        <div className="benefit-icon">💬</div>
        <h3 className="benefit-title">24/7 Support</h3>
        <p className="benefit-description">
        We’re here whenever you need us.
        </p>
    </div>
    </section>

    {/* Compliance / Trust Badges */}
    <section className="compliance-section">
    <p className="compliance-text">
        We adhere to GDPR and ISO 27001 standards to keep your data safe and secure.
    </p>
    </section>
</div>
);
}
