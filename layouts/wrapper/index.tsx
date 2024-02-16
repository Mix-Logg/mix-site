"use client";
import React from "react";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <div className="m-2 flex flex-col gap-5 p-4 md:p-6">{children}</div>;
}
