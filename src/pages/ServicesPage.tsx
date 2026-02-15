import { Helmet } from "react-helmet-async";
import Services from "../components/Services/Services";

export default function ServicesPage() {
  return (
    <>
    <Helmet>
  <title>
    AI, Web & SaaS Development Services | New Zealand, UAE, Dubai & Saudi Arabia
  </title>

  <meta
    name="description"
    content="AI development, SaaS product development,Website & Custom Software, web applications, cloud & DevOps solutions for businesses in New Zealand, UAE, Dubai, Saudi Arabia and globally. Scalable, secure and performance-driven software solutions."
  />

  <meta
    name="keywords"
    content="AI Services New Zealand, Website & Custom Software, SaaS Development UAE, Web Development Dubai, Cloud Solutions Saudi Arabia, Machine Learning Services, Full Stack Development Global"
  />

  <link
    rel="canonical"
    href="https://my-portfolio-mu-liard-vgt5886y18.vercel.app/services"
  />
</Helmet>

    <main className="main">
      <Services />
    </main>
    </>
  );
}
