import { withEditableResource } from "./withEditableResource";

export const UserInfoForm2 = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <p>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </p>
        <p>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </p>
        <p>
          Hair Color:{" "}
          <input
            type="text"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </p>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "http://localhost:8080/users/123",
  "user"
);
