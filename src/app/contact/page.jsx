'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Contact <span className="gradient-text">Us</span></h1>
                    <p>Have questions? We would love to hear from you</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.info}>
                            <h2>Get in Touch</h2>
                            <p>Our team is here to help you with any questions about our courses, training modes, or career guidance.</p>

                            <div className={styles.contactCards}>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>
                                        <MapPin size={24} />
                                    </span>
                                    <h3>Visit Us</h3>
                                    <p>Techorbit Training Center<br />4th Floor, Cyber Towers<br />Hitech City, Hyderabad - 500081</p>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>
                                        <Phone size={24} />
                                    </span>
                                    <h3>Call Us</h3>
                                    <p>+91 98765 43210<br />+91 87654 32109<br />Mon - Sat: 9 AM - 8 PM</p>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>
                                        <Mail size={24} />
                                    </span>
                                    <h3>Email Us</h3>
                                    <p>info@techorbit.in<br />admissions@techorbit.in<br />support@techorbit.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formWrapper}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <h2>Send us a Message</h2>
                                <div className={styles.formGrid}>
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Name" className="form-input" required
                                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" className="form-input" required
                                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" className="form-input" required
                                            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-select" value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
                                            <option value="">Select Subject</option>
                                            <option value="courses">Course Enquiry</option>
                                            <option value="demo">Book Demo</option>
                                            <option value="corporate">Corporate Training</option>
                                            <option value="placement">Placement Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Message" className="form-textarea" rows="5"
                                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
