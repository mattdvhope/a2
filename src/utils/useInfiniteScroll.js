import { useState, useEffect } from 'react';
import ReachedBottomOfDoc from './ReachedBottomOfDoc'

// custom Hook
const useInfiniteScroll = (elementsFromScrolling) => {
  const [isFetching, setIsFetching] = useState(false);

  // Add elements above & below when window Y-ends reached
  useEffect(() => {

// window.onscroll = function (e) {
//     console.log(window.scrollY); // Value of scroll Y in px
// };

    const handleScroll = () => {
      if (window.scrollY < 640) return;
      setIsFetching(true);
    };



    // const handleScroll = () => {
    //   if (!ReachedBottomOfDoc()) return;
    //   setIsFetching(true);
    // };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // useEffect

  useEffect(() => {
    if (!isFetching) return;
    elementsFromScrolling();
  }, [isFetching]);

  return [isFetching, setIsFetching];

};

export default useInfiniteScroll;