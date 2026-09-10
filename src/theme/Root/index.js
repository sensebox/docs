import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useBoardStore } from '@site/src/lib/stores/store';

// Keeps the `?board=` query param present across client-side navigation,
// so links (e.g. sidebar) that don't set it explicitly still carry it over.
export default function Root({ children }) {
  const history = useHistory();
  const location = useLocation();
  const boardQuery = useBoardStore((state) => state.boardQuery);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentBoard = searchParams.get('board');

    if (currentBoard) {
      if (currentBoard !== boardQuery) {
        useBoardStore.setState({ boardQuery: currentBoard });
      }
    } else if (boardQuery) {
      searchParams.set('board', boardQuery);
      history.replace({
        pathname: location.pathname,
        search: searchParams.toString(),
        hash: location.hash,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return <>{children}</>;
}
