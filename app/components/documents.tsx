import { useState } from "react";

type ImportantItem = {
  id: string;
  label: string;
  checked: boolean;
};

const initialItems: ImportantItem[] = [
  { id: "watcard", label: "WatCard (or whatever your school's ID is called)", checked: false },
  { id: "healthcard", label: "Health Card", checked: false },
  { id: "bankcard", label: "Bank Card", checked: false },
  { id: "driverslicense", label: "Driver's License", checked: false },
  { id: "passport", label: "Passport", checked: false },
];

export function Important() {
  const [items, setItems] = useState<ImportantItem[]>(initialItems);

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
          <h1 className="text-bold">Important!</h1>
        </header>

        <ul className="bg-white p-2 rounded-lg space-y-2">
          {items.map((item) => (
            <li key={item.id} className="rounded-lg">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleChecked(item.id)}
                />
                <span className={item.checked ? "line-through" : undefined}>
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}