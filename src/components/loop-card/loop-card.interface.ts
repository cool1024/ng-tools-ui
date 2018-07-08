import { SafeResourceUrl } from '@angular/platform-browser';

export interface LoopCard {
    id: number;
    url: string;
    src: string | SafeResourceUrl;
    active?: boolean;
    file?: File;
}

export interface LoopCardConfig {
    host: string;
    saveTitle: string;
    removeTitle: string;
    successTitle: string;
    warningTitle: string;
    textTitle: string;
    defaultBackground: string;
}
