import './App.css'
import ImgLens from "img-lens";
import Ring from "./ring";
import m from "./assets/left-pointing-magnifying-glass.png";

function App() {
  return (<>
    <div className="content">
      <h1 className="title">img-lens<span className="fake_wrap" aria-hidden><span className="fake_t">s</span></span>{/* <span className="emoji">🔍</span> */}<img className="m" src={m} /></h1>
      <p className="desc">A React lens component to zoom into images.</p>
      <a className="l" href="https://github.com/wswmsword/img-lens">GitHub</a>
    </div>
    <div className="imgs">
      <div className="imgs_inner">
        <ImgLens
          className="img1"
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1716832803342-f3d7691cc94a?q=80&w=3076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          className="img2"
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1465990138262-b7c355d1ef90?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          className="img3"
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1632159674528-da86bce9e01c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          className="img4"
          size="180"
          scale="2.6"
          src="https://seaside-station.com/wpbin/wp-content/uploads/esumi_04.jpg" />
        
      </div>
    </div>
    <Ring />
  </>);
}

export default App
