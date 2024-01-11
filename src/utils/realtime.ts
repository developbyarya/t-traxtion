import { app } from "./firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

const database = getDatabase(app);

export function listenChanges<T>(path: string, modifier: (data: T) => void) {
  const db_path = ref(database, path);

  onValue(db_path, (snapshot) => {
    const data = snapshot.val();
    modifier(data);
  });
}
