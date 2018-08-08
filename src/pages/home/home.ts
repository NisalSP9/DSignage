import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VideoPlayer,VideoOptions} from "@ionic-native/video-player";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videoOptions: VideoOptions;
  videoURL : string;

  constructor(private videoPlayer : VideoPlayer,public navCtrl: NavController) {

  }

  async playVideo(){
    try {

      this.videoOptions = {
        volume : 0.7
      };
      this.videoURL = "http://techslides.com/demos/sample-videos/small.mp4";
      this.videoPlayer.play(this.videoURL,this.videoOptions);


    }catch(e){
      console.error(e);
    }

  }

}
