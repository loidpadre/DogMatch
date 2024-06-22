import { CteSection } from "../../components/CteSection/Index"
import { DogActionSection } from "../../components/DogactionSection/Index"
import { Hero } from "../../components/Hero/Index"
import { DogSection } from "../../components/dogSection/Index"
import { FilterSection } from "../../components/filterSection/Index"
import { Fotter } from "../../components/footer/Index"

export const Home = () => {
	return (
		<div>
			<Hero/>
			<FilterSection/>
			<DogSection/>
			<CteSection/>
			<DogActionSection/>
			<Fotter/>
		</div>
	)
}
