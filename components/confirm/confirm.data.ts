import { Injectable, } from '@angular/core';

export const DefaultConfig = {
    cancelTitle: 'Cancel',
    okTitle: 'Confirm'
};

@Injectable()
export class ConfirmConfig {
    cancelTitle: string;
    okTitle: string;
    icon: string;
}

