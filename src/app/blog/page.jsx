import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Blog - Tech Articles & Career Tips | Techorbit',
    description: 'Stay updated with latest tech trends, career tips, interview guides, and learning resources from Techorbit experts.',
};

export default function BlogPage() {
    const articles = [
        { slug: 'data-science-career-2024', title: 'Data Science Career Guide 2024', category: 'Career', date: 'Jan 15, 2024', excerpt: 'Everything you need to know about starting a career in data science this year.' },
        { slug: 'aws-vs-azure-vs-gcp', title: 'AWS vs Azure vs GCP: Which Cloud to Learn?', category: 'Cloud', date: 'Jan 10, 2024', excerpt: 'A comprehensive comparison to help you choose the right cloud platform.' },
        { slug: 'react-interview-questions', title: 'Top 50 React Interview Questions', category: 'Interview', date: 'Jan 5, 2024', excerpt: 'Prepare for your React developer interview with these commonly asked questions.' },
        { slug: 'devops-roadmap', title: 'DevOps Roadmap for Beginners', category: 'DevOps', date: 'Dec 28, 2023', excerpt: 'Step-by-step guide to becoming a DevOps engineer from scratch.' },
        { slug: 'python-automation', title: 'Python for Test Automation', category: 'Testing', date: 'Dec 20, 2023', excerpt: 'Learn how Python is transforming the test automation landscape.' },
        { slug: 'ai-trends-2024', title: 'AI Trends to Watch in 2024', category: 'AI', date: 'Dec 15, 2023', excerpt: 'The most exciting developments in artificial intelligence this year.' },
    ];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Techorbit <span className="gradient-text">Blog</span></h1>
                    <p>Insights, tutorials, and career guidance from industry experts</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {articles.map((a, i) => (
                            <article key={i} className={styles.card}>
                                <span className={styles.category}>{a.category}</span>
                                <h2>{a.title}</h2>
                                <p>{a.excerpt}</p>
                                <div className={styles.meta}>
                                    <span>{a.date}</span>
                                    <Link href={`/blog/${a.slug}`} className={styles.readMore}>Read More →</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
