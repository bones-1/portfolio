import BackgroundPanel from '@/Pages/Whiteboard/Partials/BackgroundPanel';
import { serverData } from '@/types';
import { ReactNode, useState } from 'react';

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{'$' + product.price}</td>
        </tr>
    );
}

// type ReactList = ReactNode[];
type category = Array<object>;

type ProductTableParams = {
    products: Array<object>;
    filterText: string;
    inStockOnly: boolean;
};


function ProductTable({
    products,
    filterText,
    inStockOnly,
}: ProductTableParams) {
    let parsedTable: ReactNode[] = [];
    const catalogue = {};

    products.forEach((product) => {
        const category: object = product.category as unknown as object;

        if (!Object.hasOwn(catalogue, category)) catalogue[category] = {};

        //using `name' intentionally to avoid duplicates
        catalogue[category][product.name] = (
            <ProductRow product={product} key={product.id} />
        );
    });

    for (const [catName, rowsList] of Object.entries(catalogue)) {
        parsedTable = parsedTable.concat(
            [<ProductCategoryRow category={catName} key={catName} />],
            Object.values(rowsList),
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{parsedTable}</tbody>
        </table>
    );
}

type SearchBarParams = {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: CallableFunction;
    onInStockOnlyChange: CallableFunction;
};

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange,
}: SearchBarParams) {
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />{' '}
                Only show products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({ products }: serverData) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default function Whiteboard({ products }: serverData) {
    return (
        <BackgroundPanel>
            <FilterableProductTable products={products} />
        </BackgroundPanel>
    );
}
