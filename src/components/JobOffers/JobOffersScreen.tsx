import styles from './JobOffersScreen.module.scss';
import { FilterTypes, InputType } from '../../enums';
import useFindJobOffers from '../../data/job-offer/queries/useFindJobOffers';

// components
import JobOffersList from './JobOffersList';
import Input from '../UI/Input';
import Loader from '../UI/Loader';
import { useFilter, useFilterUpdate } from '../../providers/Filters/FilterContext';

interface JobOffersProps {}

const JobOffersScreen = (props: JobOffersProps) => {
   const filterSettings = useFilter();
   const updateFilter = useFilterUpdate();
   const { data, error, isFetching, isPending } = useFindJobOffers();

   const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const eventValue = event.target.value;
      const filterType =
         event.target.getAttribute('name') == InputType.Search
            ? FilterTypes.nameString
            : FilterTypes.locationString;
      updateFilter(filterType, eventValue);
   };

   const handleClickAutocomplete = (searchString: string, inputType: InputType) => {
      const filterType =
         inputType == InputType.Search ? FilterTypes.nameString : FilterTypes.locationString;
      updateFilter(filterType, searchString);
   };

   return (
      <section className={styles.screen}>
         <section>
            <form className={styles.form}>
               <Input
                  inputType={InputType.Search}
                  handleInput={handleInput}
                  placeholder="Search for"
                  offers={data || []}
                  filterSettings={filterSettings}
                  handleClickAutocomplete={handleClickAutocomplete}
               />
               <Input
                  inputType={InputType.Location}
                  handleInput={handleInput}
                  placeholder="Search location"
                  offers={data || []}
                  filterSettings={filterSettings}
                  handleClickAutocomplete={handleClickAutocomplete}
               />
            </form>
         </section>
         <section className={styles.text}>
            {data &&
               `${data?.length ? data?.length : '0'} offer${data?.length == 1 ? '' : 's'} found`}
            {filterSettings.nameString.trim() && ` for "${filterSettings.nameString.trim()}"`}
            {filterSettings.locationString.trim() &&
               ` in "${filterSettings.locationString.trim()}"`}
         </section>
         <section>
            {isPending ? (
               <Loader />
            ) : error ? (
               <span>Error: {error.message}</span>
            ) : (
               <>
                  {isFetching && <span>Background Updating...</span>}

                  <JobOffersList offers={data || []} />
               </>
            )}
         </section>
      </section>
   );
};

export default JobOffersScreen;
