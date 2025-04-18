function Screen() {
    const time = new Date().toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    });
    // console.count('time:');
    // setInterval(()=> setTime(`00:00`), 3000);
    return (
        <div className="flex h-10 w-full flex-auto items-center justify-between bg-black px-2">
            <div className="flex gap-x-1">
                <span className="text-sm">{time}</span>
                <span className="size-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 250 312.5"
                        x="0px"
                        y="0px"
                        fill="#FFFFFF"
                    >
                        <title>Android System</title>
                        <path d="M125,229.78a19.24,19.24,0,0,1-19.22-19.22c0-.18,0-.38,0-.56l.12-2,2,.1a336.71,336.71,0,0,0,34.22,0l2-.1.12,2c0,.18,0,.38,0,.56A19.24,19.24,0,0,1,125,229.78Zm-15.13-17.56a15.22,15.22,0,0,0,30.26,0C130.23,212.67,119.77,212.67,109.87,212.22Z" />
                        <path d="M193.91,172.48,81.55,60.13l1.37-1.41.92-.94A58.05,58.05,0,0,1,111.4,42.33V33.81a13.6,13.6,0,0,1,23.22-9.6,13.46,13.46,0,0,1,4,9.6v8.52a58.43,58.43,0,0,1,44.6,56.6V121.1c0,9.21,3,24.4,8.57,44ZM87.18,60.1l98.71,98.71c-4.44-16.55-6.69-29.21-6.69-37.71V98.93a54.39,54.39,0,0,0-43-53l-1.59-.34V33.81a9.61,9.61,0,0,0-9.6-9.59,9.61,9.61,0,0,0-9.6,9.59V45.55l-1.59.34A54.12,54.12,0,0,0,87.18,60.1Z" />
                        <path d="M125,212.56c-5.9,0-11.72-.15-17.32-.44C80.59,210.71,49,205.25,49,194.5a6.14,6.14,0,0,1,1-3.33c3-8.73,16.8-50,16.8-70.07V98.93a58.17,58.17,0,0,1,2.91-18.21L43.35,54.36a7.79,7.79,0,0,1,11-11L206.65,195.64a7.79,7.79,0,0,1-11,11l-3.28-3.28c-9.91,4.38-28.41,7.63-50,8.75C136.72,212.41,130.9,212.56,125,212.56ZM48.85,45.07a3.78,3.78,0,0,0-2.67,6.46L74.31,79.67l-.42,1.19A54.08,54.08,0,0,0,70.8,98.93V121.1c0,20.38-13.09,60-17.1,71.61l-.09.26-.15.22a2.35,2.35,0,0,0-.5,1.31c0,4.34,17.46,11.68,54.92,13.62a336.91,336.91,0,0,0,34.23,0c22.11-1.14,40.72-4.49,49.79-9l1.28-.63,5.29,5.28a3.78,3.78,0,0,0,5.35-5.35L51.53,46.18A3.78,3.78,0,0,0,48.85,45.07Z" />
                        <text
                            x="0"
                            y="265"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by Mustofa Bayu
                        </text>
                        <text
                            x="0"
                            y="270"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            from the Noun Project
                        </text>
                    </svg>
                </span>
            </div>
            <div className="relative box-border size-7 rounded-[50%] border-4 border-white/60 bg-black">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="size-2 rounded-[50%] bg-white/30"></div>
                </div>
                <div className="absolute left-1 top-1 size-[2.5px] rounded-[50%] bg-white/80"></div>
                <div className="absolute left-[60%] top-[60%] size-1.5 rounded-[50%] bg-white/90"></div>
            </div>
            <div className="flex items-center gap-x-0.5">
                <span className="size-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 250 312.5"
                        x="0px"
                        y="0px"
                        fill="#FFFFFF"
                    >
                        <title>Android System</title>
                        <path d="M50.51,177.75a1.35,1.35,0,0,0-1.35,1.35v21.38a1.36,1.36,0,0,0,1.35,1.35H66.1a1.36,1.36,0,0,0,1.35-1.35V179.1a1.35,1.35,0,0,0-1.35-1.35Z" />
                        <path d="M95.08,133.75a1.35,1.35,0,0,0-1.35,1.35v65.38a1.36,1.36,0,0,0,1.35,1.35h15.59a1.35,1.35,0,0,0,1.35-1.35V135.1a1.34,1.34,0,0,0-1.35-1.35Z" />
                        <path d="M139.52,92a1.35,1.35,0,0,0-1.35,1.35V200.48a1.36,1.36,0,0,0,1.35,1.35h15.59a1.36,1.36,0,0,0,1.35-1.35V93.3A1.35,1.35,0,0,0,155.11,92Z" />
                        <path d="M183.9,49.05a1.35,1.35,0,0,0-1.35,1.35V200.48a1.36,1.36,0,0,0,1.35,1.35h15.59a1.36,1.36,0,0,0,1.35-1.35V50.4a1.35,1.35,0,0,0-1.35-1.35Z" />
                        <text
                            x="0"
                            y="265"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by Mustofa Bayu
                        </text>
                        <text
                            x="0"
                            y="270"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            from the Noun Project
                        </text>
                    </svg>
                </span>
                <span className="size-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 250 312.5"
                        x="0px"
                        y="0px"
                        fill="#FFFFFF"
                    >
                        <title>Android System</title>
                        <path d="M125,167.61a12.23,12.23,0,1,0,8.65,3.58A12.17,12.17,0,0,0,125,167.61Z" />
                        <path d="M84.14,144.42l0,0L82.53,146a6.16,6.16,0,0,0,8.71,8.7l.12-.13,1.41-1.5.08.08a47.79,47.79,0,0,1,66.07,1.39,6.16,6.16,0,0,0,8.71-8.71,60,60,0,0,0-83.49-1.39Z" />
                        <path d="M125,105.14a83.15,83.15,0,0,1,59,24.39,6.11,6.11,0,1,0,8.64-8.63,95.73,95.73,0,0,0-135.24,0A6.11,6.11,0,0,0,66,129.53,83.15,83.15,0,0,1,125,105.14Z" />
                        <path d="M125,70.25A118.3,118.3,0,0,1,208.92,105a5.69,5.69,0,1,0,8.05-8A130.2,130.2,0,0,0,33,96.9a5.7,5.7,0,0,0,0,8,5.69,5.69,0,0,0,8,0A118.3,118.3,0,0,1,125,70.25Z" />
                        <text
                            x="0"
                            y="265"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by Mustofa Bayu
                        </text>
                        <text
                            x="0"
                            y="270"
                            fill="none"
                            font-size="5px"
                            font-weight="bold"
                            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            from the Noun Project
                        </text>
                    </svg>
                </span>
                <span className="size-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="-5.0 -10.0 110.0 135.0"
                        fill="#FFFFFF"
                    >
                        <path
                            d="m41.566 73.609h-29.461c-4.3125 0-7.8086-3.4961-7.8086-7.8086v-31.629c0-4.3125 3.4961-7.8086 7.8086-7.8086h29.699l-1.832 3.9062h-27.867c-2.1562 0-3.9062 1.75-3.9062 3.9062v31.629c0 2.1562 1.75 3.9062 3.9062 3.9062h29.461v3.9062zm10.586-47.25h29.461c4.3125 0 7.8086 3.4961 7.8086 7.8086v31.629c0 4.3125-3.4961 7.8086-7.8086 7.8086h-29.699l1.832-3.9062h27.867c2.1562 0 3.9062-1.75 3.9062-3.9062v-31.629c0-2.1562-1.75-3.9062-3.9062-3.9062h-29.461v-3.9062zm39.617 14.254c0-1.0781 0.875-1.9531 1.9531-1.9531s1.9531 0.875 1.9531 1.9531v18.746c0 1.0781-0.875 1.9531-1.9531 1.9531s-1.9531-0.875-1.9531-1.9531zm-50.199 26.164h-29.461c-0.25781 0-0.50781-0.10156-0.69141-0.28516-0.18359-0.18359-0.28516-0.42969-0.28516-0.69141v-31.629c0-0.25781 0.10156-0.50781 0.28516-0.69141 0.18359-0.18359 0.42969-0.28516 0.69141-0.28516h26.496l-9.0234 19.234c-0.625 1.332-0.52344 2.8867 0.26172 4.1289 0.78906 1.2422 2.1562 1.9922 3.625 1.9922h8.1016v8.2305zm3.9062-12.133h-12.008c-0.13281 0-0.25781-0.066406-0.32812-0.17969-0.070313-0.11328-0.082031-0.25391-0.023437-0.375l14.391-30.68c0.078126-0.16406 0.26172-0.25391 0.4375-0.21484 0.17969 0.039063 0.30469 0.19922 0.30469 0.38281v21.754h12.008c0.13281 0 0.25781 0.066407 0.32813 0.17969 0.070312 0.11328 0.082031 0.25391 0.023437 0.375l-14.391 30.68c-0.078125 0.16406-0.26172 0.25391-0.4375 0.21484-0.17969-0.039062-0.30469-0.19922-0.30469-0.38281z"
                            fill-rule="evenodd"
                        />
                        <text
                            x="0.0"
                            y="117.5"
                            font-size="5.0"
                            font-weight="bold"
                            font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                            fill="none"
                        >
                            by Muhammad Nur Auliady Pamungkas
                        </text>
                        <text
                            x="0.0"
                            y="122.5"
                            font-size="5.0"
                            font-weight="bold"
                            font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                            fill="none"
                        >
                            from Noun Project
                        </text>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="mx-auto mt-2 h-[40rem] w-[30ch] rounded-lg bg-green-200 text-white outline-4 outline-black [outline-style:ridge]">
            <Screen />
            <div className="cursor-pointer text-black">
                <ul>
                    Todo:
                    <li>Create Projects cards</li>
                    <li>Make digital clock tick via colon</li>
                    <li>Projects should be scrollable</li>
                    <li>
                        Replace notification icon with a more pronounced one
                    </li>
                </ul>
            </div>
        </div>
    );
}
