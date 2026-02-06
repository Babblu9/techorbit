import Link from 'next/link';
import { FileText, Mic, Briefcase, Linkedin, BarChart3, Target } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Placement Support - 95% Placement Rate | Techorbit',
    description: 'Get dedicated placement support with 95% success rate. Resume building, mock interviews, job referrals, and connections to 500+ hiring partners.',
};

export default function PlacementSupportPage() {
    const stats = [
        { value: '95%', label: 'Placement Rate' },
        { value: '500+', label: 'Hiring Partners' },
        { value: '45 Days', label: 'Avg. Placement Time' },
        { value: '₹8 LPA', label: 'Avg. Salary Package' },
    ];

    const services = [
        { icon: FileText, title: 'Resume Building', desc: 'Get expert help crafting ATS-friendly resumes that stand out. Our team reviews and optimizes your resume for maximum impact.' },
        { icon: Mic, title: 'Mock Interviews', desc: 'Practice with industry professionals in realistic interview settings. Get detailed feedback on technical and HR rounds.' },
        { icon: Briefcase, title: 'Job Referrals', desc: 'Direct referrals to our network of 500+ hiring partners including top MNCs, startups, and product companies.' },
        { icon: Linkedin, title: 'LinkedIn Optimization', desc: 'Build a powerful LinkedIn profile that attracts recruiters. Learn personal branding and networking strategies.' },
        { icon: BarChart3, title: 'Aptitude Training', desc: 'Prepare for aptitude tests and coding assessments used by top companies. Regular practice sessions and tests.' },
        { icon: Target, title: 'Career Counseling', desc: 'One-on-one sessions to identify your goals, strengths, and chart the ideal career path in tech.' },
    ];

    const process = [
        { step: '01', title: 'Profile Assessment', desc: 'We analyze your skills, experience, and career goals to create a personalized placement strategy.' },
        { step: '02', title: 'Resume & LinkedIn', desc: 'Our experts help you build a compelling resume and optimize your LinkedIn profile.' },
        { step: '03', title: 'Interview Preparation', desc: 'Multiple rounds of mock interviews with feedback to make you interview-ready.' },
        { step: '04', title: 'Job Matching', desc: 'We match your profile with suitable openings from our hiring partners.' },
        { step: '05', title: 'Interview Scheduling', desc: 'We coordinate interviews and provide last-minute tips and preparation materials.' },
        { step: '06', title: 'Offer & Onboarding', desc: 'Assistance with offer negotiation and smooth transition into your new role.' },
    ];

    const hiringPartners = [
        'TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL', 'Cognizant',
        'Accenture', 'Capgemini', 'Deloitte', 'Amazon', 'Microsoft', 'Google'
    ];

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Placement <span className="gradient-text">Support</span></h1>
                    <p>Your success is our mission. Get dedicated placement assistance with a 95% success rate.</p>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((s, i) => (
                            <div key={i} className={styles.stat}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Placement Services</h2>
                        <p>Comprehensive support to help you land your dream job</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((s, i) => {
                            const ServiceIcon = s.icon;
                            return (
                                <div key={i} className={styles.serviceCard}>
                                    <span className={styles.serviceIcon}>
                                        <ServiceIcon size={28} />
                                    </span>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Placement Process</h2>
                        <p>A structured approach to help you succeed</p>
                    </div>
                    <div className={styles.processGrid}>
                        {process.map((p, i) => (
                            <div key={i} className={styles.processCard}>
                                <span className={styles.processStep}>{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Partners */}
            <section className={styles.partnersSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Hiring Partners</h2>
                        <p>Techorbit graduates work at leading tech companies worldwide</p>
                    </div>
                    <div className={styles.partnersGrid}>
                        {hiringPartners.map((partner, i) => (
                            <div key={i} className={styles.partnerBadge}>{partner}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to Launch Your Tech Career?</h2>
                    <p>Join thousands of successful Techorbit graduates working at top companies</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/courses" className="btn btn-primary btn-lg">Explore Courses</Link>
                        <Link href="/free-demo" className="btn btn-secondary btn-lg">Book Free Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
