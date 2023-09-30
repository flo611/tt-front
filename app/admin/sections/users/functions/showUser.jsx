import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";
import Button from "@/app/components/tools/button";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwODc1NjMsImV4cCI6MTY5NjA5MTE2Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UN7D57ugkI-4nNIiS3HbFrPZMBmp2A6gPv69Yl7M8xO0HinxWaHJ0o29YmOmuA3L9d9OT9Hir2NUoPhrfu_HUZMyo3h7VIpOER9J53BRiqjK3uMSTrI0ukcaCWNDIHlSqstH9oM9eEqqXMCtS8N08njquqZGWH0hgDskOyG6ROMbzexki4Ia8MLJEFm90_uAqOasQoNd09oXf_SSGhZSz7YJ3ATykC_jyWabu9h29TZ-RFRmMpfY4XEb3ZbeTeurlIF7a4St90Gb8T9Lf1_LKUiIq3xAwc4PM2BNnMYEOG6q1V69Ov4DThn9jRCEGosqsiHyA7TQKSJe9QA_TjLGbw";

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
