import HeroSection from "@/components/HeroSection";
import TerminalExample from "@/components/TerminalExample";
import Testimonials from "@/components/Testimonials";
import ProTeaser from "@/components/ProTeaser";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <TerminalExample />
            <Testimonials />
            <ProTeaser />
            <Footer />
        </div>
    );
};

export default Index;
