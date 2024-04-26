import styles from './TableHeader.module.css'

export function TableHeader() {
	const headlines = [
		'Pair name/market',
		'RUB/CUPCAKE',
		'USDT/CUPCAKE',
		'EUR/CUPCAKE',
		'RUB/USDT',
		'RUB/EUR',
		'EUR/USDT',
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
