import './App.css'
import { Pair } from './components/Pair/Pair'
import { TableHeader } from './components/TableHeader/TableHeader'

function App() {
	return (
		<>
			<TableHeader />
			<Pair address={'first'} />
			<Pair address={'second'} />
			<Pair address={'third'} />
		</>
	)
}

export default App
