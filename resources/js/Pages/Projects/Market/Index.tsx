import BackgroundPanel from '@/Pages/Projects/Partials/BackgroundPanel';
import { serverData } from '@/types';
import FilterableProductTable from '../Partials/FilterableProductTable';

export default function Whiteboard({ products }: serverData) {
    return (
        <BackgroundPanel>
            <FilterableProductTable products={products} />
        </BackgroundPanel>
    );
}
