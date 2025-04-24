import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../lib/api/productsApi";

function UsersList() {
  const { data } = useGetAllProductsQuery();
  return (
    <div className="container gap-5 py-5 relative grid grid-cols-3">
      {data && data ? (
        data.map((d) => {
          return (
            <Link to={`/user/${d.id}`} key={d.id} className="shadow p-5">
              <h2 className="text-xl font-semibold">{d.name}</h2>
              <p className="text-sm text-black/20">@{d.username}</p>
            </Link>
          );
        })
      ) : (
        <div className="absolute top-0 py-20 left-0 w-full text-center opacity-30 font-bold text-3xl ">
          Users not found
        </div>
      )}
    </div>
  );
}

export default UsersList;
