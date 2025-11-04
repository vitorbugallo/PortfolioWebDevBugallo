import React, { useState } from 'react'

export default function Projects() {
  const projects = [
    { name: "Airbnb", description: "Site simulador do airbnb.", repo: "https://github.com/vitorbugallo/vila-makai-airbnb" },
    { name: "Passa a bola", description: "Sistema feito em crud para as meninas do Passa a bola.", repo: "https://github.com/vitorbugallo/crud-jogadoras-futebol" },
    { name: "Social Connect", description: "Projeto Social Connect desenvolvido com meus amigos na faculdade.", repo: "https://github.com/vitorbugallo/Case-Social-Connect" }
  ]

  const [search, setSearch] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleSearch = () => {
    const results = projects.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProjects(results)
  }

  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6" style={{color:'var(--text)'}}>Projetos em Destaque</h2>

        {/* Barra de busca */}
        <div className="flex mb-6">
          <input 
            type="text"
            placeholder="Buscar projeto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 rounded-l-xl border border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-[var(--accent)] text-white px-4 rounded-r-xl hover:opacity-90"
          >
            Buscar
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p,i) => (
              <article key={i} className="bg-[color:var(--card)] p-6 rounded-xl shadow-xl hover:scale-110 transition">
                <h3 className="text-xl font-semibold" style={{color:'var(--text)'}}>{p.name}</h3>
                <p className="text-sm mt-2" style={{color:'var(--muted)'}}>{p.description}</p>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-medium hover:underline" style={{color:'var(--accent)'}}>Ver repositório →</a>
              </article>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">Nenhum projeto encontrado</p>
          )}
        </div>
      </div>
    </section>
  )
}
