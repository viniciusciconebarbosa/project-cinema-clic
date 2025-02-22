import Link from "next/link";
import styles from "./series.module.css";

export default function Series() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Sobre a Página</h1>
      <p className={styles.description}>Esta é uma página das series
      </p>
      <Link href="/" className={styles.homeLink}>
        Voltar para a página principal
      </Link>
    </div>
  );
}