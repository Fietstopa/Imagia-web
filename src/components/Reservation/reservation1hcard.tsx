import React, { useEffect } from "react";

const Reservation1hCard: React.FC = () => {
  useEffect(() => {
    // Vytvoříme script element s embed kódem
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
(function (C, A, L) { 
  let p = function (a, ar) { a.q.push(ar); }; 
  let d = C.document; 
  C.Cal = C.Cal || function () { 
    let cal = C.Cal; 
    let ar = arguments; 
    if (!cal.loaded) { 
      cal.ns = {}; 
      cal.q = cal.q || []; 
      d.head.appendChild(d.createElement("script")).src = A; 
      cal.loaded = true; 
    } 
    if (ar[0] === L) { 
      const api = function () { p(api, arguments); }; 
      const namespace = ar[1]; 
      api.q = api.q || []; 
      if(typeof namespace === "string"){
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar); 
      return;
    } 
    p(cal, ar); 
  }; 
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "1h-rezervace", {origin:"https://cal.com"});

Cal.ns["1h-rezervace"]("inline", {
  elementOrSelector:"#my-cal-inline",
  config: {"layout":"month_view"},
  calLink: "bohdan-mauser-st3uqp/1h-rezervace",
});

Cal.ns["1h-rezervace"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    // Volitelně: při odchodu z komponenty můžeme script odstranit
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="my-cal-inline"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    ></div>
  );
};

export default Reservation1hCard;
