import { BiPlus } from "react-icons/bi";
import { GiPoliceBadge } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";

const icons = {
  none: <BiPlus />,

  // BADGES
  badge0: <GiPoliceBadge />,

  // SUCCESS
  success0: <FaMedal />,
};

export function getIcon(name) {
  return icons[name];
}
