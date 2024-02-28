import Header from "../components/Header";
import Page from "../components/Page";
import { Work } from "../components/Work";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Metadata } from "next";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Hey!" key="title" />
      </Head>
      <Page>
        <Header />
        <div className="container mx-auto max-w-7xl p-3 lg:p-5 min-h-screen relative">
          <main>
            <Hero />
            <About />
            <Work />
            <Contact />
          </main>
        </div>
      </Page>
    </>
  );
};
export default Home;
