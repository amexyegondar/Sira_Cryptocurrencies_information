
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://mikishibabawdevatethio.vercel.app/"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%", position:'absolute' }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://mikishibabawdevatethio.vercel.app/" rel="noopener nofollow"><span className="blue-text">Developer | Portfolio</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
