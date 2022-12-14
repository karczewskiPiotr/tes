import { isUndefined } from "."
import config from "../../i18n/config.json"

export const getLocales = (): string[] => config.map(({ code }) => code)

export const isValidLocale = (locale: string): boolean =>
  getLocales().includes(locale)

export const getLocaleName = (locale: string): string => {
  const lang = config.find(({ code }) => code === locale)
  if (isUndefined(lang)) return ""

  return `${lang.name} (${lang.localName})`
}

// commetn
//coment again
// yet another one
// lkjlkj
// ah anoother one
// yep
// mhm
// mhm 2
// remote
// remote 2
// ugh
// jljlkj
// hkjhkjh
// klkj
