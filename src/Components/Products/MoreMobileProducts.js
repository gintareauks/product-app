import React, {Component} from 'react';
import ProductList from './ProductList'


class MoreMobileProducts extends Component {
    constructor() {
        super()
        this.state = {
            showMore: false
        }
    }
        
    operation() {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    render() {
        const productList = ProductList.products
            .filter((product => product.id > 4))
            .map(filteredProduct => (
                <div className="product-card" key={filteredProduct.id}>
                    <img className="product-img" alt={filteredProduct.productName} src={filteredProduct.productImage} />
                    <p className="mt-2">{filteredProduct.productName}</p>
                </div>
            ))


        return (
            <div>
                {
                this.state.showMore?
                <div className='second-mobile-container'>
                    <div id="first-mobile-container">
                        { productList }
                    </div>
                </div> 
                :null
                }

                <div id="mobile-button">
                    <button id="show-more" onClick={ () => this.operation() }> {this.state.showMore? 'show less' : 'show more...'} </button>
                </div>
            </div>
            
        )

    }
}

export default MoreMobileProducts
