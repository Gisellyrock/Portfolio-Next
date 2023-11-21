import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectCard from '@/components/ProjectCard';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import AchievementsSection from '@/components/AchievementsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ProjectCard />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
