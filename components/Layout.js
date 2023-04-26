import { Header } from "./Header";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <>
      <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      />
      <main>
        {children}
      </main>
    </>
  );
};
