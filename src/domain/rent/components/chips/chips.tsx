

import React from "react";
import { Chip as ChipComponent, Icon } from "react-materialize";

type Props = {
    tagName: string;
    onClick: () => void;
}

const Chip: React.FC<Props> = ({ onClick, tagName }) => {
  return (
    <ChipComponent>
    {tagName}
    <Icon className="close" onClick={onClick}>
      close
    </Icon>
  </ChipComponent>
  );
};
export default Chip;
