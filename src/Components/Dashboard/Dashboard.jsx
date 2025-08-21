import React, { useState, useEffect } from "react";
import DashboardHero from "./DashboardHero";
import Sidebar from "../comman/Sidebar";
import DashboardStatusics from "./DashboardStatusics";
import GetReward from "./GetReward";
import Header2 from "../comman/Header2";

const Dashboard = () => {
  return (
    <>
      <div className="d-block" id="wrapper" >
        <Sidebar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header2 />
            <main className="">
              <div className="container pb-5 ">
                <DashboardHero />
                <GetReward />
                <DashboardStatusics />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
