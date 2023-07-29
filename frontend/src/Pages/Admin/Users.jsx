import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../Components/MetaData";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAdminUsers, deleteUser } from "../../Redux/Actions/adminAction";
import Loader from "../../Components/Loader";
import { toast } from "react-hot-toast";
import Box from "@mui/material/Box";
import SideNavbar from "./SideNavbar";

const Users = () => {
  const dispatch = useDispatch();

  const { loading, users, error, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    dispatch(getAdminUsers());
  }, [dispatch, message, error]);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <>
      <MetaData title="Users" />
      <section id="Orders" className="w-full h-full mt-16">
        {loading === false ? (
          <Box sx={{ display: "flex" }}>
            <SideNavbar />
            <div className="max-w-[1200px] w-[100%] mx-auto my-10">
              <h2
                className="text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
              >
                Users Stats
              </h2>
              <div className="">
                <table class="table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-10">
                  <thead>
                    <tr className="border-solid border-2 border-black">
                      <th className="w-[100px] md:w-[200px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center">
                        User Id
                      </th>
                      <th className="w-[100px] md:w-[200px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                        Name
                      </th>
                      <th className="w-[100px] md:w-[200px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                        Photo
                      </th>
                      <th className="w-[100px] md:w-[200px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                        Role
                      </th>
                      <th className="w-[100px] md:w-[200px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                        since
                      </th>
                      <th className="w-[50px] md:w-[50px] text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((i) => {
                        return (
                          <>
                            <tr>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize">
                                {i._id}
                              </td>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize">
                                {i.googleId}
                              </td>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize flex justify-center items-center">
                                <img
                                  src={i.photo}
                                  alt="User"
                                  className="w-[30%] rounded-[50%]"
                                />
                              </td>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize">
                                {i.role}
                              </td>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize">
                                {i.createdAt.split("T")[0]}
                              </td>
                              <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize hover:cursor-pointer">
                                <button
                                  onClick={() => deleteUserHandler(i._id)}
                                >
                                  <Link to={`/admin/user/${i._id}`}>
                                    <DeleteIcon />
                                  </Link>
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Box>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Users;
