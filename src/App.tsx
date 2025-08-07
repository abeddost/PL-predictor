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
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebSite">
      <meta itemProp="url" content="https://premier-league-predictor.netlify.app/" />
      <meta itemProp="name" content="Premier League Success Predictor" />
      
      <header>
        <Navigation />
      </header>
      
      <main>
        <section id="hero" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Predicting Premier League Success" />
          <meta itemProp="description" content="Using machine learning to identify which players from lower-tier European leagues are most likely to thrive in England's top flight" />
          <meta itemProp="datePublished" content="2025-01-27" />
          <Hero />
        </section>
        
        <article id="research-question" itemScope itemType="https://schema.org/ScholarlyArticle">
          <meta itemProp="headline" content="Research Question: Will this player succeed in the Premier League?" />
          <meta itemProp="about" content="Football player transfer success prediction" />
          <ResearchQuestion />
        </article>
        
        <section id="approach" itemScope itemType="https://schema.org/HowTo">
          <meta itemProp="name" content="Our Machine Learning Approach" />
          <meta itemProp="description" content="Data collection, position segmentation, machine learning, and performance analysis methodology" />
          <Approach />
        </section>
        
        <section id="data-exploration" itemScope itemType="https://schema.org/Dataset">
          <meta itemProp="name" content="Football Transfer Data Analysis" />
          <meta itemProp="description" content="Comprehensive analysis of 149 players across different positions" />
          <DataExploration />
        </section>
        
        <section id="predictive-models" itemScope itemType="https://schema.org/SoftwareApplication">
          <meta itemProp="name" content="Random Forest Predictive Models" />
          <meta itemProp="applicationCategory" content="Machine Learning" />
          <meta itemProp="operatingSystem" content="Web Browser" />
          <PredictiveModels />
        </section>
        
        <section id="key-insights" itemScope itemType="https://schema.org/AnalysisNewsArticle">
          <meta itemProp="headline" content="Key Insights from Premier League Transfer Analysis" />
          <meta itemProp="datePublished" content="2025-01-27" />
          <KeyInsights />
        </section>
        
        <section id="team-credits" itemScope itemType="https://schema.org/AboutPage">
          <meta itemProp="name" content="Research Team and Credits" />
          <meta itemProp="description" content="MIT Emerging Talent Program collaborative data science project" />
          <TeamCredits />
        </section>
      </main>
      
      <footer className="bg-blue-900 text-white py-8" itemScope itemType="https://schema.org/WPFooter">
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
