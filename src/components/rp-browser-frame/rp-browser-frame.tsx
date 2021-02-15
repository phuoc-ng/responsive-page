/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
    tag: 'rp-browser-frame',
    styleUrl: 'rp-browser-frame.css'
})
export class RpBrowserFrame {
    @Event() rotateEvent?: EventEmitter;
    @Event() activateTabEvent?: EventEmitter<number>;
    @Prop() backUrl?: string;
    @Prop() browserTitle?: string;
    @Prop() currentTab: number = 0;
    @Prop() forwardUrl?: string;

    rotate = () => this.rotateEvent!.emit();    
    viewDemo = () => this.activateTabEvent!.emit(0);
    viewSource = () => this.activateTabEvent!.emit(1);

    render() {
        return (
            <div class="rp-browser-frame">
                <div class="rp-browser-frame__tabs">
                    <div class="rp-browser-frame__buttons">
                        <div class="rp-browser-frame__button rp-browser-frame__button--close"></div>
                        <div class="rp-browser-frame__button rp-browser-frame__button--min"></div>
                        <div class="rp-browser-frame__button rp-browser-frame__button--full"></div>
                    </div>
                    <div class={`rp-browser-frame__tab ${this.currentTab === 0 ? 'rp-browser-frame__tab--active' : ''}`}>
                        <div class="rp-browser-frame__round--left"></div>
                        <div class="rp-browser-frame__round--right"></div>
                        <button class="rp-browser-frame__title" onClick={this.viewDemo}>
                            {this.browserTitle!}
                        </button>
                    </div>
                    <div class={`rp-browser-frame__tab ${this.currentTab === 1 ? 'rp-browser-frame__tab--active' : ''}`}>
                        <div class="rp-browser-frame__round--left"></div>
                        <div class="rp-browser-frame__round--right"></div>
                        <button class="rp-browser-frame__title" onClick={this.viewSource}>
                            Source
                        </button>
                    </div>
                </div>
                <div class="rp-browser-frame__bar">
                    <rp-tooltip tip="Previous pattern" position="bottom">
                        <a class={`rp-browser-frame__action ${!this.backUrl! && 'rp-browser-frame__action--disabled'}`} {...href(this.backUrl!)}>
                            <rp-icon-previous />
                        </a>
                    </rp-tooltip>
                    <rp-tooltip tip="Next pattern" position="bottom">
                        <a class={`rp-browser-frame__action ${!this.forwardUrl! && 'rp-browser-frame__action--disabled'}`} {...href(this.forwardUrl!)}>
                            <rp-icon-next />
                        </a>
                    </rp-tooltip>
                    <rp-tooltip tip="Rotate screen" position="bottom">
                        <button class="rp-browser-frame__action" onClick={this.rotate}>
                            <rp-icon-rotate />
                        </button>
                    </rp-tooltip>
                    <rp-tooltip tip="View source" position="bottom">
                        <button class="rp-browser-frame__action" onClick={this.viewSource}>
                            <rp-icon-code />
                        </button>
                    </rp-tooltip>
                    <div class="rp-browser-frame__address"></div>
                </div>
            </div>
        );
    }
}
