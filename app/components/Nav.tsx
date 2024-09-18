import Link from "next/link"

const links = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Categories",
		href: "/categories"
	},
	{
		name: "Watchlist",
		href: "/watchlist"
	},
	{
		name: "Create Listing",
		href: "/createlisting"
	}
]

const Nav = () => {
	return (
		<nav>
			{links.map((link) => {
				return (
					<Link key={link.name} href={link.href}>{link.name}</Link>
				)
			})}
		</nav>
	)
}

export default Nav