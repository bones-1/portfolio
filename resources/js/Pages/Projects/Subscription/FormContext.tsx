import { DispatchEventInfo, FormInputs } from '@/types';
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

export const FormStateContext = createContext<FormInputs>(
    null as unknown as FormInputs,
);
export const FormDispatchContext = createContext<Dispatch<DispatchEventInfo>>(
    null as unknown as Dispatch<DispatchEventInfo>,
);

const initialValues: FormInputs = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
};

function Reducer(state: FormInputs, action: DispatchEventInfo): FormInputs {
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

const FormContext = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(Reducer, initialValues);

    return (
        <FormDispatchContext.Provider value={dispatch}>
            <FormStateContext.Provider value={state}>
                {children}
            </FormStateContext.Provider>
        </FormDispatchContext.Provider>
    );
};

export default FormContext;
