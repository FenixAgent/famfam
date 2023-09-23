import Link from "next/link";
// import { Metadata } from "next";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/">HOME</Link>
      <br />
      <main>{children}</main>
    </>
  );
}
