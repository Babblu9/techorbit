'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, FileText, Download, Users } from 'lucide-react';
import styles from './page.module.css';
import { interviewQuestions } from '@/data/interviewQuestions';
export default function InterviewQuestionsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuestions = interviewQuestions.filter(q =>
        q.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.faculty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Interview Preparation Questions</h1>
            </section>

            <div className={styles.container}>
                <div className={styles.tableCard}>
                    {/* Table Header with Search */}
                    <div className={styles.tableHeader}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={24} className="text-primary" />
                            Available Question Banks
                        </h2>
                        <div className={styles.searchBar}>
                            <Search className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search by topic or faculty..."
                                className={styles.searchInput}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Responsive Table */}
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.serialNo}>SL NO</th>
                                    <th>TOPICS</th>
                                    <th>FACULTY</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredQuestions.length > 0 ? (
                                    filteredQuestions.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className={styles.serialNo}>
                                                {String(index + 1).padStart(2, '0')}
                                            </td>
                                            <td className={styles.topicCell}>
                                                {item.topic}
                                            </td>
                                            <td className={styles.facultyCell}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Users size={16} />
                                                    {item.faculty}
                                                </div>
                                            </td>
                                            <td>
                                                <Link href={item.pdfUrl} className={styles.actionBtn}>
                                                    <Download size={16} />
                                                    View Course
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: 'var(--gray-500)' }}>
                                            No interview questions found matching "{searchTerm}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
