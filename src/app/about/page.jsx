import Link from 'next/link';
import { Target, Wrench, GraduationCap, Handshake } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us - Techorbit | Leading IT Training Institute',
    description: 'Learn about Techorbit - our mission, vision, expert instructors, and commitment to transforming tech careers through industry-ready training.',
};

export default function AboutPage() {
    const values = [
        { icon: Target, title: 'Career-Focused', desc: 'Every course is designed with your career success in mind' },
        { icon: Wrench, title: 'Hands-On Learning', desc: 'Learn by building real projects, not just watching tutorials' },
        { icon: GraduationCap, title: 'Expert Mentors', desc: 'Learn from professionals with 10+ years of industry experience' },
        { icon: Handshake, title: 'Placement Support', desc: 'Dedicated team to help you land your dream job' },
    ];

    const stats = [
        { value: '2014', label: 'Founded' },
        { value: '25,000+', label: 'Graduates' },
        { value: '500+', label: 'Hiring Partners' },
        { value: '50+', label: 'Courses' },
    ];

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>About <span className="gradient-text">Techorbit</span></h1>
                    <p>Empowering the next generation of tech professionals since 2014</p>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <h2>Our Mission</h2>
                            <p>
                                At Techorbit, we believe that quality tech education should be accessible to everyone. Our mission is to bridge the gap between academic learning and industry requirements, equipping students with the skills, confidence, and portfolio needed to thrive in the competitive tech landscape.
                            </p>
                            <p>
                                We do not just teach technology — we transform careers. Through hands-on projects, expert mentorship, and dedicated placement support, we have helped over 25,000 professionals launch and accelerate their tech careers.
                            </p>
                        </div>
                        <div className={styles.missionVisual}>
                            <div className={styles.visualCard}>
                                <h3>Our Vision</h3>
                                <p>To be India's most trusted IT training institute, recognized for producing industry-ready professionals who drive innovation and growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, i) => (
                            <div key={i} className={styles.stat}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>What Sets Us Apart</h2>
                        <p>Our core values that drive everything we do</p>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => {
                            const ValueIcon = v.icon;
                            return (
                                <div key={i} className={styles.valueCard}>
                                    <span className={styles.valueIcon}>
                                        <ValueIcon size={28} />
                                    </span>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Join thousands of successful Techorbit graduates</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/courses" className="btn btn-primary btn-lg">Explore Courses</Link>
                        <Link href="/free-demo" className="btn btn-secondary btn-lg">Book Free Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
