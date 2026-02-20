import { Helmet } from "react-helmet-async";
import Portfolio from "../components/Portfolio/Portfolio";

export default function PortfolioPage() {
  return (
    <>
   <Helmet>
  <title>
    Projects | AI, SaaS & Web Applications for Global & NZ Clients
  </title>

  <meta
    name="description"
    content="Explore AI systems, SaaS platforms, Website & Custom Software, chatbots, and enterprise web applications developed for clients in New Zealand, UAE, Dubai, Saudi Arabia and globally."
  />

  <meta
    name="keywords"
    content="AI Projects New Zealand, SaaS Projects UAE, Website & Custom Software, Web Applications Dubai, Machine Learning Projects Saudi Arabia, Full Stack Portfolio"
  />

  <link
    rel="canonical"
    href="https://mussadiq-ali-portfolio.vercel.app/projects"
  />
</Helmet>

    <main className="main">
      <Portfolio />
    </main>
    </>
  );
}
