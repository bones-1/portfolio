import '../css/app.css';
import './bootstrap';
import DefaultLayout from './Layouts/Default';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        const page =
            pages[`./Pages/${name}.tsx`] || pages[`./Pages/*/${name}.tsx`];

        page.default.layout =
            page.default.layout ||
            ((page) => <DefaultLayout>{page}</DefaultLayout>);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
