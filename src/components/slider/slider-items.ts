export interface ProjectItem {
    title: string
    image: string
    description: string
    technologies: string[]
    images: string[]
}

const description = 'Marvel Collections was a full stack project employing Express, React, and some light GraphQL to take care of backend queries and frontend caching. I used Puppeteer to collect price information about available comics.' // prettier-ignore
const technologies = [
    'graphql',
    'redux',
    'gatsby',
    'styled components',
    'puppeteer',
    'netlify',
    'heroku'
]
const images = [
    'https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/flagged/photo-1501421018470-faf26f6b1bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1549998724-03a9e93f22f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2680&q=80',
    'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
]

export const projectItems: ProjectItem[] = [
    {
        image: require('../../static/slider/notpinterest.png'),
        images: [require('../../static/slider/notpinterest.png'), ...images],
        title: 'Notpinterest Clone',
        description,
        technologies
    },
    {
        image: require('../../static/slider/mars-rovers.png'),
        images: [require('../../static/slider/mars-rovers.png'), ...images],
        title: 'Mars Rover Image Browser',
        description,
        technologies
    },
    {
        image: require('../../static/slider/e&s.png'),
        images: [require('../../static/slider/e&s.png'), ...images],
        title: 'E & S Streetwear Ecommerce Shop',
        description,
        technologies
    },
    {
        image: require('../../static/slider/marvel-collections.png'),
        images: [
            require('../../static/slider/marvel-collections.png'),
            ...images
        ],
        title: 'Marvel Collections Price Scraper',
        description,
        technologies
    },
    {
        image: require('../../static/slider/simon-says-2.png'),
        images: [require('../../static/slider/simon-says-2.png'), ...images],
        title: 'Simon Says Game',
        description,
        technologies
    },
    {
        image: require('../../static/slider/marvel-collections.png'),
        images: [
            require('../../static/slider/marvel-collections.png'),
            ...images
        ],
        title: 'Marvel Collections',
        description,
        technologies
    },
    {
        image: require('../../static/slider/e&s.png'),
        images: [require('../../static/slider/e&s.png'), ...images],
        title: 'E & S',
        description,
        technologies
    }
]
