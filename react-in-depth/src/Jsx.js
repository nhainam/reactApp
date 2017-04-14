import React, { Component } from 'react';

function MyComponent(props) {
    return (
        <div>
            <p>{props.foo}</p>
            {props.children}
        </div>
    );
}

function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message} />)}
        </ul>
    );
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; }} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}

class Jsx extends Component {
    render() {
        const props = {foo: 1+2};

        return (
            <div>
                <h1>JSX In Depth:</h1>
                <CustomTextInput />
                <TodoList />
                <MyComponent foo={1 + 2 + 3 + 4} />
                <MyComponent foo="Hello world" />
                <MyComponent {...props}>
                    <div>Hello World</div>

                    <div>
                        Hello World
                    </div>

                    <div>
                        Hello
                        World
                    </div>

                    <div>

                        Hello World
                    </div>
                </MyComponent>
            </div>
        );
    }
}

module.exports = Jsx;