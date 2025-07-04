import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg"; // ajuste o caminho conforme sua logo

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={logo} alt="Logo MarketBot" className="h-8" />
      <span className="text-xl font-bold text-yellow-400">MarketBot</span>
    </Link>
  );
}
