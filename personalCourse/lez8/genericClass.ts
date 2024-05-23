module lez8Pt3
{
	class Prova<T>
	{
		private lista: T[] = []

		addItem(item: T): void
		{
			this.lista.push(item)
		}

		removeItem(item: T)
		{
			this.lista.splice(this.lista.indexOf(item, 1))
		}
	}

	const listaStringhe = new Prova<string>()
	listaStringhe.addItem("daje")

	const listaNumeri = new Prova<number>()
	listaNumeri.addItem(221)
}
