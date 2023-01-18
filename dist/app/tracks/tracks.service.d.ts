export declare class TracksService {
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
    createTrack(name: string): any;
    updateTrack(id: number, newName: string): any;
    deleteTrack(id: number): string;
}
