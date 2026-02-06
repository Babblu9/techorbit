'use client';
import Link from 'next/link';
import { Trophy, Users, GraduationCap, Headphones, Phone, Play, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    const trustIndicators = [
        { icon: Trophy, text: 'Top 3 EdTech Institute' },
        { icon: Users, text: '1000+ Placements Annually' },
        { icon: GraduationCap, text: 'Industry-Expert Trainers' },
        { icon: Headphones, text: '24/7 Learning Support' },
    ];

    const stats = [
        { number: '16+', label: 'Years of Excellence' },
        { number: '100+', label: 'Courses Offered' },
        { number: '1000+', label: 'Annual Placements' },
        { number: '150K+', label: 'Trained Students' },
    ];

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradientOverlay}></div>
            </div>

            <div className={styles.container}>
                {/* Trust Badge */}
                <div className={styles.trustBadge}>
                    <Sparkles size={16} className={styles.sparkle} />
                    Trusted by 150k+ Students Since 2010
                </div>

                {/* Main Headline */}
                <h1 className={styles.headline}>
                    Launch Your Tech Career
                    <span className={styles.highlight}> With Industry-Ready Programs</span>
                </h1>

                {/* Subheadline */}
                <p className={styles.subheadline}>
                    100+ Industry-Focused Programs • 50000+ Success Stories • 16+ Years of Excellence
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaGroup}>
                    <Link href="/contact" className={styles.btnPrimary}>
                        <span>Talk To Expert</span>
                        <Phone size={18} className={styles.btnIcon} />
                    </Link>
                    <Link href="/free-demo" className={styles.btnOutline}>
                        <span>Get Free Demo Class</span>
                        <Play size={18} className={styles.btnIcon} />
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className={styles.indicators}>
                    {trustIndicators.map((item, index) => (
                        <div key={index} className={styles.indicator}>
                            <item.icon size={20} className={styles.indicatorIcon} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Cards */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <span className={styles.statNumber}>{stat.number}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
