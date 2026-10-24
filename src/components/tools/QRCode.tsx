'use client'
import { useQRCode } from 'next-qrcode';
import { useRef, useState } from 'react';
import img from "/public/brewclick.png";

export default function QRCode() {
  const { Canvas } = useQRCode();
  const [text, setText] = useState('brewclick.com');
  const [link, setLink] = useState(text);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      download(canvas, 'qrcode.png');
    }
  };

  return (
    <section>
        <h1>Generate QR Code for Website</h1>
        <div ref={canvasRef as any}>
          <Canvas
              text={link}
              options={{
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 200,
                  color: {
                  dark: '#010599FF',
                  light: '#FFBF60FF',
                  },
              }}
              // logo={img}
          />
        </div>
        <input type="text" value={text} onChange={event => setText(event.target.value)}/>
        <button onClick={event => setLink(text)} className="w-full bg-primary text-tertiary font-font2 font-bold text-center py-4 px-6 rounded-radius inline-block transition-transform hover:translate-y-[-2px]">
          Submit
        </button>
        <button onClick={handleDownload} className="w-full bg-primary text-tertiary font-font2 font-bold text-center py-4 px-6 rounded-radius inline-block transition-transform hover:translate-y-[-2px]">
          Download
        </button>
    </section>
  );
}

function download(canvas: HTMLCanvasElement, filename: string) {
  /// create an "off-screen" anchor tag
  const lnk = document.createElement('a');

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  console.log(canvas)
  const canvasElement = canvas.querySelector('canvas');
  if (canvasElement) {
    lnk.href = canvasElement.toDataURL("image/png;base64");
  }

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    const e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else {
    // Fallback for older browsers
    lnk.click();
  }
}