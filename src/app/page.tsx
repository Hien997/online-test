import React from "react";
import { Metadata } from "next";
import ScrollUp from "@components/Common/ScrollUp";
import Features from "@components/Features";
import Hero from "@components/Hero";
import AboutSection from "@components/About/AboutSection";
import Testimonials from "@components/Testimonials";

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
