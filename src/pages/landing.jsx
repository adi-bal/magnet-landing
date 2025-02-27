import React, { useState, useEffect } from 'react';
import '../styles/landing.css';

const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <div className='container'>
            {/* Desktop Navigation */}
            <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
                <a href="/" className="nav-brand">
                    Magnet Legal
                </a>
                
                {/* Desktop Nav Links */}
                <div className="nav-links desktop-only">
                    <a href="/magnet-landing" className="nav-link">Home</a>
                    <a href="/magnet-landing/contact">Contact</a>
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
                    <a href="/#" className="mobile-nav-link">Home</a>
                    <button className="mobile-demo-button" onClick={() => window.location.href='/#book-demo'}>Book a Demo</button>
                </div>
            </div>
            
            <div className='main-body'>
                <div className="hero-content">
                    <h1>Magnet Legal AI</h1>
                    <h3>Transforming customer outreach for law firms with AI agents.</h3>
                    <button className="demo-button pulse-animation" onClick={() => window.location.href='/#book-demo'}>Book a Demo</button>
                </div>
            </div>
            
            <div className="product-description">
                <h1>Accelerate your firm with AI</h1>
                <p>An AI-driven solution empowering law firms to enhance their brand presence, streamline client interactions, and drive growth through intelligent automation.</p>
                
                <div className="feature-cards">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="icon-discover"></i>
                        </div>
                        <h4>Discover Opportunities</h4>
                        <p>Intelligent lead generation and market analysis to identify and pursue new business opportunities.</p>

                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="icon-relationships"></i>
                        </div>
                        <h4>Build Relationships</h4>
                        <p>Automated client engagement and personalized communication to maintain strong, lasting relationships.</p>

                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="icon-brand"></i>
                        </div>
                        <h4>Enhance Brand Presence</h4>
                        <p>Data-driven marketing strategies and content optimization to strengthen your firm's market position.</p>

                    </div>
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
                            <li><a href="/#">Home</a></li>
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

export default Landing;