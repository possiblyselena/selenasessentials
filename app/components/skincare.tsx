import { useState } from "react";

type SkincareItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: SkincareItem[] = [
  { id: "Toner", label: "Toner", text:"Hello", image: "", checked: false },
  { id: "Serum", label: "Serum", text: "", image: "", checked: false },
  { id: "Moisturizer", label: "Moisturizer", text: "", image: "", checked: false },
  { id: "Sunscreen", label: "Sunscreen", text: "", image: "", checked: false },
  { id: "Face Wash", label: "Face Wash", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Face Masks", label: "Face Masks", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Vaseline", label: "Vaseline", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Oil Cleanser", label: "Oil Cleanser", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Foam Cleanser", label: "Foam Cleanser", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Skincare() {
  const [items, setItems] = useState<SkincareItem[]>(initialItems);

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
          <h1 className="style-bold">Skincare</h1>
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