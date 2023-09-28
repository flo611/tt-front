import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU4OTE4MjksImV4cCI6MTY5NTg5NTQyOSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.X4yaJBF-isCcNhzQdqv6ErW-1xLhLar8nwrC1BbvRK2l2IeSEEYwCI3bYkQowbAd7lsq4_ZS4GrXKVMIImQTaqvDFq71Vh7cUTJH58WkCPFSqwc5t_Tcj-gYkRir4IWxj29OWYfRiAMilP-diVqXJZPGqVYjLOkKQxkNvs_r7Arrua0-kpc39mMlClrCGpYd2nfYxW05c31RLHiKaoV2Df8e4MJsRQQUtMpO3d885A1htsi4BfwbWmzZ0Nzn87kl2x8NPnRnOU4CAnrEglYpZhL-z3OKZBbMK_DYlQ_BE2ud4VCzsN5WZcMBioJ-xhfTaLSE9-Zj2C471Hw2LgzoOA";

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
      {users.length === 0 ? (
        <div>"vide"</div>
      ) : (
        <div>
          <h1 className="text-center">
            Nombres d'utilisateurs :
            <span className="font-bold"> {users.length}</span>
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
      )}
    </section>
  );
};

export default ShowUser;
