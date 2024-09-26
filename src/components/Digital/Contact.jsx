import contactInfo from "@data/Digital/contact.json";
import {useForm, ValidationError } from "@formspree/react"
const Contact = () => {
  // const [formData, setFormdata] = useState({
  //   name: "",
  //   email: "",
  //   option: "",
  //   message: "",
  // });

  // const handleFormChange = (e) => {
  //   setFormdata((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   const formValues = new FormData();

  //   formValues.append("name", formData.name);
  //   formValues.append("email", formData.email);
  //   formValues.append("option", formData.option);
  //   formValues.append("message", formData.message);

  //   const res = await axios
  //     .post("/contact.php", formValues)
  //     .catch((err) => alert(err.message));

  //   if (!res) return;

  //   alert("Form submitted successfully.");
  // };
                        
  const [state, handleSubmit] = useForm("mblrnjlz");
  if (state.succeeded) {
      return (
        <>
        {alert("Information sent successfully")}
        <section
        className="contact section-padding bg-gradient style-1"
        data-scroll-index="7"
      >
        <div className="container">
          <div className="section-head mb-60 text-center">
            <h6 className="text-white text-uppercase wow fadeInUp">contact us</h6>
            <h2 className="wow fadeInUp text-white">
              Request Free <span className="fw-normal">Consultancy</span>
            </h2>
          </div>
          <div className="content">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="contact_info text-white">
                  <p className="wow fadeInUp">Hotline 24/7</p>
                  <h4 className="wow fadeInUp">{contactInfo.phone}</h4>
                  <ul>
                    <li className="wow fadeInUp">
                      <strong>Address : </strong> {contactInfo.address}
                    </li>
                    <li className="wow fadeInUp">
                      <strong>Email : </strong> {contactInfo.email}
                    </li>
                    <li className="wow fadeInUp">
                      <strong>Fax : </strong> {contactInfo.fax}
                    </li>
                    <li className="wow fadeInUp">
                      <strong>Work Hour : </strong> {contactInfo.workingHours}
                    </li>
                  </ul>
                  <a href="#" className="wow fadeInUp">
                    get direction
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <form
                  className="contact_form"
                  action="https://formspree.io/f/mblrnjlz"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="row gx-3">
                    <div className="col-lg-6">
                      <div className="form-group mb-3 wow fadeInUp">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="name *"
                          
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-3 wow fadeInUp">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email Address *"
                          
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-12">
                      <div className="form-group mb-3 wow fadeInUp">
                        <select name="option" className="form-select" aria-label="Default select example" defaultValue="Your inquiry about" >
                          <option>Your inquiry about</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>*/}
  
                    <div className="col-lg-12">
                      <div className="form-group mb-3 wow fadeInUp">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="4"
                          placeholder="Write your inquiry here"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-check mb-4 wow fadeInUp">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label text-light small"
                          htmlFor="flexCheckDefault"
                        >
                          By submitting, i’m agreed to the{" "}
                          <a href="#" className="text-decoration-underline">
                            Terms & Conditons
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        value="Request Now"
                        className="btn btn-dark wow fadeInUp text-light fs-14px"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/contact_globe.svg"
          alt=""
          className="contact_globe"
        />
      </section>
        </>
      );
  }
  return (
    <section
      className="contact section-padding bg-gradient style-1"
      data-scroll-index="7"
    >
      <div className="container">
        <div className="section-head mb-60 text-center">
          <h6 className="text-white text-uppercase wow fadeInUp">contact us</h6>
          <h2 className="wow fadeInUp text-white">
            Request Free <span className="fw-normal">Consultancy</span>
          </h2>
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="contact_info text-white">
                <p className="wow fadeInUp">Hotline 24/7</p>
                <h4 className="wow fadeInUp">{contactInfo.phone}</h4>
                <ul>
                  <li className="wow fadeInUp">
                    <strong>Address : </strong> {contactInfo.address}
                  </li>
                  <li className="wow fadeInUp">
                    <strong>Email : </strong> {contactInfo.email}
                  </li>
                  <li className="wow fadeInUp">
                    <strong>Fax : </strong> {contactInfo.fax}
                  </li>
                  <li className="wow fadeInUp">
                    <strong>Work Hour : </strong> {contactInfo.workingHours}
                  </li>
                </ul>
                <a href="#" className="wow fadeInUp">
                  get direction
                </a>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form
                className="contact_form"
                action="https://formspree.io/f/mblrnjlz"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row gx-3">
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="name *"
                        
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-3 wow fadeInUp">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email Address *"
                        
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <select name="option" className="form-select" aria-label="Default select example" defaultValue="Your inquiry about" >
                        <option>Your inquiry about</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>*/}

                  <div className="col-lg-12">
                    <div className="form-group mb-3 wow fadeInUp">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Write your inquiry here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check mb-4 wow fadeInUp">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-light small"
                        htmlFor="flexCheckDefault"
                      >
                        By submitting, i’m agreed to the{" "}
                        <a href="#" className="text-decoration-underline">
                          Terms & Conditons
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      value="Request Now"
                      className="btn btn-dark wow fadeInUp text-light fs-14px"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/contact_globe.svg"
        alt=""
        className="contact_globe"
      />
    </section>
  );
};

export default Contact;
