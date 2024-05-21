"use client";
import React, { useEffect, useRef, useState } from "react";
import articles from "@/utils/articles.json";
function SelectedArticle({ slug }: { slug: string }) {
  const articleContent = useRef<HTMLDivElement>(null);
  var [selected, setSelected] = useState({
    title: "",
    cover: "",
    slug: "",
    content: "",
    subtitle: ""
  });
  useEffect(() => {
    articles.map((article) => {
      if (article.slug == slug) {
        setSelected(article);
      }
    });
  }, [slug]);
  useEffect(() => {
    if (articleContent.current)
      articleContent.current.innerHTML = selected.content;
  }, [articleContent, selected]);
  return (
    <div>
      <div>
        <img src={selected?.cover} className="h-52 w-full object-cover" />
        <div className="py-4 flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-satoshi-semibold">
            {selected?.title}
            <br />
            {selected?.subtitle}
          </h1>
          <div className="py-5 font-satoshi-medium space-y-5 blog text-lg" ref={articleContent}></div>
        </div>
      </div>
    </div>
  );
}

export default SelectedArticle;
