import React from 'react';
import { User, Bookmark, Search, ArrowRight } from 'lucide-react';

const BlogSidebar = ({ className = "" }) => {
  const categories = [
    "Web Design",
    "Web Development",
    "Web Development",
    "Keyword Research",
    "Email Marketing"
  ];

  const recentPosts = [
    { id: 1, title: "Lorem ipsum dolor sit amet adipis elit", image: "/blog-1.jpg" },
    { id: 2, title: "Lorem ipsum dolor sit amet adipis elit", image: "/blog-1.jpg" },
    { id: 3, title: "Lorem ipsum dolor sit amet adipis elit", image: "/blog-1.jpg" },
    { id: 4, title: "Lorem ipsum dolor sit amet adipis elit", image: "/blog-1.jpg" },
    { id: 5, title: "Lorem ipsum dolor sit amet adipis elit", image: "/blog-1.jpg" }
  ];

  const tags = [
    "Design", "Development", "Marketing", "SEO",
    "Writing", "Consulting", "Design", "Development",
    "Marketing", "SEO", "Writing", "Consulting"
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Search Bar */}
      <div className="flex w-full">
  <input
    type="text"
    placeholder="Keyword"
    className="w-full p-3 border-l border-t border-b rounded-l focus:outline-none focus:ring-2 focus:ring-red-400"
  />
  <button className="px-4 bg-red-400 rounded-r flex items-center justify-center">
    <Search className="text-white" size={20} />
  </button>
</div>


      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Categories</h2>
        <div className="bg-gray-50 p-6 rounded">
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700 hover:text-red-400 transition-colors">
                <ArrowRight size={16} className="text-red-400" />
                <a href="#" className="hover:text-red-400">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Post</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-4 items-center bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-20 h-20 object-cover rounded"
              />
              <h3 className="text-sm font-medium text-gray-900 hover:text-red-400 transition-colors">
                <a href="#">{post.title}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Tag Cloud</h2>
        <div className="bg-gray-50 p-6 rounded">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-2 bg-white rounded hover:bg-red-400 hover:text-white transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Plain Text */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Plain Text</h2>
        <div className="bg-gray-50 p-6 rounded">
          <p className="text-gray-600 mb-4">
            Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
          </p>
          <button className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;