import React from "react";
import BlogCard from "./components/BlogCard";

export default function App() {
	const blogs = [
		{
			coverImg:
				"https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
			title: "Boost your conversation Rate",
			authorImg:
				"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80",
			authorName: "Michale Foster",
			publishedDate: new Date().toDateString(),
		},
		{
			coverImg:
				"https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
			title: "33 Powerful Self-Reflection Questions for Personal Growth",
			authorImg:
				"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
			authorName: "Tom Wick",
			publishedDate: new Date().toDateString(),
		},
		{
			coverImg:
				"https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
			title: "Digital Detox: Reclaiming Your Focus and Creativity in a Distracted World.",
			authorImg:
				"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
			authorName: "Karl Magnuson",
			publishedDate: new Date().toDateString(),
		},
	];
	return (
		<div className="w-full min-h-screen bg-gradient-to-t from-black to-gray-900 flex justify-center items-center">
			<div className="max-w-6xl mx-auto ">
				<div className="h-72 text-white text-center">
					<h1 className="text-4xl font-bold">Random Title</h1>
					<p className="text-xl mt-5">
						Passionate about brain optimization, life hacks, and
						healthy success habits to empower individuals.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-32">
					{blogs.map((blog, index) => {
						return <BlogCard blog={blog} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}
