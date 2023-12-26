import Slider from "@/components/slider";
import BaseLayout from "@/layout/baseLayout";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});
export default function About() {
  return (
    <>
      <BaseLayout>about</BaseLayout>

      <p className={roboto.className}>Hello world using Roboto font</p>
    </>
  );
}
