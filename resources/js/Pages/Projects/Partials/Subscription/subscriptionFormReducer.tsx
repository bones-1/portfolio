import { FormInputs } from '../../Subscription/Create';

export type NormalEventInfo = {
    event: 'changed';
    type: string;
    name: keyof FormInputs;
    files: FileList | null;
    value: string;
};

type SubmitEventInfo = {
    event: 'submitted';
    value: FormInputs;
};

export function subscriptionFormReducer(
    state: FormInputs,
    action: NormalEventInfo | SubmitEventInfo,
): FormInputs {
    switch (action.event) {
        case 'changed':
            if (action.type === 'file' && action.files) {
                return { ...state, avatar: action.files };
            }

            return { ...state, [action.name]: action.value };
        case 'submitted':
            return { ...action.value };
        default:
            return state;
    }
}
