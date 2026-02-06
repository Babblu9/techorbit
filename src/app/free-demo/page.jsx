'use client';
import { useState } from 'react';
import { courses } from '@/data/courses';
import styles from './page.module.css';

export default function FreeDemoPage() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', course: '', experience: '', mode: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Our counselor will contact you within 24 hours to schedule your free demo session.');
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <span className={styles.badge}>🎯 Limited Slots Available</span>
                            <h1>Book Your <span className="gradient-text">Free Demo</span> Session</h1>
                            <p>Experience our training methodology firsthand. Attend a free demo class and make an informed decision about your career.</p>

                            <div className={styles.benefits}>
                                <div className={styles.benefit}>✓ Live session with expert trainer</div>
                                <div className={styles.benefit}>✓ Course curriculum overview</div>
                                <div className={styles.benefit}>✓ Career counseling included</div>
                                <div className={styles.benefit}>✓ No commitment required</div>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <h2>Request Free Demo</h2>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Full Name *" className="form-input" required
                                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address *" className="form-input" required
                                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number *" className="form-input" required
                                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <select className="form-select" required value={formData.course}
                                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                                        <option value="">Select Course *</option>
                                        {courses.map(c => (
                                            <option key={c.slug} value={c.slug}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-select" value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}>
                                        <option value="">Your Experience Level</option>
                                        <option value="student">Student / Fresher</option>
                                        <option value="0-2">0-2 Years</option>
                                        <option value="2-5">2-5 Years</option>
                                        <option value="5+">5+ Years</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-select" value={formData.mode}
                                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}>
                                        <option value="">Preferred Mode</option>
                                        <option value="online">Online Training</option>
                                        <option value="classroom">Classroom Training</option>
                                        <option value="weekend">Weekend Batch</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Book Free Demo
                                </button>
                                <p className={styles.note}>By submitting, you agree to our terms and privacy policy</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
