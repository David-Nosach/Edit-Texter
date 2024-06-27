import { openDB } from "idb";

// Initialize IndexedDB database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Function to put data into IndexedDB
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Function to get data from IndexedDB
export const getDb = async () => {
  console.log("GET from the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  result
    ? console.log("🚀 - data retrieved from the database", result.content)
    : console.log("🚀 - data not found in the database");
  return result?.content;
};

// Initialize the database on script load
initdb();
