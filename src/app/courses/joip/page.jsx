import Link from 'next/link';
import { Calendar, Clock, Download, ArrowRight, GraduationCap } from 'lucide-react';
import styles from '../training/page.module.css';
import { joipCourses } from '@/data/courseSchedules';

export const metadata = {
    title: 'JOIP Courses | Job Oriented Internship Program | Techorbit',
    description: 'Looking for JOIP courses in Hyderabad? Check out our comprehensive curriculum and register now to boost your knowledge and expertise.',
};

export default function JOIPCoursesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>JOIP Courses</h1>
                <p className={styles.subtitle}>Job Oriented Internship Program - Learn, Practice, Get Placed</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{joipCourses.length}+</span>
                        <span className={styles.statLabel}>Active Programs</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Hands-on Training</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>90%</span>
                        <span className={styles.statLabel}>Job Placement</span>
                    </div>
                </div>

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <GraduationCap size={22} />
                    JOIP Course Schedule
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
                                {joipCourses.map((course) => (
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
                                                <button className={styles.registerBtn}>
                                                    Register
                                                    <ArrowRight size={14} />
                                                </button>
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
