import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

interface Props {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = (props: Props) => {
  const { children, frontMatter } = props;

  return (
    <MDXProvider>
      <h1>{frontMatter.title}</h1>
      <span>Created at {frontMatter.date}</span>
      <div className="content">{children}</div>
      <Link href="/">
        <a>Go back to home.</a>
      </Link>
    </MDXProvider>
  );
};

export default BlogLayout;
