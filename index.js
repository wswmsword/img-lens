import React, { useRef, useState } from "react";
import styles from "./index.module.css";

export default function Lens({ src, size = 234, scale = 2, style, className, lensStyle, lensClassName, lensProps, ...otherProps }) {
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
      {...otherProps} />
    <div className={styles.lens} style={{ width: `${size}px`, height: `${size}px`, transform: lensPos, visibility: entered ? "visible" : "hidden" }} {...lensProps}>
      <img src={src} style={{ ...lensImgStyle, ...lensStyle }} className={`${styles.lensImg} ${lensClassName}`} />
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

  function loaded(e) {
    const img = e.target;
    const { naturalWidth: w, naturalHeight: h, clientWidth } = img;
    originScale.current = w / clientWidth;
    console.log(originScale.current)
  }
}
