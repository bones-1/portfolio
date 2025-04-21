import { Links } from '@/types';

type ProjectCardArgs = Links & {
    src: string;
    alt: string;
};

const ProjectCard = ({
    href,
    title = '[Long Text]',
    src = '/images/demo_icon.png',
    alt = 'Demo image',
}: ProjectCardArgs) => {
    return (
        <a href={href} className="inline-block">
            <div className="flex h-max max-w-[4.35rem] flex-1 flex-col items-center justify-between bg-white">
                <div className="size-[3.75rem] overflow-hidden rounded-xl bg-gray-400">
                    <img src={src} alt={alt} className="w-full" />
                </div>
                <span className="w-full hyphens-auto break-words bg-pink-200 text-center text-sm">
                    {title}
                </span>
            </div>
        </a>
    );
};

export default ProjectCard;
