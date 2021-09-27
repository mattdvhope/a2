import ReachedBottomOfDoc from './ReachedBottomOfDoc'

const RetainPosOrJumpToTop = (initVidBlwRef, numberOfVideosBelow, totalMoreVids) => {

  const myPromise = new Promise((resolve, reject) => {
    resolve();
  });

  myPromise
  .then(res => ScrollElementIntoView())
  .catch(err => console.log("error: ", err));

  const ScrollElementIntoView = () => {
    const windowScreenHeight = window.innerHeight;

    // Jump to top of document when bottom reached
    if (numberOfVideosBelow === 1 || numberOfVideosBelow === 0 || totalMoreVids > 0 || ReachedBottomOfDoc()) {
      console.log("in IF");
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    } else { // Retain window screen Position when 'more' above/below videos are appended
      console.log("in ELSE");
      const initVidBlwHeight = initVidBlwRef.current.offsetHeight;
      const diff = windowScreenHeight - initVidBlwHeight;
      const gap = diff >= 0 ? diff : 0;
      window.parent.scrollTo({
        top: initVidBlwRef.current.offsetTop - gap,
        behavior: 'instant'
      })
    }
  } // ScrollElementIntoView
 
};

export default RetainPosOrJumpToTop;