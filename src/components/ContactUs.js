import React, { useState } from 'react';
import './drawer_content.css'; // Assuming your CSS file is properly imported

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({
        name: false,
        companyName: false,
        email: false,
        phone: false,
        date: false,
        time: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields are filled
        const { name, companyName, email, phone, date, time } = formData;
        if (!name || !companyName || !email || !phone || !date || !time) {
            // Set error state for empty fields
            setFormErrors({
                name: !name,
                companyName: !companyName,
                email: !email,
                phone: !phone,
                date: !date,
                time: !time
            });
            return;
        }

        // Send form data to server
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setFormData({
                    name: '',
                    companyName: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: ''
                });
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000); // 3000 milliseconds = 3 seconds
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Ready to elevate your customer service experience? Contact White Line Offshore Call Center today to discuss how our tailored outsourcing solutions can benefit your business.</p>
            
            <div className="form-contact">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Schedule a Conversation</h3>
                    <p>To schedule a consultation or request more information, please fill out the form below. One of our representatives will contact you shortly to arrange a convenient time.</p>

                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`input-line ${formErrors.name ? 'error' : ''}`} />
                        {formErrors.name && <span className="error-text">Name is required</span>}
                    </label>
                    <label>
                        Company Name:
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className={`input-line ${formErrors.companyName ? 'error' : ''}`} />
                        {formErrors.companyName && <span className="error-text">Company Name is required</span>}
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`input-line ${formErrors.email ? 'error' : ''}`} />
                        {formErrors.email && <span className="error-text">Valid Email is required</span>}
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`input-line ${formErrors.phone ? 'error' : ''}`} />
                        {formErrors.phone && <span className="error-text">Phone Number is required</span>}
                    </label>
                    <label>
                        Preferred Date:
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className={`input-line ${formErrors.date ? 'error' : ''}`} />
                        {formErrors.date && <span className="error-text">Preferred Date is required</span>}
                    </label>
                    <label>
                        Preferred Time:
                        <input type="time" name="time" value={formData.time} onChange={handleInputChange} className={`input-line ${formErrors.time ? 'error' : ''}`} />
                        {formErrors.time && <span className="error-text">Preferred Time is required</span>}
                    </label>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Address: White House, Koratty P O Thrissur 680000</p>
                    <p>Phone: 9633220088</p>
                    <p>Email: whiteline.co.in</p>
                    <div className='social-media'>
                        <h3>Follow Us On</h3>
                        <p>Stay updated with the latest news and insights by connecting with us on:</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {submitted && (
                <div className="popup-message">
                    <p>Message successfully submitted!</p>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
