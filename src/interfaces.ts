export interface FilterSettings {
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
}

export interface FilterSettingsArray {
    jobType: string[];
    seniority: string[];
    workLocation: string[];
    currSalary: number;
    minSalary: number;
    maxSalary: number;
}

export interface groupedFilters{
    jobType: {
        fullTime: boolean;
        partTime: boolean;
        contract: boolean;
        freelance: boolean;
    };
    seniority: {
        lead: boolean;
        expert: boolean;
        senior: boolean;
        midRegular: boolean;
        junior: boolean;
        intern: boolean;
    };
    location: {
       remote: boolean;
       partRemote: boolean;
       onSite: boolean;
    };
    salary: number;
}