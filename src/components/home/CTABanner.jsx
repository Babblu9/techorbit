import Link from 'next/link';
import { Play, Phone, CheckCircle } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Ready to Launch Your <span className={styles.highlight}>Tech Career?</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Join 150,000+ students who transformed their careers. Get free career counseling today!
                    </p>
                    <div className={styles.actions}>
                        <Link href="/free-demo" className={styles.btnPrimary}>
                            <span>Book Free Demo Class</span>
                            <Play size={18} className={styles.icon} />
                        </Link>
                        <Link href="/contact" className={styles.btnOutline}>
                            <span>Talk to Expert</span>
                            <Phone size={18} className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.trust}>
                        <span className={styles.trustItem}>
                            <CheckCircle size={16} className={styles.checkIcon} /> No Credit Card Required
                        </span>
                        <span className={styles.trustItem}>
                            <CheckCircle size={16} className={styles.checkIcon} /> Free Career Counseling
                        </span>
                        <span className={styles.trustItem}>
                            <CheckCircle size={16} className={styles.checkIcon} /> 1-on-1 with Expert
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
