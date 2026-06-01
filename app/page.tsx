'use client';
import Image from "next/image";
import { Closet } from "./components/closet";
import { Bedroom } from "./components/bedroom";
import { Electronics } from "./components/electronics";
import { Important } from "./components/documents";
import { Makeup } from "./components/makeup";
import { Skincare } from "./components/skincare";
import { Stationary } from "./components/supplies";
import { Washroom } from "./components/washroom";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Home() {
  const nodeRef = useRef(null);
  return (
    <div>
      <h1>Selena's Moving Out Packing List</h1>
      <p>A glorified to-do list app.  </p>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <Important/>
        </div>
      </Draggable>
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <p>Hallo</p>
        </div>
      </Draggable>
    </div>
  );
}
