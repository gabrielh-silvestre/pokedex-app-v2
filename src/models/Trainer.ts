import { ITrainer } from '../@types/interfaces';

class Trainer implements ITrainer {
  public username: string | null;
  public favorites: string[];
  public captureds: string[];
  public userId: string;

  constructor(username: string | null, userId: string) {
    this.username = username;
    this.userId = userId;
    this.favorites = [];
    this.captureds = [];
  }
}

export { Trainer };
