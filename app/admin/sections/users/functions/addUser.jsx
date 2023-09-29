import { UserContext } from "@/app/components/context/userProvider";
import { Post } from "@/app/components/tools/axios";
import { useContext } from "react";

const AddUser = () => {
  const { user, setUser } = useContext(UserContext);

  const SubmitForm = () => {
    const data = {
      email: user.email,
      roles: user.roles,
      plainPassword: user.plainPassword,
      surname: user.surname,
    };

    const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5NzU2MjAsImV4cCI6MTY5NTk3OTIyMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UKNG9Js5UiFkGukM9MsweD7FnYoMN0ekdP-FnN0sZuuNwlxjra5RuGeyhlPE28iBNZLaznZmvhpzhYKNYOJ2MxCC3QViLeVLYiCjNtOlSG57vct7DDnn56XACzeiKzl3d9h_Ub6xv31_V8JcXz5nL3XkOdcXCQsmlkjhDMhiA7vaMPPyC6iJXn8Pwcv834iq3b5wzSR74pO0g8OIeITfyIWhpb-ledjcLAmpRttr1yWUXulGaKMZo5HPF8rJTZ-gGxFx7mGIq6oqYAbdv_TDhlpKEi2st9xel9jUoM7u9-fWAJipI-B9MWDqYiD-jvxAxRd6j3WvuJ2ngFU0cw6gAg"
    const config = {
      headers: {
        // Authorization: `bearer ${user.token}`,
        Authorization: `bearer ${token}`,
      },
    };
    Post("users", data, config).then((response) => console.log(response));
  };

  return (
    <>
      <h1 className="text-center">Nouvel utilisateur</h1>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="">Email :</label>
          <input
            type="text"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password :</label>
          <input
            type="password"
            onChange={(event) => {
              setUser({ ...user, plainPassword: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Pseudonyme :</label>
          <input
            type="text"
            onChange={(event) => {
              setUser({ ...user, surname: event.target.value });
            }}
          />
        </div>
        <button type="button" onClick={() => SubmitForm()}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default AddUser;
