import React from "react";

function ContactForm() {
  return (
    <form className="text-center space-y-5">
      <h1 className="text-4xl font-satoshi-bold">Connect with us</h1>
      <p className="mx-auto w-6/12  text-lg text-[#516371]">
        Thank you for your interest in Unique Agility Please fill out the form
        below to contact us and we will respond to you shortly.
      </p>
      <div className="grid grid-cols-2 mx-auto w-8/12 gap-5 [&>*]:border-2 [&>*]:rounded-lg [&>*]:p-3 focus:[&>*]:outline-green">
        <input type="text" placeholder="Your Name" className="text-lg " />
        <input type="text" placeholder="Email" className="text-lg " />
        <input type="text" placeholder="Phone Number" className="text-lg " />
        <input type="text" placeholder="Location" className="text-lg " />
        <input
          type="text"
          placeholder="Your message"
          className="text-lg col-span-2"
        />
      </div>

      <button className="bg-green font-semibold text-white px-8 py-3 rounded-full text-lg">
        Contact us
      </button>
    </form>
  );
}

export default ContactForm;
