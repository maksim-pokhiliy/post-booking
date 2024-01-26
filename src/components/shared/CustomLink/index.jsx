import classNames from "classnames";
import { Link, To } from "react-router-dom";

import styles from "./index.module.scss";

function DisabledLink({ isPrimary, className, children }) {
  return (
    <span
      className={classNames(styles.container, className, {
        [styles.primary]: isPrimary,
      })}
    >
      {children}
    </span>
  );
}

function CustomLink({ to, isPrimary, isDisabled, className, children }) {
  if (isDisabled) {
    return (
      <DisabledLink isPrimary={isPrimary} className={className}>
        {children}
      </DisabledLink>
    );
  }

  return (
    <Link
      to={to}
      className={classNames(styles.container, className, {
        [styles.primary]: isPrimary,
      })}
    >
      {children}
    </Link>
  );
}

CustomLink.defaultProps = {
  className: "",
  isPrimary: false,
  isDisabled: false,
};

export default CustomLink;
