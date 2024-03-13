export const RegularList = ({
  data,
  componentProp,
  component: Component,
}) => {
  return (
    <>
      {data.map((item, i) => (
        <Component key={i} {...{ [componentProp]: item }} />
      ))}
    </>
  );
};
