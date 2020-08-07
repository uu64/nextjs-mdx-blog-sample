import React from "react";

interface Props {
  children: React.ReactNode;
}

const AParagraph: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const style = { fontStyle: "italic" };
  return <p style={style}>{children}</p>;
};

export default AParagraph;
