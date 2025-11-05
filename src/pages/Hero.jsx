import React from 'react'
import Projects from './Projects'
import Contact from './Contact'

export default function Hero(){
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <img src="/src/assets/image.png" alt="Vitor Bugallo" className="w-36 h-36 rounded-full mx-auto object-cover shadow-lg mb-6 fade-up shadow-md transition-shadow duration-300 hover:shadow-blue-500 hover:shadow-lg" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 hover:scale-x-105 transition-transform duration-300 ease-out" style={{color:'var(--text)'}}>Vitor Bugallo</h1>
          <h2 className="text-xl sm:text-2xl font-medium mb-4" style={{color:'var(--muted)'}}>Estudante de Engenharia de Software</h2>
          <p className="text-md max-w-2xl mx-auto mb-6" style={{color:'var(--muted)'}}>Criando soluções digitais modernas e responsivas com foco em performance e experiência do usuário.</p>
          <a href="#projects" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow hover:scale-105 transition object-cover shadow-lg mb-6 fade-up shadow-md transition-shadow duration-300 hover:shadow-blue-500 hover:shadow-lg">Ver Projetos principais ↓</a>
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  )
}
