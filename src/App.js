import './App.css';
import React, {useState} from 'react';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';


function App() {
  //about me is the default page
  const navItems = [
    { id: 1, title: 'About Me', content: 'About page content' },
    { id: 2, title: 'Portfolio', content: 'Contact page content' },
    { id: 3, title: 'Contact', content: 'Contact page content' },
    { id: 4, title: 'Resume', content: 'Resume page content' },
  ];
  const [currentTitle, setCurrentTitle] = useState(navItems[0].title);
  return (
    <div className='flex flex-col h-full bg-gray-200'>
      <Header navItems={navItems} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} />
      <main>
        {currentTitle === 'About Me' && <About />}
        {currentTitle === 'Contact' && <Contact />}
        {/* {currentTitle === 'Resume' && <Resume />} */}
        {currentTitle === 'Portfolio' && <Portfolio />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
