import Link from 'next/link';
import { Calendar, Clock, Download, ArrowRight, BookOpen } from 'lucide-react';
import styles from './page.module.css';
import { trainingCourses } from '@/data/courseSchedules';

export const metadata = {
    title: 'Training Courses | Upcoming Batches | Techorbit',
    description: 'Find the best quality training courses in Hyderabad with Techorbit. Learn from industry experts and boost your career opportunities.',
};

export default function TrainingBatchesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Training Courses</h1>
                <p className={styles.subtitle}>Industry-leading courses taught by expert instructors</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{trainingCourses.length}+</span>
                        <span className={styles.statLabel}>Active Batches</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Expert Trainers</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>95%</span>
                        <span className={styles.statLabel}>Placement Rate</span>
                    </div>
                </div>

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <BookOpen size={22} />
                    Upcoming Training Batches
                </div>

                {/* Course Table */}
                <div className={styles.tableContainer}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>COURSE NAME</th>
                                    <th>TIME</th>
                                    <th>DURATION</th>
                                    <th>MODE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingCourses.map((course) => (
                                    <tr key={course.id}>
                                        <td className={styles.dateCell}>
                                            <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                                            {course.date}
                                        </td>
                                        <td className={styles.nameCell}>{course.name}</td>
                                        <td className={styles.timeCell}>
                                            <Clock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                                            {course.time}
                                        </td>
                                        <td className={styles.durationCell}>{course.duration}</td>
                                        <td>
                                            <span className={styles.modeCell}>{course.mode}</span>
                                        </td>
                                        <td>
                                            <div className={styles.actionCell}>
                                                <Link href={course.curriculum} className={styles.curriculumBtn}>
                                                    <Download size={14} />
                                                    Curriculum
                                                </Link>
                                                <Link href="/contact" className={styles.registerBtn}>
                                                    Register
                                                    <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
