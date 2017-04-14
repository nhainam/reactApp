import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextChange(event) {
        this.props.onFilterTextInputChange(event.target.value);
    }

    handleInStockInputChange(event) {
        this.props.onInStockInputChange(event.target.checked);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}/>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}/>
                    {' '}
                    Only show products in stock
                </p>
            </div>
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
        var products = this.props.products;
        console.log(this.props.inStockOnly)
        products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                lastCategory = product.category;
            }
            rows.push(<ProductRow product={product} key={product.name} />);
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
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            inStockOnly: false
        }
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleTextInput(filterText) {
        this.setState({filterText: filterText});
    }

    handleInStockInput(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
    }

    render() {
        const products = this.props.products;
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInputChange={this.handleTextInput}
                    onInStockInputChange={this.handleInStockInput}
                />
                <ProductTable
                    products={products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
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
