'use client'
import { useState, useEffect } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  const token = process.env.AEROLAB_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
        headers: {
          accept: 'application/json',
          content: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1ZmZjZmM1N2M0ZjAwMjBiYmNjMDMiLCJpYXQiOjE2ODY1MDMzNzV9.TUgUA08fIRH32H0G42ATn7oZIlDxghLXzdG5CjZb76A',
        }
      });
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [token]);

  console.log(data);

  return (
    <div>
      <h1 className="text-black mt-[500px]">puntaje = {data.points}</h1>
    </div>
  );
}