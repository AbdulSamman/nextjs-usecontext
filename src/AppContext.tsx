"use client";
import { createContext, useEffect, useState } from "react";
import { IAppContext, IAppProvider, IJob, ISkill } from "./interfaces";
import axios from "axios";

const jobsUrl = "https://edwardtanguay.vercel.app/share/jobs.json";
const skillsUrl = "https://edwardtanguay.vercel.app/share/skills.json";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [searchText, setSearchText] = useState("");

  const siteTitle = "Info Site";

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const rawJobs = (await axios.get(jobsUrl)).data;
        setJobs(rawJobs);
      })();
    }, 3000);
  }, []);

  useEffect(() => {
    (async () => {
      const rawSkills = (await axios.get(skillsUrl)).data;
      setSkills(rawSkills);
    })();
  }, []);

  const handleSearch = (e: any) => {
    const _searchText = e.target.value;
    setSearchText(_searchText);
  };

  return (
    <AppContext.Provider
      value={{
        siteTitle,
        jobs,
        skills,
        searchText,
        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
