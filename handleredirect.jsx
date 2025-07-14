const params = new URLSearchParamsearch (window.location.search);
const redirectId = params.get('r');


if (redirectId){
    const item = localStorage.getItem (redirectId);

    if (item){
        const parsed = JSON.parse(item);
        parsed.clicks++;
        parsed.logs.push(Date.now());
    localStorage.setItem(redirectId, JSON.stringify(parsed));
    window.location.href = parsed.originalUrl;
  } else {
    document.body.innerHTML = '<h2>Invalid or expired link</h2>';
  }
}

    