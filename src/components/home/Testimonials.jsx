'use client';
import { useState, useEffect } from 'react';
import { User, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Data Scientist at Google',
            text: 'The Data Science program at Techorbit completely transformed my career. The hands-on projects and mentor support helped me land my dream job at Google within 3 months of completing the course.',
            rating: 5,
            company: 'Google'
        },
        {
            name: 'Rahul Verma',
            role: 'DevOps Engineer at Amazon',
            text: 'Best decision I ever made! The DevOps training was incredibly comprehensive. The instructors have real industry experience and the placement team worked tirelessly to get me placed at Amazon.',
            rating: 5,
            company: 'Amazon'
        },
        {
            name: 'Sneha Patel',
            role: 'Full Stack Developer at Microsoft',
            text: 'From zero coding knowledge to a developer at Microsoft in 6 months! Techorbit\'s structured curriculum and project-based learning made all the difference. Highly recommended!',
            rating: 5,
            company: 'Microsoft'
        },
        {
            name: 'Arun Kumar',
            role: 'Cloud Architect at Infosys',
            text: 'The AWS and Azure training was top-notch. The real-world scenarios and hands-on labs prepared me perfectly for cloud architecture roles. Got promoted within 4 months!',
            rating: 5,
            company: 'Infosys'
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" className={styles.companyLogo} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className={styles.companyLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
}
