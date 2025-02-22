import React from 'react';
import '../styles/landing.css';


const Landing = () => {
    return (
        <div className='container'>
            <nav className="nav-bar">
                <a href="/" className="nav-brand">
                    Magnet Legal
                </a>
                <div className="nav-links">
                    <a href="/about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <button className="nav-link demo-button" onClick={() => window.location.href='/book-demo'}>Book a Demo</button>
                </div>
            </nav>
            <div className='main-body'>
                <h1>Magnel Legal AI</h1>
                <h3>Transforming customer outreach for law firms with AI agents.</h3>
                <button className="nav-link demo-button" onClick={() => window.location.href='/book-demo'}>Book a Demo</button>
            </div>
            <div className="product-description">
                <h1>Accelerate your firm with AI</h1>
                <p>An AI-driven solution empowering law firms to enhance their brand presence, streamline client interactions, and drive growth through intelligent automation.</p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h4>Discover Opportunities</h4>
                        <p>Intelligent lead generation and market analysis to identify and pursue new business opportunities.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Build Relationships</h4>
                        <p>Automated client engagement and personalized communication to maintain strong, lasting relationships.</p>
                    </div>
                    <div className="feature-card">
                        <h4>Enhance Brand Presence</h4>
                        <p>Data-driven marketing strategies and content optimization to strengthen your firm's market position.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


/*

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #ddd',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1000
    },
    companyName: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    navItems: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    link: {
        textDecoration: 'none',
        color: '#333'
    },
    demoButton: {
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    heroSection: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
        textShadow: '0 0 10px rgba(0,0,0,0.7)'
    },
    buttonGroup: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};
*/
export default Landing;