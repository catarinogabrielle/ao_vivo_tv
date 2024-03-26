import styles from "./page.module.scss";

export default function Input({ type, placeholder }: { type: string, placeholder: string }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}