import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-enlarge-img',
    templateUrl: './enlarge-img.component.html',
    styleUrls: ['./enlarge-img.component.less']
})
export class EnlargeImgComponent implements OnInit {
    @Input() imgSrc: string;
    constructor() { }

    ngOnInit() {
        $('.enlarge').each((index, element) => {
            $(element).hover(() => {
                console.log(index);
                $(element).parent().css('position', 'relative');
                const htmlHeight = window.innerHeight - 100;
                const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                const imgTop = $(element).offset().top;
                // tslint:disable-next-line:max-line-length
                const imgHeight = (600 * $(element).parent().find('.enlarge img').height()) / $(element).parent().find('.enlarge img').width();
                if (imgTop - scrollTop + imgHeight > htmlHeight) {
                    const DValue = imgTop - scrollTop + imgHeight - htmlHeight + 50;
                    $(element).parent().find('.biggerPhoto').css('top', '-' + DValue + 'px');
                }
                $(element).parent().find('img').animate({opacity: '1'});
                $(element).parent().find('.biggerPhoto').fadeIn(300);
            }, () => {
                $(element).parent().find('.biggerPhoto').fadeOut(300);
            });
        });
    }
}
