import { PropsWithChildren } from 'react';

export default function BackgroundPanel({ children }: PropsWithChildren) {
    return (
        <div className="mt-1 h-full w-full bg-gray-100 p-3 pb-5">
            {children}
        </div>
    );
}
