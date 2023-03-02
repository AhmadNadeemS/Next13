import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ErrorGenerator from "@/components/ErrorGenerator";
import { notFound } from "next/navigation";

export default function Home() {
  return (
    <div className="ml-64">
      <div>
        <ErrorGenerator />
      </div>
    </div>
  );
}
