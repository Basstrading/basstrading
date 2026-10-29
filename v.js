// Compteur de visites maison (21/10/2026) : une vue par page affichée et sa provenance (Google, ChatGPT…). Sans cookie.
// 29/10 : ?src= (posé par nos liens tracés /l/…) compte aussi : les applis Instagram, TikTok, LinkedIn n'envoient pas d'adresse d'origine.
(function () {
  try {
    if (!/(^|\.)basstrading\.fr$/.test(location.hostname)) return;
    var q = new URLSearchParams(location.search);
    var u = "/v/?p=" + encodeURIComponent(location.pathname) + "&r=" + encodeURIComponent(q.get("utm_source") || q.get("src") || document.referrer || "");
    if (navigator.sendBeacon) navigator.sendBeacon(u); else fetch(u, { method: "POST", keepalive: true });
  } catch (e) {}
})();
