// Compteur de visites maison (21/10/2026) : une vue par page affichée et sa provenance (Google, ChatGPT…). Sans cookie.
(function () {
  try {
    if (!/(^|\.)basstrading\.fr$/.test(location.hostname)) return;
    var q = new URLSearchParams(location.search);
    var u = "/v/?p=" + encodeURIComponent(location.pathname) + "&r=" + encodeURIComponent(q.get("utm_source") || document.referrer || "");
    if (navigator.sendBeacon) navigator.sendBeacon(u); else fetch(u, { method: "POST", keepalive: true });
  } catch (e) {}
})();
