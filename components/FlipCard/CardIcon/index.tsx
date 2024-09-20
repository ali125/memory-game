import React, { type ComponentProps } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";

type Props = IconProps<ComponentProps<typeof FontAwesome5>["name"]>;

const CardIcon: React.FC<Props> = (props) => {
  return <FontAwesome5 size={28} {...props} />;
};

export default CardIcon;
