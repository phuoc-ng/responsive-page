import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'browser-frame',
    styleUrl: 'browser-frame.css'
})
export class BrowserFrame {
    @Prop() browserTitle?: string;

    render() {
        return (
            <div class="browser-frame">
                <div class="browser-frame__tabs">
                    <div class="browser-frame__buttons">
                        <div class="browser-frame__button browser-frame__button--close"></div>
                        <div class="browser-frame__button browser-frame__button--min"></div>
                        <div class="browser-frame__button browser-frame__button--full"></div>
                    </div>
                    <div class="browser-frame__tab">
                        <div class="browser-frame__round--left"></div>
                        <div class="browser-frame__round--right"></div>
                        <div class="browser-frame__title">{this.browserTitle!}</div>
                    </div>
                </div>
                <div class="browser-frame__bottom"></div>
            </div>
        );
    }
}
