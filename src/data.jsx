import {GiBrainstorm, GiCompass} from 'react-icons/gi'
import {SiOpenaigym,SiPowershell} from 'react-icons/si'
import {SiThealgorithms, SiBackendless} from 'react-icons/si'
import { FaDatabase } from "react-icons/fa6";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";





export const links = [
    {
        name1: "Home",
        path: '/'
    },
    {
        name1: "About",
        path: '/about'
    },
    {
        name1: "Plans",
        path: '/plans'
    },
    {
        name1: "Community",
        path: '/community'
    }
]
export const programs = [
    {
        id: 1,
        icon: <GiCompass/>,
        title: "Web Explorers",
        info: "Crafting Pixels, Shaping Experiences: Our Front-End Wonderland Awaits!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiThealgorithms/>,
        title: "Algorithmic Invaders",
        info: "Mastering Algorithms: Join Our Code of Problem Solvers!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiBackendless/>,
        title: "Backend Bulls",
        info: "Fueling the Digital Backbone: Join Our Backend Community!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <GiBrainstorm/>,
        title: "Deep Thinkers",
        info: "Exploring AI Horizons Together: Welcome to Our Neural Network!",
        path: "/programs/444"
    }
]
export const programs1 = [
    {
        id: 1,
        icon: <GiCompass/>,
        title: "Web Explorers",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiThealgorithms/>,
        title: "Algorithmic Invaders",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiBackendless/>,
        title: "Backend Bulls",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <GiBrainstorm/>,
        title: "Deep Thinkers",
        path: "/programs/444"
    },
    {
        id: 5,
        icon: <FaDatabase/>,
        title: "Data Pirates",
        path: "/programs/111"
    },
    {
        id: 6,
        icon: <IoSearchCircle/>,
        title: "Seo specialists",
        path: "/programs/222"
    },
    {
        id: 7,
        icon: <MdOutlinePhoneIphone/>,
        title: "App Gods",
        path: "/programs/333"
    },
    {
        id: 8,
        icon: <SiPowershell />,
        title: "Shell Kings",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Greedy Algorithms",
        desc: "Learn Greedy algorithms"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Trees",
        desc: "Practice Trees"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Linked Lists",
        desc: "Links are important"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Graphs",
        desc: "DFS at your fingertips"
    }
    ]

















export const faqs = [
    {
        id: 1,
        question: "How often should I code?",
        answer: "It all starts with doing it regularly, start with 40 mins everyday"
    },
    {
        id: 2,
        question: "What time of day is best to code?",
        answer: "Flexible and varies on Person"
    },
    {
        id: 3,
        question: "How long should my coding session be?",
        answer: "Focus on collaborations that help you learn and pay less focus to the time spent in sessions"
    },
    {
        id: 4,
        question: "Do I need to revise up before my daily practice?",
        answer: "Revising a topic is highly advised"
    },
    {
        id: 5,
        question: "Should I do DSA, Web Dev or both?",
        answer: "Take turns , alertnate and learn both"
    },
    {
        id: 6,
        question: "Should I learn algorithms from scratch?",
        answer: "It's never to late so yeah"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Sohail Khan",
        quote: "I mean, coding together? Genius move! It's not just about sharing lines of code; it's about creating a virtual hangout where we can all learn from each other. That's some next-level community building.",
        job: "Student",
        avatar: "src/assets/images/c5.jpeg"
    },
    {
        id: 2,
        name: "Milind Verma",
        quote: "It's not just eye candy though; it's clear there's some serious thought behind making it user-friendly for everyone, from coding newbies to the seasoned pros.",
        job: "Student",
        avatar:"src/assets/images/c2.jpeg"
    },
    {
        id: 3,
        name: "Iti Shree",
        quote: "The React-driven webpage was a breeze to navigate, making learning an enjoyable journey. Collaborating within its online coding community amplified my skills and network.",
        job: "Student",
        avatar: "src/assets/images/c1.webp"
    },
    {
        id: 4,
        name: "Grace Smith",
        quote: "Its sleek React UI made learning coding a delight. The collaborative space nurtured creativity, enabling us to build and share while fostering a supportive coding community.",
        job: "Student",
        avatar: "src/assets/images/c3.jpeg"
    },
    {
        id: 5,
        name: "Karan Raj",
        quote: "Learning to code became engaging with its user-friendly design. Connecting with fellow enthusiasts elevated the experience to a thriving community.",
        job: "Student",
        avatar: "src/assets/images/c6.jpeg"
    }
]







export const plans = [
    {
        id: 1,
        name1: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'HTML Basics', available: true},
            {feature: 'CSS King', available: true},
            {feature: 'JS Essentials', available: true},
            {feature: 'React', available: true},
            {feature: 'Redux', available: true},
            {feature: 'Node', available: false},
            {feature: 'Express', available: false},
            {feature: 'ML', available: false},
            {feature: 'Deep Learning', available: false},
            {feature: 'Mongo', available: false},
            {feature: 'Django', available: false},
            {feature: 'Python', available: false},
            {feature: 'Blockchain', available: false}
        ]
    },
    {
        id: 2,
        name1: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'HTML Basics', available: true},
            {feature: 'CSS King', available: true},
            {feature: 'JS Essentials', available: true},
            {feature: 'React', available: true},
            {feature: 'Redux', available: true},
            {feature: 'Node', available: true},
            {feature: 'Express', available: true},
            {feature: 'ML', available: true},
            {feature: 'Deep Learning', available: true},
            {feature: 'Mongo', available: false},
            {feature: 'Django', available: false},
            {feature: 'Python', available: false},
            {feature: 'Blockchain', available: false}
        ]
    },
    {
        id: 3,
        name1: 'Platinum Package',
        desc: 'This package is perfect for busy people who need editing and debugging',
        price: 89.99,
        features: [
            {feature: 'HTML Basics', available: true},
            {feature: 'CSS King', available: true},
            {feature: 'JS Essentials', available: true},
            {feature: 'React', available: true},
            {feature: 'Redux', available: true},
            {feature: 'Node', available: true},
            {feature: 'Express', available: true},
            {feature: 'ML', available: true},
            {feature: 'Deep Learning', available: true},
            {feature: 'Mongo', available: true},
            {feature: 'Django', available: true},
            {feature: 'Python', available: true},
            {feature: 'Blockchain', available: true}
        ]
    }
]









const Trainer1 = './images/trainer1.jpg'
const Trainer2 = './images/trainer2.jpg'
const Trainer3 = './images/trainer3.jpg'
const Trainer4 = './images/trainer4.jpg'
const Trainer5 = './images/trainer5.jpg'
const Trainer6 = './images/trainer6.jpg'


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]