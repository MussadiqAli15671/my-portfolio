import { Helmet } from "react-helmet-async";
import Events from "../components/Events/Events";

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>
          Events | AI & Full Stack Developer Serving New Zealand, Website Developer UAE & Global Clients
        </title>

        <meta
          name="description"
          content="Professional AI & Full Stack Developer, Website & Custom Software Developer working with startups and businesses in New Zealand, UAE, Dubai, Saudi Arabia and worldwide. Specializing in AI systems, scalable web applications and cloud architecture."
        />

        <meta
          name="keywords"
          content="Events AI Developer NZ, Website & Custom Software, Full Stack Developer UAE, AI Engineer Dubai, Software Developer Saudi Arabia, Global AI Consultant"
        />

        <link
          rel="canonical"
          href="https://mussadiq-ali-portfolio.vercel.app/events"
        />
      </Helmet>

      <main className="main">
        <Events />
      </main>
    </>
  );
}