import React, { useRef, useState } from "react";
import styles from "./index.module.css";

export default function Lens({ src, size = 234, scale = 2, style, className, lensStyle, lensClassName, lensProps, onClick, ...otherProps }) {
  const [lensPos, setP] = useState("");
  const [lensImgStyle, setS] = useState({});
  const imgRef = useRef();
  const originScale = useRef(1);
  const [entered, setE] = useState(false);

  return <>
    <img ref={imgRef} src={src} onLoad={loaded} style={style} className={className}
      onMouseMove={move}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={click}
      {...otherProps} />
    <div className={`${styles.l3} ${entered ? styles.show : ""}`}>
      <div className={styles.l2} style={{ transform: lensPos }}>
        <div
          className={`${styles.l1} ${entered ? styles.scale : ""}`}
          style={{ width: `${size}px`, height: `${size}px` }}
          {...lensProps}>
          <img src={src} style={{ ...lensImgStyle, ...lensStyle }} className={`${styles.lensImg} ${lensClassName}`} />
        </div>
      </div>
    </div>
  </>;

  function move(e) {
    const { offsetX, offsetY, clientX, clientY } = e.nativeEvent;
    const halfLensSize = size / 2;
    setP(`translate(${clientX - halfLensSize}px, ${clientY - halfLensSize}px)`);
    const xPercent = Math.abs(offsetX) * 100 / imgRef.current.clientWidth;
    const yPercent = Math.abs(offsetY) * 100 / imgRef.current.clientHeight;
    const lensOffset = halfLensSize * originScale.current / scale;
    setS({
      transform: `scale(${scale / originScale.current}) translate(calc(-${xPercent}% + ${lensOffset}px), calc(-${yPercent}% + ${lensOffset}px))`
    });
  }

  function enter() {
    setE(true);
  }

  function leave() {
    setE(false);
  }

  function click(e) {
    onClick(e, setE);
  }

  function loaded(e) {
    const img = e.target;
    const { naturalWidth: w, clientWidth } = img;
    originScale.current = w / clientWidth;
  }
}
