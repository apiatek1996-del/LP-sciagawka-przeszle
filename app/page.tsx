import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import CheatSheetDetails from "@/components/CheatSheetDetails";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import AboutAgata from "@/components/AboutAgata";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />
      <Hero />
      <ComparisonTable />
      <CheatSheetDetails />
      <WhoIsThisFor />
      <AboutAgata />
      <FAQ />
      <BottomCTA />
      <Footer />
    </main>
  );
}
