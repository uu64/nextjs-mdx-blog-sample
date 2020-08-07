import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Paragraph from "@/components/Paragraph";

interface Props {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = (props: Props) => {
  const { children, frontMatter } = props;
  const state = {
    p: Paragraph,
  };

  return (
    <>
      <h1>{frontMatter.title}</h1>
      <span>Created at {frontMatter.date}</span>
      <MDXProvider components={state}>{children}</MDXProvider>
      <Link href="/">
        <a>Go back to home.</a>
      </Link>
    </>
  );
};

export default BlogLayout;
