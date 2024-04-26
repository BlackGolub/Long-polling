import { useEffect, useState } from 'react'
import styles from './Pair.module.css'
import { PairProps } from './Pair.props'

const CUPCAKE = 12

export function Pair({ address }: PairProps) {
	const [cupcakeMarket, setCupcakeMarket] = useState<{
		[key: string]: string
	} | null>(null)

	useEffect(() => {
		function getMarketData() {
			fetch(`http://localhost:3000/api/v1/${address}`)
				.then(response => response.json())
				.then(data => {
					console.log(`Данные ${address} рынка:`, data)
					const updatedMarket: { [k: string]: string } = {}
					for (const [currency, value] of Object.entries(data.rates)) {
						updatedMarket[currency] = ((value as number) / CUPCAKE).toFixed(2)
					}
					setCupcakeMarket(updatedMarket)
					setTimeout(getMarketData, 5000)
				})
				.catch(error =>
					console.error(`Ошибка запроса к рынку ${address}:`, error)
				)
		}

		getMarketData()
	}, [address])

	return (
		<div className={styles['post']}>
			{cupcakeMarket &&
				Object.entries(cupcakeMarket).map(([currency, value]) => (
					<div key={currency} className={styles['cell']}>
						{value}
					</div>
				))}
		</div>
	)
}
