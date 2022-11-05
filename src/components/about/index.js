import React from 'react';
import avatarImage from '../../assets/images/avatar.jpeg';

function About() {
    return (
      <section aria-labelledby="about-me-section">
        <div className="flex flex-col overflow-hidden p-6 rounded-lg mx-4 max-w-3xl  bg-white shadow mt-6 md:mx-auto  md:-mt-32 ">
          <div className="justify-center">
            <img
              src={avatarImage}
              className="h-48 w-48 rounded-full mx-auto"
              alt="avatar-image"
            />
          </div>
          <h1 className="text-sky-900 text-2xl p-6 text-center font-bold">Who am I?</h1>
          <div>
            <p className="p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              bibendum turpis sed ex condimentum molestie. Mauris condimentum
              lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
              metus aliquam maximus. Proin aliquam justo nec diam vulputate
              vestibulum.
              <br></br>
              <br></br>
              Aenean sollicitudin nulla at nisi ornare, nec suscipit massa
              eleifend. Morbi tristique justo vel turpis sollicitudin, et
              tristique velit convallis. In hac habitasse platea dictumst.
              Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl
              nibh. Curabitur imperdiet ultricies mollis. In hac habitasse
              platea dictumst.
              <br></br>
              <br></br>
              Morbi tristique justo vel turpis sollicitudin, et tristique velit
              convallis. In hac habitasse platea dictumst. Phasellus mattis nunc
              sed orci consequat laoreet. Praesent id nisl nibh. Curabitur
              imperdiet ultricies mollis. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
export default About;
