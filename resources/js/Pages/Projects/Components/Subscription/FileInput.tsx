import { AxiosProgressEvent } from 'axios';
import { ChangeEventHandler, ReactElement } from 'react';
import { ShowErrors } from './ShowErrors';

type Params = {
    title: string;
    name: string;
    accept: string;
    changeHandler: ChangeEventHandler<HTMLInputElement>;
    id?: string;
    multiple?: boolean;
    progress?: AxiosProgressEvent | null;
    required?: boolean;
};

const FileInput = ({
    title,
    name,
    accept,
    changeHandler,
    id,
    multiple = false,
    progress,
    required = false,
}: Params): ReactElement => {
    const ID = id || name;

    // TODO: Implement a file size constraint
    return (
        <>
            <label htmlFor={ID} className="inline-block w-[12ch] text-left">
                {title}:
            </label>
            <input
                onChange={changeHandler}
                type="file"
                multiple={multiple}
                name={name}
                id={ID}
                className="mb-5 ml-1 inline-block w-[15rem] text-[0.9rem]"
                required={required}
                accept={accept}
            />
            <br />
            <div className="mx-auto mb-7 mt-[-8px]">
                <div className="h-1 w-80 overflow-hidden rounded-3xl">
                    {progress && (
                        <progress
                            value={progress.percentage}
                            max="100"
                            className="block h-full w-full [box-shadow:0_0_10px_1px_#99AAFF]"
                        >
                            Loading: {progress.percentage}%
                        </progress>
                    )}
                </div>
                <ShowErrors fieldName={name} />
            </div>
        </>
    );
};

export default FileInput;
