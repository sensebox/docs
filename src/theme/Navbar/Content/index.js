import React, { useEffect, useState } from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@site/src/components/ui/select";
import { useBoardStore } from "@site/src/lib/stores/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from 'react-router-dom'; // Verwende useLocation

function useNavbarItems() {
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

const BoardDropdown = () => {
  const board = useBoardStore((state) => state.board);
  const location = useLocation();

  const handleBoardChange = (selectedBoard) => {
    // Verwende die setBoard-Funktion direkt, um das Board im Store zu aktualisieren
    console.log(selectedBoard)
    useBoardStore.setState({ board: selectedBoard });
    // Hier kannst du weitere Aktionen ausführen, wenn sich das Board ändert
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentBoard = searchParams.get('board');
    // Map der Suchbegriffe zu den entsprechenden Board-Werten
    const boardMap = {
      home: ":home",
      edus2: ":edu S2",
      edu: ":edu",
      bike: ":bike",
      co2: ":CO2 Ampel",
      mini: ":mini",
    };

    // Überprüfen, ob der Suchbegriff gültig ist, und Board setzen
    if (currentBoard && boardMap[currentBoard.toLowerCase()]) {
      useBoardStore.setState({ board: boardMap[currentBoard.toLowerCase()] });
    } else {
      console.warn("Ungültiger Board-Parameter:", currentBoard);
    }
  }, [location.search]); // Überwache Änderungen an den Query-Parametern

  return (<></>
  );
};

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          <BoardDropdown />
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
