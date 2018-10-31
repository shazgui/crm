import { NgModule } from '@angular/core';

import { CrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CrmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CrmSharedCommonModule {}
