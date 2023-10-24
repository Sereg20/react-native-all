import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export const init = () => {
    const promise = new Promise((res, rej) => {
        database.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL
                )`,
                [],
                () => {res()},
                (_, err) => {rej(err)}
            )
        })
    });

    return promise;
}

export const insertPlace = (place) => {
    const promise = new Promise((res, rej) => {
        database.transaction(tx => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri) VALUES (?, ?)`, 
                [place.title, place.imageUri],
                (_, result) => {res(result)},
                (_, err) => {rej(err)}
            )
        })
    });

    return promise;
};

export const fetchPlaces = () => {
    const promise = new Promise((res, rej) => {
        database.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM places`, 
                [],
                (_, result) => {res(result)},
                (_, err) => {rej(err)}
            )
        })
    });

    return promise;
};