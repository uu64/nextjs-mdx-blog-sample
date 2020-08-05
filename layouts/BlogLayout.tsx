import React from "react";
import { MDXProvider } from "@mdx-js/react";

interface Props {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}

const BlogLayout: React.FC<Props> = (props: Props) => {
  const { children, frontMatter } = props;

  return (
    <MDXProvider>
      <h1>{frontMatter.title}</h1>
      <span>{frontMatter.date}</span>
      {children}
    </MDXProvider>
  );
};

export default BlogLayout;
