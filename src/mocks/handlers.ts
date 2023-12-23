import { http, HttpResponse } from "msw";
import { krisaFromDbMockList } from "./KrisaMocks/KrisaMocks";

export const handlers = [
  http.get("/krisas", () => {
    return HttpResponse.json({ krisas: krisaFromDbMockList });
  }),
];
