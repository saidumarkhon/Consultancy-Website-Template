import React from 'react';
import { User, Layout } from 'lucide-react';
import TitleText from './TitleText';

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    date: { day: "01", month: "JAN", year: "2045" },
    author: "ADMIN",
    category: "WEB DESIGN",
    title: "Magna sea dolor ipsum amet lorem eos"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000",
    date: { day: "01", month: "JAN", year: "2045" },
    author: "ADMIN",
    category: "WEB DESIGN",
    title: "Magna sea dolor ipsum amet lorem eos"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    date: { day: "01", month: "JAN", year: "2045" },
    author: "ADMIN",
    category: "WEB DESIGN",
    title: "Magna sea dolor ipsum amet lorem eos"
  }
];

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-red-500 text-white p-4">
          <div className="text-2xl font-bold">{post.date.day}</div>
          <div>{post.date.month}</div>
          <div>{post.date.year}</div>
        </div>
        <div className="flex items-center space-x-6 text-gray-600">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Layout className="w-4 h-4 mr-2" />
            <span>{post.category}</span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 hover:text-red-500 transition-colors duration-300">
        {post.title}
      </h3>
    </div>
  </div>
);

function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TitleText text={'Latest Blog Post'}/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;