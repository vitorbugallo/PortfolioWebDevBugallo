import React from 'react'
import { FaGithub } from 'react-icons/fa'

const icons = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"
}

export default function Footer() {
  return (
    <footer className="w-full border-t mt-12" style={{borderColor:'rgba(255,255,255,0.04)'}}>
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm" style={{color:'var(--muted)'}}>
        <span>
          © {new Date().getFullYear()} Vitor Bugallo — 
          <a href="https://github.com/vitorbugallo" target="_blank" rel="noreferrer" style={{color:'var(--accent)', marginLeft: '4px'}}>
            github.com/vitorbugallo
          </a>
        </span>
        <div className="flex mt-4 sm:mt-0 space-x-4">
          <img src={icons.python} alt="Python" className="w-6 h-6" />
          <img src={icons.react} alt="React" className="w-6 h-6" />
          <img src={icons.vite} alt="Vite" className="w-6 h-6" />
          <a href="https://github.com/vitorbugallo" target="_blank" rel="noreferrer" style={{color:'var(--accent)'}}>
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

