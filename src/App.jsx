import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
