import styles from './employees.module.css';
import { SearchBar } from '~/components/SearchBar';
import { Button } from '~/components/Button';
import type { CustomStyles } from '~/components/Button/Button';
import { Grid } from '~/components/Grid';
import { EmployeeCard } from '../../components/EmployeeCard';

interface Employee {
	phoneNumber: string;
	email: string;
	workEmail: string;
	fullName: string;
	id: string;
	image: string;
}

const MOCK_EMPLOYEES: Employee[] = [
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee1.jpg',
	},
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee2.jpg',
	},
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee3.jpg',
	},
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee4.jpg',
	},
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee5.jpg',
	},
	{
		phoneNumber: '89377020830',
		email: 'directormacherie@mail.ru',
		workEmail: 'financemacherie@tut.by',
		fullName: 'Соловьева Нина',
		id: '8288282',
		image: '/images/employee6.jpg',
	},
];

function Employees() {
	const filterButtonStyles: CustomStyles = {
		backgroundColor: '#fff',
		color: '#246B49',
		boxShadow: '0px 4px 4px 0px #246B4942',
	};
	const addButtonStyles: CustomStyles = {
		backgroundColor: '#cadcd3',
		color: '#fff',
	};
	return (
		<>
			<h2>Сотрудники</h2>
			<SearchBar isDarkBackground={false} placeholder='Поиск сотрудников' />
			<div className={styles.buttons}>
				<Button customStyles={filterButtonStyles}>Фильтр</Button>
				<Button customStyles={addButtonStyles}>+ Добавить сотрудника</Button>
			</div>
			<Grid>
				{MOCK_EMPLOYEES.map((employee) => (
					<EmployeeCard key={employee.id} {...employee} />
				))}
			</Grid>
		</>
	);
}

export default Employees;