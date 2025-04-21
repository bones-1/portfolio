import { useReducer } from 'react';
import SubscribeForm from '../Components/Subscription/SubscribeForm';
import BackgroundPanel from '../Partials/BackgroundPanel';
import { subscriptionFormReducer } from '../Partials/Subscription/subscriptionFormReducer';

const initialValues: FormInputs = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
};

export default function Create() {
    const [state, dispatch] = useReducer(
        subscriptionFormReducer,
        initialValues,
    );

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
