// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import FontAwsome5 from "@expo/vector-icons/FontAwesome5";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwsome5>["name"]>) {
  return (
    <FontAwsome5 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />
  );
}
// 1.truck - 2.camera - 3.car - 4.money - 5.basketball - 6.football - 7.volleyball - 8.motorcycle - 9.apple - 10.brain - 11.bus - 12.home
