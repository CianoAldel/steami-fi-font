import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Music
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Type
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Status
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Title / Artist
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Consigment
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Label
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Release date / Hour / <br /> Time zone
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  # of track
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  UPC / Catalog Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Promotion
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Delivered Territorles
                  <br /> and Stores
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            {/* List 1 */}
            <tbody>
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/react.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                </td>
                {/* Status */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/FeedCarrotIcon.jpg"
                    className="h-8 w-8 bg-white rounded-full border mx-auto"
                    alt="..."
                  ></img>
                </td>
                {/* Title / Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blue-600" : "text-white")
                    }
                  >
                    Music : Test
                    <br /> By : Test
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                {/* Lable */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Music studio Mockup
                </td>
                {/* TimeZone */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/* <TableDropdown /> */}
                  12/1/2022
                </td>
                {/* # OF track */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1 Track
                </td>
                {/* UPC / CATALOG NUMBER */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  UPC : empty
                  <br /> Cat# : empty
                </td>
                {/* Promotion */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  <a href="#" style={{ color: "blue" }}>
                    Get link
                  </a>
                </td>
                {/* Delivered */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/worldiconreen.png"
                    className="h-9 w-9 bg-white"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    240 Terrs.
                    <br /> 0 Stroes.
                  </span>

                </td>
              </tr>
            </tbody>
            {/* List 2 */}
            <tbody>
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/react.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                </td>
                {/* Status */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/CarrotBest.jpg"
                    className="h-8 w-8 bg-white rounded-full border mx-auto"
                    alt="..."
                  ></img>
                </td>
                {/* Title / Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Music : Test
                    <br /> By : Test
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                {/* Lable */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Music studio Mockup

                </td>
                {/* TimeZone */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/* <TableDropdown /> */}
                  10/22/2022
                </td>
                {/* # OF track */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1 Track
                </td>
                {/* UPC / CATALOG NUMBER */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  UPC : empty
                  <br /> Cat# : empty
                </td>
                {/* Promotion */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  <a href="#" style={{ color: "blue" }}>
                    Get link
                  </a>
                </td>
                {/* Delivered */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/worldiconreen.png"
                    className="h-9 w-9 bg-white"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    240 Terrs.
                    <br /> 42 Stroes.
                  </span>

                </td>
              </tr>
            </tbody>
            {/* List 3 */}
            <tbody>
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/react.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                </td>
                {/* Status */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  <img
                    src="/img/CarrotBest.jpg"
                    className="h-8 w-8 bg-white rounded-full border mx-auto"
                    alt="..."
                  ></img>
                </td>
                {/* Title / Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Music : Test
                    <br /> By : Test
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                {/* Lable */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Music Studio Mockup

                </td>
                {/* TimeZone */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/* <TableDropdown /> */}
                  10/22/2022
                </td>
                {/* # OF track */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1 Track
                </td>
                {/* UPC / CATALOG NUMBER */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  UPC : empty
                  <br /> Cat# : empty
                </td>
                {/* Promotion */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  <a href="#" style={{ color: "blue" }}>
                    Get link
                  </a>
                </td>
                {/* Delivered */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/worldiconreen.png"
                    className="h-9 w-9 bg-white"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    240 Terrs.
                    <br /> 23 Stroes.
                  </span>

                </td>
              </tr>
            </tbody>
            {/* List 4 */}
            <tbody>
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/react.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                </td>
                {/* Status */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/CarrotBest.jpg"
                    className="h-8 w-8 bg-white rounded-full border mx-auto"
                    alt="..."
                  ></img>
                </td>
                {/* Title / Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Music : Test
                    <br /> By : Test
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                {/* Lable */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Music Studio Mockup

                </td>
                {/* TimeZone */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/* <TableDropdown /> */}
                  10/22/2022
                </td>
                {/* # OF track */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1 Track
                </td>
                {/* UPC / CATALOG NUMBER */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  UPC : empty
                  <br /> Cat# : empty
                </td>
                {/* Promotion */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  <a href="#" style={{ color: "blue" }}>
                    Get link
                  </a>
                </td>
                {/* Delivered */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/worldiconreen.png"
                    className="h-9 w-9 bg-white"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    240 Terrs.
                    <br /> 7 Stroes.
                  </span>

                </td>
              </tr>
            </tbody>
            {/* List 5 */}
            <tbody>
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/react.jpg"
                    className="h-8 w-8 bg-white rounded-full border "
                    alt="..."
                  ></img>
                </td>
                {/* Status */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <img
                    src="/img/CarrotBest.jpg"
                    className="h-8 w-8 bg-white rounded-full border mx-auto"
                    alt="..."
                  ></img>
                </td>
                {/* Title / Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8 bg-white rounded-full border"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    เพลง : Test
                    <br /> ศิลปิน : Test
                  </span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex"></div>
                </td>
                {/* Lable */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Music Studio Mockup
                  <br />

                </td>
                {/* TimeZone */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  {/* <TableDropdown /> */}
                  7/8/2022
                </td>
                {/* # OF track */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1 Track
                </td>
                {/* UPC / CATALOG NUMBER */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  UPC : empty
                  <br /> Cat# : empty
                </td>
                {/* Promotion */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  <a href="#" style={{ color: "blue" }}>
                    Get link
                  </a>
                </td>
                {/* Delivered */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/worldiconreen.png"
                    className="h-9 w-9 bg-white"
                    alt="..."
                  ></img>
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    240 Terrs.
                    <br /> 10 Stroes.
                  </span>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
