import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";

const i18nConfig = {
  locales: ["ko", "en"],
  defaultLocale: "ko",
};

export default async function initTranslations(
  locale: string,
  namespace: string,
) {
  const i18nInstance = createInstance();
  const resources = null;
  i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        () => import(`@public/locales/${locale}/${namespace}.json`),
      ),
    );

  await i18nInstance.init(() => {
    return {
      lng: locale,
      resources,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      defaultNS: namespace,
      fallbackNS: namespace,
      ns: namespace,
      preload: resources ? [] : i18nConfig.locales,
    };
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}