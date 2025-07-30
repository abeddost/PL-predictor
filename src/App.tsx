import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ResearchQuestion from './components/ResearchQuestion';
import Approach from './components/Approach';
import DataExploration from './components/DataExploration';
import PredictiveModels from './components/PredictiveModels';
import KeyInsights from './components/KeyInsights';
import TeamCredits from './components/TeamCredits';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="research-question">
          <ResearchQuestion />
        </section>
        
        <section id="approach">
          <Approach />
        </section>
        
        <section id="data-exploration">
          <DataExploration />
        </section>
        
        <section id="predictive-models">
          <PredictiveModels />
        </section>
        
        <section id="key-insights">
          <KeyInsights />
        </section>
        
        <section id="team-credits">
          <TeamCredits />
        </section>
      </main>
      
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-200">
            MIT Emerging Talent Program • Collaborative Data Science Project
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
