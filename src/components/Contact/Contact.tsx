import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_ks0442q",
        "template_c2bptj9",
        formRef.current,
        "Vsm1dRzDSMYykUb2f"
      );

      Swal.fire({
        title: t("contact.alert.successTitle"),
        text: t("contact.alert.successText"),
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });

      formRef.current.reset();
    } catch {
      Swal.fire(
        t("contact.alert.errorTitle"),
        t("contact.alert.errorText"),
        "error"
      );
    }
  };

  return (
    <>
      {/* ===== SEO FOR CONTACT ===== */}
      <Helmet>
        <title>
          {t("contact.seo.title")} | Mussadiq Ali
        </title>

        <meta
          name="description"
          content={t("contact.seo.description")}
        />

        <meta
          name="keywords"
          content={t("contact.seo.keywords")}
        />

        <link
          rel="canonical"
          href="https://mussadiqali15671.github.io/my-portfolio/#contact"
        />
      </Helmet>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="contact-section">

        <div className="container section-title mb-4">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
        </div>

        <div className="container">
          <div className="row gy-4">

            {/* INFO */}
            <div className="col-lg-5">
              <div className="info-wrap">

                <InfoItem
                  icon="bi-geo-alt"
                  label={t("contact.addressLabel")}
                  value={t("contact.addressValue")}
                />

                <InfoItem
                  icon="bi-telephone"
                  label={t("contact.phoneLabel")}
                  value="+92 310 5292088"
                />

                <InfoItem
                  icon="bi-envelope"
                  label={t("contact.emailLabel")}
                  value={
                    <a href="mailto:ali11mussadiq@gmail.com">
                      ali11mussadiq@gmail.com
                    </a>
                  }
                />

                <InfoItem
                  icon="bi-linkedin"
                  label={t("contact.linkedinLabel")}
                  value={
                    <a
                      href="https://www.linkedin.com/in/mussadiqaliprogrammer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/mussadiqaliprogrammer
                    </a>
                  }
                />

               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.656706388328!2d73.0551444!3d33.6260579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956012f26d05%3A0x38b38cf13ab84661!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1691312312345"
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

                  <Input label={t("contact.form.name")} name="name" />
                  <Input label={t("contact.form.email")} name="email" type="email" />
                  <Input label={t("contact.form.subject")} name="subject" />

                  <div className="col-md-12">
                    <label>{t("contact.form.message")}</label>
                    <textarea
                      name="message"
                      rows={8}
                      className="form-control"
                      required
                    />
                  </div>

                  <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString()}
                  />

                  <div className="col-md-12 text-center">
                    <button type="submit">
                      {t("contact.form.submit")}
                    </button>
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
    </>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

interface InfoItemProps {
  icon: string;
  label: string;
  value: string | React.ReactNode;
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="info-item d-flex">
      <i className={`bi ${icon}`} />
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

function Input({ label, name, type = "text" }: InputProps) {
  return (
    <div className="col-md-6">
      <label>{label}</label>
      <input type={type} name={name} className="form-control" required />
    </div>
  );
}
