/**
 * Simple example showing how the @testing-library/react render is working
 */

const RenderExample = () => {
  return (
    <div>
      <h2>render</h2>
      <p>
        This method will attach a <code>div</code> to the body of the document,
        and render the component in that <code>div</code>
      </p>
      <p>
        The method will return us different functions to test the mounted
        component.
      </p>
    </div>
  );
};

export default RenderExample;
