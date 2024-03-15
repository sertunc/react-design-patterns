import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";
import { useResource } from "./useResource";

function App() {
  return (
    <>
      <UserInfo userId="123" />
      <hr />
      <ProductInfo id="1234" />
    </>
  );
}

export default App;
