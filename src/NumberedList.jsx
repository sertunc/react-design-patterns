export const NumberedList = ({
  data,
  componentProp,
  component: Component,
}) => {
  return (
    <>
      {data.map((item, i) => (
        <>
          <h3>{i + 1}.</h3>
          <Component key={i} {...{ [componentProp]: item }} />
        </>
      ))}
    </>
  );
};
