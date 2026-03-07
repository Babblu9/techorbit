import Link from 'next/link';
import { Calendar, Clock, Download, ArrowRight, Award } from 'lucide-react';
import styles from '../training/page.module.css';
import { internshipCourses } from '@/data/courseSchedules';

export const metadata = {
    title: 'Internship Courses | Premium Programs | Techorbit',
    description: 'Premium internship courses with guaranteed internship and placement support. Register today for professional growth.',
};

export default function InternshipBatchesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Internship Courses</h1>
                <p className={styles.subtitle}>Premium programs with guaranteed internship and placement support</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{internshipCourses.length}+</span>
                        <span className={styles.statLabel}>Premium Programs</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Internship Guaranteed</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>95%</span>
                        <span className={styles.statLabel}>Placement Assistance</span>
                    </div>
                </div>

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <Award size={22} />
                    Internship Course Schedule
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
                                {internshipCourses.map((course) => (
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
