import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="relative lg:my-10">
        <img
          src="/images/about.jpeg"
          className="absolute -z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green opacity-80 "></div>

        <div className="relative py-8 px-5 text-center space-y-5 text-white ">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-satoshi-semibold">
            Who we are
          </h1>
          <p className="lg:leading-relaxed text-sm sm:text-lg lg:text-xl space-y-5 font-satoshi-light">
            At Unique Agility LLC, based in Raleigh, NC, we simplify operational
            complexities for government contractors, non-profits, and
            corporations through innovative business solutions. Our services
            include project management, business strategies, agile management,
            technology consulting, human capital services, training support,
            technical support, database design, and application and web
            development. We pride ourselves on delivering customized solutions
            tailored to each client's unique needs, ensuring industry-approved
            results and exceeding expectations. Our creative approach and
            dedication to excellence empower us to provide exceptional
            experiences and make operational work easier for our clients. As a
            trusted partner, Unique Agility LLC is committed to your
            organizational success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
