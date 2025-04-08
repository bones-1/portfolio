import { serverData } from '@/types';
import { useState } from 'react';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export default function FilterableProductTable({ products }: serverData) {
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
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}
