/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController, PopoverController, ActionSheetController, Platform } from '@ionic/angular';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/services/api.service';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { CartService } from 'src/app/services/cart.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  id: any;
  myaddress: any[] = [];
  from: any;
  selectedAddress: any;
  dummy = Array(10);
  cover: any = '';
  pscimage: any = '';
  constructor(
    private navCtrl: NavController,
    public api: ApiService,
    public util: UtilService,
    private router: Router,
    private route: ActivatedRoute,
    private popoverController: PopoverController,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    public cart: CartService,
    public platform: Platform
  ) {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      if (data && data.from) {
        this.from = data.from;
      }
    });
    this.getAddress();
    this.util.subscribeNewAddress().subscribe((data) => {
      console.log('subscribe master address');
      this.getAddress();
    });
    this.pscimage = '';
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  getAddress() {
    const param = {
      id: localStorage.getItem('uid')
    }
    this.myaddress = [];
    this.dummy = Array(10);
    this.api.post_private('address/getByUid', param).subscribe((data: any) => {
      console.log(data);
      this.dummy = [];
      if (data && data.status === 200 && data.data.length) {
        this.myaddress = data.data;
      }
    }, error => {
      console.log(error);
      this.dummy = [];
      this.util.errorToast(this.util.getString('Something went wrong'));
    });
  }

  ionViewWillEnter() {
    // this.getAddress();
  }

  addNew() {
    this.router.navigate(['add-address']);
  }

  selectAddress() {
    if (this.from === 'cart') {
      const selecte = this.myaddress.filter(x => x.id === this.selectedAddress);
      const item = selecte[0];
      console.log('item', item);
      this.cart.deliveryAddress = item;
      this.cart.calcuate();
      this.router.navigate(['/tabs/cart/payment']);
    }
  }

  async openMenu(item, events) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: events,
      mode: 'ios',
    });
    popover.onDidDismiss().then(data => {
      console.log(data.data);
      if (data && data.data) {
        if (data.data === 'edit') {
          const navData: NavigationExtras = {
            queryParams: {
              from: 'edit',
              data: JSON.stringify(item)
            }
          };
          this.router.navigate(['add-address'], navData);
        } else if (data.data === 'delete') {
          console.log(item);
          Swal.fire({
            title: 'Are you sure?',
            text: 'to delete this address',
            icon: 'question',
            confirmButtonText: 'Yes',
            backdrop: false,
            background: 'white',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'cancel'
          }).then(data => {
            console.log(data);
            if (data && data.value) {
              this.util.show();
              const param = {
                id: item.id
              };
              this.api.post_private('address/deleteList', param).subscribe(info => {
                console.log(info);
                this.util.hide();
                this.getAddress();
              }, error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.getString('Something went wrong'));
              });
            }
          });

        }
      }
    });
    await popover.present();
  }

  upload(type) {
    try {
      const options: CameraOptions = {
        quality: 100,
        targetHeight: 800,
        targetWidth: 800,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
      };
      if (this.platform.is('cordova')) {
        this.camera.getPicture(options).then((url) => {
          console.log('url-========>', url);
          this.util.show('uploading');
          const alpha = {
            img: url,
            type: 'jpg'
          };
          console.log('parma==>', alpha);
          this.api.nativePost('users/upload_file', alpha).then((data) => {
            this.util.hide();
            console.log('data======', JSON.parse(data.data));
            const info = JSON.parse(data.data);
            // this.cover = info.data;
            this.pscimage = info.data
            console.log('cover image================>', this.pscimage);
            // const param = {
            //   cover: this.cover,
            //   id: localStorage.getItem('uid')
            // };
            // this.util.show(this.util.getString('updating...'));
            // this.api.post('users/edit_profile', param).subscribe((update: any) => {
            //   this.util.hide();
            //   console.log(update);
            // }, error => {
            //   this.util.hide();
            //   console.log(error);
            //   this.util.errorToast(this.util.getString('Something went wrong'));
            // });
          }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
          }).catch(error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
          });
        });
      }

    } catch (error) {
      console.log('error', error);
      this.util.errorToast(this.util.getString('Something went wrong'));
    }
  }

  async uploadPriscription() {
    const actionSheet = await this.actionSheetController.create({
      header: this.util.getString('Choose from'),
      buttons: [{
        text: this.util.getString('Camera'),
        icon: 'camera',
        handler: () => {
          console.log('camera clicked');
          this.upload('camera');
        }
      }, {
        text: this.util.getString('Gallery'),
        icon: 'images',
        handler: () => {
          console.log('gallery clicked');
          this.upload('gallery');
        }
      }, {
        text: this.util.getString('Cancel'),
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

}
