import styles from './TableHeader.module.css'

export function TableHeader() {
	const headlines = [
		'Pair name/market',
		'RUB/CUPCAKE',
		'USD/CUPCAKE',
		'EUR/CUPCAKE',
		'RUB/USD',
		'RUB/EUR',
		'EUR/RUB',
	]

	return (
		<div className={styles['post']}>
			{headlines.map((headline, index) => (
				<div key={index} className={styles['cell']}>
					{headline}
				</div>
			))}
		</div>
	)
}
