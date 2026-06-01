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

export default function Home() {
  return (
    <div>
      <h1>Selena's Moving Out Packing List</h1>
      <p>A glorified to-do list app.  </p>
      <Draggable>
        <Important/>
      </Draggable>
      <Draggable>
        <p>Hallo</p>
      </Draggable>
    </div>
  );
}
