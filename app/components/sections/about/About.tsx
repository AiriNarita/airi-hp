import { styles } from "@/app/styles/common";
import { AboutDetail } from "./AoutDetail";

export const About = () => {
    return <>
        <h2 className={`${styles.heading.base} ${styles.heading.blue}`}>
          About Me
        </h2>
        <p className={styles.paragraph}>
          このセクションには自己紹介を書きます。
        </p>
        <AboutDetail />
    </>
};