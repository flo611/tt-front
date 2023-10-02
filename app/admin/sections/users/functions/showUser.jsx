import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";
import Button from "@/app/components/tools/button";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYyMzAxMzEsImV4cCI6MTY5NjIzMzczMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.hHMcEM9I7NFV3KnTRTbwp3ovorW3YTXh9w6ytEzXM40XEY-k3NfC2u89qhizdJnTf23opfgG1JWoQIlJoWs72-kgI0EBxpA5J-PW2FLDgQhIXPpFYK2DqbXAWse0mVOluuZFVucsrwzkQUfMmFyiUQBPmOdfjPkhcj66rhFOovXeW2yyxbxyDuDjhUtBA3xHImr7RtQuDXlYmQty9LCwF8-hMVC4o5zRhG0Vza-wExdWbkUwiFbg7dGsJsVR06hPNW_w2eYxAKD9e8GTokVuKHnCqPgScM8IEHW_l8BJhIqIlWqqi37tpeJXA_l-i-_VnpfVSSDLpoqOTq7B_Q4VsA";

  const config = {
    headers: {
      // Authorization: `bearer ${user.token}`,
      Authorization: `bearer ${token}`,
    },
  };
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
          {/* <span className="font-bold"> {users.length}</span> */}
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
