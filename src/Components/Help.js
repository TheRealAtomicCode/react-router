import { useNavigate } from "react-router-dom"

export default function Help() {

    const navigate = useNavigate()

    return (
      <div>
        <h1>Help</h1>
        <button onClick={() => navigate('/')}>Submit</button>
      </div>
    );
  }