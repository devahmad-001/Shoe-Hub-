"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {
  const [profiles, setprofiles] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/user/read", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
      setprofiles(data.users);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (id: any) => {
console.log(id);

    const response = await fetch(`/api/user/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
      if (data.success) {
         setprofiles([...profiles])
      }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {profiles?.map((user, index) => (
            <tr key={index}>
              <td data-label="S.No">{index + 1}</td>
              <td data-label="Name">{user.name}</td>
              <td data-label="Age">{user.email}</td>
              <Link href={"/updateData/" + user._id}>
                <td data-label="Marks%">update</td>
              </Link>
              <td
                data-label="Staus"
                onClick={() => {
                  deleteUser(user._id);
                }}
              >
                delete
              </td>
            </tr>
          )) || <p>Loading...</p>}
        </tbody>
      </table>
    </>
  );
}
