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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwNjk5MTMsImV4cCI6MTY5NjA3MzUxMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.s-zYx0KrW6J-hNwv7Ee8eHrCNu5-oM6XLgzIA_lSvb_JLL_YyuzxubjKj_N1ILKgTO1AyhdDVa0WtALbrJfMFmM_q46fJcAe4tGva2M60_heEuEj-OiIqRZLmtZJbMVVGf234fWpBEagZDLDUxCqHnHceZ1t_xhcWH1tJGVG_qHRuE1GoxxGhcmGSz8ArsjNeT-q4LAZ-YogrEO6puNqCKcqdHr9uSHabm4RNWF2ELLz9ODNBCJ3m2C9kviNcDcV0hmscGQxJNKCcolp6iyy3LRdQ7kZM_KHHu9aBETbD_olwEuontWrBPeYDQfAIP0YETj6AhuD2fqSI_eJ5T-vHw"
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
      <h1 className="text-center underline">Nouvel utilisateur</h1>
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
