import {useAuthenticate} from "../../hooks/queries/filters"

const Dialog = () => {
  const variables = {username: "varghese", password: "test123"}

  const {data} = useAuthenticate({variables, suspense: true})
  console.log(data)
  return <div>I am a dialog</div>
}

export default Dialog
