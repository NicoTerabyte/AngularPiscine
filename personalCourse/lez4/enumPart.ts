module	Lez4
{
	//vogliamo mettere dei delimitatori
	//per le nostre variabili
	//gli enum sono dei numeri e possono essere
	//anche modificati per non essere disposti in maniera crescente
	//oppure puoi metterci delle stringhe in ts
	enum	Role
	{
		ADMIN = 'admin',
		USER = 'user',
		GUEST = 'guest',
		EXTRA = 'extra'
	}
	const person =
	{
		Name: "Luca",
		lastName: "Rossi",
		role: Role.GUEST
	}
}
