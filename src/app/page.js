"use client"
import Image from "next/image";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const recentPost = [
    {
      post: "Tobi Compact House",
      link: "tch",
      url: "https://ucarecdn.com/075f691b-c3b6-48fb-93d5-055b5f069c2a/12.jpg",
      date: "Januari, 2019"
    },
    {
      post: "POR House",
      link: "porh",
      url: "https://ucarecdn.com/0fc99dc7-4d3d-4825-8fe2-7503c5b26704/21.jpg",
      date: "Februari, 2020"
    },
    {
      post: "KJPP Hari Utomo",
      link: "kjpp",
      url:"https://ucarecdn.com/90afdc11-7949-4ddc-92ea-ad780bc982f3/-/preview/500x500/-/quality/smart_retina/-/format/auto/",
      date: "November, 2018"
    },
    {
      post: "Akroma Studio",
      link: "as",
      url:"https://ucarecdn.com/41c43c3f-ab3b-4b81-bc86-578efc00252c/31.jpg",
      date: "September, 2019"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0)
  const [dataSlide, setDataSlide] = useState()

  useEffect(() => {
    setDataSlide(recentPost[currentSlide])
  }, [currentSlide])

  return (
    <main className="min-h-screen">
      <div className="max-screen-2xl container mx-auto items-center flex-col justify-between lg:px-24 md:px-12 px-8">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:pt-28 md:pt-12 pt-10">
          <div className="">
            <h1 className="lg:text-4xl text-3xl animate-fade-down animate-once animate-duration-300 animate-delay-50 animate-ease-in">
              Hello!
            </h1>
            <h1 className="lg:text-5xl text-3xl animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              We Are <span className=" underline">Arkarupa</span>
            </h1>
            <p className="pt-9 max-w-md text-base animate-fade-down animate-once animate-duration-300 animate-delay-300 animate-ease-in">
              We helping you create a good concept for your interior and
              architectural buildings, we listen to our clients, giving our best
              idea and design suggestion for your interior and architectural
              buildings.
            </p>
          </div>
          <div className="relative">
            <div className=" overflow-hidden relative flex py-4 lg:px-0 gap-6 animate-fade-left animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              <div className="hidden lg:flex md:flex absolute h-full w-20 right-0 bg-gradient-to-l from-black to-transparent" />
              {dataSlide ? 
              <>
              <img
                className="lg:h-72 shrink-0 animate-fade-left animate-once animate-duration-300 animate-delay-150 animate-ease-in"
                src={dataSlide.url}
                alt="Project KJPP Hari Utomo"
              />
              </>
              : ""}
              {/* <img
                className="lg:h-72"
                src="https://ucarecdn.com/90afdc11-7949-4ddc-92ea-ad780bc982f3/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
                alt="Project KJPP Hari Utomo"
              /> */}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:pt-20 sm:grid-cols-1 items-center pb-24">
          <h2 className="text-md animate-fade-left animate-once animate-duration-300 animate-delay-150 animate-ease-in">
           {dataSlide ? dataSlide.date : ""}
          </h2>
          <div className="flex items-center gap-4 justify-between animate-fade-left animate-once animate-duration-300 animate-delay-300 animate-ease-in">
            <h2 className="shrink-0 text-md">{dataSlide ? dataSlide.post : ""}</h2>
            <div className="shrink w-full border border-white" />
            <div className="shrink-0 flex justify-between gap-4 px-1">
              <button
                className="p-2 items-center border delay-100 border-black hover:border-white hover:rounded-full disabled:hover:border-black"
                aria-disabled
                disabled={currentSlide > 0 ? false : true}
                onClick={() => currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                className="p-2 items-center border delay-100 border-black hover:border-white hover:rounded-full disabled:hover:border-black"
                aria-disabled
                disabled={currentSlide < recentPost.length - 1 ? false : true}
                onClick={() => currentSlide < recentPost.length ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(currentSlide)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto lg:py-16 lg:px-24 md:px-12 p-8">
          <div className="md:flex lg:grid grid-cols-5 gap-6">
            <div className="flex flex-col animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              <h3 className="text-lg flex-grow text-gray-600 border-b border-gray-600">
                Pages
              </h3>
              <ul className="py-2">
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Service
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Project
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              <h3 className="text-lg flex-grow text-gray-600 border-b border-gray-600">
                Tags
              </h3>
              <ul className="py-2">
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Interior Design
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Architect
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Landscaping
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 text-sm font-light py-1" href="">
                    Custom Furniture
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              <h3 className="text-lg flex-grow text-gray-600 border-b border-gray-600">
                Recent Post
              </h3>
              <ul className="py-2">
                {recentPost.map((val) => {
                  return (
                    <>
                      <li>
                        <a
                          className="text-gray-600 text-sm font-light py-1"
                          href={val.link}
                        >
                          {val.post}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="flex col-span-2 flex-col flex-1 animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
              <div className="pb-4 text-right">
                <h3 className="text-gray-600 text-sm font-semibold">Office</h3>
                <p className="text-gray-600 text-xs font-light">
                  Jl. Dolopo-Ngebel KM.7
                </p>
                <p className="text-gray-600 text-xs font-light">
                  Desa Suluk, Dolopo, Madiun
                </p>
              </div>
              <div className="pb-4 text-right">
                <h3 className="text-gray-600 text-sm font-semibold">
                  Workshop
                </h3>
                <p className="text-gray-600 text-xs font-light">
                  Jl. Dolopo-Ngebel KM.7
                </p>
                <p className="text-gray-600 text-xs font-light">
                  Desa Suluk, Dolopo, Madiun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
