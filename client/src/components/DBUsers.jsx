/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUserDetails } from "../context/actions/allUsersAction";
import DataTable from "./DataTable";
import { Avatar } from "../assets";
import { getAllUsers } from "../api";

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);
  if (!allUsers) {
    return (
      <div className="flex items-center justify-center md:mt-32">
        <h1 className="font-bold" style={{ fontSize: "35px" }}>
          No Users
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "photoURL",
            render: (rowData) => (
              <img
                src={rowData.photoURL ? rowData.photoURL : Avatar}
                alt=""
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Name",
            field: "displayName",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p
                className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                  rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              >
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },
        ]}
        data={allUsers}
        title={"List of Users"}
        // actions={[
        //   {
        //     icon: "edit",
        //     tooltip: "Edit Data",
        //     onclick: (event, rowData) => {
        //       alert("You want to edit" + rowData.productId);
        //     },
        //   },
        //   {
        //     icon: "delete",
        //     tooltip: "Delete Data",
        //     onclick: (event, rowData) => {
        //       if (
        //         window.confirm("Are you sure , you want to perform this action")
        //       ) {
        //         deleteAProduct(rowData.productId).then((res) => {
        //           dispatch(alertSuccess("Product Deleted Successfully..."));
        //           setInterval(() => {
        //             dispatch(alertNULL());
        //           }, 300);
        //           getAllProducts().then((data) => {
        //             dispatch(setAllProducts(data));
        //           });
        //         });
        //       }
        //     },
        //   },
        // ]}
      />
    </div>
  );
};

export default DBUsers;

// import React from 'react'

// const DBUsers = () => {
//   return (
//     <div>
//       DBUsers for the time being
//     </div>
//   )
// }

// export default DBUsers;
