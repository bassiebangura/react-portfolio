import React from 'react';
import pdf from './resume.pdf';

const ListOfSkills = ({domain, skills}) => {
  return (
    <div className="rounded-md text-sky-800 border-2 border-gray-200 px-8 py-4 mb-6">
      <h2 className="font-bold my-2">{domain}</h2>
      <ul className=" list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Resume() {
  return (
    <section aria-labelledby="about-me-section">
      <div className="flex flex-col overflow-hidden p-6 rounded-lg mx-4 max-w-4xl  bg-white shadow mt-6 md:mx-auto  md:-mt-32 ">
        <div className='mb-4'>
          <h1 className="text-2xl text-center font-extrabold text-sky-900 mb-2">
            Resume
          </h1>
          <span className='inline-flex justify-center w-full mb-2'>
           <a
              href={pdf}
              download="Bassie_Bangura_Resume.pdf"
            >
              <p className="inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-1 text-sm font-small text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2">
                Download Resume
              </p>
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-4 justify-around md:flex-row">
          <ListOfSkills
            domain="Front End Technologies"
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "jQuery",
              "Bootstrap",
              "Tailwind CSS",
            ]}
          />
          <ListOfSkills
            domain="Back End Technologies"
            skills={["Ruby On Rails", "Node", "Express", "SQL", "NextJS"]}
          />
        </div>
      </div>
    </section>
  );
}
