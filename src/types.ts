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
   fullTime: true;
   partTime: true;
   contract: true;
   freelance: true;
   lead: true;
   expert: true;
   senior: true;
   midRegular: true;
   junior: true;
   intern: true;
   remote: true;
   partRemote: true;
   onSite: true;
   salary: 0;
};
