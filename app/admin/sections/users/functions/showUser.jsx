import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/userProvider";
import { Delete, Get } from "@/app/components/tools/axios";

const ShowUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTYwNjk5MTMsImV4cCI6MTY5NjA3MzUxMywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.s-zYx0KrW6J-hNwv7Ee8eHrCNu5-oM6XLgzIA_lSvb_JLL_YyuzxubjKj_N1ILKgTO1AyhdDVa0WtALbrJfMFmM_q46fJcAe4tGva2M60_heEuEj-OiIqRZLmtZJbMVVGf234fWpBEagZDLDUxCqHnHceZ1t_xhcWH1tJGVG_qHRuE1GoxxGhcmGSz8ArsjNeT-q4LAZ-YogrEO6puNqCKcqdHr9uSHabm4RNWF2ELLz9ODNBCJ3m2C9kviNcDcV0hmscGQxJNKCcolp6iyy3LRdQ7kZM_KHHu9aBETbD_olwEuontWrBPeYDQfAIP0YETj6AhuD2fqSI_eJ5T-vHw";

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
