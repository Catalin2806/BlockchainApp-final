import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const router=useRouter();

  console.log(router.query.ChartName);
  const ChartName=router.query.ChartName;
  const onLoadScriptRef = useRef();

  
  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;
       
      function createWidget() {
        if (document.getElementById('tradingview_49955') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 980,
            height: 800,
            symbol: `CRYPTOCAP:${ChartName}`,
            interval: "W",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_49955"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
    <div id='tradingview_49955' />
    <div className="tradingview-widget-copyright">
       by TradingView
    </div>
  </div>
  );
}