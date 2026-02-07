import Link from 'next/link';
import { Home } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.description}>
                    Sorry, we can't find the page you are looking for. The page might have been moved, deleted, or the URL might be incorrect.
                </p>
                <Link href="/" className={styles.homeBtn}>
                    <Home size={20} />
                    Go to Home Page
                </Link>
            </div>
        </div>
    );
}
