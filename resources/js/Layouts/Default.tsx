import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import NavLinks, { LinksList } from './Partials/Links';

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
        <header className="flex h-[7rem] bg-black/20 font-dosis">
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

const DefaultLayout = function ({ children }: PropsWithChildren) {
    const links: LinksList[] = NavLinks;
    const currentPage: string = URL.parse(document.baseURI)?.pathname || '';
    const title: string =
        links.filter((v) => v.href === currentPage)[0]?.title || '';

    return (
        <>
            <HeadSection />
            <Header navLinks={links} curPage={currentPage} />
            <main className="mx-2 mt-2 font-dosis text-xl">
                <h1>
                    Hello from the <strong>{title}</strong> page!
                </h1>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;
