import { useState } from "react";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { FeatureStrip } from "./components/FeatureStrip";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PageBackdrop } from "./components/PageBackdrop";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { defaultPackageOption, type PackageOption } from "./config";
import { useI18n } from "./i18n";

export default function App() {
  const { t } = useI18n();
  const [selectedPackage, setSelectedPackage] =
    useState<PackageOption>(defaultPackageOption);

  const handleSelectPackage = (option: PackageOption) => {
    setSelectedPackage(option);

    window.requestAnimationFrame(() => {
      const form = document.getElementById("contact-form");
      if (!form) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      form.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      window.setTimeout(
        () => {
          document.getElementById("package")?.focus({ preventScroll: true });
        },
        reduceMotion ? 0 : 550,
      );
    });
  };

  return (
    <>
      <PageBackdrop />
      <a className="skip-link" href="#main-content">
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main-content">
        <div id="top" />
        <Hero />
        <FeatureStrip />
        <Services />
        <Pricing onSelectPackage={handleSelectPackage} />
        <Portfolio />
        <Process />
        <Contact
          selectedPackage={selectedPackage}
          onPackageChange={setSelectedPackage}
        />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
