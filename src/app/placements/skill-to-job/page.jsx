'use client';
import { useState } from 'react';
import { UserCheck, Briefcase, GraduationCap, CheckCircle, AlertTriangle, ArrowRight, MessageSquare } from 'lucide-react';
import styles from './page.module.css';

export default function SkillToJobPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for applying! Our team will contact you shortly.');
    };

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Skill-to-Job Program</h1>
                    <p className={styles.heroSubtitle}>
                        Bridge the gap between your skills and your dream career.
                        Our dedicated placement program ensures you are job-ready and connected with top employers.
                    </p>
                    <div className={styles.heroBtns}>
                        <a href="#apply" className={styles.primaryBtn}>
                            Get Started Today <ArrowRight size={20} />
                        </a>
                        <a href="/contact" className={styles.secondaryBtn}>
                            Talk To Expert <MessageSquare size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Program Benefits */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why Choose <span>Skill-to-Job?</span></h2>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                            <div className={styles.iconWrapper}>
                                <UserCheck size={40} />
                            </div>
                            <h3 className={styles.benefitTitle}>Dedicated Placement Officer</h3>
                            <p className={styles.benefitDesc}>
                                Get personalized guidance from a dedicated officer who works with you until you are placed.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.iconWrapper}>
                                <Briefcase size={40} />
                            </div>
                            <h3 className={styles.benefitTitle}>Placement Portal Access</h3>
                            <p className={styles.benefitDesc}>
                                Exclusive access to our job portal for one full year, featuring premium job listings.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <div className={styles.iconWrapper}>
                                <GraduationCap size={40} />
                            </div>
                            <h3 className={styles.benefitTitle}>10+ Interview Opportunities</h3>
                            <p className={styles.benefitDesc}>
                                We guarantee at least 10 meaningful interview opportunities to accelerate your career success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility & Terms */}
            <section className={styles.section} style={{ background: 'white' }}>
                <div className={styles.container}>
                    <div className={styles.twoColGrid}>
                        {/* Eligibility */}
                        <div className={styles.contentBlock}>
                            <h3 className={styles.blockTitle}>
                                <CheckCircle size={28} color="#0ea5e9" /> Eligibility Criteria
                            </h3>
                            <ul className={styles.list}>
                                <li>Any Graduate / Post Graduate can apply.</li>
                                <li>Must have completed training in a software domain.</li>
                                <li>Year of passing: 2018 to 2025.</li>
                                <li>Must clear our internal Mock Interview with satisfying results.</li>
                                <li>Good communication and technical skills are mandatory.</li>
                            </ul>
                        </div>

                        {/* Terms */}
                        <div className={`${styles.contentBlock} ${styles.warning}`}>
                            <h3 className={styles.blockTitle}>
                                <AlertTriangle size={28} color="#f97316" /> Terms & Conditions
                            </h3>
                            <ul className={`${styles.list} ${styles.warning}`}>
                                <li>Candidate must respond promptly to the Placement Officer.</li>
                                <li>Once an offer is released, it cannot be rejected.</li>
                                <li>Commitment requires a signed cheque or original document submission.</li>
                                <li>Absenteeism for scheduled interviews leads to immediate termination.</li>
                                <li>Fees paid are non-refundable under any circumstances.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section className={`${styles.section} ${styles.feeSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Fee <span>Structure</span></h2>
                    <div className={styles.feeTableWrapper}>
                        <table className={styles.feeTable}>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Details</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Pre-Placement Fee</strong></td>
                                    <td>Registration & Processing (Non-refundable)</td>
                                    <td className={styles.highlightCell}>₹7,000 + GST</td>
                                </tr>
                                <tr>
                                    <td><strong>Post-Placement Fee</strong></td>
                                    <td>Fresher Package</td>
                                    <td className={styles.highlightCell}>1 Month Salary + GST</td>
                                </tr>
                                <tr>
                                    <td><strong>Post-Placement Fee</strong></td>
                                    <td>Experienced (5.1 – 10 LPA)</td>
                                    <td className={styles.highlightCell}>1 Month Salary + GST</td>
                                </tr>
                                <tr>
                                    <td><strong>Post-Placement Fee</strong></td>
                                    <td>Experienced (10.1 – 25 LPA)</td>
                                    <td className={styles.highlightCell}>1 Month Salary + GST</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>Start Your Journey</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className={styles.input}
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className={styles.input}
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className={styles.input}
                                    required
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea
                                    placeholder="Tell us about your skills..."
                                    className={styles.input}
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
