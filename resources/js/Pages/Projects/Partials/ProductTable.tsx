import { ReactNode } from 'react';

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
type ProductTableParams = {
    products: Array<object>;
    filterText: string;
    inStockOnly: boolean;
};
export function ProductTable({
    products,
    filterText,
    inStockOnly,
}: ProductTableParams) {
    let parsedTable: ReactNode[] = [];
    const catalogue = {};

    Object.values(products).forEach((product) => {
        const category: object = product.category;

        if (!Object.hasOwn(catalogue, category)) catalogue[category] = {};

        //using `name' intentionally filterTextto avoid duplicates
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
