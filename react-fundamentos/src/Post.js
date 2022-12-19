import React from 'react';

import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <article>
      <strong>{props.post.title}</strong>
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      <strong>Média: {props.likes / 2}</strong>
    </article>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired
}