import React from 'react';
import '../styles/ServicesPage.css';

function Services() {
  return (
    <div className="services-container">
      {/* Left Column: Big Title */}
      <div className="services-left">
        <h1 className="services-title">Our Services</h1>
      </div>

      {/* Right Column: Numbered Services */}
      <div className="services-right">
        
        {/* 1 | Wholesale & Distribution */}
        <div className="service-block">
          <h2 className="service-heading">
            <span>1</span> | Wholesale &amp; Distribution
          </h2>
          <p className="service-text">
            We provide a user-friendly platform where customers can browse and
            purchase your products directly. By streamlining your inventory
            management, shipping processes, and customer service, our approach
            ensures a seamless buying experience—leading to higher customer
            satisfaction and repeat sales.
          </p>
        </div>

        {/* 2 | Online Marketplaces */}
        <div className="service-block">
          <h2 className="service-heading">
            <span>2</span> | Online Marketplaces
          </h2>
          <p className="service-text">
            We list your products on the most popular e-commerce platforms—like
            Amazon, eBay, and others—to maximize visibility and boost sales. Our
            team handles product listings, keyword optimization, and performance
            tracking so your brand stands out in a competitive marketplace.
          </p>
        </div>

        {/* 3 | Retail Partnerships */}
        <div className="service-block">
          <h2 className="service-heading">
            <span>3</span> | Retail Partnerships
          </h2>
          <p className="service-text">
            We collaborate with retailers to extend the reach of your products
            beyond online channels. By leveraging strategic retail relationships
            and in-store promotion, we help your brand connect with new
            audiences, solidifying a strong foothold in key markets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;