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
    const validBoards = ['home', 'edu', 'edu S2', 'bike', 'CO2 Ampel'];
    if (currentBoard && validBoards.includes(currentBoard)) {
      // Wenn der aktuelle `board`-Parameter gültig ist, setze ihn als ausgewählten Wert
      useBoardStore.setState({ board: ":"+currentBoard });
    } else {
      console.log('Ungültiger Board-Parameter:', currentBoard);
    }
  }, [location.search]); // Überwache Änderungen an den Query-Parametern

  return (
    <Select onValueChange={(value) => handleBoardChange(value)} default>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={board ? board : "Board auswählen"} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value=":edu">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :edu
        </SelectItem>
        <SelectItem value=":edu S2">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :edu S2
        </SelectItem>
        <SelectItem value=":home">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :home
        </SelectItem>
        <SelectItem value=":bike">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          :bike
        </SelectItem>
        <SelectItem value=":CO2 Ampel">
          <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
          CO2 Traffic Light
        </SelectItem>
      </SelectContent>
    </Select>
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
