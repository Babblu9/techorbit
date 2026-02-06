import Link from 'next/link';
import { ClipboardList, MapPin, Users, BarChart3, Target, Trophy } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Corporate Training - Upskill Your Workforce | Techorbit',
    description: 'Customized corporate training programs to upskill your workforce in latest technologies. On-site and remote options available.',
};

export default function CorporateTrainingPage() {
    const benefits = [
        { icon: ClipboardList, title: 'Custom Curriculum', desc: 'Training programs tailored to your specific technology stack and business needs' },
        { icon: MapPin, title: 'Flexible Delivery', desc: 'On-site at your premises, at our center, or fully remote — you choose' },
        { icon: Users, title: 'Batch Training', desc: 'Train your entire team together with group discounts' },
        { icon: BarChart3, title: 'Progress Tracking', desc: 'Detailed reports on employee progress and assessments' },
        { icon: Target, title: 'Project-Based', desc: 'Training focused on your actual projects and use cases' },
        { icon: Trophy, title: 'Certification', desc: 'Industry-recognized certificates for all participants' },
    ];

    const clients = ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL', 'Cognizant', 'Accenture', 'Capgemini'];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Corporate <span className="gradient-text">Training</span></h1>
                    <p>Upskill your workforce with customized training programs designed for enterprise needs</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">Request Proposal</Link>
                </div>
            </section>

            <section className={styles.clientsSection}>
                <div className={styles.container}>
                    <p>Trusted by leading organizations</p>
                    <div className={styles.clientsGrid}>
                        {clients.map((c, i) => (
                            <div key={i} className={styles.clientBadge}>{c}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Partner with Techorbit?</h2>
                        <p>Enterprise-grade training solutions for your organization</p>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((b, i) => {
                            const BenefitIcon = b.icon;
                            return (
                                <div key={i} className={styles.benefitCard}>
                                    <span className={styles.benefitIcon}>
                                        <BenefitIcon size={28} />
                                    </span>
                                    <h3>{b.title}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to Upskill Your Team?</h2>
                    <p>Get a customized training proposal for your organization</p>
                    <Link href="/contact" className="btn btn-primary btn-lg">Contact Our Enterprise Team</Link>
                </div>
            </section>
        </div>
    );
}
