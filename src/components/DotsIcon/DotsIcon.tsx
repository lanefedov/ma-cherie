import styles from './DotsIcon.module.css';

export const DotsIcon = () => {
	return (
		<div className={styles.dots}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='currentColor'
				// className='bi bi-three-dots'
				viewBox='0 0 16 16'
			>
				<path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
			</svg>
		</div>
	);
};
