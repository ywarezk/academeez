/**
 * A component can also change redux state.
 * we can test that the state is change how we expect it to change
 */

import { useDispatch } from "react-redux"
import { slice } from '../slice';


export const ChangeRedux = () => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(slice.actions.setUser({
      firstName: 'Yariv',
      lastName: 'Katz'
    }))
  }

  return (
    <button onClick={handleLogIn}>
      Click here to log the user
    </button>
  )
}
