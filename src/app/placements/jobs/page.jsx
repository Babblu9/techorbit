'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Briefcase, MapPin, Calendar, User, Hash, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { jobListings } from '@/data/jobListings';

export default function JobsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');

    const filteredJobs = jobListings.filter(job => {
        const matchesSearch =
            job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || job.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
        return matchesSearch && matchesStatus && matchesLocation;
    });

    const openJobs = jobListings.filter(j => j.status === 'Open').length;
    const locations = [...new Set(jobListings.map(j => j.location))];

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Careers at Techorbit</h1>
                <p className={styles.subtitle}>Discover exciting job opportunities from our partner companies</p>
            </section>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Search and Filters */}
                <div className={styles.filterSection}>
                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder="Search jobs by title or company..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className={styles.filterSelect}
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                    <select
                        className={styles.filterSelect}
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                        <option value="all">All Locations</option>
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className={styles.statBadge}>
                        <Briefcase size={16} />
                        {openJobs} Open Positions
                    </div>
                    <div className={styles.statBadge}>
                        <MapPin size={16} />
                        {locations.length} Locations
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className={styles.jobsGrid}>
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => (
                            <div key={job.id} className={styles.jobCard}>
                                <div className={styles.cardHeader}>
                                    <p className={styles.companyName}>{job.companyName}</p>
                                    <span className={`${styles.statusBadge} ${job.status === 'Open' ? styles.statusOpen : styles.statusClosed}`}>
                                        {job.status}
                                    </span>
                                </div>
                                <h3 className={styles.jobTitle}>{job.jobTitle}</h3>
                                <div className={styles.jobMeta}>
                                    <div className={styles.metaItem}>
                                        <Hash />
                                        <span>{job.jobId}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <MapPin />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <User />
                                        <span>Posted by {job.postedBy}</span>
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <span className={styles.datePosted}>
                                        <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                                        {new Date(job.datePosted).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </span>
                                    <button className={styles.applyBtn} disabled={job.status === 'Closed'}>
                                        Apply Now
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            No jobs found matching your criteria
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
