import React from "react";
import { motion } from "framer-motion";
import { Brain, ThumbsUp, Users } from "lucide-react";

const nebulaGradient = "bg-gradient-to-br from-[#a259ff] via-[#43e7ad] to-[#6dd5fa]";
const nebulaShadow = "drop-shadow-[0_0_16px_rgba(162,89,255,0.5)]";
const nebulaIcon = "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]";

const cards = [
	{
		icon: <Brain size={48} className={` ${nebulaIcon}`} />,
		title: "Best-In-Class Work",
		desc: "Unmatched quality, seamless design, and high-performance solutions. We delivers best-in-class work that drives results",
	},
	{
		icon: <ThumbsUp size={48} className={` ${nebulaIcon}`} />,
		title: "Freelance Rates",
		desc: "We provide agency level work and support at freelance rates. Our pricing reflects the quality, we bring to every project",
	},
	{
		icon: <Users size={48} className={` ${nebulaIcon}`} />,
		title: "Expert Team",
		desc: "Powered by a team of skilled designers, developers, and strategists who bring creativity and precision to every project.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
			ease: "easeOut",
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const WhyUsSection = () => (
	<motion.section
		className="w-full bg-transparent py-16 flex flex-col items-center"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
		variants={containerVariants}
	>
		<motion.div variants={itemVariants} className="mb-6">
			<span className="inline-block px-5 py-1.5 rounded-full bg-[#18191b] text-base font-medium text-white shadow-md border border-[#232426] tracking-tight">
				Why Us
			</span>
		</motion.div>
		<motion.h2
			variants={itemVariants}
			className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-center mb-2 leading-tight tracking-tight font-sans"
		>
			Experience The Benefits
			<br className="hidden sm:block" />
			Of Our Expertise
		</motion.h2>
		<motion.p
			variants={itemVariants}
			className="text-white/70 text-center mb-12 max-w-xl mx-auto text-base font-light"
		>
			That drives impactful gain powerful results
		</motion.p>
		<motion.div
			variants={containerVariants}
			className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0"
		>
			{cards.map((card, i) => (
				<motion.div
					key={i}
					variants={itemVariants}
					className="bg-[#18191b] rounded-3xl p-8 flex flex-col items-center shadow-2xl border border-[#232426] relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:border-[#a259ff] hover:shadow-[0_0_32px_0_rgba(162,89,255,0.15)] group"
				>
					<div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-[#a259ff]/10 via-[#43e7ad]/5 to-[#6dd5fa]/10 blur-sm" />
					<div className="bg-[#101112] rounded-xl p-6 mb-6 flex items-center justify-center w-full max-w-[260px] h-[120px] relative shadow-inner border border-[#232426]">
						<span
							className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${nebulaGradient} shadow-lg animate-pulse-slow`}
						>
							{card.icon}
						</span>
					</div>
					<h3 className="text-white text-xl font-semibold text-center mb-3">
						{card.title}
					</h3>
					<p className="text-white/80 text-center text-base font-light">
						{card.desc.split("quality").length > 1 ? (
							<>
								{card.desc.split("quality")[0]}
								<span className="font-bold">quality</span>
								{card.desc.split("quality")[1]}
							</>
						) : (
							card.desc
						)}
					</p>
				</motion.div>
			))}
		</motion.div>
		<style jsx>{`
			@keyframes pulse-slow {
				0%,
				100% {
					box-shadow: 0 0 0 0 #a259ff44;
				}
				50% {
					box-shadow: 0 0 32px 8px #a259ff33;
				}
			}
			.animate-pulse-slow {
				animation: pulse-slow 2.5s infinite;
			}
		`}</style>
	</motion.section>
);

export default WhyUsSection;
