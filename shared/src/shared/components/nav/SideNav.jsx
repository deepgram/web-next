import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import SideNavList from "./SideNavList";
export default function SideNav({ children, navStructure, navTitle, pathname }) {
	const [childrenShow, setChildrenShow] = useState([pathname]);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	
	function toggleNav() {
		setMobileNavOpen(!mobileNavOpen);
	}
	function expandList(nav) {
		setChildrenShow(oldArray => {
			const newArr = [...oldArray, nav.to]
			console.log
			return newArr;
		});
	}
	function collapseList(nav) {
		const newArray = childrenShow.filter(item => item !== nav.to);
		setChildrenShow(newArray);
	}
	function isExpanded(nav) {
		console.log('isExpanded', nav, childrenShow)
		childrenShow.forEach(item => {
			if (item.includes(nav.to)) {
				return true;

			} else {
				return childrenShow.includes(nav.to);

			}
		})

		// childrenShow.map(item => {
		// 	if(nav.to.includes(item)) {
		// 		return true;
		// 	}
		// })
	}
	return (
		<>
			<button class={`fixed md:hidden h-auto w-auto p-3 rounded-r-md bg-cloud z-20 ${mobileNavOpen ? 'right-0' : 'left-0'}`} onClick={toggleNav}>{mobileNavOpen ? "close nav" : "nav"}</button>
			<nav class={`side-nav col-span-2 md:col-span-1 fixed w-full z-10 overflow-y-scroll md:relative md:block bg-mist md:bg-cloud30 p-8 h-full ${mobileNavOpen ? 'block' : 'hidden'}`}>
				<h5 class="border-b border-b-cloud pb-2 text-base">{navTitle}</h5>
				<SideNavList navStructure={navStructure} pathname={pathname} expandList={expandList} collapseList={collapseList} isExpandedFunc={isExpanded} />				
			</nav>
		</>
	);
}