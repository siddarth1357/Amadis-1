import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      
      <section id="center" className="flex flex-col gap-6 place-content-center place-items-center flex-1 p-5">
        <div className="hero relative w-[170px] h-[179px] mx-auto">
          <img src={heroImg} className="base w-[170px] relative z-0" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework absolute z-10 top-[34px] left-1/2 -translate-x-1/2 h-7" alt="React logo" />
          <img src={viteLogo} className="vite absolute z-0 top-[107px] left-1/2 -translate-x-1/2 h-[26px]" alt="Vite logo" />
        </div>
        
        <div>
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight my-8">Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>

      
        <button
          className="counter font-mono text-base px-5 py-2.5 rounded-md border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 hover:border-purple-700 transition-colors mb-6 cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks relative w-full h-5"></div>

    
      <section id="next-steps" className="flex border-t border-border text-left md:flex-col">
    
        <div className="flex-1 border-0 rounded-none shadow-none bg-transparent p-8 md:p-6" id="docs">
          <svg className="icon mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-5">Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 flex-wrap">
            <li>
              <a href="https://vite.dev/" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <img className="logo h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <img className="button-icon h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 border-0 rounded-none shadow-none bg-transparent p-8 md:p-6" id="social">
          <svg className="icon mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Connect with us</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-5">Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 flex-wrap">
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="text-gray-800 dark:text-gray-200 text-sm rounded-md bg-gray-100 dark:bg-gray-800/50 flex items-center gap-2 px-3 py-1.5 no-underline hover:shadow-md transition-shadow">
                <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks relative w-full h-5"></div>
      <section id="spacer" className="h-[88px] md:h-12 border-t border-border"></section>
    </div>
  )
}

export default App