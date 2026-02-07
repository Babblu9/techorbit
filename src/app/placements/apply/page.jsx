'use client';
import { useState } from 'react';
import { Search, Briefcase, MapPin, Send, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import styles from './page.module.css';
import { jobListings } from '@/data/jobListings';

export default function ApplyJobsPage() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        resume: null
    });
    const [submitted, setSubmitted] = useState(false);

    const openJobs = jobListings.filter(j => j.status === 'Open');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
        }, 3000);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Apply For Jobs</h1>
                <p className={styles.subtitle}>Find your dream job with Techorbit placement support</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Jobs List */}
                    <div className={styles.jobsList}>
                        <h2 className={styles.sectionTitle}>
                            <Briefcase size={20} />
                            Open Positions ({openJobs.length})
                        </h2>
                        <div className={styles.jobsScroll}>
                            {openJobs.map(job => (
                                <div
                                    key={job.id}
                                    className={`${styles.jobItem} ${selectedJob?.id === job.id ? styles.active : ''}`}
                                    onClick={() => setSelectedJob(job)}
                                >
                                    <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
                                    <p className={styles.companyName}>{job.companyName}</p>
                                    <div className={styles.jobMeta}>
                                        <span><MapPin size={14} /> {job.location}</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className={styles.formSection}>
                        {submitted ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={48} />
                                <h2>Application Submitted!</h2>
                                <p>We'll get back to you within 2-3 business days.</p>
                            </div>
                        ) : selectedJob ? (
                            <>
                                <div className={styles.selectedJob}>
                                    <h2>Applying for: {selectedJob.jobTitle}</h2>
                                    <p>{selectedJob.companyName} • {selectedJob.location}</p>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label><User size={16} /> Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label><Mail size={16} /> Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label><Phone size={16} /> Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label><Briefcase size={16} /> Experience</label>
                                        <select
                                            value={formData.experience}
                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            required
                                        >
                                            <option value="">Select experience</option>
                                            <option value="fresher">Fresher</option>
                                            <option value="1-2">1-2 Years</option>
                                            <option value="2-5">2-5 Years</option>
                                            <option value="5+">5+ Years</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label><FileText size={16} /> Resume (PDF)</label>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                                        />
                                    </div>
                                    <button type="submit" className={styles.submitBtn}>
                                        <Send size={18} />
                                        Submit Application
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className={styles.placeholder}>
                                <Briefcase size={48} />
                                <h2>Select a Job</h2>
                                <p>Choose a job from the list to apply</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
