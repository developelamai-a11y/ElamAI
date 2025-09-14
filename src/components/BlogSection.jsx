import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
	{
		id: 1,
		title: 'How AI Agents Are Transforming Modern Business',
		date: 'Sep 1, 2025',
		image:
			'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&q=80',
		summary:
			'Explore the real-world impact of AI agents on productivity, customer experience, and business growth across industries.',
	},
	{
		id: 2,
		title: '5 Ways to Automate Your Workflow with AI',
		date: 'Aug 18, 2025',
		image:
			'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600&q=80',
		summary:
			'Discover practical strategies to streamline your operations and save time using the latest AI automation tools.',
	},
	{
		id: 3,
		title: 'The Future of Customer Support: AI-Driven Solutions',
		date: 'Jul 30, 2025',
		image:
			'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&w=600&q=80',
		summary:
			'See how AI is revolutionizing customer support, enabling instant responses and personalized service at scale.',
	},
];

const BlogSection = () => {
	return (
		<section className="w-full py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-b from-black/90 via-gray-900/90 to-black/95">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight font-sans">
						Discover Insights from Our Blog
					</h2>
					<p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto font-sans">
						Stay ahead with the latest trends, tips, and stories in AI automation,
						business transformation, and digital innovation.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{blogPosts.map((post, idx) => (
						<motion.div
							key={post.id}
							className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/10 to-white/5 shadow-xl flex flex-col h-full border border-white/10 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 font-sans"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
						>
							<div className="h-56 w-full overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover object-center scale-105 transition-transform duration-300 group-hover:scale-110"
									loading="lazy"
								/>
							</div>
							<div className="flex-1 flex flex-col justify-between p-6">
								<div>
									<span className="text-xs uppercase tracking-wider text-white/50 font-medium mb-2 block font-sans">
										{post.date}
									</span>
									<h3 className="text-2xl font-light text-white mb-3 font-sans leading-snug">
										{post.title}
									</h3>
									<p className="text-white/80 text-base font-light mb-4 font-sans">
										{post.summary}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
