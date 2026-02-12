'use client';
import { useState, useEffect } from 'react';
import { User, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Priya Reddy',
            role: 'AI/ML Engineer at Tech Mahindra',
            course: 'AI & Machine Learning',
            text: 'The AI & Machine Learning program at Techorbit completely transformed my career. The hands-on deep learning projects and mentor support helped me land my dream role within 3 months of completing the course.',
            rating: 5,
            company: 'Tech Mahindra'
        },
        {
            name: 'Lakshmi Naidu',
            role: 'Full Stack AI Developer at Infosys',
            course: 'Full Stack AI',
            text: 'From zero coding knowledge to a Full Stack AI Developer in 6 months! Techorbit\'s MERN + Agentic AI curriculum and project-based learning made all the difference. Highly recommended!',
            rating: 5,
            company: 'Infosys'
        },
        {
            name: 'Rahul Verma',
            role: 'Drone Engineer at ideaForge',
            course: 'Drone Technology',
            text: 'Building my first autonomous drone in the lab was an incredible experience. The practical approach and exposure to PX4 and ArduPilot prepared me for real industry challenges at ideaForge.',
            rating: 5,
            company: 'ideaForge'
        },
        {
            name: 'Sneha Nair',
            role: 'Cybersecurity Analyst at Deloitte',
            course: 'Cybersecurity',
            text: 'The ethical hacking labs and CTF challenges were intense but rewarding. I cleared my CEH certification on the first attempt and got placed at Deloitte within a month of completing the course.',
            rating: 5,
            company: 'Deloitte'
        },
        {
            name: 'Karthik Rao',
            role: '5G Software Testing Engineer at Ericsson',
            course: '5G Software Testing',
            text: 'Best decision I ever made! The 5G Software Testing training was incredibly comprehensive. The instructors have real telecom experience and the placement team worked tirelessly to get me placed at Ericsson.',
            rating: 5,
            company: 'Ericsson'
        },
        {
            name: 'Venkatesh Kumar',
            role: '3D Printing Specialist at Stratasys',
            course: '3D Printing & Additive Manufacturing',
            text: 'The 3D Printing course was top-notch. Learning CAD design, multiple printing technologies, and real-world prototyping prepared me perfectly for my role in additive manufacturing.',
            rating: 5,
            company: 'Stratasys'
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.badge}>Success Stories</span>
                    <h2 className={styles.title}>
                        What Our <span className={styles.highlight}>Students Say</span>
                    </h2>
                    <p className={styles.subtitle}>Join 150,000+ successful alumni working at top tech companies</p>
                </div>

                {/* Testimonials Slider */}
                <div className={styles.sliderContainer}>
                    <div className={styles.slider}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                            >
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.avatar}>
                                            <User size={28} />
                                        </div>
                                        <div className={styles.info}>
                                            <h4 className={styles.name}>{testimonial.name}</h4>
                                            <p className={styles.role}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className={styles.stars}>
                                        {Array(testimonial.rating).fill(null).map((_, i) => (
                                            <Star key={i} size={16} className={styles.star} fill="currentColor" />
                                        ))}
                                    </div>
                                    <blockquote className={styles.quote}>
                                        "{testimonial.text}"
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className={styles.dots}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Company Logos */}
                <div className={styles.companies}>
                    <p className={styles.companiesLabel}>Our students work at:</p>
                    <div className={styles.logos}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Infosys_logo.svg/320px-Infosys_logo.svg.png" alt="Infosys" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/320px-Tata_Consultancy_Services_Logo.svg.png" alt="TCS" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/320px-Deloitte.svg.png" alt="Deloitte" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png" alt="Tech Mahindra" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ericsson_logo.svg/320px-Ericsson_logo.svg.png" alt="Ericsson" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/320px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="Wipro" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/DRDO_logo.png/200px-DRDO_logo.png" alt="DRDO" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Qualcomm-Logo.svg/320px-Qualcomm-Logo.svg.png" alt="Qualcomm" className={styles.companyLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
}
