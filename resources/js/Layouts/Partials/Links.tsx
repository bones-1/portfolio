import { LinksList } from '@/types';

const projects: LinksList = [
    { href: '/projects/market', title: 'Market' },
    { href: '/projects/subscription', title: 'Subscribe' },
];

const navLinks: LinksList = [
    { href: '/', title: 'Home' },
    { href: '/projects', title: 'Projects', subList: projects },
];

export default navLinks;
