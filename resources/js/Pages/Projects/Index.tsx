import ProjectCard from './Components/Market/ProjectCard';
import { TopBar } from './Components/Market/TopBar';

function MainScreen({ children }) {
    return (
        <div className="mx-auto mt-2 h-[40rem] w-[30ch] rounded-lg bg-green-200 text-white outline-4 outline-black [outline-style:ridge]">
            {children}
        </div>
    );
}

function ContentArea({ children }) {
    return (
        <div className="h-[calc(100%-var(--top-bar-height))] border-[1px] border-blue-600 text-black">
            {children}
        </div>
    );
}

export default function Projects() {
    return (
        <MainScreen>
            <TopBar />
            <ContentArea>
                <div className="h-[45%] w-full border-[1px] border-red-500">
                    [Widget Area]
                </div>
                <div className="projects-block grid grid-flow-col justify-around">
                    {/* Automatically polulate these later on */}
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <ul>
                    Todo:
                    <li>Create Projects cards</li>
                    <li>Make digital clock tick via colon</li>
                    <li>Projects should be scrollable</li>
                    <li>
                        Replace notification icon with a more pronounced one
                    </li>
                </ul>
            </ContentArea>
        </MainScreen>
    );
}
