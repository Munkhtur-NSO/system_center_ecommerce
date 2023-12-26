import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BaseLayout from "@/layout/baseLayout";
import Link from "next/link";
import Slider from "@/components/slider";

export default function Home(props) {
  const { children } = props;
  console.log("props", props);
  return (
    <>
      <div className="container text-center">
        <div className="row mt-3">
          <BaseLayout>Home</BaseLayout>
        </div>
        <div className="row mt-5">
          <Slider></Slider>
        </div>
      </div>
    </>
  );
}
