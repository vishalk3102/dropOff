import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SideNavbar from "./SideNavbar";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { useDispatch, useSelector } from "react-redux";
import { getAdminstats } from "../../Redux/Actions/adminAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { loading, usersCount, ordersCount, totalIncome } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getAdminstats());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ display: "flex" }} className="my-0">
        <SideNavbar />

        <div className="w-full h-[100%]">
          <div className="w-[90%] h-[100%]   p-4 mt-14 mx-auto">
            <div className="w-[90%] grid grid-cols-3 gap-6 mx-auto my-10">
              <div className="col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[125px] flex flex-col justify-center  items-center   border-solid border-2 border-black rounded-[10px]">
                <span className="text-[1.2rem] font-bold p-1 m-1">
                  {"total"}
                </span>
                <h3 className="text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1">
                  Number of Order{" "}
                </h3>
              </div>
              <div className="col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[125px] flex flex-col justify-center  items-center   border-solid border-2 border-black rounded-[10px]">
                <span className="text-[1.2rem] font-bold p-1 m-1">
                  {"totalIncome"}
                </span>
                <h3 className="text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1">
                  Total Income
                </h3>
              </div>
              <div className="col-span-3 md:col-span-1 w-[100%] md:w-[90%] h-[125px] flex flex-col justify-center  items-center   border-solid border-2 border-black rounded-[10px]">
                <span className="text-[1.2rem] font-bold p-1 m-1">
                  {"usersCount"}
                </span>
                <h3 className="text-[1rem] md:text-[1.2rem] font-bold text-center capitalize p-1 m-1">
                  Number of Users{" "}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2  p-2">
              <div className="col-span-2 md:col-span-1   flex justify-center items-center">
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: "Order Placed" },
                        { id: 1, value: 20, label: "Order In Transit" },
                        { id: 2, value: 30, label: "Order Delivered" },
                      ],
                      innerRadius: 50,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 4,
                      highlightScope: { faded: "global", highlighted: "item" },
                      faded: { innerRadius: 30, additionalRadius: -30 },
                    },
                  ]}
                  sx={{
                    [`& .${pieArcClasses.faded}`]: {
                      fill: "gray",
                    },
                  }}
                  width={400}
                  height={200}
                />
              </div>
              <div className="col-span-2 md:col-span-1   flex justify-center items-center">
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      label: "Transactions",
                      color: "#c70e0e",
                    },
                  ]}
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
