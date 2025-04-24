import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../lib/api/productsApi";

function UserDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllProductsQuery(id);
  const [deleteUser, { isLoading: delLoading, error: delError }] =
    useDeleteUserMutation();
  const deleteHandler = async () => {
    const res = await deleteUser(id);
    console.log(res);
  };

  if (isLoading) {
    return (
      <div className="py-10 text-xl opacity-30 font-semibold text-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-10 text-3xl text-red-500  font-semibold text-center">
        ERROR
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-4xl">{data.name}</h1>
      <button className="btn btn-primary" onClick={() => deleteHandler()}>
        Delete
      </button>
    </div>
  );
}

export default UserDetails;
