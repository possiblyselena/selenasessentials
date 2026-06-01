import { useState } from "react";

type MakeupItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: MakeupItem[] = [
  { id: "Cushion", label: "Cushion", text:"Hello", image: "", checked: false },
  { id: "Concealer", label: "Concealer", text: "", image: "", checked: false },
  { id: "Blush", label: "Blush", text: "", image: "", checked: false },
  { id: "Contour + Highlighter", label: "Contour + Highlighter", text: "", image: "", checked: false },
  { id: "Eyeshadow", label: "Eyeshadow", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Mascara", label: "Mascara", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Eyelash Curler", label: "Eyelash Curler", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Setting Spray", label: "Setting Spray", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Setting Powder", label: "Setting Powder", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Brushes", label: "Brushes", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Storage Container", label: "Storage Containers", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Makeup() {
  const [items, setItems] = useState<MakeupItem[]>(initialItems);

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
          <h1 className="text-bold">Makeup</h1>
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