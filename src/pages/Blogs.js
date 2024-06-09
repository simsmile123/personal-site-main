import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Blogs/Cell';
import data from '../data/blogs';

const Blog = () => (
  <Main title="Blog" description="Read Simrith Ranjan's blog posts.">
    {/* <Link to="Blog">Blog</Link> */}
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2>
            <Link to="/blog">Blog</Link>
          </h2>
          <p>
            A collection of my thoughts and shot at writing, featured on my
            Medium account
          </p>
        </div>
      </header>
      {data.map((blog) => (
        <Cell data={blog} key={blog.title} />
      ))}
    </article>
  </Main>
);

export default Blog;
