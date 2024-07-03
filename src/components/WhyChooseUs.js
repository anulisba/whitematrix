import React from 'react';
import './drawer_content.css'; // Reusing the same CSS file

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <h3>Comprehensive Outsourcing Solutions</h3>
            <ul>
                <li><strong>Customer Support</strong>: Personalized customer support across various channels to resolve issues promptly and maintain satisfaction.</li>
                <li><strong>Technical Support</strong>: Expert technical assistance to troubleshoot and resolve complex issues effectively.</li>
                <li><strong>Telemarketing</strong>: Targeted campaigns to drive sales and market products or services efficiently.</li>
                <li><strong>Back Office Services</strong>: Efficient handling of data entry, processing, and document management to streamline operations.</li>
            </ul>
            <h3>Client-Centric Approach</h3>
            <p>We prioritize understanding your unique business needs and goals to provide customized outsourcing solutions that deliver tangible results and foster long-term partnerships.</p>
        </div>
    );
};

export default WhyChooseUs;
