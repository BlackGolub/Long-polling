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
					const updatedMarket: { [k: string]: string } = {}
					const rates = data.rates
					updatedMarket[`${address}/CUPCAKE`] = (rates.RUB / CUPCAKE).toFixed(2)
					updatedMarket[`${address}/USD`] = (rates.USD / CUPCAKE).toFixed(2)
					updatedMarket[`${address}/EUR`] = (rates.EUR / CUPCAKE).toFixed(2)
					updatedMarket[`CUPCAKE/${address}`] = (CUPCAKE / rates.RUB).toFixed(2)
					updatedMarket[`USD/${address}`] = (CUPCAKE / rates.USD).toFixed(2)
					updatedMarket[`EUR/${address}`] = (CUPCAKE / rates.EUR).toFixed(2)
					setCupcakeMarket(updatedMarket)
					setTimeout(getMarketData, 1000)
				})
				.catch(error =>
					console.error(`Ошибка запроса к рынку ${address}:`, error)
				)
		}

		getMarketData()
	}, [address])

	return (
		<div className={styles['post']}>
			<div className={styles['cell']}>{address}</div>
			{cupcakeMarket &&
				Object.entries(cupcakeMarket).map(([currency, value]) => (
					<div key={currency} className={styles['cell']}>
						{value}
					</div>
				))}
		</div>
	)
}
