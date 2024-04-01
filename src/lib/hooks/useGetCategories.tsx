import { useQuery } from "react-query";
import { api } from "../services/api";

async function getCategories() {
    try {
        const {data} = await api({
            method: 'GET',
            url: '/products/categories'
        });
        return data
    } catch (error) {
        console.error("Error fetching categories list:", error);
        throw error;
    }
}

export function useGetCategories() {
    const { data: categories, isLoading: isLoadingCategories } = useQuery({
        queryKey: ['product-categories'],
        queryFn: () => getCategories()
    });
    
    return {categories, isLoadingCategories};
}