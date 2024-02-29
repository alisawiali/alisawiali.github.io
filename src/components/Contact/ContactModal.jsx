import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactModal = ({ close }) => {
  const [result, setResult] = useState("");

  const handelOnSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "50072653-b38f-48ea-9ff9-f26892b693f1");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset(); // Reset the form
    } else {
      console.log("Error", res);
      setResult(res.message);
    }

    // Additional logic for message handling, validation, etc. can be added here
    // For example:
    // HandleMessage(res.success, res.message);
    // PerformValidation();
  };

  const preventClose = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={preventClose}>
        <form onSubmit={handelOnSubmit} action="#" method="post">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="message">Write your messages here:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            rows="6"
            required
          ></textarea>
          <div className="btns">
            <div type="submit" className="btn submit">
              Submit Now <FaLongArrowAltRight className="icon" />
            </div>
            <div className="btn closse" onClick={close}>
              close
            </div>
          </div>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactModal;
