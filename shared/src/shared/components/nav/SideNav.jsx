import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import SideNavList from "./SideNavList";
export default function SideNav({ children, navStructure, navTitle, pathname }) {
	// const [childrenShow, setChildrenShow] = useState([]);
	// function expandList(nav) {
		
	// 	setChildrenShow(oldArray => {
	// 		const newArr = [...oldArray, nav.to]
	// 	});
	// }
	// function collapseList(nav) {
	// 	const newArray = childrenShow.filter(item => item !== nav.to);
	// 	setChildrenShow(newArray);
	// }
	// function isExpanded(nav) {
	// 	return childrenShow.includes(nav.to);
	// }
	return (
		<>
			<nav class="side-nav bg-cloud30 p-8 h-full">
				<h5 class="border-b border-b-cloud pb-2 text-base">{navTitle}</h5>
				<SideNavList navStructure={navStructure} pathname={pathname}/>				
			</nav>
		</>
	);
}