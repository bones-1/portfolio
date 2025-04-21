import { usePage } from '@inertiajs/react';
import { ReactElement } from 'react';

export function ShowErrors({
    fieldName: feildName,
}: {
    fieldName: string;
}): ReactElement {
    const { errors } = usePage().props;
    const error = errors[feildName];
    return (
        <section className="text-sm text-red-700">
            {error && '* ' + error}
        </section>
    );
}
