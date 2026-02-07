import Link from 'next/link';
import { ExternalLink, FileText } from 'lucide-react';
import styles from './page.module.css';
import { courseMaterials } from '@/data/courseMaterial';

export const metadata = {
    title: 'Course Material | Resources | Techorbit - Best Training Institute',
    description: 'Access our free course materials, including tutorials, and practice exercises. Enhance your skills with Techorbit\'s valuable resources.',
};

export default function CourseMaterialPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Course Material</h1>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Resource Badge */}
                <div className={styles.resourceBadge}>
                    <FileText size={18} />
                    {courseMaterials.length} Resources Available
                </div>

                <div className={styles.tableContainer}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>SL NO</th>
                                    <th>TOPICS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseMaterials.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className={styles.serialNo}>
                                            {String(index + 1).padStart(2, '0')}
                                        </td>
                                        <td className={styles.topicCell}>
                                            {item.topic}
                                        </td>
                                        <td className={styles.actionCell}>
                                            <Link
                                                href={item.link}
                                                className={styles.readMoreLink}
                                                target={item.type === 'external' ? '_blank' : '_self'}
                                                rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                                            >
                                                <span>Read More</span>
                                                <ExternalLink size={14} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
