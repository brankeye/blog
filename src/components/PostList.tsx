import * as React from "react";
import { Link } from "gatsby";
import List from "./List";
import Post from "./Post";
import Column from "./Column";

interface Props {
  posts: Array<Object>;
}

const PostList = ({ posts }) => (
  <Column>
    {posts.map(post => (
      <Post key={post.slug} post={post} />
    ))}
  </Column>
);

export default PostList;
