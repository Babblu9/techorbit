import Link from 'next/link';
import { Target, FileText, Mic, Briefcase, Linkedin, BarChart3 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Career Guidance & Placement Support - Techorbit',
    description: 'Get personalized career counseling, resume workshops, interview preparation, and dedicated placement support to land your dream tech job.',
};

export default function CareerGuidancePage() {
    const services = [
        { icon: Target, title: 'Career Counseling', desc: 'One-on-one sessions to identify your strengths, interests, and chart the right career path in tech.' },
        { icon: FileText, title: 'Resume Building', desc: 'Expert guidance to craft ATS-friendly resumes that highlight your skills and stand out to recruiters.' },
        { icon: Mic, title: 'Mock Interviews', desc: 'Practice with industry professionals and get detailed feedback to ace your technical interviews.' },
        { icon: Briefcase, title: 'Job Referrals', desc: 'Direct referrals to our network of 500+ hiring partners across top tech companies.' },
        { icon: Linkedin, title: 'LinkedIn Optimization', desc: 'Build a powerful LinkedIn profile that attracts recruiters and showcases your expertise.' },
        { icon: BarChart3, title: 'Aptitude Training', desc: 'Prepare for aptitude tests and technical assessments used by top companies.' },
    ];

    const stats = [
        { value: '95%', label: 'Placement Rate' },
        { value: '500+', label: 'Hiring Partners' },
        { value: '45 Days', label: 'Avg. Time to Placement' },
        { value: '₹8 LPA', label: 'Avg. Salary Hike' },
    ];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Career <span className="gradient-text">Guidance</span> & Placement</h1>
                    <p>From learning to landing your dream job — we are with you every step of the way</p>
                </div>
            </section>

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

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Career Services</h2>
                        <p>Comprehensive support to accelerate your tech career</p>
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

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to Transform Your Career?</h2>
                    <p>Book a free counseling session and discover your path to success</p>
                    <Link href="/free-demo" className="btn btn-primary btn-lg">Get Free Counseling</Link>
                </div>
            </section>
        </div>
    );
}
