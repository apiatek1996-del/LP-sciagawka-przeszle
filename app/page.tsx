import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheStory from "@/components/TheStory";
import CheatSheetDetails from "@/components/CheatSheetDetails";
import CheatSheetFullPreview from "@/components/CheatSheetFullPreview";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import AboutAgata from "@/components/AboutAgata";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <TheStory />
      <CheatSheetDetails />
      <CheatSheetFullPreview />
      <WhoIsThisFor />
      <AboutAgata />
      <FAQ />
      <BottomCTA />
      <Footer />
    </main>
  );
}
