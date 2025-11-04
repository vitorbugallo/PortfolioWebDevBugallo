import React from 'react'

export default function Projects(){
  const projects = [
    { name: "Airbnb", description: "Site simulador do airbnb.", repo: "https://github.com/vitorbugallo/vila-makai-airbnb" },
    { name: "Passa a bola", description: "Sistema feito em crud para as meninas do Passa a bola.", repo: "https://github.com/vitorbugallo/crud-jogadoras-futebol" },
    { name: "Social Connect", description: "Projeto Social Connect desenvolvido com meus amigos na faculdade.", repo: "https://github.com/vitorbugallo/Case-Social-Connect" }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6" style={{color:'var(--text)'}}>Projetos em Destaque</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p,i) => (
            <article key={i} className="bg-[color:var(--card)] p-6 rounded-xl shadow-xl hover:scale-110 transition">
              <h3 className="text-xl font-semibold" style={{color:'var(--text)'}}>{p.name}</h3>
              <p className="text-sm mt-2" style={{color:'var(--muted)'}}>{p.description}</p>
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-medium hover:underline" style={{color:'var(--accent)'}}>Ver repositório →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
