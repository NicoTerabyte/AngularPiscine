module lez8Pt2
{
	//qua usiamo i costraints
	//in parole povere diamo un limite ai tipi che T può essere
	//un vincolo
	const arr: Array<string> = ['primo', 'secondo']

	function creaArrayFixed<T extends number | string>(items: T[]): T[]
	{
		return new Array().concat(items)
	}

	const arr1Fix = creaArrayFixed<number>([1, 2, 3])
	//non può esssere di tipo number in questo caso
	const arr2Fix = creaArrayFixed<string>(['cia', 'c', 'd'])
}
