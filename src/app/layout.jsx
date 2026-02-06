import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
    title: 'Techorbit - #1 IT Training Institute | Data Science, AI, Cloud, DevOps',
    description: 'Transform your tech career with industry-ready training. Master Data Science, AI, Full Stack Development, Cloud, DevOps & more. 95% placement rate. Expert mentors.',
    keywords: 'IT training, data science course, AI training, full stack development, cloud computing, DevOps, Hyderabad, online training',
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
