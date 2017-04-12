import React, { Component } from 'react';

function ListItem(props) {
  const value = props.value;
  return (
    <li>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
    <ListItem key={number.toString()} value={number}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <Post key={post.id}
      title={post.title}
      content={post.content} />
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function Post(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

class Lists extends Component {
  render() {
    const numbers = [1,2,3,4,5];
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    return (
      <div>
        <NumberList numbers={numbers}/>
        <Blog posts={posts}/>
      </div>
    );
  }
}

export default Lists;
