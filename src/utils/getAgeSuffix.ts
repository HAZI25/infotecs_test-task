// Для вывода суффика возраста в подробной информации о пользователе

export function getAgeSuffix(age: number): string {
	if (age % 10 === 1 && age % 100 !== 11) {
		return 'год';
	}
	if (
		(age % 10 === 2 || age % 10 === 3 || age % 10 === 4) &&
		(age % 100 < 10 || age % 100 > 20)
	) {
		return 'года';
	} else {
		return 'лет';
	}
}
