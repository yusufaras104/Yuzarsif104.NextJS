import Script from 'next/script';
import { useEffect } from 'react';
import Button from '../components/Button';

export default function CalendlyButton() {
  function handleClick() {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/yusufaras/30min',
    });
    return false;
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <Button type="primary" onClick={handleClick}>Schedule a call</Button>
    </>
  );
}