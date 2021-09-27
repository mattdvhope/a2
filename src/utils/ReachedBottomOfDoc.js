import InRangeOfDocHeight from './InRangeOfDocHeight'

const ReachedBottomOfDoc = () => {
	// // Must use Math.ceil for Android/chromium-webview to work.
  const heightAboveWindowScreen = Math.ceil(document.documentElement.scrollTop);
  const windowScreenHeight = Math.ceil(window.innerHeight);
  const heightOfDocument = Math.ceil(document.documentElement.offsetHeight);

  return heightAboveWindowScreen + windowScreenHeight >= heightOfDocument;
  // return InRangeOfDocHeight(heightAboveWindowScreen, windowScreenHeight, heightOfDocument);
}

export default ReachedBottomOfDoc;