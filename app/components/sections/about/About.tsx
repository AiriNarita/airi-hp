import { styles } from "@/app/styles/common";
import Button from "../../parts/Botton";
import { RiUserHeartLine } from "react-icons/ri";

export const About = () => {
    return <>
        <h2 className={`${styles.heading.base} ${styles.heading.primary}`}>
          About Me
        </h2>
        <p className={styles.paragraph}>
          このセクションには自己紹介を書きます。
        </p>
        <div className="flex justify-center">
          <Button 
            href="/about"
            variant="secondary"
            className="mt-4 w-20"
            icon={RiUserHeartLine}
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </Button>
        </div>  
    </>
};