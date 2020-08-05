import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import mdxUtil from "@/lib/mdx-util";
import BlogLayout from "@/layouts/BlogLayout";

interface Props {
  id: string | string[];
  frontMatter: FrontMatter;
}

const Post: React.FC<Props> = (props: Props) => {
  const { id, frontMatter } = props;
  const postPath = (id as string[]).join("/");
  const MDX = dynamic(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => import(`@/posts/${postPath}.mdx`) as any
  );
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDX />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await mdxUtil.getPosts();
  const paths = posts.map((post): string => {
    return post.resourcePath;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourcePath = `/blog/${(params.id as string[]).join("/")}`;
  const post = await mdxUtil.getPostByResourcePath(resourcePath);
  return {
    props: {
      id: params.id,
      frontMatter: post.frontMatter,
    },
  };
};

export default Post;
