export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <>
      <h3>Person Small List Item</h3>
      <p>
        Name: {name}, Age: {age}
      </p>
      <hr />
    </>
  );
};
