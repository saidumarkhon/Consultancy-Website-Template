import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  // Load comments from localStorage on initial render
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddComment = () => {
    if (!formData.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      author: formData.name || "Anonymous",
      email: formData.email,
      website: formData.website,
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      text: formData.comment,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setFormData({ name: "", email: "", website: "", comment: "" });
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="py-6 max-w-3xl">
      <h3 className="text-2xl font-bold my-8">{comments.length} Comments</h3>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex items-start space-x-4 mb-6 border-b pb-4"
        >
          <img
            src="/team-3.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-red-500">
                {comment.author}
              </h4>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700 mt-2">{comment.text}</p>
            {comment.website && (
              <a
                href={comment.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block"
              >
                {comment.website}
              </a>
            )}
            <button
              className="text-white px-4 py-1 bg-primary-color mt-2 hover:bg-red-600"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <h3 className="text-2xl font-bold mb-4">Leave a comment</h3>

      <div className="py-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
          rows={6}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
        />
        <button
          onClick={handleAddComment}
          className="bg-red-400 text-white px-6 py-3 rounded hover:bg-red-500 transition-colors"
        >
          Leave Your Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
