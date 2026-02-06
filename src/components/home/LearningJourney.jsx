'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    BookOpen, Briefcase, Target, Building2,
    GraduationCap, Laptop, Award, Users, Smartphone, RefreshCw,
    FileText, Mic, Handshake, TrendingUp,
    Shield, BarChart3, Clock, Gamepad2, Phone, CheckCircle,
    UserCog, Lock, Globe
} from 'lucide-react';
import styles from './LearningJourney.module.css';

export default function LearningJourney() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'Professional Upskilling', icon: BookOpen },
        { label: 'Placement Bootcamps', icon: Briefcase },
        { label: 'Skill To Job', icon: Target },
        { label: 'Corporate Training', icon: Building2 },
    ];

    const services = [
        [
            { icon: GraduationCap, title: 'Expert-Led Training', desc: 'Learn from industry professionals with 10+ years of experience', color: '#FFE8D6' },
            { icon: Laptop, title: 'Hands-On Projects', desc: 'Build real-world applications and portfolio-ready projects', color: '#D6E8FF' },
            { icon: Award, title: 'Certifications', desc: 'Get industry-recognized certificates upon completion', color: '#D6FFE8' },
            { icon: Users, title: 'Mentor Support', desc: 'Personal guidance from dedicated technical mentors', color: '#FFD6E8' },
            { icon: Smartphone, title: 'Flexible Learning', desc: 'Choose between online, offline, or hybrid modes', color: '#E8D6FF' },
            { icon: RefreshCw, title: 'Lifetime Access', desc: 'Access course materials and updates forever', color: '#FFF6D6' },
        ],
        [
            { icon: Target, title: 'Job-Ready Training', desc: 'Complete placement-focused bootcamp programs', color: '#FFE8D6' },
            { icon: FileText, title: 'Resume Building', desc: 'Professional resume crafted by career experts', color: '#D6E8FF' },
            { icon: Mic, title: 'Mock Interviews', desc: 'Practice with real interview scenarios', color: '#D6FFE8' },
            { icon: Handshake, title: 'Company Connect', desc: 'Direct referrals to our 500+ hiring partners', color: '#FFD6E8' },
            { icon: Briefcase, title: 'Job Guarantee', desc: 'Assured placement support until you get hired', color: '#E8D6FF' },
            { icon: TrendingUp, title: 'Salary Negotiation', desc: 'Guidance on negotiating the best package', color: '#FFF6D6' },
        ],
        [
            { icon: Shield, title: 'Beginner Friendly', desc: 'Start from scratch - no prior experience needed', color: '#FFE8D6' },
            { icon: BarChart3, title: 'Assessment Based', desc: 'Skill gap analysis and personalized learning path', color: '#D6E8FF' },
            { icon: Clock, title: 'Fast Track', desc: '3-6 month intensive programs for quick transition', color: '#D6FFE8' },
            { icon: Gamepad2, title: 'Learn by Doing', desc: 'Project-based curriculum with real scenarios', color: '#FFD6E8' },
            { icon: Phone, title: 'Career Counseling', desc: 'One-on-one career path planning sessions', color: '#E8D6FF' },
            { icon: CheckCircle, title: 'Job Assistance', desc: 'Complete support until you land your first tech job', color: '#FFF6D6' },
        ],
        [
            { icon: Building2, title: 'On-Site Training', desc: 'Customized programs at your company premises', color: '#FFE8D6' },
            { icon: UserCog, title: 'Needs Assessment', desc: 'Tailored curriculum based on team requirements', color: '#D6E8FF' },
            { icon: BarChart3, title: 'Progress Tracking', desc: 'Detailed reports and analytics for management', color: '#D6FFE8' },
            { icon: Lock, title: 'Enterprise LMS', desc: 'Dedicated learning management system access', color: '#FFD6E8' },
            { icon: Globe, title: 'Global Delivery', desc: 'Train teams across multiple locations', color: '#E8D6FF' },
            { icon: Handshake, title: 'Dedicated POC', desc: 'Single point of contact for all training needs', color: '#FFF6D6' },
        ],
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.badge}>Most Popular</span>
                    <h2 className={styles.title}>
                        Choose Your <span className={styles.highlight}>Learning Journey</span>
                    </h2>
                    <p className={styles.subtitle}>Master in-demand skills with our specialized programs</p>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    {tabs.map((tab, index) => {
                        const TabIcon = tab.icon;
                        return (
                            <button
                                key={index}
                                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <TabIcon size={18} className={styles.tabIcon} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Services Grid */}
                <div className={styles.servicesGrid}>
                    {services[activeTab].map((service, index) => {
                        const ServiceIcon = service.icon;
                        return (
                            <div
                                key={index}
                                className={styles.serviceCard}
                                style={{ '--accent-color': service.color }}
                            >
                                <span className={styles.serviceIcon} style={{ backgroundColor: service.color }}>
                                    <ServiceIcon size={24} />
                                </span>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <Link href="/free-demo" className={styles.ctaBtn}>
                        Get Free Career Counseling
                        <span className={styles.ctaArrow}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
