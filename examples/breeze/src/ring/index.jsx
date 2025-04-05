import styles from "./index.module.css";

export default function Ring({ spacing = 1, size = 1, text = "Through the lake, an image appears • " }) {

  const canTrig = CSS.supports('(top: calc(sin(1) * 1px))');
  const chars = text.split('');
  const radius = canTrig ? 'calc((var(--character-width) / sin(var(--inner-angle))) * -1ch' :
    `calc((${spacing} / ${Math.sin(360 / chars.length / (180 / Math.PI))}) * -1ch)`;
  return <div
    className={styles.ring}
    style={{
      "--char-count": chars.length,
      "--font-size": size,
      "--character-width": spacing,
      "--radius": radius,
    }}>
      {chars.map((char, i) => <span
        key={i}
        aria-hidden="true"
        className={styles.char}
        style={{"--char-index": i}}>{char}</span>)}
      <span className={styles.screenRenderOnly}>${text}</span>
    </div>;
}