import { useForm } from '@inertiajs/react';
import { ChangeEvent, useReducer } from 'react';
import SubscribeForm from '../Components/Subscription/SubscribeForm';
import BackgroundPanel from '../Partials/BackgroundPanel';
import { subscriptionFormReducer } from '../Partials/Subscription/subscriptionFormReducer';

export type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    avatar: FileList | null;
};

type InputChangeEvent = ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement & {
        files: FileList | null;
        name: keyof FormInputs;
    };
};

const initialValues: FormInputs = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
};

export default function Create() {
    const { setData, post, progress, processing } = useForm<FormInputs>({
        ...initialValues,
    });

    const [state, dispatch] = useReducer(
        subscriptionFormReducer,
        initialValues,
    );

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

    // NOTE: usePage provides a url property. This can be used in the navigation section.

    return (
        <BackgroundPanel>
            <SubscribeForm
                submitHandler={handleSubmit}
                changeHandler={handleChange}
                state={state}
                processing={processing}
                progress={progress}
            />
        </BackgroundPanel>
    );
}
