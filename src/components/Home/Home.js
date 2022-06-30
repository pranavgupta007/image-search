import React, { Suspense } from 'react';
//import ImageIterator from '../ImageIterator/ImageIterator';
import SearchBox from '../SearchBox/SearchBox';
import { useLocation } from 'react-router-dom';
const ImageIterator = React.lazy(() =>
  import('../ImageIterator/ImageIterator')
);

function Home() {
  let location = useLocation();
  const searValue = location.search;
  return (
    <div>
      <SearchBox />
      {searValue != '' && (
        <Suspense fallback=''>
          <ImageIterator />
        </Suspense>
      )}
    </div>
  );
}

export default Home;
