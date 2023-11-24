import { FilterTypes } from '../enums';

export function getFilterGroup(option: FilterTypes) {
   switch (option) {
      case FilterTypes.fullTime:
      case FilterTypes.partTime:
      case FilterTypes.contract:
      case FilterTypes.freelance:
         return 'jobType';
      case FilterTypes.lead:
      case FilterTypes.expert:
      case FilterTypes.senior:
      case FilterTypes.midRegular:
      case FilterTypes.junior:
      case FilterTypes.intern:
         return 'seniority';
      case FilterTypes.remote:
      case FilterTypes.partRemote:
      case FilterTypes.onSite:
         return 'workLocation';
      case FilterTypes.salary:
         return 'salary';
      default:
         return option;
   }
}
