import React from "react";
import Hero from "../../components/hero/Hero";
import Feature from "../../components/feature/Feature";

const Homepage = () => {
  return (
    <main className="bg-slate-100">
      <section className="min-h-screen">
        <Hero />
        <Feature />
      </section>
    </main>
  );
};

export default Homepage;
