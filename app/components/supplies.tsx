import { useState } from "react";

type SuppliesItem = {
  id: string;
  label: string;
  text: string;
  image: string;
  checked: boolean;
};

const initialItems: SuppliesItem[] = [
  { id: "Backpack", label: "Backpack", text:"Hello", image: "", checked: false },
  { id: "Binders, Paper, Notebooks", label: "Binders, Paper, Notebooks", text: "", image: "", checked: false },
  { id: "Pen and Pencils", label: "Pen and Pencils", text: "", image: "", checked: false },
  { id: "Scissors, Ruler, Pencil Sharpener", label: "Scissors, Ruler, Pencil Sharpener", text: "", image: "", checked: false },
  { id: "Pencil Case", label: "Pencil Case", text: "Not required, but you never know where you're going to go. ", image: "important/passport.svg", checked: false },
];

export function Supplies() {
  const [items, setItems] = useState<SuppliesItem[]>(initialItems);

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
          <h1 className="text-bold">Supplies!</h1>
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