import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTU5NzU2MjAsImV4cCI6MTY5NTk3OTIyMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.UKNG9Js5UiFkGukM9MsweD7FnYoMN0ekdP-FnN0sZuuNwlxjra5RuGeyhlPE28iBNZLaznZmvhpzhYKNYOJ2MxCC3QViLeVLYiCjNtOlSG57vct7DDnn56XACzeiKzl3d9h_Ub6xv31_V8JcXz5nL3XkOdcXCQsmlkjhDMhiA7vaMPPyC6iJXn8Pwcv834iq3b5wzSR74pO0g8OIeITfyIWhpb-ledjcLAmpRttr1yWUXulGaKMZo5HPF8rJTZ-gGxFx7mGIq6oqYAbdv_TDhlpKEi2st9xel9jUoM7u9-fWAJipI-B9MWDqYiD-jvxAxRd6j3WvuJ2ngFU0cw6gAg";

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
