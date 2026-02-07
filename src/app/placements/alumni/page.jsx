import { GraduationCap, TrendingUp, Building, Users } from 'lucide-react';
import styles from './page.module.css';
import { alumniPlacements } from '@/data/alumniPlacements';

export const metadata = {
    title: 'Alumni | Meet Our Graduates Making an Impact | Techorbit',
    description: 'Browse the latest placements and career achievements from our graduates. See success stories from Techorbit alumni.',
};

export default function AlumniPage() {
    const totalStudents = alumniPlacements.reduce((acc, month) => acc + month.students.length, 0);
    const companies = new Set(alumniPlacements.flatMap(m => m.students.map(s => s.company))).size;

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Meet Our Graduates Making an Impact</h1>
                <p className={styles.subtitle}>Browse the latest placements and career achievements from our graduates</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{totalStudents}+</span>
                        <span className={styles.statLabel}>Recent Placements</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{companies}+</span>
                        <span className={styles.statLabel}>Partner Companies</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>95%</span>
                        <span className={styles.statLabel}>Placement Rate</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>8.5L</span>
                        <span className={styles.statLabel}>Avg. Package</span>
                    </div>
                </div>

                {/* Placements by Month */}
                {alumniPlacements.map((monthData) => (
                    <section key={monthData.id} className={styles.monthSection}>
                        <div className={styles.monthHeader}>
                            <GraduationCap size={20} />
                            {monthData.month}
                        </div>
                        <div className={styles.studentsGrid}>
                            {monthData.students.map((student, index) => (
                                <div key={index} className={styles.studentCard}>
                                    <div className={styles.cardContent}>
                                        <div className={styles.avatar}>
                                            {student.name.charAt(0)}
                                        </div>
                                        <h3 className={styles.studentName}>{student.name}</h3>
                                        <p className={styles.courseName}>{student.course}</p>
                                        <div className={styles.placementInfo}>
                                            <span className={styles.packageBadge}>
                                                <TrendingUp size={14} />
                                                {student.package}
                                            </span>
                                            <span className={styles.companyName}>
                                                <Building size={14} style={{ display: 'inline', marginRight: '6px' }} />
                                                {student.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
