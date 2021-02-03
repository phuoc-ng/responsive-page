import { Component, Prop, ComponentInterface, State, h } from '@stencil/core';

@Component({
    tag: 'demo-viewer',
    styleUrl: 'demo-viewer.css'
})
export class DemoViewer implements ComponentInterface {
    @Prop() url?: string;

    @State() frameWidth?: number;
    @State() frameHeight?: number;
    @State() scale: number = 1;

    frameContainer?: HTMLElement;
    frameContainerWidth?: number;
    frameContainerHeight?: number;

    componentDidLoad() {
        const rect = this.frameContainer!.getBoundingClientRect();
        this.frameContainerWidth = rect.width;
        this.frameContainerHeight = rect.height;
    }

    switchTo(width: number, height: number) {
        // Set the frame size
        this.frameWidth = width;
        this.frameHeight = height;

        // Calculate the scale to make sure the frame fit best in the container
        const s = Math.min(this.frameContainerWidth! / width, this.frameContainerHeight! / height);
        this.scale = Math.min(s, 1);
    }

    render() {
        return (
            <div class="demo-viewer">
                <div class="demo-viewer__toolbar">
                    <div class="demo-viewer__leftnav"><slot name="leftnav"></slot></div>

                    {/* iPhone 6-7-8 */}
                    <button class="demo-viewer__switch" onClick={() => this.switchTo(375, 667)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12,21.25h0a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0a.25.25,0,0,1,.25-.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M5.500 0.500 L18.500 0.500 L18.500 23.500 L5.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.5 19.5L5.5 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M18.5 4.5L5.5 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.5 2.5L13.5 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>

                    {/* Apple iPad Mini, Apple iPad 1/2/3/4 */}
                    <button class="demo-viewer__switch" onClick={() => this.switchTo(1024, 768)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M3.500 0.500 L20.500 0.500 L20.500 23.500 L3.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20.498 19.5L3.502 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M20.498 4.5L3.502 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12,21a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 21L12 21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12,2.5a.25.25,0,0,1,.25.25h0A.25.25,0,0,1,12,3h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 2.5L12 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>

                    {/* Apple Macbook 13" */}
                    <button class="demo-viewer__switch" onClick={() => this.switchTo(1366, 768)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M8.5,16.5c0,1.1,1.567,2,3.5,2s3.5-.9,3.5-2h5V5.167A1.667,1.667,0,0,0,18.833,3.5H5.167A1.667,1.667,0,0,0,3.5,5.167V16.5Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15.5,16.5c0,1.1-1.567,2-3.5,2s-3.5-.9-3.5-2H.5a5.281,5.281,0,0,0,5.123,4H18.377a5.281,5.281,0,0,0,5.123-4Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>

                    {/* Desktop monitors in 24" to 27" */}
                    <button class="demo-viewer__switch" onClick={() => this.switchTo(1920, 1080)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M9,22.5a6.979,6.979,0,0,0,1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M15,22.5a6.979,6.979,0,0,1-1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.499 22.5L16.499 22.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M0.5 15.5L23.5 15.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M0.500 1.500 L23.500 1.500 L23.500 18.500 L0.500 18.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>

                    <div class="demo-viewer__rightnav"><slot name="rightnav"></slot></div>
                </div>
                <div class="demo-viewer__body" ref={ele => this.frameContainer = ele}>
                    <iframe 
                        class="demo-viewer__frame"
                        style={{
                            width: `${this.frameWidth}px`,
                            height: `${this.frameHeight}px`,
                            transform: `scale(${this.scale})`,
                        }}
                        src={this.url}
                    />
                </div>
            </div>
        );
    }
}