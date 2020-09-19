import styles from "./layout.module.scss";

export default function HelloWorld() {
  return (
    <div className={styles.hello}>
      Hello World, I am being styled using SCSS Modules!
      <div className={styles.hello__part1}>
        Hello World, I am being styled using SCSS Modules!
      </div>
    </div>
  );
}
