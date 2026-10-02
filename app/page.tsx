import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheStory from "@/components/TheStory";
import MockupSection from "@/components/MockupSection";
import AboutAgata from "@/components/AboutAgata";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <TheStory />
      <MockupSection />
      <AboutAgata />
      <BottomCTA />
      <Footer />
    </main>
  );
}
