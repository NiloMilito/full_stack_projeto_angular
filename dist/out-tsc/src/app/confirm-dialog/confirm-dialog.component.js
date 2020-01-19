import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() { }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
};
ConfirmDialogComponent = tslib_1.__decorate([
    Component({
        selector: 'app-confirm-dialog',
        templateUrl: './confirm-dialog.component.html',
        styleUrls: ['./confirm-dialog.component.scss']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], ConfirmDialogComponent);
export { ConfirmDialogComponent };
export class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}
//# sourceMappingURL=confirm-dialog.component.js.map