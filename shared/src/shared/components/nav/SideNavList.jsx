
export default function SideNavList({ navStructure, pathname, className, collapseList, expandList, isExpandedFunc }) {

	return (
		<ul className={className}>
				{navStructure.map(nav => {
					return (
						<li class={pathname.includes(nav.to) ? "active" : ""}>
							<div class="navlink-container flex items-center">
								{nav.children && !isExpandedFunc(nav) && (
									<span onClick={() => expandList(nav)} class="expand-nav cursor-pointer">+</span>
								)}
								{nav.children && isExpandedFunc(nav) && (
									<span onClick={() => collapseList(nav)} class="expand-nav cursor-pointer">-</span>
								)}
								<a href={nav.to} class={`hover:text-iris text-sm my-2 pl-3 py-1 text-darkCharcoal leading-5 ${pathname.endsWith(nav.to) ? "font-semibold" : ""} ${nav.children ? "font-semibold" : ""} ${pathname.endsWith(nav.to) && nav.children ? "border-l-4 border-meadow" : "" }`}>{nav.name}</a>
							</div>
								{nav.children && <SideNavList className={`${nav.children ? "border-l border-cloud" : ""} ${isExpandedFunc(nav) ? "" : "hidden"}`} navStructure={nav.children} pathname={pathname} />}
						</li>
					)
				})}
			</ul>
	)
}