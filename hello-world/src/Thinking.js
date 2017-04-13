import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <input type="text" name="textSearch" value=""/>
        );
    }
}

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

class ProductRow extends Component {
    render() {
        let product = this.props.product;
        let name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends Component {
    render() {
        var rows = [];
        var lastCategory = null;
        const products = this.props.products;
        products.forEach(function(product){
            if (products.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
                lastCategory = product.category;
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class FilterableProductTable extends Component {
    render() {
        const products = this.props.products;
        return (
            <div>
                <SearchBar/>
                <ProductTable products={products}/>
            </div>
        );
    }
}

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Electrolux', price: '$99.99', stocked: true, name: 'iPod 2 Touch'},
    {category: 'Electrolux', price: '$399.99', stocked: false, name: 'iPhone 2 5'},
    {category: 'Electrolux', price: '$199.99', stocked: true, name: 'Nexus 27'}
];

class Thinking extends Component {
    render() {
        return (
            <div>
                <h1>Thinking in React: </h1>
                <FilterableProductTable products={PRODUCTS}/>,
            </div>
        );
    }
}

export default Thinking;
