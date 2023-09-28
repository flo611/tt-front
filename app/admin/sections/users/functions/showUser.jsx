import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5MTIzNjcsImV4cCI6MTY5NTkxNTk2Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.SiT2cxmXJdOrlTq51p4-etLOW6wPmPOt0FHGUZTihLnOg_IgJNX_3aLgigLcqbiT_GzGnJwrEPbtyuIv9IG4XEKkPmUz35xgLNYtW_SEMG7XlwV4Lg37VmUVTlo6BEr5NJOqHDdxJ-k7eNgjBrUINyye2xKqu3oDw8LiA9nICGLDMp5jKuGafgZr3kfQc-da4kBYuBwAqJTEiJfVCwf9rFicMugUF_GYJaLCcg8y-9HNnas4YGR2J5JVgALnz2pkZcsk7l5WgDJxlO6k38lDAKkVHNP1hHGXNOOGWvqrACm5wE5xybabrh3q4vsLHIjVmGMynOktsUrRE_DpaxT-XQ";

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
