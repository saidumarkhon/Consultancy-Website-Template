import React, { useState } from 'react';
import { User, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import BlogSidebar from '../components/BlogSidebar';

const BlogCard = ({ date, admin, category, title, image }) => (
  <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={image || "/blog-1.jpg"} 
      alt={title}
      className="w-full h-72 object-cover hover:scale-110 transition-all duration-300"
    />
    <div className="p-4">
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
        <div className="bg-red-400 text-white p-2 text-center">
          <div className="font-bold">{date.day}</div>
          <div>{date.month}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <User size={16} />
            {admin}
          </span>
          <span className="flex items-center gap-1">
            <Bookmark size={16} />
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  </div>
);

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  
  // Generate 30 sample cards
  const cards = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    date: { day: '01', month: 'JAN' },
    admin: 'ADMIN',
    category: 'WEB DESIGN',
    title: 'Magna sea dolor ipsum amet lorem eos',
    image: "/blog-1.jpg"
  }));

  // Calculate pagination
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const indexOfLastCard = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - ITEMS_PER_PAGE;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 mt-10">
      {/* Left side - Cards Grid */}
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCards.map((card) => (
            <BlogCard key={card.id} {...card} />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-8 flex justify-center mb-6">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? 'bg-red-400 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </nav>
        </div>
      </div>

      {/* Right side - Sidebar */}
      <div className="w-full md:w-1/3">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogGrid;