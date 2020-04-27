import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <p className="repo-info">
          <h2>
            <a href="https://medium.com/@deonte.cooper12/creating-a-form-to-add-a-new-book-to-a-database-59a3dd069763">
              Creating a form to add a new book to a database
            </a>
          </h2>
          A post on Medium discussing creating a form in Ruby.
          <a href="https://medium.com/@deonte.cooper12/creating-a-form-to-add-a-new-book-to-a-database-59a3dd069763">
            Read here.
          </a>
          <br />
          <br />
          Published on Mar 27, 2019 · 5 min read
        </p>
        <p className="repo-info">
          <h2>
            <a href="https://medium.com/@deonte.cooper12/basics-for-building-an-api-in-rails-dd2326711877?source=your_stories_page---------------------------">
              Basics For Building an API In Rails
            </a>
          </h2>
          A post on Medium discussing the basics for building and API using Ruby
          on Rails.
          <a href="https://medium.com/@deonte.cooper12/basics-for-building-an-api-in-rails-dd2326711877?source=your_stories_page---------------------------">
            Read here.
          </a>
          <br />
          <br />
          Published on May 5, 2019 · 3 min read
        </p>
        <p className="repo-info">
          <h2>
            <a href="https://medium.com/@deonte.cooper12/learning-the-basic-of-oop-with-python-and-testing-with-pythons-built-in-unittest-2f8d1bfc17f0?source=your_stories_page---------------------------">
              Learning the basic of OOP with Python and Testing with Pythons
              built-in Unittest
            </a>
          </h2>
          A post on Medium discussing how to build a basic python app. Learing
          to use pythons built in test suite as well.
          <a href="https://medium.com/@deonte.cooper12/learning-the-basic-of-oop-with-python-and-testing-with-pythons-built-in-unittest-2f8d1bfc17f0?source=your_stories_page---------------------------">
            Read here.
          </a>
          <br />
          <br />
          Published on Aug 11, 2019 · 6 min read
        </p>
      </div>
    );
  }
}

export default Blog;
