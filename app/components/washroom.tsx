import { useState } from "react";

type WashroomItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: WashroomItem[] = [
  { id: "Shampoo", label: "Shampoo", text:"Hello", image: "", checked: false },
  { id: "Conditioner", label: "Conditioner", text: "", image: "", checked: false },
  { id: "Hair Mask", label: "Hair Mask", text: "", image: "", checked: false },
  { id: "Deodorant", label: "Deodorant", text: "", image: "", checked: false },
  { id: "Toothbrush", label: "Toothbrush", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Toothpaste", label: "Toothpaste", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Razor", label: "Razor", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Shower Cady", label: "Shower Cady", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Body and Face Towel", label: "Body and Face Towel", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Hair Dryer", label: "Hair Dryer", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Hair Brush", label: "Hair Brush", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Washroom() {
  const [items, setItems] = useState<WashroomItem[]>(initialItems);

  const toggleChecked = (id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="bg-webpage p-4 rounded-lg shadow-md w-70">
      <div id="list">
        <header>
          <h1 className="text-bold">Shower</h1>
        </header>

        <ul className="bg-white p-2 rounded-lg space-y-2">
          {items.map((item) => (
            <li key={item.id} className="group rounded-lg">
              <label className="flex items-center gap-2">
                <div className="display-grid grid-rows-2 gap-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleChecked(item.id)}
                    />
                    <span className={item.checked ? "line-through" : undefined}>
                      {item.label}
                    </span>
                  </div>
                  <div id="details" className="hidden group-hover:block">
                    {item.image && <img src={item.image} alt={item.label} className="w-6 h-6" />}
                    {item.text && <p className="text-sm text-gray-600">{item.text}</p>}
                  </div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}