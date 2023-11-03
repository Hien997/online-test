import { Metadata } from "next";
import Features from "components/Features";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";
import React from "react";
import ScrollUp from "components/Common/ScrollUp";
import AboutSection from "components/About/AboutSection";

export const metadata: Metadata = {
  title: "Online test",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSection />
      <Testimonials />
    </>
  );
}
