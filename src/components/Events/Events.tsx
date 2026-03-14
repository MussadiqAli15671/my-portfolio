import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./events.css";

export default function Events() {
  const { t } = useTranslation();

  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="section-title">
          <h2>{t("events.title")}</h2>
          <p>{t("events.description")}</p>
        </div>

        <div className="events-content">
          <div className="event-item">
            <h3>{t("events.graduationSpeech.title")}</h3>
            <p>{t("events.graduationSpeech.description")}</p>
            <div className="video-container">
              <video controls width="100%" height="auto">
                <source src="/assets/Speech.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="event-details">
              <h4>{t("events.graduationSpeech.detailsTitle")}</h4>
              <p>
                {t("events.graduationSpeech.para1")}
              </p>
              <p>
                {t("events.graduationSpeech.para2")}
              </p>
              <p>
                {t("events.graduationSpeech.para3")}
              </p>
              <p>
                {t("events.graduationSpeech.para4")}
              </p>
              <p>
                {t("events.graduationSpeech.para5")}
              </p>
              <p>
                {t("events.graduationSpeech.para6")}
              </p>
            </div>
          </div>
          <div className="event-item">
            <h3>{t("events.zindigiPrize.title")}</h3>
            <p>{t("events.zindigiPrize.description")}</p>
            <div className="image-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="event-swiper"
              >
                <SwiperSlide>
                  <img src="/assets/img/ZindagiPrice.jpg" alt="Zindigi Prize Participation" />
                </SwiperSlide>
                  <SwiperSlide>
                  <img src="/assets/img/JS1.jpeg" alt="Zindigi Prize Participation" />
                </SwiperSlide>
                 <SwiperSlide>
                  <img src="/assets/img/JS2.jpeg" alt="Zindigi Prize Participation" />
                </SwiperSlide>
                {/* Add more SwiperSlide components here for additional images */}
              </Swiper>
            </div>
            <div className="event-details">
              <h4>{t("events.zindigiPrize.detailsTitle")}</h4>
              <p>
                {t("events.zindigiPrize.para1")}
              </p>
              <p>
                {t("events.zindigiPrize.para2")}
              </p>
              <p>
                {t("events.zindigiPrize.para3")}
              </p>
              <p>
                {t("events.zindigiPrize.para4")}
              </p>
              <p>
                {t("events.zindigiPrize.para5")}
              </p>
              <p>
                {t("events.zindigiPrize.para6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}