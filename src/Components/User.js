import { useParams } from 'react-router-dom'

export default function User() {

    const { user } = useParams()

    //send request

    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }