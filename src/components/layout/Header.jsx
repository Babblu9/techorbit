'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const dropdownTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownEnter = (dropdown) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setActiveDropdown(dropdown);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
            setActiveSubmenu(null);
        }, 150);
    };

    const handleSubmenuEnter = (submenu) => {
        setActiveSubmenu(submenu);
    };

    // Course categories configuration
    const courseCategories = [
        { id: 'quantum', name: 'Quantum Computing', hasSubmenu: false, href: '/courses?category=quantum' },
        { id: 'genai', name: 'Gen AI', hasSubmenu: false, href: '/courses?category=genai' },
        {
            id: 'data-science',
            name: 'Data Science & Analytics',
            hasSubmenu: true,
            courses: [
                { name: 'Data Science', href: '/courses/data-science' },
                { name: 'Machine Learning', href: '/courses/machine-learning' },
                { name: 'Data Analytics', href: '/courses/data-analytics' },
                { name: 'Business Intelligence', href: '/courses/business-intelligence' },
                { name: 'Python for Data Science', href: '/courses/python-data-science' }
            ]
        },
        {
            id: 'web-dev',
            name: 'Web & App Development',
            hasSubmenu: true,
            courses: [
                { name: 'Full Stack Java', href: '/courses/fullstack-java' },
                { name: 'Full Stack Python', href: '/courses/fullstack-python' },
                { name: 'MERN Stack', href: '/courses/mern-stack' },
                { name: 'React.js', href: '/courses/reactjs' },
                { name: 'Angular', href: '/courses/angular' },
                { name: 'Flutter Development', href: '/courses/flutter' }
            ]
        },
        {
            id: 'cloud-data',
            name: 'Cloud & Data Engineering',
            hasSubmenu: true,
            courses: [
                { name: 'AWS', href: '/courses/aws' },
                { name: 'Azure', href: '/courses/azure' },
                { name: 'Google Cloud', href: '/courses/gcp' },
                { name: 'Snowflake', href: '/courses/snowflake' },
                { name: 'Databricks', href: '/courses/databricks' }
            ]
        },
        {
            id: 'testing',
            name: 'Software Testing',
            hasSubmenu: true,
            courses: [
                { name: 'Selenium', href: '/courses/selenium' },
                { name: 'Manual Testing', href: '/courses/manual-testing' },
                { name: 'API Testing', href: '/courses/api-testing' },
                { name: 'Performance Testing', href: '/courses/performance-testing' }
            ]
        },
        {
            id: 'devops',
            name: 'DevOps & Cloud Infrastructure',
            hasSubmenu: true,
            courses: [
                { name: 'DevOps', href: '/courses/devops' },
                { name: 'Kubernetes', href: '/courses/kubernetes' },
                { name: 'Docker', href: '/courses/docker' },
                { name: 'Terraform', href: '/courses/terraform' },
                { name: 'Jenkins', href: '/courses/jenkins' }
            ]
        },
        {
            id: 'cybersecurity',
            name: 'Cybersecurity & Networking',
            hasSubmenu: true,
            courses: [
                { name: 'Ethical Hacking', href: '/courses/ethical-hacking' },
                { name: 'Network Security', href: '/courses/network-security' },
                { name: 'CCNA', href: '/courses/ccna' },
                { name: 'CompTIA Security+', href: '/courses/comptia-security' }
            ]
        },
        { id: 'uiux', name: 'UI UX', hasSubmenu: false, href: '/courses?category=uiux' },
        { id: 'digital-marketing', name: 'Digital Marketing', hasSubmenu: false, href: '/courses?category=digital-marketing' },
        {
            id: 'multimedia',
            name: 'Multimedia & Video',
            hasSubmenu: true,
            courses: [
                { name: 'Video Editing', href: '/courses/video-editing' },
                { name: 'Motion Graphics', href: '/courses/motion-graphics' },
                { name: 'Graphic Design', href: '/courses/graphic-design' }
            ]
        },
        {
            id: 'medical',
            name: 'Medical & Clinical Skills',
            hasSubmenu: true,
            courses: [
                { name: 'Medical Coding', href: '/courses/medical-coding' },
                { name: 'Clinical Data Management', href: '/courses/clinical-data' },
                { name: 'Healthcare Analytics', href: '/courses/healthcare-analytics' }
            ]
        },
        {
            id: 'agile',
            name: 'Agile & Project Management',
            hasSubmenu: true,
            courses: [
                { name: 'PMP Certification', href: '/courses/pmp' },
                { name: 'Scrum Master', href: '/courses/scrum-master' },
                { name: 'Agile Fundamentals', href: '/courses/agile' }
            ]
        },
        {
            id: 'more',
            name: 'More Courses',
            hasSubmenu: true,
            courses: [
                { name: 'SAP', href: '/courses/sap' },
                { name: 'Salesforce', href: '/courses/salesforce' },
                { name: 'ServiceNow', href: '/courses/servicenow' },
                { name: 'View All Courses', href: '/courses' }
            ]
        }
    ];

    // Resources dropdown items
    const resources = [
        { name: 'Interview Questions', href: '/resources/interview-questions' },
        { name: 'Course Material', href: '/resources/course-material' },
        { name: 'Video Lectures', href: '/resources/video-lectures' }
    ];

    // Our Entities dropdown with nested items
    const entities = [
        {
            id: 'upskilling',
            name: 'UpSkilling',
            hasSubmenu: true,
            items: [
                { name: 'Kukatpally', href: '/entities/kukatpally' },
                { name: 'USA', href: '/entities/usa' }
            ]
        }
    ];

    // Placements dropdown items
    const placements = [
        { name: 'Skill To Job', href: '/placements/skill-to-job' },
        { name: 'Apply For Jobs', href: '/placements/apply' },
        { name: 'Alumni', href: '/placements/alumni' }
    ];

    // Upcoming Batches dropdown items
    const upcomingBatches = [
        { name: 'Training Courses', href: '/batches/training' },
        { name: 'Job Courses', href: '/batches/job' },
        { name: 'Internship Courses', href: '/batches/internship' }
    ];

    const toggleMobileAccordion = (accordion) => {
        setMobileAccordion(mobileAccordion === accordion ? null : accordion);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo - Left */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo-icon.png"
                        alt="Techorbit Logo"
                        width={60}
                        height={60}
                        className={styles.logoImage}
                        unoptimized
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                    />
                    <div className={styles.logoTextContainer}>
                        <span className={styles.brandName}>
                            <span>TECH</span>
                            <span className={styles.brandAccent}>ORBIT</span>
                        </span>
                        <span className={styles.tagline}>KNOWLEDGE CENTRE</span>
                    </div>
                </Link>

                {/* Navigation - Center */}
                <nav className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ''}`}>
                    {/* Courses Mega Menu */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleDropdownEnter('courses')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <button className={styles.dropdownTrigger}>
                            Courses <span className={styles.arrow}>▾</span>
                        </button>
                        {activeDropdown === 'courses' && (
                            <div className={styles.megaMenu}>
                                <div className={styles.megaMenuContent}>
                                    <div className={styles.categoryList}>
                                        {courseCategories.map(cat => (
                                            <div
                                                key={cat.id}
                                                className={`${styles.categoryItem} ${activeSubmenu === cat.id ? styles.active : ''}`}
                                                onMouseEnter={() => cat.hasSubmenu && handleSubmenuEnter(cat.id)}
                                            >
                                                {cat.hasSubmenu ? (
                                                    <div className={styles.categoryLink}>
                                                        <span>{cat.name}</span>
                                                        <span className={styles.submenuArrow}>›</span>
                                                    </div>
                                                ) : (
                                                    <Link href={cat.href} className={styles.categoryLink}>
                                                        <span>{cat.name}</span>
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submenu Panel */}
                                    {activeSubmenu && (
                                        <div className={styles.submenuPanel}>
                                            {courseCategories.find(c => c.id === activeSubmenu)?.courses?.map(course => (
                                                <Link
                                                    key={course.href}
                                                    href={course.href}
                                                    className={styles.submenuLink}
                                                >
                                                    {course.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resources Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleDropdownEnter('resources')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <button className={styles.dropdownTrigger}>
                            Resources <span className={styles.arrow}>▾</span>
                        </button>
                        {activeDropdown === 'resources' && (
                            <div className={styles.dropdownMenu}>
                                {resources.map(item => (
                                    <Link key={item.href} href={item.href} className={styles.dropdownLink}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Our Entities Dropdown (Two-Level) */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleDropdownEnter('entities')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <button className={styles.dropdownTrigger}>
                            Our Entities <span className={styles.arrow}>▾</span>
                        </button>
                        {activeDropdown === 'entities' && (
                            <div className={styles.nestedDropdown}>
                                <div className={styles.nestedList}>
                                    {entities.map(entity => (
                                        <div
                                            key={entity.id}
                                            className={`${styles.nestedItem} ${activeSubmenu === entity.id ? styles.active : ''}`}
                                            onMouseEnter={() => handleSubmenuEnter(entity.id)}
                                        >
                                            <div className={styles.nestedItemLink}>
                                                <span>{entity.name}</span>
                                                <span className={styles.submenuArrow}>›</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {activeSubmenu && entities.find(e => e.id === activeSubmenu) && (
                                    <div className={styles.nestedSubmenu}>
                                        {entities.find(e => e.id === activeSubmenu).items.map(item => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={styles.nestedSubmenuLink}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Placements Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleDropdownEnter('placements')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <button className={styles.dropdownTrigger}>
                            Placements <span className={styles.arrow}>▾</span>
                        </button>
                        {activeDropdown === 'placements' && (
                            <div className={styles.dropdownMenu}>
                                {placements.map(item => (
                                    <Link key={item.href} href={item.href} className={styles.dropdownLink}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Upcoming Batches Dropdown */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleDropdownEnter('batches')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <button className={styles.dropdownTrigger}>
                            Upcoming Batches <span className={styles.arrow}>▾</span>
                        </button>
                        {activeDropdown === 'batches' && (
                            <div className={styles.dropdownMenu}>
                                {upcomingBatches.map(item => (
                                    <Link key={item.href} href={item.href} className={styles.dropdownLink}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Us CTA - Desktop (inside nav for mobile) */}
                    <Link href="/contact" className={`${styles.contactBtn} ${styles.mobileContactBtn}`}>
                        Contact Us
                    </Link>
                </nav>

                {/* Contact Us CTA - Desktop */}
                <Link href="/contact" className={`${styles.contactBtn} ${styles.desktopContactBtn}`}>
                    Contact Us
                </Link>

                {/* Mobile Toggle */}
                <button
                    className={`${styles.mobileToggle} ${isMobileOpen ? styles.mobileToggleOpen : ''}`}
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileOpen && (
                <div className={styles.mobileNav}>
                    {/* Courses Accordion */}
                    <div className={styles.mobileAccordion}>
                        <button
                            className={styles.mobileAccordionBtn}
                            onClick={() => toggleMobileAccordion('courses')}
                        >
                            Courses
                            <span className={`${styles.accordionArrow} ${mobileAccordion === 'courses' ? styles.open : ''}`}>▾</span>
                        </button>
                        {mobileAccordion === 'courses' && (
                            <div className={styles.mobileAccordionContent}>
                                {courseCategories.map(cat => (
                                    <div key={cat.id}>
                                        {cat.hasSubmenu ? (
                                            <>
                                                <div className={styles.mobileSubCategory}>{cat.name}</div>
                                                {cat.courses.map(course => (
                                                    <Link
                                                        key={course.href}
                                                        href={course.href}
                                                        className={styles.mobileSubLink}
                                                        onClick={() => setIsMobileOpen(false)}
                                                    >
                                                        {course.name}
                                                    </Link>
                                                ))}
                                            </>
                                        ) : (
                                            <Link
                                                href={cat.href}
                                                className={styles.mobileLink}
                                                onClick={() => setIsMobileOpen(false)}
                                            >
                                                {cat.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Resources Accordion */}
                    <div className={styles.mobileAccordion}>
                        <button
                            className={styles.mobileAccordionBtn}
                            onClick={() => toggleMobileAccordion('resources')}
                        >
                            Resources
                            <span className={`${styles.accordionArrow} ${mobileAccordion === 'resources' ? styles.open : ''}`}>▾</span>
                        </button>
                        {mobileAccordion === 'resources' && (
                            <div className={styles.mobileAccordionContent}>
                                {resources.map(item => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.mobileLink}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Our Entities Accordion */}
                    <div className={styles.mobileAccordion}>
                        <button
                            className={styles.mobileAccordionBtn}
                            onClick={() => toggleMobileAccordion('entities')}
                        >
                            Our Entities
                            <span className={`${styles.accordionArrow} ${mobileAccordion === 'entities' ? styles.open : ''}`}>▾</span>
                        </button>
                        {mobileAccordion === 'entities' && (
                            <div className={styles.mobileAccordionContent}>
                                {entities.map(entity => (
                                    <div key={entity.id}>
                                        <div className={styles.mobileSubCategory}>{entity.name}</div>
                                        {entity.items.map(item => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={styles.mobileSubLink}
                                                onClick={() => setIsMobileOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Placements Accordion */}
                    <div className={styles.mobileAccordion}>
                        <button
                            className={styles.mobileAccordionBtn}
                            onClick={() => toggleMobileAccordion('placements')}
                        >
                            Placements
                            <span className={`${styles.accordionArrow} ${mobileAccordion === 'placements' ? styles.open : ''}`}>▾</span>
                        </button>
                        {mobileAccordion === 'placements' && (
                            <div className={styles.mobileAccordionContent}>
                                {placements.map(item => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.mobileLink}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Upcoming Batches Accordion */}
                    <div className={styles.mobileAccordion}>
                        <button
                            className={styles.mobileAccordionBtn}
                            onClick={() => toggleMobileAccordion('batches')}
                        >
                            Upcoming Batches
                            <span className={`${styles.accordionArrow} ${mobileAccordion === 'batches' ? styles.open : ''}`}>▾</span>
                        </button>
                        {mobileAccordion === 'batches' && (
                            <div className={styles.mobileAccordionContent}>
                                {upcomingBatches.map(item => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.mobileLink}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Us Button Mobile */}
                    <Link
                        href="/contact"
                        className={styles.mobileContactCta}
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </header>
    );
}
