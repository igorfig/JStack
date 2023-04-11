import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

<<<<<<< HEAD
export default class PostsList extends React.Component {
=======
export default class PostList extends React.Component {
>>>>>>> 1ea681baec21a43aa69f8ecb3f33d19211bfc799
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    );
  }
}