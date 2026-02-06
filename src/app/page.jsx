import Hero from '@/components/home/Hero';
import CourseCategories from '@/components/home/CourseCategories';
import LearningJourney from '@/components/home/LearningJourney';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
    return (
        <>
            <Hero />
            <CourseCategories />
            <LearningJourney />
            <WhyChooseUs />
            <Testimonials />
            <CTABanner />
        </>
    );
}
