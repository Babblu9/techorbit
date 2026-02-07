'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
    Brain, Code2, Cloud, FlaskConical, Shield, BarChart3,
    Clock, MapPin, Search, ArrowRight
} from 'lucide-react';
import { courses, courseCategories } from '@/data/courses';
import styles from './page.module.css';

// Icon mapping for categories
const iconMap = {
    Brain, Code2, Cloud, FlaskConical, Shield, BarChart3
};

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const getIcon = (iconName) => {
        const IconComponent = iconMap[iconName];
        return IconComponent ? <IconComponent size={16} /> : null;
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Our <span className="gradient-text">Courses</span></h1>
                    <p>Industry-ready programs designed to launch your career in tech</p>
                </div>
            </section>

            {/* Filters */}
            <section className={styles.filters}>
                <div className={styles.container}>
                    <div className={styles.filterBar}>
                        <div className={styles.categories}>
                            <button
                                className={`${styles.catBtn} ${activeCategory === 'all' ? styles.active : ''}`}
                                onClick={() => setActiveCategory('all')}
                            >
                                All Courses
                            </button>
                            {courseCategories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`${styles.catBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {getIcon(cat.iconName)} {cat.name}
                                </button>
                            ))}
                        </div>
                        <div className={styles.searchWrapper}>
                            <Search size={18} className={styles.searchIcon} />
                            <input
                                type="search"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.search}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Grid */}
            <section className={styles.courseSection}>
                <div className={styles.container}>
                    <div className={styles.resultCount}>
                        Showing {filteredCourses.length} courses
                    </div>
                    <div className={styles.grid}>
                        {filteredCourses.map(course => (
                            <Link href={`/courses/${course.slug}`} key={course.slug} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.badge}>{course.categoryName}</span>
                                    <span className={styles.level}>{course.level}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{course.title}</h3>
                                <p className={styles.cardDesc}>{course.shortDescription}</p>
                                <div className={styles.cardMeta}>
                                    <span><Clock size={14} /> {course.duration}</span>
                                    <span><MapPin size={14} /> {course.mode}</span>
                                </div>
                                <div className={styles.cardTools}>
                                    {course.tools.slice(0, 4).map((tool, i) => (
                                        <span key={i} className={styles.tool}>{tool}</span>
                                    ))}
                                    {course.tools.length > 4 && <span className={styles.tool}>+{course.tools.length - 4}</span>}
                                </div>
                                <div className={styles.cardFooter}>
                                    <span className={styles.viewDetails}>
                                        View Details <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

