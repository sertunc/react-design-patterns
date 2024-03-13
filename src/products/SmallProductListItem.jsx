export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <>
      <h3>Product Small List Item</h3>
      <h3>
        {name} - {price}
      </h3>
      <hr />
    </>
  );
};
