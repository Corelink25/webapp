import React, { useState } from 'react';
import "../styles/About.css";

const About = () => {
  // State to manage which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    mission: false,
    whatWeDo: false,
    whyPartner: false,
    values: false,
    joinUs: false,
  });

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>About Us</h2>
      <div className="about-content">
        {/* Who We Are - Always visible */}
        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            Welcome to CoreLink Solutions, your trusted partner in delivering high-quality branded products to customers and online shopping platforms worldwide. We specialize in sourcing premium products from reputable wholesalers and distributing them to a diverse network of customers, including individual shoppers, e-commerce platforms, and retail partners.
          </p>
        </div>

        {/* Our Mission - Collapsible */}
        <div className="about-section">
          <h3 onClick={() => toggleSection('mission')} style={{ cursor: 'pointer' }}>
            Our Mission {expandedSections.mission ? '▲' : '▼'}
          </h3>
          {expandedSections.mission && (
            <p>
              At CoreLink Solutions, our mission is to connect customers with the best quality products while providing suppliers with a reliable platform to grow their brand presence. We are committed to excellence, innovation, and building lasting partnerships that benefit everyone involved.
            </p>
          )}
        </div>

        {/* What We Do - Collapsible */}
        <div className="about-section">
          <h3 onClick={() => toggleSection('whatWeDo')} style={{ cursor: 'pointer' }}>
            What We Do {expandedSections.whatWeDo ? '▲' : '▼'}
          </h3>
          {expandedSections.whatWeDo && (
            <>
              <p>
                We source high-quality products from trusted wholesalers and brands, ensuring that every item meets the highest standards of quality and reliability. These products are then sold through:
              </p>
              <ul>
                <li><strong>Wholesale and Distribution:</strong> A user-friendly platform where customers can browse and purchase directly.</li>
                <li><strong>Online Marketplaces:</strong> We list products on popular e-commerce platforms to maximize visibility and sales.</li>
                <li><strong>Retail Partnerships:</strong> We collaborate with retailers to expand the reach of your products.</li>
              </ul>
            </>
          )}
        </div>

        {/* Why Partner With Us? - Collapsible */}
        <div className="about-section">
          <h3 onClick={() => toggleSection('whyPartner')} style={{ cursor: 'pointer' }}>
            Why Partner With Us? {expandedSections.whyPartner ? '▲' : '▼'}
          </h3>
          {expandedSections.whyPartner && (
            <>
              <p>
                When you partner with Cornerstone Vision Services, you gain access to:
              </p>
              <ul>
                <li><strong>Extensive Market Reach:</strong> Our multi-channel approach ensures your products reach a wide and diverse audience.</li>
                <li><strong>Commitment to Quality:</strong> We prioritize quality and brand integrity, making us a preferred choice for customers.</li>
                <li><strong>Customer-Centric Approach:</strong> Our focus on customer satisfaction drives us to curate products that meet their needs and exceed expectations.</li>
                <li><strong>Growth Opportunities:</strong> Partnering with us opens doors to a growing customer base and expanded brand visibility.</li>
              </ul>
            </>
          )}
        </div>

        {/* Our Values - Collapsible */}
        <div className="about-section">
          <h3 onClick={() => toggleSection('values')} style={{ cursor: 'pointer' }}>
            Our Values {expandedSections.values ? '▲' : '▼'}
          </h3>
          {expandedSections.values && (
            <ul>
              <li><strong>Quality First:</strong> We only source and sell products that meet the highest standards.</li>
              <li><strong>Partnership & Collaboration:</strong> We believe in building long-term, mutually beneficial relationships with our suppliers.</li>
              <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do.</li>
              <li><strong>Innovation:</strong> We continuously adapt to market trends and customer needs to stay ahead.</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
