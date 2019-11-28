import React from "react";

type Props = {
  title: string;
};

const MainTitle: React.FC<Props> = (props: Props) => <h1>{props.title}</h1>;

export default MainTitle;
