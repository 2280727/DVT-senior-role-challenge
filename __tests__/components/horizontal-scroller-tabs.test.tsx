import {  fireEvent, render, screen, waitFor } from '@testing-library/react'

import { capitalizeFirstLetter } from '@/lib/utils'
import { HorizontalScrollerTabs } from '@/components/ui/dashboard/horizontal-scroller-tabs'

describe('HorizontalScrollerTabs', () => {
    describe('rendering', () => {
        it('should render a button chevronLeft icon', () => {
            renderHorizontalTabs();
            screen.getByRole('button', {
                name: /left/i
            })
        })
        it('should render a botton chevronRight icon', () => {
            renderHorizontalTabs();
            screen.getByRole('button', {
                name: /right/i
            })
        })
        it('should render first 2 category labels', () => {
            renderHorizontalTabs();
            screen.getByText(capitalizeFirstLetter(categoriesStr[0]))
            screen.getByText(capitalizeFirstLetter(categoriesStr[1]))
            expect(screen.queryByText(capitalizeFirstLetter(categoriesStr[2]))).toBeNull();
        })
        
    })
    //TO-D

})

const categoriesStr = ["electronics", "jewelery", "men's clothing", "women's clothing"];
const defaultProps = {
    startIndex: 0,
    onNext: () => {},
    onPrev: () => {},
    setCategory: jest.fn()
} 

function renderHorizontalTabs(){
    render(<HorizontalScrollerTabs categories={categoriesStr} {...defaultProps} />)
}