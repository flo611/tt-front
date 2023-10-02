import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";
import Button from "@/app/components/tools/button";
import { Post } from "@/app/components/tools/axios";


const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);


  
  const config = {
    headers: {
      // Authorization: `bearer ${user.token}`,
      Authorization: `bearer ${user.token}`,
    },
  };
  Post("users", config).then((response) => console.log(response));

  useEffect(() => {
    Get("users", config).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <section>
      <div>
        <h1 className="text-center underline">
          Nombres d'utilisateurs :
      
        </h1>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className="grid grid-cols-2">
                <div>
                {user.id}
                Email : {user.email}
                Pseudonyme : {user.surname}
                </div>
                <div className="flex justify-center">
                  <Button
                    type="button"
                    value="Delete"
                    className=""
                    onClick={() =>
                      Delete("users", user.id, config).then(() =>
                        alert("Utilisateur supprimé !")
                      )
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShowUser;
