import { FormInputs, InputChangeEvent } from '@/types';
import { useForm } from '@inertiajs/react';
import FileInput from './FileInput';
import TextOrEmailInput from './TextOrEmailInput';

type SubscribeFormType = {
    state: FormInputs;
};

const initialValues: FormInputs = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
};

const SubscribeForm = ({ state }: SubscribeFormType) => {
    const { setData, post, progress, processing } = useForm<FormInputs>({
        ...initialValues,
    });

    // [] create useReducer and useContext for events
    // [] introduce a errors event or another third event
    function handleChange(event: InputChangeEvent) {
        const { name, type, files, value } = event.target;

        // Update form data
        setData(name, type === 'file' && files ? files : value);

        // Dispatch reduce actions
        dispatch({
            event: 'changed',
            type,
            name,
            files,
            value,
        });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/projects/subscription', {
            onSuccess: () =>
                dispatch({
                    event: 'submitted',
                    value: initialValues,
                }),
        });
    }

    return (
        <>
            {/* TODO: Create a Form and Submit Button component */}
            {/* TODO: Consider adding showErrors bool to inputs */}
            <form
                onSubmit={handleSubmit}
                method="post"
                name="subscribe"
                className="mx-auto w-max border-[1px] border-solid border-neutral-600 p-2"
            >
                <TextOrEmailInput
                    title="First Name"
                    name="firstName"
                    type="text"
                    changeHandler={handleChange}
                    value={state.firstName}
                />
                <TextOrEmailInput
                    title="Last Name"
                    name="lastName"
                    type="text"
                    changeHandler={handleChange}
                    value={state.lastName}
                />
                <TextOrEmailInput
                    title="Email"
                    name="email"
                    type="email"
                    changeHandler={handleChange}
                    value={state.email}
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
                    value={processing ? 'Submitting...' : 'SUBSCRIBE!'}
                    className="mx-auto block rounded border-[1px] border-solid border-slate-400 bg-blue-300/80 px-2 hover:cursor-pointer disabled:bg-blue-300/40"
                />
            </form>
        </>
    );
};

export default SubscribeForm;
