export declare class SongsService {
    getAll(): ({
        id: number;
        name: string;
        hidden: boolean;
    } | {
        id: number;
        name: string;
        hidden: boolean;
    } | {
        id: number;
        name: string;
        hidden: boolean;
    } | {
        id: number;
        name: string;
        hidden: boolean;
    })[];
    getOne(id: number): any;
    createSong(name: string): any;
    updateSong(id: number, newName: string): any;
    deleteSong(id: number): string;
}
