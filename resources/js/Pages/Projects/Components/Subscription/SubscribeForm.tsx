import { AxiosProgressEvent } from 'axios';
import { ChangeEventHandler } from 'react';
import { FormInputs } from '../../Subscription/Create';
import FileInput from './FileInput';
import TextOrEmailInput from './TextOrEmailInput';

type SubscribeFormType = {
    submitHandler: React.FormEventHandler<HTMLFormElement>;
    changeHandler: ChangeEventHandler;
    state: FormInputs;
    processing: boolean;
    progress: AxiosProgressEvent | null;
};

const SubscribeForm = ({
    submitHandler,
    changeHandler,
    progress,
    processing,
    state,
}: SubscribeFormType) => {
    return (
        <>
            {/* TODO: Create a Form and Submit Button component */}
            {/* TODO: Consider adding showErrors bool to inputs */}
            <form
                onSubmit={submitHandler}
                method="post"
                name="subscribe"
                className="mx-auto w-max border-[1px] border-solid border-neutral-600 p-2"
            >
                <TextOrEmailInput
                    title="First Name"
                    name="firstName"
                    type="text"
                    changeHandler={changeHandler}
                    value={state.firstName}
                />
                <TextOrEmailInput
                    title="Last Name"
                    name="lastName"
                    type="text"
                    changeHandler={changeHandler}
                    value={state.lastName}
                />
                <TextOrEmailInput
                    title="Email"
                    name="email"
                    type="email"
                    changeHandler={changeHandler}
                    value={state.email}
                />
                <FileInput
                    title="Profile Picture"
                    name="avatar"
                    changeHandler={changeHandler}
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
