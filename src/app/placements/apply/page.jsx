'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    Briefcase, MapPin, Send, User, Phone, Mail, FileText,
    CheckCircle, Eye, X, Clock, IndianRupee, Building2
} from 'lucide-react';
import styles from './page.module.css';
import { jobListings } from '@/data/jobListings';

export default function ApplyJobsPage() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [viewingJob, setViewingJob] = useState(null);
    const [showApplyForm, setShowApplyForm] = useState(false);
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
        setTimeout(() => {
            setSubmitted(false);
            setShowApplyForm(false);
            setSelectedJob(null);
            setFormData({ name: '', email: '', phone: '', experience: '', resume: null });
        }, 3000);
    };

    const handleViewJD = (job) => {
        setViewingJob(job);
    };

    const handleApply = (job) => {
        setSelectedJob(job);
        setShowApplyForm(true);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Apply For Jobs</h1>
                <p className={styles.subtitle}>Find your dream job with Techorbit placement support</p>
            </section>

            {/* Interview Preparation CTA */}
            <section style={{ background: '#f8fafc', padding: '2rem 1rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Prepare for Your Interview</h2>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Access free interview questions and resume tips to boost your chances</p>
                    <Link 
                        href="/resources/interview-questions" 
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            background: '#0ea5e9', 
                            color: 'white', 
                            padding: '0.75rem 1.5rem', 
                            borderRadius: '8px',
                            fontWeight: 600,
                            textDecoration: 'none'
                        }}
                    >
                        <FileText size={18} /> Browse Interview Questions
                    </Link>
                </div>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.jobsGrid}>
                    {openJobs.map(job => (
                        <div key={job.id} className={styles.jobCard}>
                            <div className={styles.jobCardHeader}>
                                <div className={styles.companyLogo}>
                                    <Building2 size={24} />
                                </div>
                                <div className={styles.jobInfo}>
                                    <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
                                    <p className={styles.companyName}>{job.companyName}</p>
                                </div>
                            </div>
                            <div className={styles.jobDetails}>
                                <span><MapPin size={14} /> {job.location}</span>
                                <span><Clock size={14} /> {job.type}</span>
                                <span><IndianRupee size={14} /> {job.salary || '4-8 LPA'}</span>
                            </div>
                            <div className={styles.jobSkills}>
                                {(job.skills || ['React', 'Node.js', 'MongoDB']).slice(0, 3).map((skill, i) => (
                                    <span key={i} className={styles.skill}>{skill}</span>
                                ))}
                            </div>
                            <div className={styles.jobActions}>
                                <button
                                    className={styles.viewJdBtn}
                                    onClick={() => handleViewJD(job)}
                                >
                                    <Eye size={16} /> View JD
                                </button>
                                <button
                                    className={styles.applyBtn}
                                    onClick={() => handleApply(job)}
                                >
                                    <Send size={16} /> Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* View JD Modal */}
            {viewingJob && (
                <div className={styles.modalOverlay} onClick={() => setViewingJob(null)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setViewingJob(null)}>
                            <X size={20} />
                        </button>
                        <div className={styles.modalHeader}>
                            <Building2 size={32} className={styles.modalIcon} />
                            <div>
                                <h2>{viewingJob.jobTitle}</h2>
                                <p>{viewingJob.companyName} • {viewingJob.location}</p>
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.jdSection}>
                                <h4>Job Type</h4>
                                <p>{viewingJob.type}</p>
                            </div>
                            <div className={styles.jdSection}>
                                <h4>Salary Range</h4>
                                <p>{viewingJob.salary || '4 - 8 LPA'}</p>
                            </div>
                            <div className={styles.jdSection}>
                                <h4>Job Description</h4>
                                <p>{viewingJob.description || `We are looking for a talented ${viewingJob.jobTitle} to join our team at ${viewingJob.companyName}. You will be working on cutting-edge technologies and collaborating with cross-functional teams to deliver high-quality solutions.`}</p>
                            </div>
                            <div className={styles.jdSection}>
                                <h4>Requirements</h4>
                                <ul>
                                    {(viewingJob.requirements || [
                                        'Proficiency in relevant technologies',
                                        'Strong problem-solving skills',
                                        'Good communication skills',
                                        'Team collaboration experience',
                                        'Willingness to learn new technologies'
                                    ]).map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.jdSection}>
                                <h4>Skills Required</h4>
                                <div className={styles.skillsList}>
                                    {(viewingJob.skills || ['React', 'Node.js', 'MongoDB', 'JavaScript', 'REST APIs']).map((skill, i) => (
                                        <span key={i} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className={styles.applyBtnLarge}
                                onClick={() => {
                                    setViewingJob(null);
                                    handleApply(viewingJob);
                                }}
                            >
                                <Send size={18} /> Apply for this Position
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Apply Form Modal */}
            {showApplyForm && selectedJob && (
                <div className={styles.modalOverlay} onClick={() => setShowApplyForm(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setShowApplyForm(false)}>
                            <X size={20} />
                        </button>

                        {submitted ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={56} />
                                <h2>Application Submitted!</h2>
                                <p>We&apos;ll get back to you within 2-3 business days.</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.modalHeader}>
                                    <Briefcase size={32} className={styles.modalIcon} />
                                    <div>
                                        <h2>Apply for {selectedJob.jobTitle}</h2>
                                        <p>{selectedJob.companyName} • {selectedJob.location}</p>
                                    </div>
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
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
