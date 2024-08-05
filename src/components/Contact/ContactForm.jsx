import React, { useState, useRef } from "react";
function ContactForm() {
    const current = new Date().getDate().toLocaleString();
  //   // By default US English uses 12hr time with AM/PM
  //   const Time = current.toLocaleTimeString("en-US");

  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const SendMessage = async (e) => {

    e.preventDefault();
    try {
      setButtonText("Sending...");
      let response = await fetch("https://greenpadserver.onrender.com/contact", {
        // let response = await fetch("https://thompsonsolomonmailserver.onrender.com/contact", {
          method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code == 200) {
        setStatus({ succes: true, message: "Message sent successfully" });
      }
    } catch (error) {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
      setFormDetails(formInitialDetails);
      setButtonText("Send")
    }
  };

  return (
    <div>
      <div className="contact-form section-padding-0-100" id="donate">
        <div className="container">
          <div className="row">
            {/* <!-- Section Heading --> */}
            <div className="col-12">
              <div className="section-heading">
                <h2>Leave A Message</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked.
                </p>
              </div>
            </div>
          </div>

          <div className="row formCon">
            <div className="col-12">
              {/* <!-- Contact Form Area --> */}
              <div className="contact-form-area">
                <form onSubmit={SendMessage}>
                  <div className="row">
                    <div className="formfirstCon">
                      <div className="col-12 col-lg-4">
                        {status.message && (
                          <p
                            style={{
                              color:
                                status.success === false ? "tomato" : "white",
                            }}
                          >
                            {status.message}
                          </p>
                        )}
                        <div className="form-group">
                          <label htmlFor="contact-name">
                            Full Name <span className="required">*</span>:
                          </label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="contact-name"
                            placeholder="Full Name"
                            name="name"
                            value={formDetails.name}
                            onChange={(e) =>
                              onFormUpdate("name", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="form-group">
                          <label htmlFor="contact-email">
                            Email<span className="required">*</span>:
                          </label>
                          <input
                            type="email"
                            required
                            className="form-control"
                            id="contact-email"
                            placeholder="eample@gmail,com"
                            value={formDetails.email}
                            name="emai"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="form-group">
                          <label htmlFor="contact-number">
                            Phone<span className="required">*</span>:
                          </label>
                          <input
                            type="number"
                            required
                            className="form-control"
                            id="contact-number"
                            placeholder="(+12) 123 456 7910"
                            value={formDetails.phone}
                            name="number"
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          Message<span className="required">*</span>:
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn" type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
