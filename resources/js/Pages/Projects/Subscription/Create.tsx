import SubscribeForm from '../Components/Subscription/SubscribeForm';
import BackgroundPanel from '../Partials/BackgroundPanel';
import FormContext from './FormContext';

export default function Create() {
    // NOTE: usePage provides a url property. This can be used in the navigation section.

    return (
        <BackgroundPanel>
            <FormContext>
                <SubscribeForm />
            </FormContext>
        </BackgroundPanel>
    );
}
