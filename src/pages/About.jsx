import { motion } from "framer-motion";
import InfoCard from "../components/InfoCard";
import { Lightbulb, ShieldCheck, Users2 } from "lucide-react";

const About = () => {
    return (
        <div className="mt-20 md:mt-24 sm:p-4">
            {/* banner */}
            <div className="w-full max-w-6xl mx-auto px-4">
                <div className="rounded-xl overflow-hidden h-56 md:h-72">
                    <motion.img
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        src="/images/card_2.png"
                        alt="sunscreen"
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl font-semibold text-white -mt-10 md:-mt-12 ml-6">
                    Our mission</motion.h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Sunscreen for everyone, everywhere
                </h1>

                <p className="text-slate-600 mt-4 leading-relaxed max-w-3xl">
                    We believe that everyone deserves access to high-quality sun protection,
                    no matter their skin type or where they live. Our mission is to create
                    innovative, effective, and affordable sunscreens that empower people to
                    enjoy the sun safely.
                </p>
            </div>

            {/* value */}
            <div className="max-w-6xl mx-auto px-4 mt-12">
                <h2 className="font-semibold text-xl md:text-2xl">Our Values</h2>

                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    <InfoCard
                        Icon={ShieldCheck}
                        title="Sun Safety"
                        description="We prioritize sun safety above all else, ensuring our products meet the highest standards of protection."
                    />
                    <InfoCard
                        Icon={Lightbulb}
                        title="Innovation"
                        description="We are committed to continuous improvement and innovation, always striving to create better sunscreens."
                    />
                    <InfoCard
                        Icon={Users2}
                        title="Community"
                        description="We believe in building a community of sun-safe individuals, sharing knowledge and supporting each other."
                    />
                </div>
            </div>

            {/* story */}
            <div className="max-w-6xl mx-auto px-4 mt-16 mb-20">
                <h2 className="font-semibold text-xl md:text-2xl">Our Story</h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                    DailySPF was founded in 2018 by a group of friends who were passionate
                    about sun safety. They realized that many people were not adequately
                    protecting themselves from the sun's harmful rays, and they set out to
                    create a solution.
                    <br /><br />
                    After years of research and development, they launched their first
                    sunscreen, which quickly became a customer favorite. Today, DailySPF is
                    a leading sunscreen brand, known for its high-quality products and
                    commitment to sun safety.
                </p>
            </div>
        </div>
    );
};

export default About;
