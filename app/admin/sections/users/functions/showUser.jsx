import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5MjQ2NTEsImV4cCI6MTY5NTkyODI1MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.MZahMUqOpW_tThcEFO6peQtpyJ5vW4srUwvZ2VoAY2tR5VKnLkBEhB9U4N0tKC0IBlcCOr4WydvbwaOapNM3wl4OBBfvGoMYsjGc9dve0Xx1xvKQzS1Y0LBV_Uy-8LDlRGLWc2FtQ4iH9Ypr4Ifuzb3eUd7olM4W3lYj16Hy2hVena0qfFk7UCSbU86A6ZhEARvd-zeU5YbLHyc_OWzON5NMTRY58nqpsDMtUiAgxkUxIDjNmKbZ94Hfx52M3a0o6q2hhrMSxoczd28_HPxj_WEQL_yVRa941n1pZtHPOglbShxPZhgeL0APidUah4TK8nLCaXbYFIPSP0LUWmc8NA";

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
          <h1 className="text-center">
            Nombres d'utilisateurs :
            {/* <span className="font-bold"> {users.length}</span> */}
          </h1>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {user.id}
                Email : {user.email}
                Pseudonyme : {user.surname}
                <button
                  type="button"
                  className="p2 bg-red-800"
                  onClick={() =>
                    Delete("users", user.id, config).then(() =>
                      alert("Utilisateur supprimé !")
                    )
                  }
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default ShowUser;
