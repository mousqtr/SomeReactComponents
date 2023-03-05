import { GiPoliceBadge } from "react-icons/gi";

import "./Badges.scss";

export default function MainPageBadges() {
  return (
    <div className="badges center-row">
      <div className="icon center">
        <GiPoliceBadge />
      </div>
      <div className="icon center">
        <GiPoliceBadge />
      </div>
    </div>
  );
}
