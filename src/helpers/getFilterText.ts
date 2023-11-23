import { FilterTypes } from '../enums';

export function getFilterText(option: FilterTypes | string) {
   switch (option) {
      case FilterTypes.fullTime:
         return 'Full-time';
      case FilterTypes.partTime:
         return 'Part-time';
      case FilterTypes.contract:
         return 'Contract';
      case FilterTypes.freelance:
         return 'Freelance';
      case FilterTypes.lead:
         return 'Lead';
      case FilterTypes.expert:
         return 'Expert';
      case FilterTypes.senior:
         return 'Senior';
      case FilterTypes.midRegular:
         return 'Mid/Regular';
      case FilterTypes.junior:
         return 'Junior';
      case FilterTypes.intern:
         return 'Intern';
      case FilterTypes.remote:
         return 'Remote';
      case FilterTypes.partRemote:
         return 'Part-remote';
      case FilterTypes.onSite:
         return 'On-site';
      case FilterTypes.salary:
         return 'salary';
      default:
         return option;
   }
}
