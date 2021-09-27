const InRangeOfDocHeight = (scrollTop, winHt, docHt) => {

  // Is winHt + scrollTop w/in range (+3 or -3) of docHt...?
	return Array(7).fill(scrollTop + winHt).map((x, y) => x + y).includes(docHt);

}

export default InRangeOfDocHeight;