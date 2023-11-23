export type JobData = {
   _id: string;
   title: string;
   companyName: string;
   city: string;
   country: string;
   workLocation: string;
   jobType: string;
   seniority: string;
   salaryFrom: number;
   salaryTo: number;
   currency: string;
   technologies: string[];
   description: string;
   offerUrl: string;
   __v: number;
   createdAt: string;
   updatedAt: string;
   image: string;
};

export type Filter = {
   fullTime: boolean;
   partTime: boolean;
   contract: boolean;
   freelance: boolean;
   lead: boolean;
   expert: boolean;
   senior: boolean;
   midRegular: boolean;
   junior: boolean;
   intern: boolean;
   remote: boolean;
   partRemote: boolean;
   onSite: boolean;
   salary: number;
};
