import { useState } from "react";
import classNames from "classnames";

import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

function Collapsible({
  bodyClassName,
  expandedBodyClassName,
  isExpanded,
  onExpand,
  renderHeader,
  renderBody,
  children,
}) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(!!isExpanded);

  const handleExpand = (value) => () => {
    setInternalIsExpanded(value);

    if (onExpand) {
      onExpand(value);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={handleExpand(
          isExpanded === undefined ? !internalIsExpanded : !isExpanded,
        )}>
        {renderHeader()}

        <SvgIcon type={internalIsExpanded ? "minus" : "plus"} />
      </div>

      <div
        className={classNames(styles.body, bodyClassName, {
          [styles.body_expanded]: internalIsExpanded,
          [expandedBodyClassName ?? ""]: internalIsExpanded,
        })}>
        {renderBody ? renderBody() : null}
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
