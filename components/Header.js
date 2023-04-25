import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { linkResolver } from "../prismicio";

export const Header = ({ alternateLanguages = [], navigation, settings }) => {

  function toggleMenu() {
    var element = document.getElementById("navItems");
    element.classList.toggle("active");
  }

  return (
    <header>
      <div className="navigation">
        <div className="logo" onClick={toggleMenu}>
          {prismicH.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </div>
        <nav id="navItems">
          {navigation.data?.links.map((item) => (
            <div
              key={prismicH.asText(item.label)}
              className="menu-link"
            >
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </div>
          ))}
        </nav>
      </div>
      <div className="lang-switcher">
        {alternateLanguages.map((lang) => (
          <div key={lang.lang} className="lang">
            <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
              <span>{lang.lang.slice(0,2)}</span>
            </PrismicLink>
          </div>
        ))}
      </div>
    </header>
  );
};
