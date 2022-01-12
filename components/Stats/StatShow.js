import React from "react";

const json_data = [
  {
    name_music: "",
    name_artist: "Foo Fighters",
    count_steam: "",
    image_src: "/img/images/5.jpg",
  },
  {
    name_music: "",
    name_artist: "Honey",
    count_steam: "",
    image_src: "/img/images/1.jpg",
  },
  {
    name_music: "",
    name_artist: "Somean",
    count_steam: "",
    image_src: "/img/images/2.jpg",
  },
  {
    name_music: "",
    name_artist: "Tree of Life",
    count_steam: "",
    image_src: "/img/images/3.jpg",
  },
  {
    name_music: "",
    name_artist: "Weekend",
    count_steam: "",
    image_src: "/img/images/4.jpg",
  },
];

function StatShow() {
  React.useEffect(() => {});

  return (
    <>
      <div className="w-full flex flex-wrap justify-start items-center p-4">
        {/* add_img */}
        <div
          className=" flex flex-col justify-center items-center mb-4"
          style={{ width: "20%" }}
        >
          <div className=" border-2 border-black flex flex-col justify-center items-center border-dashed" style={{width: '220px', height:'220px' }}>
            <i className="fas fa-plus text-6xl "></i>
            {/* <img src="" style={{ width: "220px", height: "220px" }} /> */}
            <div
              className="px-4 py-2 w-full text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
            >
              <p className=" text-lg font-light text-black">
                Create a new release
              </p>
            </div>
          </div>
        </div>
        {/* map_img */}
        {json_data.map((items, i) => (
          <div className="flex justify-center mb-4" style={{ width: "20%" }}>
            <div className=" relative ">
              <img
                src={items.image_src}
                style={{ width: "220px", height: "220px" }}
              />
              <div
                className=" absolute bottom-0 px-4 py-2 w-full text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <p className=" text-lg font-bold text-black">
                  {items.name_artist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StatShow;
