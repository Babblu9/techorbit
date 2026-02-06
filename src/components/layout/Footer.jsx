import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { courseCategories } from '@/data/courses';
import styles from './Footer.module.css';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Career Guidance', href: '/career-guidance' },
        { name: 'Placement Support', href: '/placement' },
        { name: 'Blog', href: '/blog' },
        { name: 'Free Demo', href: '/free-demo' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="Techorbit Knowledge Centre"
                                width={110}
                                height={35}
                                className={styles.logoImage}
                                unoptimized
                            />
                        </Link>
                        <p className={styles.tagline}>
                            Empowering careers through industry-ready IT training. Transform your future with expert-led courses and hands-on projects.
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Facebook" className={styles.socialLink}><Facebook size={18} /></a>
                            <a href="#" aria-label="LinkedIn" className={styles.socialLink}><Linkedin size={18} /></a>
                            <a href="#" aria-label="Twitter" className={styles.socialLink}><Twitter size={18} /></a>
                            <a href="#" aria-label="Instagram" className={styles.socialLink}><Instagram size={18} /></a>
                            <a href="#" aria-label="YouTube" className={styles.socialLink}><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Course Categories */}
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Popular Courses</h4>
                        <ul className={styles.linkList}>
                            {courseCategories.slice(0, 6).map(cat => (
                                <li key={cat.id}>
                                    <Link href={`/courses?category=${cat.id}`} className={styles.footerLink}>
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactColumn}>
                        <h4 className={styles.columnTitle}>Contact Us</h4>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><MapPin size={16} /></span>
                                <span>Hitech City, Hyderabad, Telangana, India - 500081</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><Phone size={16} /></span>
                                <span>+91 98765 43210</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><Mail size={16} /></span>
                                <span>info@techorbit.in</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}><Clock size={16} /></span>
                                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © 2024 Techorbit. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/refund">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
