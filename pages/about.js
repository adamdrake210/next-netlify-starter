import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Header title="Welcome to my app!" />
        <p className="description">About us</p>
      </main>

      <Footer />
    </div>
  );
}
