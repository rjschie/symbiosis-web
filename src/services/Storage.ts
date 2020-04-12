const LS_KEY = 'symbiosis';

export interface CounterData {
  value: number;
}

interface CounterCollection {
  [k: string]: CounterData;
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\W/g, '-');
}

export default class Storage {
  static get(label: string): CounterData {
    const DB = this.getDB();
    const item = DB[slugify(label)];

    return item || { value: 0 };
  }

  static set(label: string, value: number): void {
    let DB = this.getDB();
    DB = {
      ...DB,
      [slugify(label)]: {
        value,
      },
    };

    this.setDB(DB);
  }

  static clear(): void {
    window.localStorage.removeItem(LS_KEY);
  }

  private static getDB(): CounterCollection {
    const dbStr = window.localStorage.getItem(LS_KEY) || '';
    let db: CounterCollection = {};

    try {
      db = JSON.parse(dbStr);
    } catch (e) {
      //
    }

    return db;
  }

  private static setDB(db: CounterCollection): void {
    if (!db || typeof db !== 'object') {
      return;
    }

    window.localStorage.setItem(LS_KEY, JSON.stringify(db));
  }
}
