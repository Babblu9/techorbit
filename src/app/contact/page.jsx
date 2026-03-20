'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', reason: '', customReason: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp number with country code (India +91)
        const whatsappNumber = '+91 9177477855';

        // Get the reason (use custom if "Other" selected)
        const finalReason = formData.reason === 'Other' ? formData.customReason : formData.reason;

        // Create message (no emojis to avoid encoding issues)
        const message = `New Inquiry from Techorbit Website

Name: ${formData.name}
Email: ${formData.email}
Reason: ${finalReason}`;

        // Encode and open WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
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
                                    <p>Tech Orbit Knowledge Centre<br />KPHB, Hyderabad</p>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>
                                        <Phone size={24} />
                                    </span>
                                    <h3>Call Us</h3>
                                    <p>+91 9177477855<br />Mon - Sat: 9 AM - 8 PM</p>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>
                                        <Mail size={24} />
                                    </span>
                                    <h3>Email Us</h3>
                                    <p>admissions@thetechorbit.in</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Contact Form */}
                        <div className={styles.formWrapper}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formHeader}>
                                    <MessageCircle size={28} className={styles.whatsappIcon} />
                                    <h2>Quick WhatsApp Inquiry</h2>
                                </div>
                                <p className={styles.formDesc}>Fill in your details and connect with us instantly on WhatsApp!</p>

                                <div className={styles.formFields}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-input"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="form-input"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-select"
                                            value={formData.reason}
                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                            required
                                        >
                                            <option value="">Select Reason</option>
                                            <option value="Course Enquiry">Course Enquiry</option>
                                            <option value="Book Free Demo">Book Free Demo</option>
                                            <option value="Placement Support">Placement Support</option>
                                            <option value="Corporate Training">Corporate Training</option>
                                            <option value="Other">Other (Write below)</option>
                                        </select>
                                    </div>
                                    {formData.reason === 'Other' && (
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Please specify your reason"
                                                className="form-input"
                                                required
                                                value={formData.customReason}
                                                onChange={(e) => setFormData({ ...formData, customReason: e.target.value })}
                                            />
                                        </div>
                                    )}
                                </div>

                                <button type="submit" className={styles.whatsappBtn}>
                                    <Send size={18} />
                                    Send via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
