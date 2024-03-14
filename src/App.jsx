import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <hr />
      <ResourceLoader propName="user" url="http://localhost:8080/users/123">
        <UserInfo />
      </ResourceLoader>
      <hr />
      <ResourceLoader
        propName="product"
        url="http://localhost:8080/products/1234"
      >
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
