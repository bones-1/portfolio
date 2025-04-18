import { LinksList } from '@/types';

const projects: LinksList[] = [
    { href: '/projects/market', title: 'Market' },
    { href: '/projects/subscription', title: 'Subscribe' },
];

const NavLinks = [
    { href: '/', title: 'Home' },
    { href: '/projects', title: 'Projects', projects },
];

export default NavLinks;
