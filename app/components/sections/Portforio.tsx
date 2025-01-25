import { styles } from "@/app/styles/common"

/**
 * ポートフォリオ
 * 
 */
export const Portfolio = () =>{
    return <>
     <h2 className={`${styles.heading.base} ${styles.heading.orange}`}>
          Portfolio
        </h2>
        <p className={styles.paragraph}>
          制作物の一覧をここに表示します。
        </p>
    </>
}
