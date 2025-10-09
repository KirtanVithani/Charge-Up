// Render 150-200 sticker PNGs from contents/stickers/NNN.png (or via manifest)
(async function(){
  const grid = document.getElementById('stickersGrid');
  if (!grid) return;
  let list = [];
  try {
    const resp = await fetch('/contents/manifest.json');
    if (resp.ok) {
      const data = await resp.json();
      list = (data.stickers||[]).map((p,idx)=>({src:p, n: idx+1}));
    }
  } catch {}
  if (list.length === 0) {
    // fallback: 1..180
    list = Array.from({length:180},(_,i)=>({src:`contents/stickers/${i+1}.png`, n:i+1}));
  }
  const frag = document.createDocumentFragment();
  list.forEach(item=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img class="thumb" src="${item.src}" alt="Sticker ${item.n}" onerror="this.style.display='none'">
      <div class="meta"><span class="badge">#${item.n}</span><span>PNG</span></div>`;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
})();


