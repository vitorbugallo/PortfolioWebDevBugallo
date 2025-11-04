import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full border-t mt-12" style={{borderColor:'rgba(255,255,255,0.04)'}}>
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm" style={{color:'var(--muted)'}}>
        © {new Date().getFullYear()} Vitor Bugallo — <a href="https://github.com/vitorbugallo" target="_blank" rel="noreferrer" style={{color:'var(--accent)'}}>github.com/vitorbugallo</a>
      </div>
    </footer>
  )
}
