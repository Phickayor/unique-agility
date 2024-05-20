import SelectedArticle from "@/components/Blog/SelectedArticle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Page({params}:any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar="blog" />
      <div className="flex-1">
        <SelectedArticle slug={params.slug} />
      </div>
      <Footer hideContact={false} />
    </div>
  );
}

export default Page;
