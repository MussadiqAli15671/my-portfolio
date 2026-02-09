// import Swal from "sweetalert2";
// import "./contact.css";

// export default function Contact() {

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const res = await fetch("https://formsubmit.co/ali11mussadiq@gmail.com", {
//         method: "POST",
//         body: formData
//       });

//       if (res.ok) {
//         Swal.fire({
//           title: "Message Sent!",
//           text: "I will contact you shortly 🙂",
//           icon: "success",
//           showConfirmButton: false,
//           timer: 2000
//         });
//         form.reset();
//       } else {
//         Swal.fire("Error", "Something went wrong!", "error");
//       }

//     } catch {
//       Swal.fire("Error", "Network error!", "error");
//     }
//   };

//   return (
//     <section id="contact" className="contact-section">

//       <div className="container section-title mb-4" data-aos="fade-up">
//         <h2>Contact</h2>
//         <p>Available for freelance projects and full-time opportunities — let’s build something great together.
//         <br />
//         Feel free to reach out — I’d be happy to help.
//         </p>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4">

//           {/* INFO */}

//           <div className="col-lg-5">
//             <div className="info-wrap">

//               <div className="info-item d-flex">
//                 <i className="bi bi-geo-alt" />
//                 <div>
//                   <h3>Address</h3>
//                   <p>Rawalpindi, Pakistan</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex">
//                 <i className="bi bi-telephone" />
//                 <div>
//                   <h3>Call</h3>
//                   <p>+92 310 5292088</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex">
//                 <i className="bi bi-envelope" />
//                 <div>
//                   <h3>Email</h3>
//                     <a href="mailto:ali11mussadiq@gmail.com" target="_blank" rel="noopener noreferrer">ali11mussadiq@gmail.com</a>
//                 </div>
//               </div>

//               <div className="info-item d-flex">
//                 <i className="bi bi-envelope" />
//                 <div>
//                   <h3>LinkedIn</h3>
//                     <a href="https://www.linkedin.com/in/mussadiqaliprogrammer/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mussadiqaliprogrammer/</a>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345!5m2!1sen!2sus"
//                 width="100%"
//                 height={200}
//                 loading="lazy"
//               />

//             </div>
//           </div>

//           {/* FORM */}

//           <div className="col-lg-7">

//             <form onSubmit={handleSubmit} className="php-email-form">

//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I received your message and will reply shortly." />
//               <input type="hidden" name="_next" value="https://mussadiqali15671.github.io/my-portfolio/#contact" />

//               <div className="row gy-4">

//                 <div className="col-md-6">
//                   <label>Your Name</label>
//                   <input name="name" className="form-control" required />
//                 </div>

//                 <div className="col-md-6">
//                   <label>Your Email</label>
//                   <input type="email" name="email" className="form-control" required />
//                 </div>

//                 <div className="col-md-12">
//                   <label>Subject</label>
//                   <input name="subject" className="form-control" required />
//                 </div>

//                 <div className="col-md-12">
//                   <label>Message</label>
//                   <textarea name="message" rows={8} className="form-control" required />
//                 </div>

//                 <div className="col-md-12 text-center">
//                   <button type="submit">Send Message</button>
//                 </div>

//               </div>
//             </form>

//           </div>

//         </div>
//       </div>

//       {/* FLOATING BUTTONS */}

//       <a href="https://wa.me/923105292088" target="_blank" className="whatsapp-float">
//         <i className="bi bi-whatsapp" />
//       </a>

//       <a href="#contact" className="contact-float">
//         <i className="bi bi-envelope-fill" />
//       </a>

//     </section>
//   );
// }


import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_ks0442q",       // 🔴 YOUR SERVICE ID
        "template_c2bptj9",      // 🔴 YOUR TEMPLATE ID
        formRef.current,
        "Vsm1dRzDSMYykUb2f"     // 🔴 YOUR PUBLIC KEY
      );

      Swal.fire({
        title: "Message Sent!",
        text: "I will contact you shortly 🙂",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });

      formRef.current.reset();

    } catch {
      Swal.fire("Error", "Email failed to send!", "error");
    }
  };

  return (
    <section id="contact" className="contact-section">

      {/* TITLE */}
      <div className="container section-title mb-4">
        <h2>Contact</h2>
        <p>
          Available for freelance projects and full-time opportunities.
          <br />
          Feel free to reach out — I’d be happy to help.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">

          {/* INFO */}
          <div className="col-lg-5">
            <div className="info-wrap">

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt" />
                <div>
                  <h3>Address</h3>
                  <p>Rawalpindi, Pakistan</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-telephone" />
                <div>
                  <h3>Call</h3>
                  <p>+92 310 5292088</p>
                </div>
              </div>

               <div className="info-item d-flex">
                 <i className="bi bi-envelope" />
                 <div>
                   <h3>Email</h3>
                     <a href="mailto:ali11mussadiq@gmail.com" target="_blank" rel="noopener noreferrer">ali11mussadiq@gmail.com</a>
                 </div>
               </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope" />
              <div>
                   <h3>LinkedIn</h3>
                     <a href="https://www.linkedin.com/in/mussadiqaliprogrammer/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mussadiqaliprogrammer/</a>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345!5m2!1sen!2sus"
                width="100%"
                height={200}
                loading="lazy"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="col-lg-7">
            <form ref={formRef} onSubmit={handleSubmit} className="php-email-form">

              <div className="row gy-4">

                <div className="col-md-6">
                  <label>Your Name</label>
                  <input
                    name="name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label>Subject</label>
                  <input
                    name="subject"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={8}
                    className="form-control"
                    required
                  />
                </div>

                {/* AUTO TIME FOR TEMPLATE */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>

      {/* FLOATING BUTTONS */}

       <a href="#contact" className="contact-float">
         <i className="bi bi-envelope-fill" />
       </a>

      <a
        href="https://wa.me/923105292088"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp" />
      </a>

    </section>
  );
}
