import './App.css'
import { Layout } from './Layout/Layout'
import { Pair } from './components/Pair/Pair'
import { TableHeader } from './components/TableHeader/TableHeader'

function App() {
	return (
		<Layout>
			<TableHeader />
			<Pair address={'first'} />
			<Pair address={'second'} />
			<Pair address={'third'} />
		</Layout>
	)
}

export default App
