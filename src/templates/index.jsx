import { Form } from "../components/post"
import "./styles.css"

export const Home  = () =>{
  return(
    <div className="body">
      <div className="container">
        <div className="coluna1">
        <h1>learn to code by watching others</h1>
        <p>
          see how experienced developers solve problems in real-time watching scripted tutorial is great, but understanding how developers think is invaluable.
        </p>
        </div>
        <div className="coluna2">
          <div className="containertest">
          <p>Try it free 7 days then $20/mo. threafter</p>
          </div>
        <Form/>
        </div>
      </div>
    </div>
  )
}