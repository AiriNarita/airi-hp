import { styles } from "@/app/styles/common";
import Button from "../../parts/Botton";
import { RiCodeSSlashLine, RiTeamLine, RiUserHeartLine } from "react-icons/ri";

export const About = () => {
    return <>
        <h2 className={`${styles.heading.base} ${styles.heading.primary}`}>
          About Me
        </h2>
        <p className={styles.paragraph}>
          このセクションには自己紹介を書きます。
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
       {/* 人生のテーマカード */}
        <div className="card w-72 bg-white shadow-md p-6 text-center rounded-lg">
          <RiUserHeartLine className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Challenge & Growth</h3>
          <p className="text-gray-600 mt-2">常に新しい技術を学び続けています。</p>
        </div>

        {/* スキルセットカード */}
        <div className="card w-72 bg-white shadow-md p-6 text-center rounded-lg">
          <RiCodeSSlashLine className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Skills</h3>
          <p className="text-gray-600 mt-2">Next.js / NestJS / PostgreSQL</p>
        </div>

        {/* ビジョンカード */}
        <div className="card w-72 bg-white shadow-md p-6 text-center rounded-lg">
          <RiTeamLine className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold">Vision</h3>
          <p className="text-gray-600 mt-2">チームと共に成長し、最大限の成果を目指します。</p>
        </div>
      </div>
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