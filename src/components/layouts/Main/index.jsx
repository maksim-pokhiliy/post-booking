import styles from "./index.module.scss";

function MainLayout({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.hero} />

      <section className={styles.content}>{children}</section>
    </main>
  );
}

export default MainLayout;
