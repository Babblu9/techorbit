import Link from 'next/link';
import { Video, BookOpen, Laptop, Clock, MessageCircle, Award } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Online Training - Live Instructor-Led Courses | Techorbit',
    description: 'Learn from anywhere with our live online training programs. Interactive sessions, flexible timings, and expert instructors.',
};

export default function OnlineTrainingPage() {
    const features = [
        { icon: Video, title: 'Live Interactive Classes', desc: 'Real-time sessions with expert trainers, not pre-recorded videos' },
        { icon: BookOpen, title: 'Recorded Sessions', desc: 'Access recordings of all classes for revision anytime' },
        { icon: Laptop, title: 'Hands-On Labs', desc: 'Cloud-based labs for practical experience' },
        { icon: Clock, title: 'Flexible Timings', desc: 'Weekday and weekend batches to suit your schedule' },
        { icon: MessageCircle, title: '24/7 Support', desc: 'Doubt clearing sessions and community support' },
        { icon: Award, title: 'Certification', desc: 'Industry-recognized certificates upon completion' },
    ];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Online <span className="gradient-text">Training</span></h1>
                    <p>Learn from anywhere with live instructor-led sessions, hands-on projects, and dedicated support</p>
                    <Link href="/free-demo" className="btn btn-primary btn-lg">Start Learning Today</Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Choose Online Training?</h2>
                        <p>Get the same quality training from the comfort of your home</p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((f, i) => {
                            const FeatureIcon = f.icon;
                            return (
                                <div key={i} className={styles.featureCard}>
                                    <span className={styles.featureIcon}>
                                        <FeatureIcon size={28} />
                                    </span>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.modesSection}>
                <div className={styles.container}>
                    <h2>Training Options</h2>
                    <div className={styles.modesGrid}>
                        <div className={styles.modeCard}>
                            <h3>Weekday Batches</h3>
                            <p>Mon-Fri, 2 hours daily. Ideal for students and freshers.</p>
                            <span className={styles.timing}>Morning & Evening slots</span>
                        </div>
                        <div className={styles.modeCard}>
                            <h3>Weekend Batches</h3>
                            <p>Sat-Sun, 4-5 hours daily. Perfect for working professionals.</p>
                            <span className={styles.timing}>Flexible weekend slots</span>
                        </div>
                        <div className={styles.modeCard}>
                            <h3>Fast Track</h3>
                            <p>Intensive daily sessions. Complete courses in half the time.</p>
                            <span className={styles.timing}>5-6 hours daily</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to Start Your Online Learning Journey?</h2>
                    <div className={styles.ctaButtons}>
                        <Link href="/courses" className="btn btn-primary btn-lg">Explore Courses</Link>
                        <Link href="/free-demo" className="btn btn-secondary btn-lg">Book Free Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
