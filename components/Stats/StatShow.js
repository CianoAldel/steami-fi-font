import React from "react";

const json_data = [
  {
    name_music: "",
    name_artist: "โจ๋ โซนฮาน",
    count_steam: "",
    image_src: "/img/images/5.jpg",
  },
  {
    name_music: "",
    name_artist: "พี่บอม วันเดอร์โซน",
    count_steam: "",
    image_src: "/img/images/1.jpg",
  },
  {
    name_music: "",
    name_artist: "พี่ท็อป วินเทอร์โซน",
    count_steam: "",
    image_src: "/img/images/2.jpg",
  },
  {
    name_music: "",
    name_artist: "โซนคน อมตะ",
    count_steam: "",
    image_src: "/img/images/3.jpg",
  },
  {
    name_music: "",
    name_artist: "พี่ตี้",
    count_steam: "",
    image_src: "/img/images/4.jpg",
  },
];

function StatShow() {
  React.useEffect(() => {});

  return (
    <>
      <div className="relative w-full rounded" style={{ padding: "20px" }}>
        <tr>
          <td className="relative">
            <img src="/img/images/choose_file.png" style={{ width: "300px" ,height: "200px",paddingRight:"12px"}} />
            <div className="text-fade mx-1"></div>
          </td>
          {json_data.map((items, i) => (
            <td className="relative">
              <img
                src={items.image_src}
                style={{ width: "300px", height: "200px" }}
              />
              <div className="text-fade mx-1">{items.name_artist}</div>
            </td>
          ))}
        </tr>
      </div>
    </>
  );
}

export default StatShow;
