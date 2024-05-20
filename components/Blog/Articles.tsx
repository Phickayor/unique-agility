import React from "react";
import articles from "@/utils/articles.json";
import Link from "next/link";
function Articles() {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/test.jpeg"
          className="absolute -z-10 rounded-2xl w-full h-full object-cover"
        />
        <img
          src="/images/waves.png"
          className="absolute z-10 rounded-2xl w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green opacity-80 rounded-2xl "></div>

        <div className="relative px-10 py-8 text-left space-y-3 ">
          <h1 className="text-white text-3xl xl:text-4xl font-satoshi-semibold">
            Our Blog
          </h1>
        </div>
      </div>
      <div className="py-24 flex flex-col gap-5">
        {articles.map((article, index) => (
          <div key={index}>
            <img src={article.cover} className="h-52 w-full object-cover" />
            <div className="py-4 flex flex-col gap-3">
              <h1 className="text-3xl font-satoshi-semibold">
                {article.title}
                <br />
                {article.subtitle}
              </h1>
              <Link
                href={"/blog/" + article.slug}
                className="text-2xl underline font-satoshi-medium"
              >
                View Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
