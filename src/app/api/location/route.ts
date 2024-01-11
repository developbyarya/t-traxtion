// app/api/hello/route.ts
import { NextResponse } from "next/server";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { app } from "@/utils/firebaseConfig";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const date = url.searchParams.get("date");
  const usingTimestamp = url.searchParams.get("timestamp");
  var fsdb = getFirestore(app);
  const location = collection(fsdb, "location");
  let data: QuerySnapshot;

  if (date) {
    var req_date = new Date(Number.parseInt(date));
    req_date = new Date(
      req_date.getFullYear(),
      req_date.getMonth(),
      req_date.getDate(),
      req_date.getHours() + 7
    );
    data = await getDocs(
      query(
        location,
        where("timestamp", ">", req_date),
        where(
          "timestamp",
          "<",
          new Date(
            req_date.getFullYear(),
            req_date.getMonth(),
            req_date.getDate() + 1
          )
        )
      )
    );
  } else {
    data = await getDocs(location);
  }

  const results: any = [];
  if (usingTimestamp !== null) {
    data.forEach((item) => {
      results.push(item.data());
    });
  }
  data.forEach((item) => {
    results.push(item.data()["data"]);
  });
  return NextResponse.json(results);
}
