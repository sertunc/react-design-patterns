import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
import { UserInfoForm2 } from "./UserInfoForm2";

const UserInfoWithLoader = withUser(UserInfo, "123");

function App() {
  return (
    <>
      <UserInfoWithLoader />
      <hr />
      <UserInfoForm />
      <hr />
      <UserInfoForm2 />
    </>
  );
}

export default App;
