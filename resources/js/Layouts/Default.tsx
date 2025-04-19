import { Links, LinksList } from '@/types';
import { Head, Link } from '@inertiajs/react';
import navLinks from './Partials/Links';

function HeadSection() {
    return (
        <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <title>Laravel</title>
        </Head>
    );
}

function LogoSection() {
    return (
        <div className="flex max-w-max flex-col items-center p-2">
            <span id="logo">
                <img src="/logo.svg" alt="my logo" className="h-[2rem]" />
            </span>
            <span
                className="title font-delius text-2xl"
                aria-description="my slogan"
            >
                Reactive
            </span>
        </div>
    );
}

function NavBar({ navLinks, curPage }) {
    const links = navLinks.map((v) => {
        const highlight = v.href === curPage ? '#00000011' : '';
        return (
            <Link
                key={v.title}
                href={v.href}
                className="rounded-sm px-2 text-lg transition-all duration-300 hover:underline hover:shadow-inner"
                style={{ backgroundColor: highlight }}
            >
                {v.title}
            </Link>
        );
    });

    return <nav className="flex gap-2 pl-2">{links}</nav>;
}
function Header({ navLinks, curPage }) {
    return (
        <header className="flex h-[--header-height] bg-black/20 font-dosis">
            <div className="flex flex-1 items-center">
                <div className="flex flex-[0.5] flex-col justify-center">
                    <LogoSection />
                </div>
                <div className="flex-1 items-center">
                    <NavBar navLinks={navLinks} curPage={curPage} />
                </div>
            </div>
        </header>
    );
}

const DefaultLayout = function ({ children }) {
    const { href, title } = currentUriAndTitle(navLinks);

    return (
        <div className="page-content h-[calc(100vh-var(--header-height))] font-dosis">
            <HeadSection />
            <Header navLinks={navLinks} curPage={href} />
            <main className="px-2 font-dosis text-xl">
                <h1>
                    Hello from the <strong>{title}</strong> page!
                </h1>
                {children}
            </main>
        </div>
    );

    // Current page's URI and title
    function currentUriAndTitle(linksList: LinksList): Links {
        const uri = URL.parse(document.URL)?.pathname || '';
        const title = linksList.find((v) => v.href === uri)?.title || '';
        return { href: uri, title };
    }
};

export default DefaultLayout;
