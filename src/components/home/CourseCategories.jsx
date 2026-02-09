'use client';
import Link from 'next/link';
import { Brain, Layers, Plane, Box, Radio, Shield, Clock, Users, Star } from 'lucide-react';
import { courses } from '@/data/courses';
import styles from './CourseCategories.module.css';

export default function CourseCategories() {
    // Get top 6 featured courses
    const featuredCourses = courses.slice(0, 6);

    const getCourseIcon = (slug) => {
        const icons = {
            'ai-ml': Brain,
            'fullstack-ai': Layers,
            'drone-technology': Plane,
            '3d-printing': Box,
            '5g-technology': Radio,
            'cybersecurity': Shield
        };
        return icons[slug] || Brain;
    };

    const getTechTags = (course) => {
        // Generate tech tags based on course slug
        const tagMap = {
            'ai-ml': ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning'],
            'fullstack-ai': ['React', 'Node.js', 'MongoDB', 'LangChain'],
            'drone-technology': ['PX4', 'ArduPilot', 'Sensors', 'Navigation'],
            '3d-printing': ['Fusion 360', 'Cura', 'CAD', 'Materials'],
            '5g-technology': ['5G NR', 'MIMO', 'Network Slicing', 'IoT'],
            'cybersecurity': ['Kali Linux', 'Penetration Testing', 'SIEM', 'SOC']
        };
        return tagMap[course.slug] || course.tools?.slice(0, 4) || ['Python', 'SQL', 'Analytics'];
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.badge}>Most Popular</span>
                    <h2 className={styles.title}>
                        <span className={styles.titleDark}>Trending</span>{' '}
                        <span className={styles.titleOrange}>Courses</span>
                    </h2>
                    <p className={styles.subtitle}>Master in-demand skills with our specialized programs</p>
                </div>

                {/* Course Grid */}
                <div className={styles.grid}>
                    {featuredCourses.map((course) => {
                        const IconComponent = getCourseIcon(course.slug);
                        return (
                            <div key={course.slug} className={styles.card}>
                                {/* Card Header with Icon */}
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardIcon}>
                                        <IconComponent size={24} />
                                    </span>
                                    <h3 className={styles.cardTitle}>{course.title}</h3>
                                </div>

                                {/* Course Meta */}
                                <div className={styles.cardMeta}>
                                    <span className={styles.metaItem}>
                                        <Clock size={14} className={styles.metaIcon} />
                                        {course.duration}
                                    </span>
                                    <span className={styles.metaItem}>
                                        <Users size={14} className={styles.metaIcon} />
                                        {course.students?.toLocaleString() || '1,200'}+
                                    </span>
                                </div>

                                {/* Description */}
                                <p className={styles.cardDesc}>
                                    {course.description?.slice(0, 100) ||
                                        `Master ${course.title} with hands-on projects and expert guidance.`}...
                                </p>

                                {/* Tech Tags */}
                                <div className={styles.tags}>
                                    {getTechTags(course).slice(0, 4).map((tag, idx) => (
                                        <span key={idx} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                {/* Rating */}
                                <div className={styles.rating}>
                                    <div className={styles.stars}>
                                        {[1, 2, 3, 4, 5].map((idx) => (
                                            <Star key={idx} size={14} className={styles.starFilled} fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className={styles.ratingText}>
                                        <strong>4.6</strong> (1,400+ students)
                                    </span>
                                </div>

                                {/* Price Section */}
                                <div className={styles.priceSection}>
                                    <span className={styles.priceLabel}>Training Fee</span>
                                    <span className={styles.price}>₹{course.price?.toLocaleString() || '60,000'}</span>
                                </div>

                                {/* CTA Button */}
                                <Link href={`/courses/${course.slug}`} className={styles.cardBtn}>
                                    View Course Details
                                    <span className={styles.btnArrow}>→</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* View All Courses */}
                <div className={styles.viewAll}>
                    <Link href="/courses" className={styles.viewAllBtn}>
                        Explore All Courses
                        <span className={styles.btnArrow}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
