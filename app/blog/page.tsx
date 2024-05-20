import Articles from "@/components/Blog/Articles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeBar={"blog"} />
      <div className="flex-1">
        <Articles />
      </div>
      <Footer hideContact={false} />
    </div>
  );
}

export default Page;
