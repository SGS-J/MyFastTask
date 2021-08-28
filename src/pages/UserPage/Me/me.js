import React from "react";
import { useParams } from "react-router-dom";

export default function MePage() {
  const { user } = useParams();

  return <h1>HI! {user}</h1>;
}
