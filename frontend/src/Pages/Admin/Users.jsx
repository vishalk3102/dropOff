import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../Components/MetaData";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAdminUsers } from "../../Redux/Actions/adminAction";
import Loader from "../../Components/Loader";

const Users = () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  return (
    <>
      <MetaData title="Users" />
      <section id="Orders" className="w-full h-full mt-20 ">
        {loading === false ? (
          <div className="max-w-[1200px] w-[100%] mx-auto my-10">
            <h2
              className="text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
            >
              Users
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
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i._id}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.googleId}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              <img src={i.photo} alt="User" />
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.role}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.createdAt.split("T")[0]}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] text-center font-normal border border-slate-900 p-1 capitalize hover:cursor-pointer">
                              <DeleteIcon />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Users;
