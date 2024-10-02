// import { useQuery } from "@tanstack/react-query";

// // const BASE_URL = process.env.NEXT_PUBLIC_API;
// const BASE_URL = process.env.NEXT_PUBLIC_TEST_API;
// const teamId = 1;
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOiIxIiwidXNlcklkIjo3NjEsImlhdCI6MTcyNzc0MjUxMCwiZXhwIjoxNzI3NzQ2MTEwfQ.btuXije2xJu9yS5hq0y1Jrf0AWIrGZBL6x5LTKEfSPI";

// const headers = new Headers({
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// });

// export const useGatheringsJoined = (option?: {
//   completed: boolean;
//   reviewed: boolean;
//   limit: number;
//   offset: number;
//   sortBy: "dateTime" | "registrationEnd" | "joinedAt";
//   sortOrder: "asc" | "desc";
// }) => {
//   const params = new URLSearchParams({ ...option } as Record<string, string>);
//   return useQuery({
//     queryKey: ["gatheringsJoined"],
//     queryFn: () =>
//       fetch(`${BASE_URL}/${teamId}/gatherings/joined?${params}`, {
//         headers,
//       }).then((res) => res.json()),
//   });
// };
