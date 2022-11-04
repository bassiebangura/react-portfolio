import React from "react";

export default function Project(props) {
    const { title, github_link, deployed_link, project_image } = props;
    return (
      <div class="relative m-2 w-full">
        <div class="absolute inset-0 z-10 rounded-md bg-white  rounder-md text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-96 duration-300">
          <div>
            <h3 class="font-bold pt-4 pb-8">{title}</h3>
            <div class="flex justify-center">
              <a
                href={github_link}
                target="_blank"
              >
                <p className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 mx-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                  On GitHub
                </p>
              </a>
              <a
                href={deployed_link}
                target="_blank"
              >
                <p className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 mx-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                  View Project
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class="relative shadow-md">
          <img src={project_image} className="h-48 w-full rounded-md shadow-md" />
        </div>
      </div>
    );
}
  