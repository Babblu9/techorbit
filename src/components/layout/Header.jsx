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

    // Course categories configuration - Updated to show only 6 core courses
    const courseCategories = [
        { id: 'ai-ml', name: 'AI & Machine Learning', hasSubmenu: false, href: '/courses/ai-ml' },
        { id: 'fullstack-ai', name: 'Full Stack AI', hasSubmenu: false, href: '/courses/fullstack-ai' },
        { id: 'drone-technology', name: 'Drone Technology', hasSubmenu: false, href: '/courses/drone-technology' },
        { id: '3d-printing', name: '3D Printing', hasSubmenu: false, href: '/courses/3d-printing' },
        { id: '5g-technology', name: '5G Technology', hasSubmenu: false, href: '/courses/5g-technology' },
        { id: 'cybersecurity', name: 'Cybersecurity', hasSubmenu: false, href: '/courses/cybersecurity' },
        { id: 'all-courses', name: 'View All Courses', hasSubmenu: false, href: '/courses' }
    ];

    // Resources dropdown items
    const resources = [
        { name: 'Interview Questions', href: '/resources/interview-questions' },
        { name: 'Course Material', href: '/resources/course-material' }
    ];

    // Our Entities dropdown with nested items
    const entities = [
        {
            id: 'upskilling',
            name: 'UpSkilling',
            hasSubmenu: true,
            items: [
                { name: 'Kukatpally', href: '/' },
                { name: 'USA', href: '/' }
            ]
        }
    ];

    // Placements dropdown items
    const placements = [
        { name: 'Skill To Job', href: '/placements/skill-to-job' },
        { name: 'Apply For Jobs', href: '/placements/apply' },
        { name: 'Alumni', href: '/placements/alumni' }
    ];

    // TSAT Test button link
    const tsatLink = '/scholarship-test';

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
                                                key={item.name}
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
                <Link href={tsatLink} className={`${styles.contactBtn} ${styles.tsatBtn}`}>
                    TSAT Test
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
                                                key={item.name}
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
