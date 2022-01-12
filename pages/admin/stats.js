import React from "react";

// components
import StatShow from "components/Stats/StatShow.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// layout for page

import Admin from "layouts/Admin.js";
import GraphShow from "components/Stats/GraphShow";

export default function Stats() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
          <GraphShow />

          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <StatShow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Stats.layout = Admin;
