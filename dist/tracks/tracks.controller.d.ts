import { TracksService } from './tracks.service';
export declare class TracksController {
    private tracksService;
    constructor(tracksService: TracksService);
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
