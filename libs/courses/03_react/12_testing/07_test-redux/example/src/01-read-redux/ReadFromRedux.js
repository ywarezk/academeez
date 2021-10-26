/**
 * Some components will be rendered and display UI based on how the
 * redux state looks like.
 * We can test that functionality
 */

import { useSelector } from "react-redux"


export const ReadFromRedux = () => {
  const user = useSelector(state => state.user);

  return (
    <h1>
      Hello { user ? user.firstName : 'Guest'}
    </h1>
  )
}
