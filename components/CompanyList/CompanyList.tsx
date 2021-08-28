import Image from "next/image";
import styles from "./CompanyList.module.scss";

type Company = { name: string; logo: string };

type Props = {
  companies: Company[];
};

export const CompanyList = ({ companies }: Props) => {
  return (
    <ul className={styles.list}>
      {companies.map(({ name, logo }) => (
        <li key={name} className={styles.listItem}>
          <Image
            layout="fixed"
            priority //This slider is the main content of this page so I want to make all logos load as soon as possible. Normally I wouldn't put this prop here ;)
            src={logo}
            alt={`${name} company's logo.`}
            width={100}
            height={50}
            objectFit="contain"
          />
        </li>
      ))}
    </ul>
  );
};
