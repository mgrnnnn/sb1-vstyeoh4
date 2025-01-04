import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import { AuthPage } from './pages/AuthPage';
import { DomSearcher } from './pages/DomSearcher';
import { AuthGuard } from './components/auth/AuthGuard';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route 
            path="/dom-searcher" 
            element={
              <AuthGuard>
                <DomSearcher />
              </AuthGuard>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <AuthGuard>
                <Navigate to="/dom-searcher" replace />
              </AuthGuard>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;