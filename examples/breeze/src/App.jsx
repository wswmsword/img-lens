import './App.css'
import ImgLens from "img-lens";

function App() {

  return (<>
    <div className="content">
      <h1 className="title">img-lens<span className="fake_wrap" aria-hidden><span className="fake_t">s</span></span><span className="emoji">🔍</span></h1>
    </div>
    <div className="imgs">
      <div className="imgs_inner">
        <ImgLens
          style={{ width: "170px" }}
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1442458017215-285b83f65851?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          style={{ width: "300px" }}
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1531386129715-3233aad6c3c2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          style={{ width: "160px" }}
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1632159674528-da86bce9e01c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImgLens
          style={{ width: "260px" }}
          size="180"
          scale="2.6"
          src="https://images.unsplash.com/photo-1548385642-904d0ffe31ae?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
      </div>
    </div>
  </>);
}

export default App
