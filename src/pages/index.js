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
import { useBoardStore } from "@site/src/lib/stores/store";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const board = useBoardStore((state) => state.board);

  const [open, setOpen] = React.useState(board === '' ? true : false);

  return (
    <header
      className={clsx(
        "hero hero--primary justify-center  ",
        styles.senseBoxGreenBanner
      )}
    >
      {/* <div className="flex flex-col p-6 ">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br></br>
        <div className="text-xl font-bold">
          Alles was du für deine senseBox benötigst
        </div>
        <div>
          Klicke auf die unten stehenden Kategorien um durch die Dokumenation zu
          navigieren!
        </div>
        <Dialog open={open}>
          <DialogContent>
              <BoardSelection setOpen={setOpen}/>
          </DialogContent>
        </Dialog>
      </div> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`senseBox Dokumentation`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
