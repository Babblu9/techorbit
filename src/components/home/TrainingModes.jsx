import Link from 'next/link';
import { trainingModes } from '@/data/courses';
import styles from './TrainingModes.module.css';

export default function TrainingModes() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Flexible <span className="gradient-text">Training Modes</span></h2>
                    <p>Learn your way — choose the format that fits your schedule</p>
                </div>

                <div className={styles.grid}>
                    {trainingModes.map((mode, idx) => (
                        <div key={mode.id} className={styles.card}>
                            <span className={styles.icon}>{mode.icon}</span>
                            <h3 className={styles.title}>{mode.title}</h3>
                            <p className={styles.description}>{mode.description}</p>
                            <ul className={styles.features}>
                                {mode.features.map((feat, i) => (
                                    <li key={i}>✓ {feat}</li>
                                ))}
                            </ul>
                            <Link href={`/${mode.id}-training`} className={styles.link}>
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
