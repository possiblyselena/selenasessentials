import { useState } from "react";

type ElectronicsItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: ElectronicsItem[] = [
  { id: "Cellphone", label: "Cellphone", text:"Hello", image: "", checked: false },
  { id: "Alarm Clock", label: "Alarm Clock", text: "", image: "", checked: false },
  { id: "Fan", label: "Fan", text: "", image: "", checked: false },
  { id: "Desk Lamp", label: "Desk Lamp", text: "", image: "", checked: false },
  { id: "Kettle", label: "Kettle", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Laptop and Cables", label: "Laptop and Cables", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Power Bank", label: "Power Bank", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Extension Cord", label: "Extension Cord", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Headphones", label: "Headphones", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Camera", label: "Camera", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Ipad + Apple Pencil", label: "Ipad + Apple Pencil", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Electronics() {
  const [items, setItems] = useState<ElectronicsItem[]>(initialItems);

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
          <h1 className="text-bold">Electronics</h1>
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