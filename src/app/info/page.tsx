"use client";
import React from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Image from "next/image";
function Info() {
  const { siteTitle, jobs, skills, searchText, handleSearch } =
    useContext(AppContext);
  return (
    <div className="pageInfo">
      <div>This is the info page for the site "{siteTitle}".</div>
      <div className="row">
        {jobs.length > 0 ? (
          <div className="content flex gap-x-5">
            <div className="jobs">
              <h2 className="text-red-800 text-2xl m-2">{jobs.length} Jobs</h2>
              {jobs.map((job) => {
                return (
                  <div
                    className="job bg-gray-700 mb-2 p-2 rounded hover:bg-blue-800"
                    key={job.id}
                  >
                    {job.title}
                  </div>
                );
              })}
            </div>

            <div className="skills">
              <div className="flex justify-between items-center">
                <h2 className="text-red-800 text-2xl m-2">
                  {skills.length} Skills
                </h2>
                <input
                  autoFocus
                  type="text"
                  value={searchText}
                  placeholder="Search ..."
                  onChange={(e) => handleSearch(e)}
                  className="placeholder:italic placeholder:text-slate-400 text-slate-600  block border border-slate-500 rounded-md pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-7"
                />
              </div>

              {skills
                .filter((m) =>
                  m.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                )
                .map((skill) => {
                  return (
                    <div className="skill" key={skill.idCode}>
                      <span className="text-yellow-400">{skill.name}</span>:{" "}
                      {skill.description}
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="loading flex justify-center items-center">
            <Image
              src="/images/loading-icon.gif"
              alt="me"
              width="64"
              height="64"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
