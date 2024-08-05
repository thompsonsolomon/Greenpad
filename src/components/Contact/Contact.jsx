import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="Contact">
      {/* <!-- ##### Google Maps Start ##### --> */}
      <div className="contact_map-area">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.70601358006!2d5.302783514460636!3d7.274255315998907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6a63cfc12552af75!2zN8KwMTYnMjcuMyJOIDXCsDE4JzE3LjkiRQ!5e0!3m2!1sen!2sng!4v1656000361463!5m2!1sen!2sng"
          }
          // src={img}
          title="Location"
          className="Location"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "50vh" }}
        />
      </div>
      {/* <!-- ##### Google Maps End ##### --> */}
      <div className="contact_container">
        {/* <!-- ##### Contact Area Start ##### --> */}
        <section className="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-content-area">
                  <div className="contact-contect-area_wrapper">
                    <div className="col-12 col-md-4">
                      <div className="contact-content contact-information">
                        <h4>Contact</h4>
                        <p>Mail to: greenpadconcepts@yahoo.com</p>
                        <p> (+234) 806-3229-816</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="contact-content contact-information">
                        <h4>Address</h4>
                        <p> 2, Orisunbare Street Ondo Road </p>
                        <p>Akure South LG Ondo State</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="contact-content contact-information">
                        <h4>Opening Hours</h4>
                        <p> Mon - sat: 06.00am - 06.00pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ##### Contact Area End ##### --> */}
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
