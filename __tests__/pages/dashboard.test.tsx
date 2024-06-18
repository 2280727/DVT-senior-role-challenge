import { categories, products } from "@/lib/data";
import { useGetCategories } from "../../src/lib/hooks/useGetCategories"
import { useGetProducts } from "../../src/lib/hooks/useGetProducts";
import {  fireEvent, render, screen, waitFor } from '@testing-library/react'
import Dashboard from "@/app/dashboard/page";
import { capitalizeFirstLetter } from "@/lib/utils";
import TopNav from "@/components/ui/dashboard/topnav";
import '@testing-library/jest-dom';

jest.mock("../../src/lib/hooks/useGetCategories")

jest.mock("../../src/lib/hooks/useGetProducts")


describe('Dashboard', () => {
    const categorieNames = categories.map(category => category.category_name)
    const mockUseGetCategories = useGetCategories as jest.MockedFunction<typeof useGetCategories>;
    const mockUseGetProducts = useGetProducts as jest.MockedFunction<typeof useGetProducts>;
    beforeEach(() => {
        mockUseGetCategories.mockImplementation(() => ({
            categories: undefined,
            isLoadingCategories: false
        }));
        mockUseGetProducts.mockImplementation(() => ({
            products: undefined,
            isLoadingProducts: false,
        }));
    })


    describe('Category Section', () => {
        
        it('should display category skeleton while loading categories', () => {
            mockUseGetCategories.mockImplementation(() => ({
                categories : categorieNames,
                isLoadingCategories: true
            })) 
            renderDashboard()
            screen.getByLabelText('categoryLoader');
        })

        it('should only show first 2 labels of loaded items', () => {
            mockUseGetCategories.mockImplementation(() => ({
                categories : categorieNames,
                isLoadingCategories: false
            })) 

            renderDashboard()
            screen.getByText(capitalizeFirstLetter(products[0].category));
            screen.getByText(capitalizeFirstLetter(categorieNames[0]));
            expect(screen.queryByText(capitalizeFirstLetter(products[2].category))).toBeNull();
        })

        describe('schrolling', () =>{
            it('should only show 2rd and 3rd label after right button is clicked', async () => {
                mockUseGetCategories.mockImplementation(() => ({
                    categories : categorieNames,
                    isLoadingCategories: false
                })) 
                renderDashboard()
                const rightBotton = screen.getByRole('button', {
                    name: /right/i
                })
                fireEvent.click(rightBotton)

                await waitFor(() => {
                    screen.getByText(capitalizeFirstLetter(categorieNames[1]));
                    screen.getByText(capitalizeFirstLetter(categorieNames[2]));

                    expect(screen.queryByText(capitalizeFirstLetter(categorieNames[0]))).toBeNull();
                });

            }) 

            it('should only show 1st and 2nd label after left button is clicked', async () => {
                mockUseGetCategories.mockImplementation(() => ({
                    categories : categorieNames,
                    isLoadingCategories: false
                })) 
                renderDashboard()
                const rightBotton = screen.getByRole('button', {
                    name: /right/i
                })
                fireEvent.click(rightBotton)
                await waitFor(() => {
                    screen.getByText(capitalizeFirstLetter(categorieNames[1]));
                    screen.getByText(capitalizeFirstLetter(categorieNames[2]));

                    expect(screen.queryByText(capitalizeFirstLetter(categorieNames[0]))).toBeNull();
                });
                const leftButton = screen.getByRole('button', {
                    name: /left/i
                })
                fireEvent.click(leftButton)

                await waitFor(() => {
                    screen.getByText(capitalizeFirstLetter(categorieNames[0]));
                    screen.getByText(capitalizeFirstLetter(categorieNames[1]));

                    expect(screen.queryByText(capitalizeFirstLetter(categorieNames[2]))).toBeNull();
                });
            }) 
        })
    })

    describe('Products Section', () => {

        it('should display products skeleton while loading products', () => {
                mockUseGetProducts.mockImplementation(() => ({
                    products: undefined,
                    isLoadingProducts: true,
                }));
                renderDashboard()
                screen.getByLabelText('productsLoader');
            })

        it('should render products titles', () => {
            mockUseGetProducts.mockImplementation(() => ({
                products: products,
                isLoadingProducts: false,
            }));
            renderDashboard()
            products.map((product) => (
                screen.getByText(capitalizeFirstLetter(product.title))
            ))
        })


        it('should call useGetProducts with the clicked category', async () => {
            mockUseGetCategories.mockImplementation(() => ({
                categories: categorieNames,
                isLoadingCategories: false
            }));
            renderDashboard()
            const categoryFilter = categorieNames[0];
            const categoryButton = screen.getByRole('button', {
                name: `Filter by ${categoryFilter}`
            })
            fireEvent.click(categoryButton)
            await waitFor(() => {
                expect(mockUseGetProducts).toHaveBeenCalledWith(categoryFilter);
            })
        })
    })


    describe('Cart', () => {

        it('toggles popover content visibility when the cart component is clicked', async () => {
            renderDashboard();
            const popOverButton = screen.getByTestId('pop-over-button')
            fireEvent.click(popOverButton)
            await waitFor(() => {
                const popOverContent = screen.getByTestId('pop-over-content')
                expect(popOverContent).toBeInTheDocument()
            })

           fireEvent.click(popOverButton)
            await waitFor(() => {
                expect(screen.queryByTestId('pop-over-content')).toBeNull()
            })
        })
        it('should display "0" as cart count and show empty state when no items are present', async () => {
            renderDashboard();
            const paragraphElement = screen.getByTestId('cart-item-count');
            expect(paragraphElement).toHaveTextContent('0')

            const popOverButton = screen.getByTestId('pop-over-button')
            fireEvent.click(popOverButton);
            await waitFor(() => {
               screen.getByText('No items in the cart')    
            })
        })

        it('should increment cart count by 1 and display added item title in popover after adding to cart', async () =>{
            mockUseGetProducts.mockImplementation(() => ({
                products: products,
                isLoadingProducts: false,
            }));
            renderDashboard();
            const firstProduct = products[0]
            //add to cart
            const addToCart = screen.getByRole('button', {
                name: `Add ${firstProduct.id}`
            })
            fireEvent.click(addToCart)
            await waitFor(() => {
                // Verify the cart count increments to 1
                const cartCount = screen.getByTestId('cart-item-count');
                expect(cartCount).toHaveTextContent('1');
        
            });
            const popOverButton = screen.getByTestId('pop-over-button')
            fireEvent.click(popOverButton)
            await waitFor(() => {
                const popOverContent = screen.getByTestId('pop-over-content')
                expect(popOverContent).toHaveTextContent(firstProduct.title);
                expect(popOverContent).not.toHaveTextContent(products[1].title); 
            })
        })
 
    })


})

function renderDashboard(){
    render(<TopNav/>)
    render(<Dashboard />)
    
} 