import * as React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

interface Props {
  post: {
    title: string;
    date: string;
    slug: string;
  };
}

const Post = ({ post }: Props) =>
  !post ? null : (
    <div>
      <Link to={post.slug}>{post.title}</Link>
      <PostDate>{post.date}</PostDate>
    </div>
  );

const PostDate = styled("p")({
  fontSize: 10
});

export default Post;
