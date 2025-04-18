import BackgroundPanel from '@/Pages/Projects/Partials/BackgroundPanel';
import { productArray } from '@/types';
import { useState } from 'react';
import { ProductTable } from '../Partials/ProductTable';
import { SearchBar } from '../Partials/SearchBar';

function ShowProduct({ product }: productArray) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="mx-auto w-max border-[1px] border-red-400 p-4">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={[product]}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}
export default function Whiteboard({ product }: productArray) {
    return (
        <BackgroundPanel>
            <ShowProduct product={product} />
        </BackgroundPanel>
    );
}
