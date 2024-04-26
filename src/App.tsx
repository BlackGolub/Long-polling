import './App.css'
import { TableHeader } from './components/TableHeader/TableHeader'

function App() {
	function getFirstMarketData() {
		fetch('http://localhost:3000/api/v1/first')
			.then(response => response.json())
			.then(data => {
				console.log('Данные первого рынка:', data)
				setTimeout(getFirstMarketData, 50000)
			})
			.catch(error => console.error('Ошибка запроса к первому рынку:', error))
	}

	getFirstMarketData()

	return (
		<>
			<TableHeader />
		</>
	)
}

export default App
