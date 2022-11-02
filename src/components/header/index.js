import React from "react";
import Navigation from "../navigation";

export default function Header({navItems, currentTitle, setCurrentTitle}) {

    return (
      <header className="bg-gradient-to-r from-sky-800 to-cyan-600 md:pb-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex flex-wrap w-full justify-between border-b border-white py-6 md:border-none">
            <h1 className="w-full text-xl text-white text-center font-bold md:text-left md:w-auto">Bassie Bangura</h1>
            <Navigation navItems={navItems} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}/>
          </div>
        </div>
      </header>
    )
  }



