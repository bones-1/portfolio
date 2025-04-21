import { useForm } from '@inertiajs/react';
import { ChangeEvent } from 'react';
import FileInput from '../Components/Subscription/FileInput';
import TextOrEmailInput from '../Components/Subscription/TextOrEmailInput';
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
    fName: '',
    lName: '',
    email: '',
    avatar: null,
};

export default function Create() {
    const { data, setData, post, progress, processing } = useForm<FormInputs>({
        ...initialValues,
    });
    // NOTE: usePage provides a url property. This can be used in the navigation section.

    return (
        <BackgroundPanel>
            {/* TODO: Create a Form and Submit Button component */}
            {/* TODO: Consider adding showErrors bool to inputs */}
            <form
                onSubmit={handleSubmit}
                method="post"
                className="mx-auto w-max border-[1px] border-solid border-neutral-600 p-2"
            >
                <TextOrEmailInput
                    title="First Name"
                    name="fName"
                    type="text"
                    changeHandler={handleChange}
                    value={data.fName}
                />
                <TextOrEmailInput
                    title="Last Name"
                    name="lName"
                    type="text"
                    changeHandler={handleChange}
                    value={data.lName}
                />
                <TextOrEmailInput
                    title="Email"
                    name="email"
                    type="email"
                    changeHandler={handleChange}
                    value={data.email}
                />
                <FileInput
                    title="Profile Picture"
                    name="avatar"
                    changeHandler={handleChange}
                    progress={progress}
                    accept="image/png, image/jpeg"
                />
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
