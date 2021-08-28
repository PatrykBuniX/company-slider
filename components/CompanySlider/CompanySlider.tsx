import { CompanyList } from "../CompanyList/CompanyList";
import styles from "./CompanySlider.module.scss";

const companies = [
  { name: "Adidas", logo: "/adidas-logo.jpg" },
  { name: "Apple", logo: "/apple-logo.jpg" },
  { name: "Fila", logo: "/fila-logo.png" },
  { name: "Kappa", logo: "/kappa-logo.jpg" },
  { name: "Nike", logo: "/nike-logo.jpg" },
  { name: "Puma", logo: "/puma-logo.png" },
  { name: "Reebok", logo: "/reebok-logo.png" },
  { name: "Umbro", logo: "/umbro-logo.jpg" },
  { name: "Under Armour", logo: "/under-armour-logo.jpg" },
  { name: "Intel", logo: "/intel-logo.jpg" },
];

export const CompanySlider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.listsWrapper}>
        <CompanyList companies={companies} />
        <CompanyList companies={companies} />
      </div>
    </div>
  );
};
