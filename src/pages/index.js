import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BoardSelection from "@site/src/components/BoardSelection/BoardSelection";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@site/src/components/ui/dialog"
import styles from "./index.module.css";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx(
        "hero hero--primary justify-center  ",
        styles.senseBoxGreenBanner
      )}
    >
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`senseBox Dokumentation`}
      description="Der Platz für die senseBox-Dokumentation."
    >
      <HomepageHeader />
      <main className="">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
