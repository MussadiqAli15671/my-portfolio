import Swal from "sweetalert2";
import "./contact.css";

export default function Contact() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ali11mussadiq@gmail.com", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        Swal.fire({
          title: "Message Sent!",
          text: "I will contact you shortly 🙂",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });
        form.reset();
      } else {
        Swal.fire("Error", "Something went wrong!", "error");
      }

    } catch {
      Swal.fire("Error", "Network error!", "error");
    }
  };

  return (
    <section id="contact" className="contact-section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Available for freelance projects and full-time opportunities — let’s build something great together.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
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
                  <p>ali11mussadiq@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345!5m2!1sen!2sus"
                width="100%"
                height={270}
                loading="lazy"
              />

            </div>
          </div>

          {/* FORM */}

          <div className="col-lg-7">

            <form onSubmit={handleSubmit} className="php-email-form">

              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I received your message and will reply shortly." />

              <div className="row gy-4">

                <div className="col-md-6">
                  <label>Your Name</label>
                  <input name="name" className="form-control" required />
                </div>

                <div className="col-md-6">
                  <label>Your Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>

                <div className="col-md-12">
                  <label>Subject</label>
                  <input name="subject" className="form-control" required />
                </div>

                <div className="col-md-12">
                  <label>Message</label>
                  <textarea name="message" rows={8} className="form-control" required />
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>
      </div>

      {/* FLOATING BUTTONS */}

      <a href="https://wa.me/923105292088" target="_blank" className="whatsapp-float">
        <i className="bi bi-whatsapp" />
      </a>

      <a href="#contact" className="contact-float">
        <i className="bi bi-envelope-fill" />
      </a>

    </section>
  );
}




// import Swal from "sweetalert2";

// export default function Contact() {
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//   const res = await fetch(
//     "https://formsubmit.co/ali11mussadiq@gmail.com",
//     { method: "POST", body: formData }
//   );

//   if (res.ok) {
//     Swal.fire("Success", "Message Sent Successfully!", "success");
//     form.reset();
//   } else {
//     Swal.fire("Error", "Something went wrong!", "error");
//   }
// } catch {
//   Swal.fire("Error", "Network error!", "error");
// }

//   };

//   return (
//     <section
//       id="contact"
//       className="contact section"
//       style={{ backgroundColor: "black", color: "white" }}
//     >
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2 style={{ color: "white" }}>Contact</h2>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay={100}>
//         <div className="row gy-4">
//           {/* Left Info */}
//           <div className="col-lg-5">
//             <div
//               className="info-wrap"
//               style={{ background: "transparent", boxShadow: "none" }}
//             >
//               <div className="info-item d-flex">
//                 <i className="bi bi-geo-alt flex-shrink-0" />
//                 <div>
//                   <h3>Address</h3>
//                   <p>Rawalpindi, Pakistan</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex">
//                 <i className="bi bi-telephone flex-shrink-0" />
//                 <div>
//                   <h3>Call Us</h3>
//                   <p>+92 310 5292088</p>
//                 </div>
//               </div>

//               <div className="info-item d-flex">
//                 <i className="bi bi-envelope flex-shrink-0" />
//                 <div>
//                   <h3>Email Us</h3>
//                   <p>ali11mussadiq@gmail.com</p>
//                 </div>
//               </div>

//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345!5m2!1sen!2sus"
//                 width="100%"
//                 height={270}
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7">
//             <form
//               onSubmit={handleSubmit}
//               className="php-email-form"
//               style={{ background: "transparent", boxShadow: "none" }}
//             >
//               {/* Disable captcha */}
//               <input type="hidden" name="_captcha" value="false" />

//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <label className="pb-2">Your Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="pb-2">Your Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label className="pb-2">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label className="pb-2">Message</label>
//                   <textarea
//                     name="message"
//                     rows={10}
//                     className="form-control"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12 text-center">
//                   <button type="submit">Send Message</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           {/* End Contact Form */}
//         </div>
//       </div>
//     </section>
//   );
// }
