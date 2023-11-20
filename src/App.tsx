import './App.module.scss';
// components
import Container from './components/Container/Container';
import Checkbox from './components/UI/Checkbox';
import Filters from './components/Filters/Filters';
import JobOffersScreen from './components/JobOffers/JobOffersScreen';
import { FilterTypes } from './enumFaces/enums';
import { FilterSettings } from './enumFaces/interfaces';

const DATA = [
   {
      _id: '648b7add0905a510f1c7fe02',
      title: 'Infrastructure Architect',
      companyName: 'GOPro',
      city: 'Barcelona',
      country: 'Spain',
      workLocation: 'Fully remote',
      jobType: 'Contract',
      seniority: 'Senior',
      salaryFrom: 10000,
      salaryTo: 18000,
      currency: 'PLN',
      technologies: ['Python', 'SQL', 'Big Data'],
      description:
         'We are looking for a Data Engineer to join our team. You will be responsible for designing and implementing data pipelines, integrating data from various sources, and optimizing data storage and retrieval using Python, SQL, and big data technologies. The ideal candidate should have strong programming and data modeling skills.',
      offerUrl: 'https://nerdbord.io',
      __v: 0,
      createdAt: '2023-11-14T20:55:57.198Z',
      updatedAt: '2023-10-14T19:49:23.972Z',
      image: 'https://i.imgur.com/yaKYWeN.png',
   },
   {
      _id: '648b7add0905a510f1c7fe07',
      title: 'IT BA– Research & Development',
      companyName: 'P&G',
      city: 'Warsaw',
      country: 'Poland',
      workLocation: 'Fully-remote',
      jobType: 'Full-time',
      seniority: 'Senior',
      salaryFrom: 10000,
      salaryTo: 18000,
      currency: 'PLN',
      technologies: ['Digital Marketing', 'Social Media', 'Google Analytics'],
      description:
         'We are seeking a skilled Marketing Coordinator to join our team. You will be responsible for implementing marketing campaigns, managing social media channels, and analyzing marketing performance using tools like Google Analytics. The ideal candidate should have a solid understanding of digital marketing strategies and be familiar with various marketing channels.',
      offerUrl: 'https://nerdbord.io',
      __v: 0,
      createdAt: '2023-11-11T20:55:57.199Z',
      updatedAt: '2023-10-14T19:49:24.196Z',
      image: 'https://i.imgur.com/3FXDIlJ.png',
   },
];

const App = () => {
   const settings: FilterSettings
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
         <Filters settings={settings} />
         <JobOffersScreen offers={DATA} />
      </Container>
   );
};

export default App;
