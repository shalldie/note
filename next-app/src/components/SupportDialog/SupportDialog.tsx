import React from 'react';
import { createPortal } from 'react-dom';
import { TransitionWrap } from '../TransitionWrap';

export interface ISupportDialogProps {
    open: boolean;
    onClose: () => void;
}

export const SupportDialog: React.FC<ISupportDialogProps> = props => {
    const qrCodes = [
        `${process.env.CDN_PREFIX}images/public/zfb_pay.jpg`,
        `${process.env.CDN_PREFIX}images/public/weixin_pay.jpg`
    ];

    return createPortal(
        <TransitionWrap in={props.open} mode="slide">
            <div className="support-dialog fixed left-0 top-0 w-full h-[120%] z-10 align-middle bg-black bg-opacity-5 backdrop-blur">
                {/* mask */}
                <div className="absolute inset-0" onClick={props.onClose}></div>
                {/* main */}
                <div className="relative mt-[6%] mx-auto bg-white w-[600px] rounded shadow-2xl text-center p-7">
                    <i
                        onClick={props.onClose}
                        className="fa-solid fa-xmark absolute right-4 top-3 text-[30px] cursor-pointer duration hover:rotate-180"
                    ></i>

                    <h2>
                        <span>捐赠一杯咖啡</span>
                        <i className="fa fa-coffee"></i>
                    </h2>
                    <p>你会帮助一位善良的程序员改善生活 &gt;_&lt;#@!</p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-1 h-[300px]">
                            <img src={qrCodes[0]} alt="支付宝" className="w-full h-full shadow-card" />
                        </div>
                        <div className="col-span-1">
                            <img src={qrCodes[1]} alt="微信" className="w-full h-full shadow-card" />
                        </div>
                    </div>
                </div>
            </div>
        </TransitionWrap>,
        document.body
    );
};
