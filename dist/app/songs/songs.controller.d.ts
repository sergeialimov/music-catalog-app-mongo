import { SongsService } from './songs.service';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
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
    getOneQuery(id: any): any;
    create(query: any): any;
    update(query: any): any;
    delete(id: number): string;
    getAllOld(): any;
}
