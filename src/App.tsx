import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Challenges } from './components/Challenges';
import { Solutions } from './components/Solutions';
import { ChatDemo } from './components/ChatDemo';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Challenges />
      <Solutions />
      <ChatDemo />
      <WhyUs />
      <Contact />
    </div>
  );
}