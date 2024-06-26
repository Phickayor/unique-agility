import React from "react";

function ContactForm() {
  return (
    <form className="text-center space-y-3 sm:space-y-5 " action="mailto:info@uniqueagility.com" method="GET">
      <h1 className="text-2xl md:text-4xl font-satoshi-bold">
        Connect with us
      </h1>
      <p className="mx-auto lg:w-6/12 text-sm sm:text-lg text-[#516371]">
        Thank you for your interest in Unique Agility Please fill out the form
        below to contact us and we will respond to you shortly.
      </p>
      <div className="grid md:grid-cols-2 mx-auto py-4 lg:w-8/12 gap-5 [&>*]:border-2 [&>*]:rounded-lg md:[&>*]:text-lg [&>*]:p-3 focus:[&>*]:outline-green">
        <input type="text" placeholder="Your Name" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea
          name="body"
          placeholder="Your message"
          className="md:col-span-2 h-32 self-start"
        ></textarea>
      </div>

      <button type="submit" className="bg-green font-semibold text-white px-8 py-3 rounded-2xl">
        Contact us
      </button>
    </form>
  );
}

export default ContactForm;
