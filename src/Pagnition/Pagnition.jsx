import "./Pagnition.scss";
import img1 from "../assets/images/car1.jpeg";
import img2 from "../assets/images/car2.jpeg";
import img3 from "../assets/images/car3.jpeg";
import img4 from "../assets/images/car4.jpeg";
import React, { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * SAMANDAR BOHODIROV * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
export default function Pagnition() {
  //  = = = = = = = LIST = = = = = = = =
  const itemsList = [
    {
      id: 1,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 2,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 3,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 4,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 5,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 6,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 7,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 8,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 9,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 10,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 11,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 12,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 13,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 14,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 15,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 16,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 17,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 18,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 19,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 20,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 21,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 22,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 23,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 24,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 1,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 2,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 3,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 4,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 5,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 6,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 7,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 8,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 9,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 10,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 11,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 12,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 13,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 14,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 15,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 16,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 17,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 18,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 19,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 20,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 21,
      img: img1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 22,
      img: img2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 23,
      img: img3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
    {
      id: 24,
      img: img4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!",
    },
  ];
  // = = = = = = = = = = = = = = PAGNITION ITEMS COUNT  = = = = = = = = = = = = = 
  const pagItemsCount = 6;
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  const [data, setDate] = useState(itemsList);
  const [pagCount, setPagCount] = useState(1);
  const [pagCountArr, setPagCountArr] = useState([]);

  // = = = = = = = = = = = PAGNITION ITEMS COUNT HANDLER FUNC = = = = = = = = = = =
  const paginationHandler = () => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(itemsList.length / pagItemsCount); i++) {
      arr.push(i);
      setPagCountArr(arr);
    }
  };
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

  // = = = = = = = = = = = PAGNITION PRIVE AND NEXT HANDLER = = = = = = = = = = = =
  const pagPriveNextHandler = () => {
    let arr = [];
    let count = 1;
    let startCount = pagCount === 1 ? 1 : pagItemsCount * pagCount - 5;
    itemsList.map((item, inx) => {
      if (inx + 1 >= startCount && count <= pagItemsCount) {
        count += 1;
        arr.push({ ...item, num: inx + 1 });
      }
    });
    setDate(arr);
    setPagCount(pagCount);
  };
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  // = = = = = = = = = = = USEEFFECT = = = = = = = = = = = = = = = = = = = = = = =
  useEffect(() => {
    pagPriveNextHandler();
  }, [pagCount]);

  useEffect(() => {
    setDate(itemsList);
    paginationHandler();
    pagPriveNextHandler();
  }, []);
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

  return (
    <>
      <section className="pagnition">
        <div className="container">
          <h3 className="pagnition__title">Pagnition</h3>

          <ul className="pagnition__list">
            {data.map((item, inx) => (
              <li className="pagnition__item" key={inx + 1}>
                <div className="pagnition__item-box">
                  <div className="pagnition__item-img">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="pagnition__item-desc">
                    <span>{item.id}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="pagnition__pagnition-box">
            {pagCountArr.length <= 5 ? (
              ""
            ) : (
              <button
                onClick={() => setPagCount(pagCount > 1 ? pagCount - 1 : 1)}
              >
                <BiChevronLeft />
              </button>
            )}

            <div
              className="pagnition__pag-list-box"
              style={{
                width: `${pagCountArr.length <= 4 ? "auto" : "300px"}`,
              }}
            >
              <ul
                className="pagnition__pag-list"
                style={{
                  transform: `translateX(-${
                    pagCountArr.length - 3 < pagCount
                      ? pagCountArr.length * 60 - 300
                      : pagCount < 3
                      ? 0
                      : pagCount * 60 - 180
                  }px)`,
                }}
              >
                {pagCountArr.map((item, inx) => (
                  <li
                    key={inx + 1}
                    className={`pagnition__pag-item ${
                      item === pagCount ? "activePag" : ""
                    }`}
                    onClick={() => setPagCount(item)}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {pagCountArr.length <= 5 ? (
              ""
            ) : (
              <button
                onClick={() =>
                  setPagCount(
                    pagCount <= pagCountArr.length - 1
                      ? pagCount + 1
                      : pagCountArr.length
                  )
                }
              >
                <BiChevronRight />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
