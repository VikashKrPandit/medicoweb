/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { ElementRef, Directive, HostListener } from "@angular/core";
@Directive({
    selector: '[parentRemove]'
})
export class ParentRemoveDirective {
    alert_parent: any;
    constructor(private elements: ElementRef) { }

    @HostListener('click', ['$event'])
    onToggle($event: any) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    }
}