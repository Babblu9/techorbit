import Link from 'next/link';
import { Target, GraduationCap, Laptop, Briefcase, Smartphone, Headphones } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const features = [
        {
            icon: Target,
            title: 'Industry-Aligned Curriculum',
            desc: 'Our courses are designed with input from top tech companies to ensure you learn what matters most in the job market.'
        },
        {
            icon: GraduationCap,
            title: 'Expert Instructors',
            desc: 'Learn from professionals with 10+ years of industry experience at companies like Google, Amazon, Microsoft.'
        },
        {
            icon: Laptop,
            title: 'Hands-On Projects',
            desc: 'Build 10+ real-world projects for your portfolio with guidance from mentors and weekly code reviews.'
        },
        {
            icon: Briefcase,
            title: '95% Placement Rate',
            desc: 'Our dedicated placement team connects you with 500+ hiring partners for guaranteed career success.'
        },
        {
            icon: Smartphone,
            title: 'Flexible Learning',
            desc: 'Choose from online, offline, or hybrid modes. Weekend and weekday batches available to fit your schedule.'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            desc: 'Get instant doubt resolution and mentorship support through our dedicated Discord community and helpdesk.'
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.badge}>Our Advantages</span>
                    <h2 className={styles.title}>
                        Why <span className={styles.highlight}>Choose Us</span>
                    </h2>
                    <p className={styles.subtitle}>Join 150,000+ students who transformed their careers with us</p>
                </div>

                {/* Features Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <div key={index} className={styles.card}>
                                <span className={styles.cardIcon}>
                                    <FeatureIcon size={28} />
                                </span>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDesc}>{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <Link href="/about" className={styles.ctaLink}>
                        Learn More About Our Approach
                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
