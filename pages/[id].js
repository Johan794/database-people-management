import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <h1>{id}</h1>
    </div>
  )
}

