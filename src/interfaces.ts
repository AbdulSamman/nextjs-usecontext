export interface IJob {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  publicationDate: string;
}

export interface ISkill {
  idCode: string;
  name: string;
  url: string;
  description: string;
}

export interface IAppContext {
  siteTitle: string;
  jobs: IJob[];
  skills: ISkill[];
  handleSearch: (e: any) => void;
  searchText: string;
}

export interface IAppProvider {
  children: React.ReactNode;
}
