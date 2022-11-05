import React from 'react';
import Project from '../project';

const projects = [
  {
    id: 4,
    title: "Game Show App",
    github_link: "https://github.com/bassiebangura/Project_6_Game_Show_App",
    deployed_link: "https://bassiebangura.github.io/Project_6_Game_Show_App/",
  },
  {
    id: 2,
    title: "A Web Style Guide",
    github_link: "https://github.com/bassiebangura/Project_4_A_Web_Style_Guide",
    deployed_link:
    "https://bassiebangura.github.io/Project_4_A_Web_Style_Guide/",
  },
  {
    id: 3,
    title: "Interactive Photo Gallery",
    github_link: "https://github.com/bassiebangura/Project_5_Photo_Gallery",
    deployed_link: "https://bassiebangura.github.io/Project_5_Photo_Gallery/",
  },
  {
    id: 1,
    title: "Registration Form",
    github_link:
      "https://github.com/bassiebangura/Project_3_An_Online_Registration_Form",
    deployed_link:
      "https://bassiebangura.github.io/Project_3_An_Online_Registration_Form/",
  },
  {
    id: 5,
    title: "Web App Dashboard",
    github_link: "https://github.com/bassiebangura/Project_7_WebApp_Dashboard_",
    deployed_link:
      "https://bassiebangura.github.io/Project_7_WebApp_Dashboard_/",
  },
  {
    id: 6,
    title: "Employee Directory",
    github_link:
      "https://github.com/bassiebangura/Project_8_Use_an_API_to_create_Employee_Directory",
    deployed_link:
      "https://bassiebangura.github.io/Project_8_Use_an_API_to_create_Employee_Directory",
  },
];


export default function Portfolio() {
  return (
    <div className="">
      <div className="flex flex-col bg-white rounded-lg p-8 items-center mx-auto md:max-w-4xl md:-mt-32">
        <h1 className="text-center text-2xl  text-sky-900 font-extrabold mt-2">
          Portfolio
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-8 items-center mt-8 sm:mx-6 sm:px-6">
          {projects.map((project) => (
            <Project
              project_image={require(`../../assets/images/projct${project.id}.png`)}
              key={project.id}
              title={project.title}
              description={project.description}
              github_link={project.github_link}
              deployed_link={project.deployed_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
