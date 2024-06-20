import { Wrapper } from "./style"

export const NavBar = () => {
	return <Wrapper>
		<div className="logo">
			<h1>Dog<span>Match.</span></h1>
		</div>
		<div className="manu">
			<ul>
				<li>Home</li>
				<li>Raças de Cães</li>
				<li>Sobre</li>
				<li>FaQ</li>
				<li className="adote">Adote</li>

			</ul>
		</div>
	</Wrapper>
}
