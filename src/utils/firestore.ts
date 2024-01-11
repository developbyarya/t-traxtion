import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  QueryDocumentSnapshot,
  Timestamp,
  QuerySnapshot,
  DocumentData,
  orderBy,
  limit,
} from "firebase/firestore";

const fs = getFirestore(app);

export const getBpm = async (date?: number) => {
  const coll = collection(fs, "bpm");

  let data: QuerySnapshot;

  if (date) {
    var req_date = new Date(date);
    req_date = new Date(
      req_date.getFullYear(),
      req_date.getMonth(),
      req_date.getDate(),
      req_date.getHours() + 7
    );
    data = await getDocs(
      query(
        coll,
        where("timestamp", ">", req_date),
        where(
          "timestamp",
          "<",
          new Date(
            req_date.getFullYear(),
            req_date.getMonth(),
            req_date.getDate() + 1
          )
        ),
        orderBy("timestamp", "desc")
      )
    );
  } else {
    data = await getDocs(query(coll, orderBy("timestamp", "desc"), limit(15)));
  }
  const results: DocumentData[] = [];
  data.forEach((item) => {
    const newTs: Timestamp = item.data()["timestamp"];

    results.push({
      ...item.data(),
      timestamp: newTs.toDate().toLocaleDateString(),
    });
  });

  return results;
};

export const getOxy = async (date?: number) => {
  const coll = collection(fs, "oxigen");

  let data: QuerySnapshot;

  if (date) {
    var req_date = new Date(date);
    req_date = new Date(
      req_date.getFullYear(),
      req_date.getMonth(),
      req_date.getDate(),
      req_date.getHours() + 7
    );
    data = await getDocs(
      query(
        coll,
        where("timestamp", ">", req_date),
        where(
          "timestamp",
          "<",
          new Date(
            req_date.getFullYear(),
            req_date.getMonth(),
            req_date.getDate() + 1
          )
        ),
        orderBy("timestamp", "desc")
      )
    );
  } else {
    data = await getDocs(query(coll, orderBy("timestamp", "desc"), limit(15)));
  }
  const results: DocumentData[] = [];
  data.forEach((item) => {
    const newTs: Timestamp = item.data()["timestamp"];

    results.push({
      ...item.data(),
      timestamp: newTs.toDate().toLocaleDateString(),
    });
  });

  return results;
};

export const getCo = async (date?: number) => {
  const coll = collection(fs, "co");

  let data: QuerySnapshot;

  if (date) {
    var req_date = new Date(date);
    req_date = new Date(
      req_date.getFullYear(),
      req_date.getMonth(),
      req_date.getDate(),
      req_date.getHours() + 7
    );
    data = await getDocs(
      query(
        coll,
        where("timestamp", ">", req_date),
        where(
          "timestamp",
          "<",
          new Date(
            req_date.getFullYear(),
            req_date.getMonth(),
            req_date.getDate() + 1
          )
        ),
        orderBy("timestamp", "desc")
      )
    );
  } else {
    data = await getDocs(query(coll, orderBy("timestamp", "desc"), limit(15)));
  }
  const results: DocumentData[] = [];
  data.forEach((item) => {
    const newTs: Timestamp = item.data()["timestamp"];

    results.push({
      data: item.data()["data"]["data"],
      timestamp: newTs.toDate().toLocaleDateString(),
    });
  });

  return results;
};
