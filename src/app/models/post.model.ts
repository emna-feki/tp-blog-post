export class PostModel {
  
  // Pour mettre une valeur par défaut: public nbrLike: number = 0
  constructor(public titre: string, public description: string, public nbrLike: number = 0, public nbrDontLike: number = 0) {
  
  }
}
