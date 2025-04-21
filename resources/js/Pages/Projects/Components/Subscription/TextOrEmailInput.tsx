import { ChangeEventHandler, ReactElement } from 'react';
import { ShowErrors } from './ShowErrors';

type Params = {
    title: string;
    name: string;
    type: 'text' | 'email';
    changeHandler: ChangeEventHandler<HTMLInputElement>;
    value: string;
    id?: string;
    required?: boolean;
    maxLen?: number;
    minLen?: number;
    placeholder?: string;
};

const TextOrEmailInput = ({
    title,
    name,
    type,
    changeHandler,
    value,
    id,
    required,
    maxLen,
    minLen,
    placeholder = '',
}: Params): ReactElement => {
    const ID = id || name;

    return (
        <>
            <label htmlFor={ID} className="inline-block w-[12ch] text-left">
                {title}:
            </label>
            <input
                onChange={changeHandler}
                value={value}
                type={type}
                name={name}
                id={ID}
                required={required}
                maxLength={maxLen}
                minLength={minLen}
                placeholder={placeholder}
                className="ml-1 inline-block w-[15rem]"
            />
            <ShowErrors fieldName={name} />
            <br />
        </>
    );
};

export default TextOrEmailInput;
