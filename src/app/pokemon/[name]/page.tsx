"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ name: string }>();
  return <h1>{params.name}</h1>;
}
