import './App.css';

// components
import Container from './components/Container/Container';
import JobOffer from './components/JobOffers/JobOffer';
import Input from './components/UI/Input';

const DATA = [
   {
      _id: '648b7add0905a510f1c7fe02',
      title: 'Data Engineer',
      companyName: 'LMN Co',
      city: 'London',
      country: 'UK',
      workLocation: 'Remote',
      jobType: 'Contract',
      seniority: 'Mid/Regular',
      salaryFrom: 60000,
      salaryTo: 90000,
      currency: 'GBP',
      technologies: ['Python', 'SQL', 'Big Data'],
      description:
         'We are looking for a Data Engineer to join our team. You will be responsible for designing and implementing data pipelines, integrating data from various sources, and optimizing data storage and retrieval using Python, SQL, and big data technologies. The ideal candidate should have strong programming and data modeling skills.',
      offerUrl: 'https://nerdbord.io',
      __v: 0,
      createdAt: '2023-06-15T20:55:57.198Z',

      updatedAt: '2023-10-14T19:49:23.972Z',
      image: 'https://i.imgur.com/yaKYWeN.png',
   },
   {
      _id: '648b7add0905a510f1c7fe07',
      title: 'Marketing Coordinator',
      companyName: 'LMN Co',
      city: 'London',
      country: 'UK',
      workLocation: 'Part-remote',
      jobType: 'Full-time',
      seniority: 'Mid/Regular',
      salaryFrom: 35000,
      salaryTo: 45000,
      currency: 'GBP',
      technologies: ['Digital Marketing', 'Social Media', 'Google Analytics'],
      description:
         'We are seeking a skilled Marketing Coordinator to join our team. You will be responsible for implementing marketing campaigns, managing social media channels, and analyzing marketing performance using tools like Google Analytics. The ideal candidate should have a solid understanding of digital marketing strategies and be familiar with various marketing channels.',
      offerUrl: 'https://nerdbord.io',
      __v: 0,
      createdAt: '2023-06-15T20:55:57.199Z',
      updatedAt: '2023-10-14T19:49:24.196Z',
      image: 'https://i.imgur.com/3FXDIlJ.png',
   },
];

const App = () => {
   return (
      <Container>
         <h1>JoBoard 🛹</h1>
         <Input icon="search" placeholder="Search for" />
         <Input icon="location" placeholder="Search location" />
         <JobOffer jobData={DATA[0]} />
         <JobOffer jobData={DATA[1]} />
      </Container>
   );
};

export default App;
