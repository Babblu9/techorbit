import Link from 'next/link';
import { Video, Play, User, ExternalLink } from 'lucide-react';
import styles from './page.module.css';
import { videoLectures } from '@/data/videoLectures';

export const metadata = {
    title: 'Video Lectures | Demo Lectures | Techorbit - Best Training Institute',
    description: 'Watch our free demo video lectures on AI/ML, Full Stack AI, Drone Technology, 3D Printing, 5G Technology, and Cybersecurity. Expert-led tutorials to help you learn.',
};

export default function VideoLecturesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Demo Video Lectures</h1>
                <p className={styles.heroSubtitle}>Watch our expert faculty deliver high-quality lessons</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Resource Badge */}
                <div className={styles.resourceBadge}>
                    <Video size={18} />
                    {videoLectures.length} Demo Playlists Available
                </div>

                {/* Video Cards Grid */}
                <div className={styles.videoGrid}>
                    {videoLectures.map((item) => (
                        <div key={item.id} className={styles.videoCard}>
                            {/* Video Thumbnail/Embed */}
                            <div className={styles.videoContainer}>
                                <iframe
                                    src={`https://www.youtube.com/embed/videoseries?list=${item.videoId}`}
                                    title={item.topic}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.videoIframe}
                                />
                            </div>

                            {/* Video Info */}
                            <div className={styles.videoInfo}>
                                <h3 className={styles.videoTitle}>{item.topic}</h3>
                                <div className={styles.facultyInfo}>
                                    <User size={16} />
                                    <span>Faculty: <strong>{item.faculty}</strong></span>
                                </div>
                                <Link
                                    href={item.videoLink}
                                    className={styles.watchBtn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Play size={16} />
                                    Watch Full Playlist
                                    <ExternalLink size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
