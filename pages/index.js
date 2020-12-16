import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Article from "@components/Article";
import { useState } from "react";

const object = {
  word: "apple",
  color: "#123456",
};

export default function Home({ posts }) {
  console.log("posts: ", posts);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Header title="Welcome to my app!" />
        <Article object={object} posts={posts} />

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
