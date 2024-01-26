import CustomLink from "../CustomLink";
import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

function LogoContainer({ pathname, className, children }) {
  if (pathname) {
    return (
      <CustomLink to={pathname} className={className}>
        {children}
      </CustomLink>
    );
  }

  return <div className={className}>{children}</div>;
}

function Logo({ withText, pathname }) {
  return (
    <LogoContainer className={styles.container} pathname={pathname}>
      <SvgIcon type="logo" className={styles.logo} />

      {withText && (
        <div className={styles.text}>
          <p className={styles.title}>atlas</p>
          <p className={styles.slogan}>ocean voyages</p>
        </div>
      )}
    </LogoContainer>
  );
}

Logo.defaultProps = {
  withText: false,
};

export default Logo;
