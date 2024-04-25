import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useThemeConfig } from '@docusaurus/theme-common'
import Logo from '@theme/Logo'
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton'
import Content from '@theme/DocSidebar/Desktop/Content'
import styles from './styles.module.css'
import { useBoardStore } from '@site/src/lib/stores/store'

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig()

  const board = useBoardStore(state => state.board)
  const [sideBar, setSideBar] = React.useState(sidebar)

  useEffect(() => {
    // filter sidebar through the board
    // if board is not empty, filter the sidebar
    const toFilter = sideBar.filter(item => item.label === board)
    console.log(board, toFilter, sidebar)
    if (toFilter.length === 0) {
      setSideBar(sidebar)
    } else {
      setSideBar(toFilter)
    }
  }, [board])

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}
    >
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sideBar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  )
}
export default React.memo(DocSidebarDesktop)
