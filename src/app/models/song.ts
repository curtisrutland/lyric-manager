export interface ISong {
    title: string;
    artist: string;
    lyrics: string[];
}

export class Song {
    title: string;
    artist: string;
    lyrics: string[];
    constructor(song?: ISong) {
        this.title = song.title;
        this.artist = song.artist;
        this.lyrics = song.lyrics;
    }
}