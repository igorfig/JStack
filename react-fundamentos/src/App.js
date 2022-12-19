import React from "react";
import Header from "./Header";

import Post from "./Post";

const posts = [
  {
    title: 'Title#01',
    subtitle: 'Sub#01',
    likes: 20
  },

  {
    title: 'Title#02',
    subtitle: 'Sub#02',
    likes: 10
  },

  {
    title: 'Title#03',
    subtitle: 'Sub#03',
    likes: 50
  },
  {
    title: 'Title#04',
    subtitle: 'Sub#04',
    likes: 50
  },
]

export function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      {posts.map(post => (
        <Post key={post.title} post={{
          title: post.title,
          subtitle: post.subtitle
        }} likes={post.likes}/>
      ))}
     {/*  <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />
      <Post
        likes={50}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />
      <Post
        likes={10}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03",
        }}
      /> */}
    </>
  );
}
