import React from "react";
import AlgorithmsList from "components/algorithmsList";
import { getCategories, getCategory } from "lib/categories";
import Section from "components/section";
import Head from "components/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Category({ category }) {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t(`categories:${category.name}`)} />
      <Section title={t(`categories:${category.name}`)}>
        <AlgorithmsList algorithms={category.algorithms} />
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => ({
  props: {
    category: await getCategory(params.category.toString()),
    ...(await serverSideTranslations(locale, ["common", "categories"])),
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getCategories(),
  fallback: false,
});
