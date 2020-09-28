import { InjectionToken } from '@angular/core';

// creating an injector token for passing data to overlay
export const PRODUCT_DETAILS = new InjectionToken<{}>('PRODUCT_DETAILS');
