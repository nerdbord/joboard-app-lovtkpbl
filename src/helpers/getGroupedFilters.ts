import { FilterSettings } from "../interfaces";

export function getGroupedFilters(filters: FilterSettings) {
    const jobType = {
       fullTime: filters.fullTime,
       partTime: filters.partTime,
       contract: filters.contract,
       freelance: filters.freelance,
    };
    const seniority = {
       lead: filters.lead,
       expert: filters.expert,
       senior: filters.senior,
       midRegular: filters.midRegular,
       junior: filters.junior,
       intern: filters.intern,
    };
    const location = {
       remote: filters.remote,
       partRemote: filters.partRemote,
       onSite: filters.onSite,
    };
    return { jobType: jobType, seniority: seniority, location: location, salary: filters.salary };
 }
 