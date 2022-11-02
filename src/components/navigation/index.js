import React, {useState, useEffect} from "react";

export default function Navigation(props) {
    const {navItems, currentTitle, setCurrentTitle} = props;
    const [activeTab, setActiveTab] = useState(currentTitle);
  
    useEffect(() => {
      setActiveTab(currentTitle);
    }, [currentTitle]);
  
    return (
      <nav className="w-full md:w-auto">
        <ul className="ml-10 hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <li className={`text-base font-medium text-white hover:text-gray-300 ${activeTab === item.title && 'border-b-2'}`} key={item.title}>
              <span onClick={() => setCurrentTitle(item.title)}>{item.title}</span>
            </li>
          ))}
        </ul>
        <ul className="flex w-full justify-center space-x-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li className={`text-base font-medium text-white hover:text-gray-300 ${activeTab === item.title && 'border-b-2'}`} key={item.title}>
              <span onClick={() => setCurrentTitle(item.title)}>{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
    