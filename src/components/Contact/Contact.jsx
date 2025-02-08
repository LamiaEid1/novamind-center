import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        access_key: "a59aba14-d057-4502-9793-84c04b6708ba", // Add your Web3Forms access key
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
        alert("Thank you for your message!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15"></div>
        </div>

        <h3 className="contact-title padd-15">Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">WE'RE AT YOUR SERVICE</h4>

        <div className="row">
          {[
            { icon: "fa-phone", title: "Call Us On", text: "+961 76 116 195" },
            { icon: "fa-globe-europe", title: "Website", text: "www.domain.com" },
            { icon: "fa-map-marker-alt", title: "Location", text: "Tripoli, Lebanon" },
          ].map((item, index) => (
            <div className="contact-info-item padd-15" key={index}>
              <div className="icon">
                <i className={`fa ${item.icon}`}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <h3 className="contact-title padd-15">SEND US AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">WE'RE VERY RESPONSIVE TO MESSAGES</h4>

        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="contact-content">
                <div className="d-flex flex-row flex-wrap justify-content-center justify-content-md-start gap-2 mt-3">
                  <button type="submit">
                    <span className="text">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;