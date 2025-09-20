import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Tag, Share2, Facebook, Linkedin, Twitter, Edit, Plus, Eye } from 'lucide-react';
import blogs from "../data/blog.json"
const Blog = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    summary: '',
    category: '',
    tags: '',
    image: ''
  });

  // Sample blog posts data
  const [posts, setPosts] = useState(
   blogs
  );

  const categories = [
    "Industry Trends",
    "Consulting Life", 
    "C2C Insights",
    "D-Global Tech News",
    "Career Growth"
  ];

  const getAllTags = () => {
    const allTags = posts.flatMap(post => post.tags);
    return [...new Set(allTags)];
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRelatedPosts = (currentPost) => {
    return posts
      .filter(post => post.id !== currentPost.id)
      .filter(post => post.tags.some(tag => currentPost.tags.includes(tag)))
      .slice(0, 3);
  };

  const handleCreatePost = () => {
    if (newPost.title && newPost.content && newPost.summary) {
      const post = {
        id: posts.length + 1,
        ...newPost,
        tags: newPost.tags.split(',').map(tag => tag.trim()),
        author: "Admin User",
        date: new Date().toISOString().split('T')[0],
        image: newPost.image || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', summary: '', category: '', tags: '', image: '' });
      setCurrentView('home');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = (platform, post) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    
    let shareUrl = '';
    switch(platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: 'white',
      minHeight: '100vh',
      color: '#333'
    }}>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.1);
            z-index: 1;
          }
          
          .header-content {
            position: relative;
            z-index: 2;
          }
          
          .header h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          
          .header p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .admin-toggle {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .admin-toggle:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
          }
          
          .main-content {
            display: flex;
            gap: 40px;
            padding: 40px 0;
            align-items: flex-start;
          }
          
          .blog-grid {
            flex: 1;
          }
          
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 30px;
          }
          
          .post-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(0,0,0,0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #f0f0f0;
          }
          
          .post-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          }
          
          .post-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .post-card:hover .post-image {
            transform: scale(1.05);
          }
          
          .post-content {
            padding: 25px;
          }
          
          .post-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
            font-size: 0.85rem;
            color: #666;
          }
          
          .post-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .category-badge {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .post-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 12px;
            line-height: 1.4;
            color: #2c3e50;
          }
          
          .post-summary {
            color: #555;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .read-more {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
          }
          
          .read-more:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
          
          .sidebar {
            width: 320px;
            position: sticky;
            top: 20px;
          }
          
          .sidebar-section {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 25px;
            box-shadow: 0 4px 25px rgba(0,0,0,0.08);
            border: 1px solid #f0f0f0;
          }
          
          .sidebar-section h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #2c3e50;
            font-weight: 700;
          }
          
          .search-container {
            position: relative;
          }
          
          .search-input {
            width: 100%;
            padding: 12px 40px 12px 16px;
            border: 2px solid #e0e6ed;
            border-radius: 25px;
            font-size: 0.95rem;
            transition: all 0.3s ease;
          }
          
          .search-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }
          
          .search-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
          }
          
          .category-list {
            list-style: none;
          }
          
          .category-item {
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #555;
          }
          
          .category-item:hover, .category-item.active {
            color: #667eea;
            font-weight: 600;
          }
          
          .category-item:last-child {
            border-bottom: none;
          }
          
          .tag-cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .tag {
            background: #f8f9fa;
            color: #555;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid #e9ecef;
          }
          
          .tag:hover {
            background: #667eea;
            color: white;
            transform: translateY(-1px);
          }
          
          .post-detail {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          .post-header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .post-hero-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 16px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          }
          
          .post-detail-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2c3e50;
            line-height: 1.3;
          }
          
          .post-detail-meta {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            flex-wrap: wrap;
          }
          
          .social-share {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
          }
          
          .share-btn {
            background: none;
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #666;
          }
          
          .share-btn:hover {
            transform: translateY(-2px);
          }
          
          .share-btn.linkedin:hover { background: #0077b5; color: white; }
          .share-btn.twitter:hover { background: #1da1f2; color: white; }
          .share-btn.facebook:hover { background: #4267b2; color: white; }
          
          .post-content-detail {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #444;
          }
          
          .post-content-detail h2 {
            font-size: 1.8rem;
            margin: 40px 0 20px;
            color: #2c3e50;
            font-weight: 700;
          }
          
          .post-content-detail h3 {
            font-size: 1.4rem;
            margin: 30px 0 15px;
            color: #34495e;
            font-weight: 600;
          }
          
          .post-content-detail p {
            margin-bottom: 20px;
          }
          
          .post-content-detail ul, .post-content-detail ol {
            margin: 20px 0;
            padding-left: 30px;
          }
          
          .post-content-detail li {
            margin-bottom: 8px;
          }
          
          .post-content-detail blockquote {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 25px 30px;
            margin: 30px 0;
            border-radius: 12px;
            font-style: italic;
            font-size: 1.15rem;
            position: relative;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
          }
          
          .post-content-detail blockquote::before {
            content: '"';
            font-size: 4rem;
            position: absolute;
            top: -10px;
            left: 20px;
            opacity: 0.3;
          }
          
          .related-posts {
            margin-top: 60px;
            padding-top: 40px;
            border-top: 2px solid #f0f0f0;
          }
          
          .related-posts h3 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
            color: #2c3e50;
          }
          
          .back-btn {
            background: #6c757d;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            margin-bottom: 30px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .back-btn:hover {
            background: #5a6268;
            transform: translateY(-2px);
          }
          
          .admin-section {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 16px;
            margin: 30px 0;
          }
          
          .admin-section h2 {
            margin-bottom: 25px;
            color: #2c3e50;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #555;
          }
          
          .form-control {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e0e6ed;
            border-radius: 8px;
            font-size: 0.95rem;
            transition: border-color 0.3s ease;
          }
          
          .form-control:focus {
            outline: none;
            border-color: #667eea;
          }
          
          .form-control.textarea {
            min-height: 150px;
            resize: vertical;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-right: 10px;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
          
          .btn-secondary {
            background: #6c757d;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .btn-secondary:hover {
            background: #5a6268;
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 0 15px;
            }
            
            .header h1 {
              font-size: 2.5rem;
            }
            
            .header p {
              font-size: 1.1rem;
            }
            
            .main-content {
              flex-direction: column;
              gap: 30px;
            }
            
            .sidebar {
              width: 100%;
              position: static;
            }
            
            .grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .post-detail-title {
              font-size: 2rem;
            }
            
            .post-detail-meta {
              flex-direction: column;
              gap: 10px;
            }
            
            .social-share {
              flex-direction: column;
              align-items: center;
            }
            
            .admin-toggle {
              position: static;
              margin-top: 20px;
            }
          }
          
          @media (max-width: 480px) {
            .header h1 {
              font-size: 2rem;
            }
            
            .post-card {
              margin-bottom: 20px;
            }
            
            .post-content {
              padding: 20px;
            }
            
            .post-title {
              font-size: 1.2rem;
            }
            
            .sidebar-section {
              padding: 20px;
            }
            
            .post-hero-image {
              height: 250px;
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
           
            <p>Insights, trends, and expertise from the world of technology consulting</p>
          </div>
          <button 
            className="admin-toggle"
            onClick={() => setIsAdmin(!isAdmin)}
          >
            {isAdmin ? 'Exit Admin' : 'Admin Mode'}
          </button>
        </div>
      </header>

      <div className="container">
        {/* Blog Home */}
        {currentView === 'home' && (
          <div className="main-content">
            <div className="blog-grid">
              {isAdmin && (
                <div className="admin-section">
                  <h2>Create New Post</h2>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="Enter post title"
                    />
                  </div>
                  <div className="form-group">
                    <label>Summary</label>
                    <textarea
                      className="form-control"
                      value={newPost.summary}
                      onChange={(e) => setNewPost({...newPost, summary: e.target.value})}
                      placeholder="Brief summary of the post"
                      rows="3"
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="form-control"
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tags (comma-separated)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPost.tags}
                      onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      className="form-control"
                      value={newPost.image}
                      onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div className="form-group">
                    <label>Content (HTML)</label>
                    <textarea
                      className="form-control textarea"
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      placeholder="Enter HTML content for the post"
                      rows="10"
                    />
                  </div>
                  <button className="btn-primary" onClick={handleCreatePost}>
                    <Plus size={16} style={{marginRight: '8px'}} />
                    Create Post
                  </button>
                </div>
              )}

              <div className="grid">
                {filteredPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="post-image"
                    />
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="category-badge">{post.category}</span>
                        <span>
                          <User size={14} />
                          {post.author}
                        </span>
                        <span>
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h2 className="post-title">{post.title}</h2>
                      <p className="post-summary">{post.summary}</p>
                      <button 
                        className="read-more"
                        onClick={() => {
                          setSelectedPost(post);
                          setCurrentView('post');
                        }}
                      >
                        Read More
                      </button>
                      {isAdmin && (
                        <button 
                          className="btn-secondary"
                          style={{marginLeft: '10px'}}
                          onClick={() => {
                            setEditingPost(post);
                            setCurrentView('edit');
                          }}
                        >
                          <Edit size={16} />
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#666'
                }}>
                  <h3>No posts found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              {/* Search */}
              <div className="sidebar-section">
                <h3>Search Posts</h3>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="search-icon" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-section">
                <h3>Categories</h3>
                <ul className="category-list">
                  <li 
                    className={`category-item ${selectedCategory === '' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Posts ({posts.length})
                  </li>
                  {categories.map(category => {
                    const count = posts.filter(post => post.category === category).length;
                    return (
                      <li 
                        key={category}
                        className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category} ({count})
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-section">
                <h3>Recent Posts</h3>
                {posts.slice(0, 5).map(post => (
                  <div 
                    key={post.id}
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #f0f0f0',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setSelectedPost(post);
                      setCurrentView('post');
                    }}
                  >
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '5px'
                    }}>
                      {post.title}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#666'
                    }}>
                      {formatDate(post.date)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="sidebar-section">
                <h3>Popular Tags</h3>
                <div className="tag-cloud">
                  {getAllTags().map(tag => (
                    <span 
                      key={tag} 
                      className="tag"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Post Detail View */}
        {currentView === 'post' && selectedPost && (
          <div className="post-detail">
            <button 
              className="back-btn"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Blog
            </button>

            <article>
              <div className="post-header">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="post-hero-image"
                />
                <h1 className="post-detail-title">{selectedPost.title}</h1>
                <div className="post-detail-meta">
                  <span className="category-badge">{selectedPost.category}</span>
                  <span>
                    <User size={16} />
                    {selectedPost.author}
                  </span>
                  <span>
                    <Calendar size={16} />
                    {formatDate(selectedPost.date)}
                  </span>
                  <div style={{display: 'flex', gap: '5px'}}>
                    {selectedPost.tags.map(tag => (
                      <span key={tag} className="tag">
                        <Tag size={12} style={{marginRight: '4px'}} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Share */}
              <div className="social-share">
                <span style={{marginRight: '15px', fontWeight: '600'}}>Share this post:</span>
                <button 
                  className="share-btn linkedin"
                  onClick={() => sharePost('linkedin', selectedPost)}
                >
                  <Linkedin size={20} />
                </button>
                <button 
                  className="share-btn twitter"
                  onClick={() => sharePost('twitter', selectedPost)}
                >
                  <Twitter size={20} />
                </button>
                <button 
                  className="share-btn facebook"
                  onClick={() => sharePost('facebook', selectedPost)}
                >
                  <Facebook size={20} />
                </button>
              </div>

              {/* Post Content */}
              <div 
                className="post-content-detail"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Related Posts */}
              {getRelatedPosts(selectedPost).length > 0 && (
                <div className="related-posts">
                  <h3>Related Posts</h3>
                  <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
                    {getRelatedPosts(selectedPost).map(post => (
                      <article key={post.id} className="post-card">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="post-image"
                        />
                        <div className="post-content">
                          <div className="post-meta">
                            <span className="category-badge">{post.category}</span>
                            <span>
                              <Calendar size={14} />
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <h3 className="post-title" style={{fontSize: '1.2rem'}}>{post.title}</h3>
                          <p className="post-summary">{post.summary}</p>
                          <button 
                            className="read-more"
                            onClick={() => {
                              setSelectedPost(post);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Read More
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        )}

        {/* Edit Post View */}
        {currentView === 'edit' && editingPost && (
          <div className="post-detail">
            <button 
              className="back-btn"
              onClick={() => setCurrentView('home')}
            >
              ← Back to Blog
            </button>

            <div className="admin-section">
              <h2>Edit Post</h2>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Summary</label>
                <textarea
                  className="form-control"
                  value={editingPost.summary}
                  onChange={(e) => setEditingPost({...editingPost, summary: e.target.value})}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  className="form-control"
                  value={editingPost.category}
                  onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Tags (comma-separated)</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingPost.tags.join(', ')}
                  onChange={(e) => setEditingPost({...editingPost, tags: e.target.value.split(',').map(t => t.trim())})}
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  className="form-control"
                  value={editingPost.image}
                  onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Content (HTML)</label>
                <textarea
                  className="form-control textarea"
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                  rows="10"
                />
              </div>
              <button 
                className="btn-primary"
                onClick={() => {
                  setPosts(posts.map(p => p.id === editingPost.id ? editingPost : p));
                  setCurrentView('home');
                  setEditingPost(null);
                }}
              >
                Update Post
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setCurrentView('home')}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;