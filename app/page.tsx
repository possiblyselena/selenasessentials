'use client';
import Image from "next/image";
import { Closet } from "./components/closet";
import { Bedroom } from "./components/bedroom";
import { Electronics } from "./components/electronics";
import { Important } from "./components/documents";
import { Makeup } from "./components/makeup";
import { Skincare } from "./components/skincare";
import { Supplies } from "./components/supplies";
import { Washroom } from "./components/washroom";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Home() {
  const nodeRef = useRef(null);
  return (
    <div>
      <h1 className="text-7xl font-bold text-center m-10">Selena's Moving Out Packing List</h1>
      <p className="text-right mx-20">A glorified to-do list app.</p>
      <div className="grid grid-cols-1 grid-cols-2 bg-coffee p-4 m-4 gap-4 items-center align-items w-350 text-center">
        <p className="text-md">
          Hi there! I made this website to show what I'm bringing with me to university. You can hover the labels to see more details and links if you want to be a copycat. I'm also going to use this myself as I'm moving out so I don't forget anything. Most of these lists are derived from the waterloo student list, but I also added my own things that I thought were essential. - I'm going to the University of Waterloo for Computer Engineering!
        </p>
        <img src="/selena.JPG" alt="Selena" className="border-15 border-white w-full max-w-sm object-cover"/>
      </div>
      <div className="display-grid grid-cols-2">
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Skincare/>
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Makeup/>
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Closet/>
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Washroom/>
          </div>
        </Draggable>
      </div>     
    </div>
  );
}
