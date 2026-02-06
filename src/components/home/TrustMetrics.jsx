import { trustMetrics } from '@/data/courses';
import styles from './TrustMetrics.module.css';

export default function TrustMetrics() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {trustMetrics.map((metric, idx) => (
                    <div key={idx} className={styles.metric}>
                        <span className={styles.icon}>{metric.icon}</span>
                        <span className={styles.value}>{metric.value}</span>
                        <span className={styles.label}>{metric.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
