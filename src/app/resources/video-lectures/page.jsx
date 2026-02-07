import Link from 'next/link';
import { Video, Play } from 'lucide-react';
import styles from './page.module.css';
import { videoLectures } from '@/data/videoLectures';

export const metadata = {
    title: 'Video Lectures | Resources | Techorbit - Best Training Institute',
    description: 'Stream free video lectures on data science, AI, and machine learning. Expert-led tutorials to help you improve your skills.',
};

export default function VideoLecturesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Video Lectures</h1>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Resource Badge */}
                <div className={styles.resourceBadge}>
                    <Video size={18} />
                    {videoLectures.length} Video Playlists Available
                </div>

                <div className={styles.tableContainer}>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>SL NO</th>
                                    <th>TOPICS</th>
                                    <th>FACULTY</th>
                                    <th>VIDEO LINKS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {videoLectures.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className={styles.serialNo}>
                                            {String(index + 1).padStart(2, '0')}
                                        </td>
                                        <td className={styles.topicCell}>
                                            {item.topic}
                                        </td>
                                        <td className={styles.facultyCell}>
                                            {item.faculty}
                                        </td>
                                        <td className={styles.actionCell}>
                                            <Link
                                                href={item.videoLink}
                                                className={styles.watchLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Play size={14} />
                                                Watch Here
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
