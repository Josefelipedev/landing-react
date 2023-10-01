import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = "",
      url: link = "",
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const attributes = data.attributes || {};

    const {
      footer_text: footerHtml = "",
      slug = "",
      title = "",
      sections = [],
      menu = {},
    } = attributes;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
