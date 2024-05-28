import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="relative lg:my-10">
        <img
          src="/images/about.jpeg"
          className="absolute -z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green opacity-90 "></div>

        <div className="relative py-8 px-5 text-center space-y-5 text-white ">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-satoshi-semibold">
            Who we are
          </h1>
          <p className="lg:leading-relaxed text-sm sm:text-lg lg:text-xl space-y-5 font-satoshi-light">
            Unique Agility LLC in Raleigh, NC simplifies operations for
            contractors, non-profits, and corporations with innovative
            solutions. Our services include project management, business
            strategies, agile management, technology consulting, human capital
            services, training, technical support, database design, and web
            development. We deliver customized solutions, ensuring
            industry-approved results and exceeding expectations. Our creative
            approach and dedication empower exceptional client experiences,
            making operations easier. As a trusted partner, Unique Agility LLC
            is committed to your success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
