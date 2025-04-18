import { useForm } from '@inertiajs/react';
import { ChangeEvent } from 'react';
import BackgroundPanel from '../Partials/BackgroundPanel';

type FormInputs = {
    fName: string;
    lName: string;
    email: string;
    avatar: Blob[] | null;
};

type InputChangeEvent = ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement & {
        files: Blob[] | null;
        name: keyof FormInputs;
    };
};

const initialValues: FormInputs = {
    fName: 'John',
    lName: 'Doe',
    email: 'email@example.com',
    avatar: null,
};

export default function Create() {
    const { data, setData, post, progress, processing } = useForm<FormInputs>({
        ...initialValues,
    });

    function handleChange(event: InputChangeEvent) {
        const { name, type, files, value } = event.target;

        if (type === 'file' && files) {
            setData(name, files);
            return;
        }

        setData(name, value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/projects/subscription');
    }

    return (
        <BackgroundPanel>
            <form
                onSubmit={handleSubmit}
                method="post"
                className="mx-auto w-max border-[1px] border-solid border-neutral-600 p-2"
            >
                <label
                    htmlFor="fName"
                    className="inline-block w-[12ch] text-left"
                >
                    First Name:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="fName"
                    id="fName"
                    className="mb-5 ml-1 inline-block w-[15rem]"
                />
                <br />
                <label
                    htmlFor="lName"
                    className="inline-block w-[12ch] text-left"
                >
                    Last Name:
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="lName"
                    id="lName"
                    className="mb-5 ml-1 inline-block w-[15rem]"
                />
                <br />
                <label
                    htmlFor="email"
                    className="inline-block w-[12ch] text-left"
                >
                    Email:
                </label>
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="mb-5 ml-1 inline-block w-[15rem]"
                />
                <br />
                <label
                    htmlFor="avatar"
                    className="inline-block w-[12ch] text-left"
                >
                    Picture:
                </label>
                <input
                    onChange={handleChange}
                    type="file"
                    multiple={true}
                    name="avatar"
                    id="avatar"
                    className="mb-5 ml-1 inline-block w-[15rem] text-[0.9rem]"
                />
                <br />
                {progress && (
                    <progress
                        value={progress.percentage}
                        max="100"
                        className="mx-auto"
                    >
                        {progress.percentage}%
                    </progress>
                )}
                <input
                    disabled={processing}
                    type="submit"
                    value="SUBSCRIBE!"
                    className="mx-auto block rounded border-[1px] border-solid border-slate-400 bg-blue-300/80 px-2 hover:cursor-pointer"
                />
                <ShowText text={data.fName + ' ' + data.lName} />
            </form>
        </BackgroundPanel>
    );
}

function ShowText({ text }: { text: string }) {
    return (
        <textarea
            name="test"
            id="test"
            value={text}
            disabled
            className="mx-auto mt-3 block w-[40ch] resize-none border-0 bg-gray-200"
        ></textarea>
    );
}
