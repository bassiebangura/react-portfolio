import React from 'react';
import avatarImage from '../../assets/images/avatar.jpeg';

function About() {
    return (
      <section aria-labelledby="about-me-section">
        <div className="flex flex-col overflow-hidden p-6 rounded-lg mx-4 max-w-3xl  bg-gray-100 shadow mt-6 md:mx-auto  md:-mt-32 ">
          <div className="justify-center">
            <img
              src={avatarImage}
              className="h-48 w-48 rounded-full mx-auto"
              alt="avatar-image"
            />
          </div>
          <h1 className="text-gray-900 text-2xl p-6 text-center font-bold">
            Who am I?
          </h1>
          <div>
            <p className="p-6 pb-8 text-gray-800 text-lg font-medium text-justify">
              Hi, there! I am <b>Bassie Bangura</b>, orginally from Sierra Leone,
              Western Africa. I live in Spring Hill, Tennessee with my wife and son. 
              
              <br></br>
              <br></br>
               I earned a degree in Electronics Engineering in 2013. I gained interest in
              computer networking in college. A year into computer networking, I became curious about
              web development. In 2016 I started learning Web Development online through Udacity, TeamTreeHouse and others. 
              In 2017 I became a Freelance Web Developer.
              <br></br>
              <br></br>
              In 2019 I joined a start-up - Fluree PBC. Here, I developed clean and 
              responsive UIs for the FlureeDB Graphical User
              Interface. Together with our UI/UX Engineer, I led the Frontend
              efforts to revamp the FlureeDB GUI and resulted in improved User Experience. 
              <br></br>
              <br></br>
              Transitioned into a Full-stack Engineer in 2019. At my
              current job I am part of a team building Web based Applications
              using Ruby On Rails, Postgres and Frontend technologies. 
            </p>
          </div>
        </div>
      </section>
    );
  }
  
export default About;
