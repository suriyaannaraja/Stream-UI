import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  // videoURL = "https://www.youtube.com/embed/LFoz8ZJWmPs";
  // videoURL1 = "https://www.youtube.com/embed/qDuKsiwS5xw";
  // videoURL2 = "https://www.youtube.com/embed/r7pxFULcrhM";
  // videoURL3 = "https://www.youtube.com/embed/c9F5kMUfFKk";
  // videoURL4 = "https://www.youtube.com/embed/GYAB4Td62zI";
  // videoURL5 = "https://youtu.be/N3AkSS5hXMA";
  // videoURL6 = "https://youtu.be/SLwpqD8n3d0";
  // videoURL7 = "https://youtu.be/tiWqCBXnWj0";
  // videoURL8 = "https://youtu.be/ocz2Ml5Wg9g";
  // videoURL9 = "https://youtu.be/cQT33yu9pY8";
  // videoURL10 = "https://youtu.be/tTRy_GluLac";
  // videoURL11 = "https://youtu.be/-jeoyDJDsSM";
  // videoURL12 = "https://youtu.be/07d2dXHYb94";
  // videoURL13 = "https://youtu.be/nc5Lj90BzSQ";
  // videoURL14 = "https://youtu.be/f3NWvUV8MD8";
  // videoURL15 = "https://youtu.be/CUS2w4y2Qj4";
  // videoURL16 = "https://youtu.be/UT-mA673hLs";
  // videoURL17 = "https://youtu.be/eDrhZb2onWY";
  // videoURL18 = "https://youtu.be/9P5DTlg9oLc";
  // videoURL19 = "https://youtu.be/yojGPF2ZnAk";
  //  videoURL20 = "https://youtu.be/oXlwWbU8l2o";
  //  videoURL21 = "https://youtu.be/inCUJ0JM5ng"   

  videoId = [
    {
      "videoURL" : "ocz2Ml5Wg9g",
      "videoURL1" : "r7pxFULcrhM",
      "videoURL2" : "LFoz8ZJWmPs",
      "videoURL3" : "c9F5kMUfFKk",
      "videoURL4" : "GYAB4Td62zI",
      "videoURL5" : "N3AkSS5hXMA",
      "videoURL6" : "SLwpqD8n3d0",
      "videoURL7" : "tiWqCBXnWj0",
      "videoURL8" : "oXlwWbU8l2o",
      "videoURL9" : "cQT33yu9pY8",
      "videoURL10" : "tTRy_GluLac",
      "videoURL11" : "-jeoyDJDsSM",
      "videoURL12" : "07d2dXHYb94",
      "videoURL13" : "nc5Lj90BzSQ",
      "videoURL14" : "f3NWvUV8MD8",
      "videoURL15" : "CUS2w4y2Qj4",
      "videoURL16" : "UT-mA673hLs",
      "videoURL17" : "eDrhZb2onWY",
      "videoURL18" : "9P5DTlg9oLc",
      "videoURL19" : "yojGPF2ZnAk",
      "videoURL20" : "inCUJ0JM5ng",
    }
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
