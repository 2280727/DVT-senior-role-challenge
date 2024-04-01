import { api } from "../services/api";
import { useQuery } from "react-query";
import { Product } from "../types/product";


async function getProducts(category?: string) {
    try {
        const url = category ? `/products/category/${category}` : '/products'
        const {data} = await api ({
            method: 'GET',
            url: url
        })
        return data;
    } catch (error) {
        console.error("Error fetching products", error);
        throw error;
    }
}

export function useGetProducts(category?: string) {
    const { data: products, isLoading: isLoadingProducts ,refetch: refetchProducts} = useQuery<Product[]>({
        queryKey: ['product-list',category],
        queryFn: async () => {
            const responce = await getProducts(category);
            return responce as Product[] ;
        }
    });

    return { products, isLoadingProducts, refetchProducts };
}