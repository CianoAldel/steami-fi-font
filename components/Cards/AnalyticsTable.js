import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  return (
    <>

      {/* tag filter */}
      <div className="relative w-full text-white flex justify-start items-center">
        <div className=" w-1/12 p-3 bg-white text-black ">
          <p><i class="fas fa-dot-circle"></i> TOP STACK</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="far fa-calendar-alt"></i> Top Releases</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fab fa-keybase"></i> Top Artics</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-user-friends"></i> Top Labels</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-outdent"></i> Top Playlist Tracks</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-play-circle"></i> Top Video</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-tty"></i> Top Ringtones</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-shopping-basket"></i> Top Stores</p>
        </div>
        <div className=" w-1/12 p-3  text-white cursor-pointer ">
          <p><i class="fas fa-map-marker-alt"></i> Top Territories</p>
        </div>
      </div>
      {/* Table */}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg " +
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
                {/* Write  "..."  here */}
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
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  {/* Title Img */}
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Title
                </th>


                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Artist
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Releases
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Releases
                  <br /> Data
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Audio
                  <br /> Streams
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  #
                  <br /> Stream
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Unique
                  <br /> listeners
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Stream Per
                  <br /> User
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Tracks
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Shazam
                </th>

              </tr>
            </thead>

            <tbody>
              {/* List 1 */}
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  1.
                </td>
                {/* Title img */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8"
                    alt="..."
                  ></img>

                </td>
                {/* Title Text */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  Music : Test
                  <br /> PD : Test-200-750
                </td>
                {/* Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center ">
                  7Years a Go
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  Gemee
                  <br /> 3216468465165
                </td>
                {/* Release Data */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  06/27/2021
                </td>
                {/* Audio Streams */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  467
                </td>
                {/* % Stream */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  30.83%
                </td>
                {/* Unique Listener */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  90
                </td>
                {/* Stream Per User */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.41
                </td>
                {/* Tracks */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
                {/* Shazam */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
              </tr>
              {/* List 2 */}
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  2.
                </td>
                {/* Title img */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8"
                    alt="..."
                  ></img>

                </td>
                {/* Title Text */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  Music : Test
                  <br /> PD : Test-200-750
                </td>
                {/* Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center ">
                  7Years a Go
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  Gemee
                  <br /> 3216468465165
                </td>
                {/* Release Data */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  06/27/2021
                </td>
                {/* Audio Streams */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  467
                </td>
                {/* % Stream */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  30.83%
                </td>
                {/* Unique Listener */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  90
                </td>
                {/* Stream Per User */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.41
                </td>
                {/* Tracks */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
                {/* Shazam */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
              </tr>
              {/* List 3 */}
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.
                </td>
                {/* Title img */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8"
                    alt="..."
                  ></img>

                </td>
                {/* Title Text */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  Music : Test
                  <br /> PD : Test-200-750
                </td>
                {/* Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center ">
                  7Years a Go
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  Gemee
                  <br /> 3216468465165
                </td>
                {/* Release Data */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  06/27/2021
                </td>
                {/* Audio Streams */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  467
                </td>
                {/* % Stream */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  30.83%
                </td>
                {/* Unique Listener */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  90
                </td>
                {/* Stream Per User */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.41
                </td>
                {/* Tracks */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
                {/* Shazam */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
              </tr>
              {/* List 4 */}
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  4.
                </td>
                {/* Title img */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8"
                    alt="..."
                  ></img>

                </td>
                {/* Title Text */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  Music : Test
                  <br /> PD : Test-200-750
                </td>
                {/* Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center ">
                  7Years a Go
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  Gemee
                  <br /> 3216468465165
                </td>
                {/* Release Data */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  06/27/2021
                </td>
                {/* Audio Streams */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  467
                </td>
                {/* % Stream */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  30.83%
                </td>
                {/* Unique Listener */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  90
                </td>
                {/* Stream Per User */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.41
                </td>
                {/* Tracks */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
                {/* Shazam */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
              </tr>
              {/* List 5 */}
              <tr>
                {/* Type */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  5.
                </td>
                {/* Title img */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/vue.jpg"
                    className="h-8 w-8"
                    alt="..."
                  ></img>

                </td>
                {/* Title Text */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  Music : Test
                  <br /> PD : Test-200-750
                </td>
                {/* Artist */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center ">
                  7Years a Go
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  Gemee
                  <br /> 3216468465165
                </td>
                {/* Release Data */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  06/27/2021
                </td>
                {/* Audio Streams */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  467
                </td>
                {/* % Stream */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  30.83%
                </td>
                {/* Unique Listener */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  90
                </td>
                {/* Stream Per User */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  3.41
                </td>
                {/* Tracks */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
                </td>
                {/* Shazam */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                  0
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
