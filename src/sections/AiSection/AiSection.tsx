import React from "react";
import AIMessageBar from "./AIMessageBar";

const AiSection = () => {
  return (
    <section className="py-24 flex flex-col items-center bg-gradient-to-b from-[#1a1b23] to-[#111217]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">AI Assistant</h2>
      <div className="w-full flex justify-center">
        <AIMessageBar />
      </div>
    </section>
  );
};

export default AiSection;