import React from "react";
import { Typography, Button } from "@material-ui/core";
import AlgorithmsList from "components/algorithmsList";
import Section from "components/section";
import Head from "components/head";
import { getLanguage, getLanguages } from "lib/languages";
import { getLanguageName, Language } from "lib/repositories";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageIcon from "components/icon";
import { OpenInNew } from "@material-ui/icons";
import { GetStaticPaths, GetStaticProps } from "next";
import classes from "./style.module.css";

export default function LanguagePage({
  language,
}: {
  language: { name: Language; algorithms: Algorithm[] };
}) {
  return (
    <>
      <Head title={getLanguageName(language.name)} />
      <Section>
        <div className={classes.titleContainer}>
          <Typography variant="h4">
            <LanguageIcon language={language.name} className={classes.icon} />
            {getLanguageName(language.name)}
          </Typography>
          <div>
            <Button
              startIcon={<OpenInNew />}
              href={`https://github.com/TheAlgorithms/${language.name}`}
            >
              Github Repo
            </Button>
            {["c", "c-plus-plus"].includes(language.name.toLowerCase()) && (
              <Button
                startIcon={<OpenInNew />}
                href={`https://thealgorithms.github.io/${language.name
                  .replace(/^c$/, "C")
                  .replace(/^c-plus-plus$/, "C-Plus-Plus")}`}
              >
                Documentation
              </Button>
            )}
          </div>
        </div>
        <AlgorithmsList algorithms={language.algorithms} />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => ({
  props: {
    language: await getLanguage(params.language.toString()),
    ...(await serverSideTranslations(locale, ["common", "categories"])),
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getLanguages(),
  fallback: false,
});
