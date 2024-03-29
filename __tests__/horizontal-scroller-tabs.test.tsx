import {  render, screen } from '@testing-library/react'
import { HorizontalScrollerTabs } from '../src/app/ui/dashboard/horizontal-scroller-tabs'
import { capitalizeFirstLetter } from '@/app/lib/utils'

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
    //TO-DO
    //describe scrolling
        

})

const categoriesStr = ["electronics", "jewelery", "men's clothing", "women's clothing"];
const defaultProps = {
    startIndex: 0,
    onNext: () => {},
    onPrev: () => {}
} 
function renderHorizontalTabs(){
    render(<HorizontalScrollerTabs categories={categoriesStr} {...defaultProps} />)
}