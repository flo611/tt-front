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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU4OTE4MjksImV4cCI6MTY5NTg5NTQyOSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.X4yaJBF-isCcNhzQdqv6ErW-1xLhLar8nwrC1BbvRK2l2IeSEEYwCI3bYkQowbAd7lsq4_ZS4GrXKVMIImQTaqvDFq71Vh7cUTJH58WkCPFSqwc5t_Tcj-gYkRir4IWxj29OWYfRiAMilP-diVqXJZPGqVYjLOkKQxkNvs_r7Arrua0-kpc39mMlClrCGpYd2nfYxW05c31RLHiKaoV2Df8e4MJsRQQUtMpO3d885A1htsi4BfwbWmzZ0Nzn87kl2x8NPnRnOU4CAnrEglYpZhL-z3OKZBbMK_DYlQ_BE2ud4VCzsN5WZcMBioJ-xhfTaLSE9-Zj2C471Hw2LgzoOA";

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
