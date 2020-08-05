import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import mdxUtil from "@/lib/mdx-util";

interface Props {
  posts: {
    resourcePath: string;
    date: string;
    title: string;
  }[];
}

const Index: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  return (
    <>
      <h1>Sample Blog App</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.title}>
              <span>{post.date}</span>
              &nbsp;
              <Link href="/[...id]" as={post.resourcePath}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await mdxUtil.getPosts();
  return {
    props: {
      posts: posts.map((post) => {
        return {
          resourcePath: post.resourcePath,
          date: post.frontMatter.date,
          title: post.frontMatter.title,
        };
      }),
    },
  };
};

export default Index;
