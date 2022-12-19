import React from "react";

import Post from "./Post";

export function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h3>Posts da Semana</h3>

      <hr />

      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
    </>
  );
}
