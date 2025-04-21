import { FormInputs } from './Create';

type EventInfo = {
    event: 'submitted' | 'changed';
    type: string;
    name: keyof FormInputs;
    files: Blob[] | null;
    value: string;
};
export function subscriptionFormReducer(
    state: FormInputs,
    action: EventInfo,
): FormInputs {
    switch (action.event) {
        case 'changed':
            if (action.type === 'file' && action.files) {
                return { ...state, avatar: action.files };
            }

            return { ...state, [action.name]: action.value };

        default:
            return state;
    }
}
