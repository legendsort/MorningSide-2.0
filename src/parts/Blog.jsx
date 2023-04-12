import React from "react";

const Blog = () => {

  return (
    <div className="pt-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 font-medium mt-5">March 20, 2023 GPT-3</p>
          <h2 className="text-primary text-3xl md:text-4xl text-center font-bold mb-2 leading-none max-w-[640px]">
            Understanding GPT-4: ChatGPT's Successor With Advanced Reasoning
          </h2>
          <p className="text-gray-500 font-medium my-5 text-center">
            We will discuss OpenAI's latest milestone in scaling up deep
            learning, GPT-4. Let's take a deep dive.
          </p>
          <a href="/blog" className="theme-btn">
            Read More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
