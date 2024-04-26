import { ReactNode } from 'react'
import styles from './Layout.module.css'

export function Layout({ children }: { children: ReactNode }): JSX.Element {
	return <div className={styles['table']}>{children}</div>
}
