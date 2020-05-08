import { CVPhoto } from './ui/cv-photo/cv-photo';
import { CVTitle } from './ui/cv-title/cv-title';
import { CVContacts } from './ui/cv-contacts/cv-contacts';
import { CVItem } from './ui/cv-item/cv-item';
import { CVList } from './ui/cv-list/cv-list';
import './style/style.sass';

/* eslint no-unused-vars: 0 */
const photo = new CVPhoto();

const title = new CVTitle({
  title: 'Roman Vikulov',
  subtitle: 'Software Engineer',
});

const contacts = new CVContacts({
  contacts: [
    {
      name: 'github',
      value: 'blackio',
      link: 'https://github.com/blackio',
      icon: require('./ui/cv-contacts/cv-contacts-github.svg'), // eslint-disable-line global-require
    },
    {
      name: 'linkedin',
      value: 'LinkedIn',
      link: 'https://www.linkedin.com/in/roman-vikulov-01/',
      icon: require('./ui/cv-contacts/cv-contacts-linkedin.svg'), // eslint-disable-line global-require
    },
    {
      name: 'e-mail',
      value: 'blackio.web@gmail.com',
      link: '',
      icon: require('./ui/cv-contacts/cv-contacts-email.svg'), // eslint-disable-line global-require
    },
    // {
    //   name: 'location',
    //   value: 'Tianjin, China',
    //   link: 'https://www.google.ru/maps/place/Tianjin,+China/',
    //   icon: require('./ui/cv-contacts/cv-contacts-location.svg'),
    // },
  ],
});

const aboutMe = new CVItem({
  title: 'About me',
  items: [
    {
      title: 'Some words',
      subtitle: 'about me',
      text:
        "Hey! I'm a 26yo software engineer living in St Petersburg. I travel a lot, drink tea and can't remember at least a week without <code>coding</code> for the last 3 years",
    },
  ],
});

const experience = new CVItem({
  title: 'Experience',
  items: [
    {
      title: 'Arcadia',
      subtitle: '2018 - ...',
      text:
        'Now I work on a worldwide financial project as a Software Engineer. Integrate modern frameworks to the legacy code, optimize existing code for the end user, developers and search engines. Also I participated in hackathons and created an open-source <a href="https://github.com/id01010010/lazzy" target="_blank" rel="noopener">lazy loading library</a> for responsive images',
    },
    {
      title: 'razer.me',
      subtitle: '2018',
      text:
        'I worked on my own e-commerce project in 2018. The frontend part is written with Vue, Koa for the backend and Golang for the product parser',
    },
    {
      title: 'interneturok.ru',
      subtitle: '2016-2017',
      text:
        'In Interneturok I worked as a lead Frontend Developer. Made the platform x4 times faster, boost the "Painting time" speed <a href="/static/seo.png" class="cv-item__link">up to 40%</a>, created a mobile-friendly version of the website and the reusable UI library',
    },
    {
      title: 'freecodecamp',
      subtitle: '2016-2017',
      text:
        'Thanks to Freecodecamp for the first open source experience and great teamwork',
    },
  ],
});

const education = new CVItem({
  title: 'Education',
  items: [
    {
      title: 'Self-Education',
      subtitle: 'Computer Science',
      date: '2015-∞',
      text:
        "I prefer «learning by doing» way. So I've created chat bots (for Telegram messenger), game bots, web crawlers, browser extensions (for Chrome) and even a cloud-based VPN service (cause I lived in China)",
    },
    {
      title: 'Irkutsk state University',
      subtitle: 'PR',
      date: '2011-2013',
      text: 'Advertising and Management',
    },
    {
      title: 'IT College',
      subtitle: 'Software Engineer',
      date: '2009-2010',
      text: 'Computer Science',
    },
  ],
});

const skills = new CVList({
  title: 'Skills',
  items: [
    {
      title: 'JS',
      level: '75',
    },
    {
      title: 'HTML',
      level: '85',
    },
    {
      title: 'CSS',
      level: '80',
    },
    {
      title: 'SASS',
      level: '70',
    },
    {
      title: 'Pug',
      level: '80',
    },
    {
      title: 'Angular',
      level: '50',
    },
    {
      title: 'Vue.js',
      level: '80',
    },
    {
      title: 'React',
      level: '35',
    },
    {
      title: 'Nuxt.js',
      level: '60',
    },
    {
      title: 'Webpack',
      level: '45',
    },
    {
      title: 'Gulp',
      level: '70',
    },
    {
      title: 'Express',
      level: '55',
    },
    {
      title: 'Koa JS',
      level: '60',
    },
    {
      title: 'Mongo DB',
      level: '50',
    },
    {
      title: 'Python',
      level: '40',
    },
    {
      title: 'Golang',
      level: '35',
    },
    {
      title: 'Linux',
      level: '45',
    },
  ],
});

const hobbies = new CVList({
  title: 'Hobbies',
  items: [
    {
      title: 'Traveling',
    },
    {
      title: 'Psychology',
    },
    {
      title: 'Motorcycles',
    },
    {
      title: 'Fitness',
    },
  ],
});

// const reference = new CVItem({
//   title: 'Reference',
//   items: [
//     {
//       title: 'John Doe',
//       subtitle: 'Team Lead',
//       text: 'email',
//     },
//   ],
//   appendToSelector: '.cv-aside',
// });
