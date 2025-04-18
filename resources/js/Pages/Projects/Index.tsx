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
            <div className="flex items-center gap-x-1">
                <span className="text-sm">{time}</span>
                <span className="size-[1.20rem]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 80"
                        x="0px"
                        y="0px"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                        strokeWidth={1.3}
                    >
                        <title>1</title>
                        <path d="M41.63443,50.71813c-8.0459.0088-21.03474-.00645-29.18792,0a1.11486,1.11486,0,0,1,.00006-2.22933,5.236,5.236,0,0,0,5.22956-5.23012V25.3c.03525-.78853.1978-1.87152-.86861-1.98615C15.68415,23.236,15.63877,24.47341,15.67636,25.3l-.00006,17.9587a3.23353,3.23353,0,0,1-3.22979,3.23023,3.1145,3.1145,0,0,0,0,6.229l13.89543.00006a5.22093,5.22093,0,0,0,10.24947,0h5.043A1.00012,1.00012,0,0,0,41.63443,50.71813ZM31.46667,54.94141A3.21964,3.21964,0,0,1,28.416,52.718H34.5174A3.21965,3.21965,0,0,1,31.46667,54.94141Z" />
                        <path d="M20.757,16.6248c8.08343-10.05388,24.50144-4.22055,24.49676,8.67537l.00006,17.95851a5.259,5.259,0,0,0,5.23012,5.23,1.11731,1.11731,0,0,1,.75866,1.92761,1.0004,1.0004,0,0,0,1.36232,1.46473,3.12871,3.12871,0,0,0,.07551-4.47912,3.08673,3.08673,0,0,0-2.19655-.913,3.25,3.25,0,0,1-3.23023-3.2303V25.3A15.8136,15.8136,0,0,0,34.59493,9.825a3.75168,3.75168,0,1,0-6.259-.00487A15.67535,15.67535,0,0,0,20.298,14.1338c-.59637.645-1.98261,1.758-.9462,2.64823A.99974.99974,0,0,0,20.757,16.6248ZM31.46667,6.00158a1.75493,1.75493,0,0,1-.00006,3.50949A1.75493,1.75493,0,0,1,31.46667,6.00158Z" />
                        <path d="M54.39325,58.325,12.13212,11.83807a1.00015,1.00015,0,0,0-1.47935,1.34567L52.91384,59.67061A1.00013,1.00013,0,0,0,54.39325,58.325Z" />
                        <text
                            x="0"
                            y="79"
                            fill="none"
                            stroke="none"
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by yuswita amieliana dewi
                        </text>
                        <text
                            x="0"
                            y="84"
                            fill="none"
                            stroke="none"
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            from the Noun Project
                        </text>
                    </svg>
                </span>
            </div>
            <div className="relative box-border size-7 rounded-full border-4 border-white/30 bg-black">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex size-2 items-center justify-center rounded-full bg-white/10 [box-shadow:inset_0_0_1px_0_#999999bb]">
                        <div className="size-[0.07rem] rounded-full bg-black/80"></div>
                    </div>
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
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by Mustofa Bayu
                        </text>
                        <text
                            x="0"
                            y="270"
                            fill="none"
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
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
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                        >
                            Created by Mustofa Bayu
                        </text>
                        <text
                            x="0"
                            y="270"
                            fill="none"
                            fontSize="5px"
                            fontWeight="bold"
                            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
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
                            fillRule="evenodd"
                        />
                        <text
                            x="0.0"
                            y="117.5"
                            fontSize="5.0"
                            fontWeight="bold"
                            fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                            fill="none"
                        >
                            by Muhammad Nur Auliady Pamungkas
                        </text>
                        <text
                            x="0.0"
                            y="122.5"
                            fontSize="5.0"
                            fontWeight="bold"
                            fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
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
