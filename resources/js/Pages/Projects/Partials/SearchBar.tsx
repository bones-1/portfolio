import { Link } from '@inertiajs/react';

type SearchBarParams = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: CallableFunction;
    onInStockOnlyChange: CallableFunction;
};
export function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange,
}: SearchBarParams) {
    return (
        <form>
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={filterText}
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label className="border-[1.5px] border-blue-300 px-2">
                    {/* <input
                        type="submit"
                        value="Go!"
                        id="submit"
                        className="border-[1.5px] border-blue-300 px-2"
                        formAction="/whiteboard/search"
                        formMethod="get"
                    /> */}
                    <Link
                        method="get"
                        href={'/projects/market/' + filterText}
                        data={{
                            onlyStocked: inStockOnly,
                        }}
                    >
                        Go!
                    </Link>
                </label>
            </div>
            <label>
                <input
                    type="checkbox"
                    name="onlyStocked"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />{' '}
                Only show products in stock
            </label>
        </form>
    );
}
