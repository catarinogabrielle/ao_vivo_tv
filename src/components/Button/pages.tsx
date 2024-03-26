import styles from "./page.module.scss";

export default function Button({ text, radius }: { text: string, radius: number }) {
  return (
    <button style={{ borderRadius: radius }} className={styles.button}>{text}</button>
  )
}