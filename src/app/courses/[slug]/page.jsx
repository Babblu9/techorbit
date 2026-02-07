'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    Clock, MapPin, BarChart3, Check, Briefcase,
    ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import { courses } from '@/data/courses';
import styles from './page.module.css';

export default function CourseDetailPage({ params }) {
    // Next.js 15: params is a Promise, unwrap with use()
    const { slug } = use(params);
    const course = courses.find(c => c.slug === slug);
    const [openModule, setOpenModule] = useState(0);

    if (!course) {
        notFound();
    }

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.breadcrumb}>
                            <Link href="/courses">Courses</Link> / <span>{course.categoryName}</span>
                        </div>
                        <h1>{course.title}</h1>
                        <p className={styles.description}>{course.description}</p>
                        <div className={styles.meta}>
                            <span><Clock size={16} /> {course.duration}</span>
                            <span><MapPin size={16} /> {course.mode}</span>
                            <span><BarChart3 size={16} /> {course.level}</span>
                        </div>
                        <div className={styles.ctas}>
                            <Link href="/free-demo" className="btn btn-primary btn-lg">
                                Enroll Now <ArrowRight size={16} />
                            </Link>
                            <Link href="/contact" className="btn btn-outline btn-lg">Request Callback</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Main Content */}
                        <div className={styles.main}>
                            {/* Highlights */}
                            <div className={styles.section}>
                                <h2>Course Highlights</h2>
                                <div className={styles.highlights}>
                                    {course.highlights.map((h, i) => (
                                        <div key={i} className={styles.highlight}>
                                            <Check size={16} className={styles.checkIcon} /> {h}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Curriculum */}
                            <div className={styles.section}>
                                <h2>Curriculum</h2>
                                <div className={styles.curriculum}>
                                    {course.curriculum.map((mod, i) => (
                                        <div key={i} className={styles.module}>
                                            <button
                                                className={`${styles.moduleHeader} ${openModule === i ? styles.open : ''}`}
                                                onClick={() => setOpenModule(openModule === i ? -1 : i)}
                                            >
                                                <span>Module {i + 1}: {mod.title}</span>
                                                <span className={styles.arrow}>
                                                    {openModule === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </span>
                                            </button>
                                            {openModule === i && (
                                                <div className={styles.moduleContent}>
                                                    <ul>
                                                        {mod.topics.map((topic, j) => (
                                                            <li key={j}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className={styles.section}>
                                <h2>Tools & Technologies</h2>
                                <div className={styles.tools}>
                                    {course.tools.map((tool, i) => (
                                        <span key={i} className={styles.tool}>{tool}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Career Outcomes */}
                            <div className={styles.section}>
                                <h2>Career Outcomes</h2>
                                <div className={styles.outcomes}>
                                    {course.outcomes.map((outcome, i) => (
                                        <div key={i} className={styles.outcome}>
                                            <Briefcase size={18} className={styles.outcomeIcon} />
                                            <span>{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.enquiryCard}>
                                <h3>Enroll in This Course</h3>
                                <p>Get expert training and placement support</p>
                                <form className={styles.form}>
                                    <input type="text" placeholder="Your Name" className="form-input" required />
                                    <input type="email" placeholder="Email Address" className="form-input" required />
                                    <input type="tel" placeholder="Phone Number" className="form-input" required />
                                    <select className="form-select">
                                        <option value="">Preferred Mode</option>
                                        <option value="online">Online</option>
                                        <option value="classroom">Classroom</option>
                                    </select>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Request Free Demo
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}

