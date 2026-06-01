import { useState } from "react";

type BedroomItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: BedroomItem[] = [
  { id: "Twin sheets", label: "Twin sheets", text:"Hello", image: "", checked: false },
  { id: "Blanket", label: "Blanket", text: "", image: "", checked: false },
  { id: "Smiskis", label: "Smiskis", text: "", image: "", checked: false },
  { id: "Posters", label: "Posters", text: "", image: "", checked: false },
  { id: "Double sided tape", label: "Double sided tape", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Whiteboard and Dry Erase Markers", label: "Whiteboard and Dry Erase Markers", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
  { id: "Under bed storage", label: "Under bed storage", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Bedroom() {
  const [items, setItems] = useState<BedroomItem[]>(initialItems);

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
          <h1 className="text-bold">Bedroom</h1>
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