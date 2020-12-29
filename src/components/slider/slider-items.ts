export interface ProjectItem {
    title: string
    description: string
    technologies: string[]
    images: string[]
    url: string
    repoUrl: string
}

export const projectItems: ProjectItem[] = [
    {
        images: [
            'https://i.postimg.cc/g2mwYZz4/mars-rovers.png',
            'https://i.postimg.cc/T2bhg9hC/Screen-Shot-2020-09-16-at-11-48-59-PM.png',
            'https://i.postimg.cc/m2GkwHHR/Screen-Shot-2020-09-16-at-11-49-20-PM.png',
            'https://i.postimg.cc/Fz0Rv9w2/Screen-Shot-2020-09-16-at-11-50-12-PM.png',
            'https://i.postimg.cc/tCtTm436/Screen-Shot-2020-09-16-at-11-50-49-PM.png'
        ],
        url: 'http://ryasan86.github.io/mars_rovers',
        title: 'Mars Rover Image Browser',
        description:
            "A React frontend application that makes API calls to NASA's open API. This is a useful UI if you want to take a look at the latest photos that the mars rovers have to offer. You can find a D3 lines chart representing the number of photos taken by each rover by year. You can filter images by rover, date, and camera type. The UI comes with a custom built slider that can fully rotate both ways. NASA's open API is great and I plan to use it more on my free time :)",
        technologies: [
            'D3',
            'TypeScript',
            'SCSS',
            'REST',
            'NASA Open API',
            'React',
            'ParticlesJS'
        ],
        repoUrl: 'https://github.com/ryasan86/mars_rovers'
    },
    {
        images: [
            'https://i.postimg.cc/0rgH99NY/space-invaders.png',
            'https://i.postimg.cc/hPWyYQcZ/space-invaders.png'
        ],
        url: 'https://ryasan86.github.io/space_invaders_typescript/',
        title: 'Space Invaders',
        description:
            'Space Invader game built with good ol JavaScript, well TypeScript technically I guess. I always like to emphasized that building games is a great way to challenge yourself and improve on thought process and logic. I found myself using a few different patterns building this app, most notably the observer pattern and the decorator pattern. Go ahead and play a game or two.',
        technologies: ['TypeScript', 'SCSS'],
        repoUrl: 'https://github.com/ryasan86/space_invaders_typescript'
    },
    {
        images: [
            'https://i.postimg.cc/90K7mbKx/Screen-Shot-2020-10-02-at-6-54-32-PM-min.png',
            'https://i.postimg.cc/KjRThwqk/Screen-Shot-2020-10-02-at-6-55-35-PM-min.png',
            'https://i.postimg.cc/qRmKY4LH/Screen-Shot-2020-10-02-at-6-56-57-PM-min.png'
        ],
        url: 'https://notpinterest-next-prod.herokuapp.com',
        title: 'Fullstack Foodies Pinterest for Recipes!',
        description:
            "I had originally planned to make a full stack Pinterest clone but decided to pivot into making a recipe sharing app half way through for some odd reason. Hence the Pinterest like grid for the photos of dishes :) I decided to use NextJS and go NoSQL with MongoDB for this application's data store. I became a believer in server side rendering after making this. SSR frameworks like NextJS and Gatsby have amazing performance. If speed of that initial paint on screen is paramount, these frameworks are definitely the way to go.",
        technologies: [
            'MongoDB',
            'NextJS',
            'GraphQL',
            'Express',
            'JWT',
            'Bcrypt',
            'MLab',
            'Heroku'
        ],
        repoUrl: 'https://github.com/ryasan86/foodies'
    },
    {
        images: [
            'https://i.postimg.cc/26Dp6h1H/Screen-Shot-2020-09-23-at-11-08-28-PM.png',
            'https://i.postimg.cc/wvcCsMJ9/Screen-Shot-2020-09-23-at-11-08-10-PM.png'
        ],
        url: 'http://ryasan86.github.io/react_pizza_builder',
        title: 'Mr. Pizza Builder',
        description: "Mr. Pizza was made with create-react-app. All animations and styling are custom with a neumorphic flavor. I used Tailwind CSS here which is great, but there are some downsides when using it compared to your conventional CSS or CSS in JS. That separation of concern when you have individual JS and CSS files is no longer a benefit.  However, I like how convenient it is to just inject styles with easy to remember utility class names. Other benefits include eliminating specificity issues and self explanatory markup. ", // prettier-ignore
        technologies: [
            'TailWind CSS',
            'SVG',
            'Gh-Pages',
            'Normalize.css',
            'TypeScript',
            'React',
            'SCSS'
        ],
        repoUrl: 'https://github.com/ryasan86/react_pizza_builder'
    },
    {
        images: [
            'https://i.postimg.cc/xTbQrn9C/landing.png',
            'https://i.postimg.cc/W1LvTC47/photos.png'
        ],
        url: 'https://ryasan86.github.io/daewon',
        title: 'Daewon Song Skater Bio',
        description:
            "Portfolio of one my favorite skaters, Daewon Song. He's local to where I'm from and I would often see him at the same skate spots I used to go to. He's been such a big inspiration as a skater and as a human being to me. But I digress. This is a tiny portfolio I created in his name and honor. I don't use Jquery as much as I used to but I did this time for old time's sake.",
        technologies: ['Jquery', 'SCSS', 'Bootstrap 4', 'AOS'],
        repoUrl: 'https://github.com/ryasan86/daewon'
    },
    {
        images: [
            'https://i.postimg.cc/wvGxLtdK/e-s.png',
            'https://i.postimg.cc/dQhrXr3y/Screen-Shot-2020-09-16-at-11-39-39-PM.png',
            'https://i.postimg.cc/yWqVpwdv/Screen-Shot-2020-09-16-at-11-41-37-PM.png',
            'https://i.postimg.cc/BbPSgqqj/Screen-Shot-2020-09-16-at-11-40-35-PM.png',
            'https://i.postimg.cc/2jghfyLX/Screen-Shot-2020-09-16-at-11-42-09-PM.png'
        ],
        url: 'https://vibrant-leavitt-7a3709.netlify.app',
        title: 'E & S Streetwear Fullstack Ecommerce Shop',
        description: "E & S is a fullstack ecommerce application that has everything from front to back, the whole enchilada. E & S Streetwear utilizes a GraphQL-Yoga server which is coupled with a Prisma DB to perform all your CRUD operations. Some of the features include a back office component responsible for editing products/user permissions, Stripe payment gateway, live search as you type autocomplete search bar, multilevel products dropdown, cookie based authentication using JWTs, and much more!", // prettier-ignore
        technologies: [
            'Gatsby',
            'Framer Motion',
            'Mailtrap',
            'Stripe',
            'Cloudinary',
            'GraphQL',
            'GraphQL Yoga Express',
            'Prisma',
            'Downshift',
            'Netlify',
            'Heroku',
            'React'
        ],
        repoUrl: 'https://github.com/ryasan86/fashion_shop'
    },
    {
        images: [
            'https://i.postimg.cc/vTY7gNM2/marvel-collections.png',
            'https://i.postimg.cc/zBSSfrmR/Screen-Shot-2020-09-16-at-11-07-36-PM.png',
            'https://i.postimg.cc/63NfwQPX/Screen-Shot-2020-09-16-at-11-06-10-PM.png',
            'https://i.postimg.cc/N0XkWXpD/Screen-Shot-2020-09-16-at-11-08-39-PM.png',
            'https://i.postimg.cc/dVp9H6mD/Screen-Shot-2020-09-16-at-11-08-57-PM.png'
        ],
        url: 'https://elegant-snyder-2d0543.netlify.app',
        title: 'Marvel Collections Price Scraper',
        description:
            'Marvel Collections was a full stack project that employed Express, React, and some light GraphQL to take care of backend queries and frontend caching. I used Puppeteer to scrape price information about available comics and online locations of where they could be purchased. Search for you favorite superhero comic book!',
        technologies: [
            'React',
            'GraphQL',
            'Gatsby',
            'Styled Components',
            'Puppeteer',
            'Netlify',
            'Apollo'
        ],
        repoUrl: 'https://github.com/ryasan86/marvel_collections'
    },
    {
        images: [
            'https://i.postimg.cc/fRRw2jT4/simon-says-2.png',
            'https://i.postimg.cc/BvyQ1L0r/Screen-Shot-2020-09-17-at-12-02-09-AM.png',
            'https://i.postimg.cc/rmryGVyK/Screen-Shot-2020-09-17-at-12-02-16-AM.png'
        ],
        url: 'https://ryasan86.github.io/simon',
        title: 'Simon Says Game',
        description:
            "I like building mini games when I can. You run into interesting problems and can get a lot out of it. I feel like building a Simon Says game lends itself to a better understanding of asynchronous operations. I had initially used Redux to keep track of state. After React released the useReducer hook I decided to swap out Redux. The new hook is based on the same reducer pattern as Redux and you'll notice similarities such as the use of pure functions and dispatching of actions to manipulate state.",
        technologies: [
            'TypeScript',
            'Styled Components',
            'Redux',
            'Redux-Thunk',
            'Lodash'
        ],
        repoUrl: 'https://github.com/ryasan86/simon'
    }
]
