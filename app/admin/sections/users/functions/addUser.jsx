import { UserContext } from "@/app/components/context/userProvider";
import { Post } from "@/app/components/tools/axios";
import { useContext } from "react";
import Button from "@/app/components/tools/button";

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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwODc1NjMsImV4cCI6MTY5NjA5MTE2Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UN7D57ugkI-4nNIiS3HbFrPZMBmp2A6gPv69Yl7M8xO0HinxWaHJ0o29YmOmuA3L9d9OT9Hir2NUoPhrfu_HUZMyo3h7VIpOER9J53BRiqjK3uMSTrI0ukcaCWNDIHlSqstH9oM9eEqqXMCtS8N08njquqZGWH0hgDskOyG6ROMbzexki4Ia8MLJEFm90_uAqOasQoNd09oXf_SSGhZSz7YJ3ATykC_jyWabu9h29TZ-RFRmMpfY4XEb3ZbeTeurlIF7a4St90Gb8T9Lf1_LKUiIq3xAwc4PM2BNnMYEOG6q1V69Ov4DThn9jRCEGosqsiHyA7TQKSJe9QA_TjLGbw";
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
      <form action="" className=" card mx-40 bg-red-300 my-8 border-4 border-red-900">
        <div className="contain m-10">
        <div className="flex flex-col  ">
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
        <div className="flex justify-center pb-4">
        <Button type="button" value="Envoyer" onClick={() => SubmitForm()} />
        </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
