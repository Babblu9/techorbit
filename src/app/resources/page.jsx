import Link from 'next/link';
import { FileText, BookOpen, Video, Book, FlaskConical, BarChart3, FileSignature } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Free Resources - Interview Questions & Learning Materials | Techorbit',
    description: 'Access free learning resources, interview questions, cheat sheets, and career guides to accelerate your tech journey.',
};

export default function ResourcesPage() {
    const resources = [
        { icon: FileText, title: 'Interview Questions', desc: 'Comprehensive question banks for various technologies', items: ['Java', 'Python', 'React', 'SQL', 'AWS'] },
        { icon: FileSignature, title: 'Resume Building', desc: 'Learn how to create a winning resume', items: ['Resume Tips', 'Format Guide', 'ATS Optimization'] },
        { icon: BookOpen, title: 'Cheat Sheets', desc: 'Quick reference guides for popular tools', items: ['Git', 'Docker', 'Linux', 'Kubernetes', 'SQL'] },
        { icon: Video, title: 'Free Videos', desc: 'Sample training videos and tutorials', items: ['Intro courses', 'Tool demos', 'Career talks'] },
        { icon: Book, title: 'E-Books', desc: 'Downloadable learning materials', items: ['Career guides', 'Tech primers', 'Study plans'] },
        { icon: FlaskConical, title: 'Practice Tests', desc: 'Mock tests for certification prep', items: ['AWS', 'Azure', 'Selenium', 'ISTQB'] },
        { icon: BarChart3, title: 'Career Guides', desc: 'Industry insights and roadmaps', items: ['Salary trends', 'Job market', 'Skills demand'] },
    ];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Free <span className="gradient-text">Resources</span></h1>
                    <p>High-quality learning materials to kickstart your tech journey</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {resources.map((r, i) => {
                            const ResourceIcon = r.icon;
                            return (
                                <div key={i} className={styles.card}>
                                    <span className={styles.icon}>
                                        <ResourceIcon size={28} />
                                    </span>
                                    <h3>{r.title}</h3>
                                    <p>{r.desc}</p>
                                    <ul className={styles.items}>
                                        {r.items.map((item, j) => (
                                            <li key={j}>{item}</li>
                                        ))}
                                    </ul>
                                    <Link 
                                        href={r.title === 'Resume Building' ? '/resources/interview-questions' : `/resources/${r.title.toLowerCase().replace(' ', '-')}`} 
                                        className={styles.link}
                                    >
                                        Access Now →
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
