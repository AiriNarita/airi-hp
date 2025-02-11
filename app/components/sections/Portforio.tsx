import { styles } from "@/app/styles/common"
import Button from "../parts/Botton"

/**
 * ポートフォリオ
 * 
 */
export const Portfolio = () =>{
    return <>
     <h2 className={`${styles.heading.base} ${styles.heading.accent}`}>
          Portfolio
        </h2>
        <p className={styles.paragraph}>
          制作物の一覧をここに表示します。
        </p>
        <div className="flex justify-center">
          <Button
            href="/portforio"
            variant="secondary"
            className="mt-4 w-32"
            // icon={RiUserHeartLine}
            target="_blank"
            rel="noopener noreferrer"
          >
          Details
          </Button>
        </div>
    </>
}
