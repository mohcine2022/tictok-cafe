export class Serveur {
  constructor(public id?: any, public nom?: string) {}
}

export class Table {
  constructor(public id?: any, public numeroTable?:string, public serveur?: Serveur) {}
}


export class Consommation {
  constructor(public id?: any, public libelle?:string, public prixUnitaire?: number) {}
}


export class Ligne {
  constructor(public id?: any, public consommation?:Consommation, public quantite?: number, public montantLigne?: number) {}
}


export class Commande {
  constructor(public id?: any, public date?:any, public heure?: any, public table?: Table, public montantTotal?: number, public lignes?: Ligne[]) {}
}

