import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header(){
  return (
    <header className="w-full bg-transparent backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-2 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold" style={{color:'var(--text)'}}>Vitor Bugallo Portfolio</div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-var hover:underline" style={{color:'var(--muted)'}}>Projetos</a>
          <a href="https://github.com/vitorbugallo" target="_blank" rel="noreferrer" className="p-2 rounded hover:scale-110">
            <FaGithub size={18} style={{color:'var(--text)'}} />
          </a>
          <a href="https://www.linkedin.com/in/vitor-reis-545573296" target="_blank" rel="noreferrer" className="p-2 rounded hover:scale-110">
            <FaLinkedin size={18} style={{color:'var(--text)'}} />
          </a>
        </nav>
      </div>
    </header>
  )
}
