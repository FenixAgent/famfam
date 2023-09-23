import Link from "next/link";
// import { Metadata } from "next";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
