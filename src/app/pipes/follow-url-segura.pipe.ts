import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'followurlsegura'
})
export class FollowUrlSeguraPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string): any {

    const url = 'https://open.spotify.com/follow/1/?uri='; 

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
