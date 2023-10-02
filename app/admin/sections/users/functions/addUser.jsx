import { UserContext } from "@/app/components/context/userProvider";
import { Post } from "@/app/components/tools/axios";
import { useContext } from "react";
import Button from "@/app/components/tools/button";

const AddUser = () => {
  const { user, setUser } = useContext(UserContext);

  const SubmitForm = () => {
    alert('compte crée!');
    const data = {
      email: user.email,
      roles: user.roles,
      plainPassword: user.plainPassword,
      surname: user.surname,
    
    };

   
    const config = {
      headers: {
        // Authorization: `bearer ${user.token}`,
        Authorization: `bearer ${user.token}`,
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
        <Button type="button" value="Envoyer" onClick={() =>{SubmitForm();window.location.reload();}} />
        </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
