import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact.css';


const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
                
                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <div className='container'>
            {/* Desktop Navigation */}
            <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="nav-brand">
                    Magnet Legal
                </Link>
                
                {/* Desktop Nav Links */}
                <div className="nav-links desktop-only">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/contact" className="nav-link active">Contact</Link>
                    <button className="nav-link demo-button" onClick={() => window.location.href='/#book-demo'}>Book a Demo</button>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="mobile-menu-button" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <Link to="/" className="mobile-nav-link">Home</Link>
                    <Link to="/contact" className="mobile-nav-link active">Contact</Link>
                    <button className="mobile-demo-button" onClick={() => window.location.href='/#book-demo'}>Book a Demo</button>
                </div>
            </div>
            
            <div className='contact-header'>
                <h1>Contact Us</h1>
                <p>Reach out with any questions about our product.</p>
            </div>
            
            <div className="contact-container">
                <div className="contact-form-container full-width">
                    {submitSuccess ? (
                        <div className="success-message">
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={formErrors.name ? 'error' : ''}
                                />
                                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={formErrors.email ? 'error' : ''}
                                />
                                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="company">Company/Firm</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={formErrors.message ? 'error' : ''}
                                ></textarea>
                                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                            </div>
                            
                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Magnet Legal</h3>
                        <p>Transforming law firms with intelligent AI solutions.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: xx-xxx-xxxx@example.com</p>
                        <p>Phone: xx-xxx-xxxx</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>Magnet Legal AI</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;