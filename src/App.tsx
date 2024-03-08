import './App.css'
import Chico from './assets/chico.webp'

function App() {


  return (
    <div>
      <h1>ME PERDOA, POR FAVOR</h1>
      <img src={Chico} />
      <h4>Me perdoa?</h4>
      <p id='errei'>#erreifuimlk</p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/TvX29A17-Kk?si=XCslFILqia7jr_Yw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      <p>*caso o vídeo não tenha carregado, <span><a href="https://www.youtube.com/watch?v=TvX29A17-Kk" target='_blank'>abra esse link</a></span></p>
      <p id="by">by: vc sabe quem</p>
    </div>



  )
}

export default App
