import React from 'react';
import { User, Bookmark, Search, ArrowRight } from 'lucide-react';
import BlogSidebar from '../components/BlogSidebar';
import CommentSection from '../components/CommentComponent';

const BlogLayout = () => {
  const categories = [
    "Web Design",
    "Web Development",
    "Web Development",
    "Keyword Research",
    "Email Marketing"
  ];

  const recentPosts = [
    { id: 1, title: "Lorem ipsum dolor sit amet adipis elit", image: "/api/placeholder/80/80" },
    { id: 2, title: "Lorem ipsum dolor sit amet adipis elit", image: "/api/placeholder/80/80" },
    { id: 3, title: "Lorem ipsum dolor sit amet adipis elit", image: "/api/placeholder/80/80" },
    { id: 4, title: "Lorem ipsum dolor sit amet adipis elit", image: "/api/placeholder/80/80" },
    { id: 5, title: "Lorem ipsum dolor sit amet adipis elit", image: "/api/placeholder/80/80" }
  ];

  const tags = [
    "Design", "Development", "Marketing", "SEO",
    "Writing", "Consulting", "Design", "Development",
    "Marketing", "SEO", "Writing", "Consulting"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="bg-white">
            <img 
              src="/blog-1.jpg" 
              alt="Blog header" 
              className="w-full h-96 object-cover "
            />
            <div className="pt-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Diam dolor est labore duo ipsum clita sed et lorem tempor duo
              </h1>
              <p className="text-gray-600 mb-6">
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
              </p>
              
              {/* Comment Form */}
              <CommentSection/>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
        <BlogSidebar />
      </div>
      </div>
    </div>
  );
};

export default BlogLayout;