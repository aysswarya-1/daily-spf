import Hero from "../components/Hero"
import FeaturesList from "../components/FeaturesList"
import Benefits from "../components/Benefits"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturesList />
            <Benefits />
            <Features />
            <FAQ />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default Home
