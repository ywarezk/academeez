/**
 * This component will display a message we are getting in the props
 */

export const HelloWithProps = ({
  name = 'John Doe'
}) => {
  return (
    <h1>
      Hello { name }
    </h1>
  )
}
