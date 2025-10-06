// Render laptop skin thumbnails from JPGs listed in contents/manifest.json.
(async function(){
  const grid = document.getElementById('skinsGrid');
  const pageInfo = document.getElementById('pageInfo');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  if (!grid) return;

  // Load image list from manifest and de-duplicate
  async function loadImages(){
    try {
      const resp = await fetch('contents/manifest.json', { cache: 'no-store' });
      if (!resp.ok) return [];
      const data = await resp.json();
      const list = (data.laptopSkinImages || data.laptopSkins || [])
        .filter(Boolean)
        .filter(p => /\.jpe?g$/i.test(p))
        .map(p => p.startsWith('contents/') ? p : `contents/${p}`);
      // Only keep items inside Laptop Skins folder
      const inFolder = list.filter(p => /contents\/Laptop Skins\//i.test(p));
      // De-duplicate
      return Array.from(new Set(inFolder));
    } catch {
      return [];
    }
  }

  let images = await loadImages();
  if (images.length === 0) {
    const base = 'contents/Laptop Skins';
    const f = (folder, names) => names.map(n => `${base}/${folder}/${n}`);
    images = []
      .concat(
        f('Laptop Le 301 to 315 05', [
          '0.jpg','10.jpg','12.jpg','13.jpg','14.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'
        ]),
        f('Laptop Le01 to Le 67 01', [
          '0.jpg','1.jpg','10.jpg','11.jpg','111.jpg','12.jpg','122.jpg','13.jpg','134.jpg','14.jpg','145.jpg','15.jpg','16.jpg','167.jpg','17.jpg','178.jpg','18.jpg','19.jpg','20.jpg','212.jpg','223.jpg','23.jpg','234.jpg','24.jpg','25.jpg','256.jpg','26.jpg','260.jpg','27.jpg','272.jpg','28.jpg','289.jpg','29.jpg','3.jpg','30.jpg','300.jpg','301.jpg','303.jpg','31.jpg','315.jpg','316.jpg','32.jpg','33.jpg','34.jpg','349.jpg','35.jpg','360.jpg','37.jpg','38.jpg','39.jpg','4.jpg','40.jpg','41.jpg','42.jpg','46.jpg','47.jpg','48.jpg','49.jpg','5.jpg','50.jpg','51.jpg','54.jpg','55.jpg','56.jpg','57.jpg','58.jpg','59.jpg','6.jpg','60.jpg','61.jpg','63.jpg','64.jpg','65.jpg','66.jpg','67.jpg','68.jpg','69.jpg','7.jpg','70.jpg','71.jpg','72.jpg','73.jpg','74.jpg','75.jpg','76.jpg','77.jpg','78.jpg','79.jpg','8.jpg','80.jpg','81.jpg','82.jpg','83.jpg','84.jpg','85.jpg','86.jpg','87.jpg','88.jpg','89.jpg','9.jpg'
        ]),
        f('Laptop Le183 03', [
          '0.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','3.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','4.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','5.jpg','50.jpg','51.jpg','52.jpg','53.jpg','54.jpg','55.jpg','56.jpg','57.jpg','58.jpg','59.jpg','6.jpg','60.jpg','61.jpg','62.jpg','63.jpg','64.jpg','7.jpg','9.jpg'
        ]),
        f('Laptop Le247 to 300 04', [
          '0.jpg','1.jpg','10.jpg','11.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','3.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','4.jpg','40.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','5.jpg','50.jpg','51.jpg','52.jpg','53.jpg','54.jpg','55.jpg','6.jpg','7.jpg','8.jpg','9.jpg'
        ]),
        f('Laptop Le68 to Le 182 02', [
          '0.jpg','10.jpg','100.jpg','101.jpg','102.jpg','103.jpg','104.jpg','105.jpg','106.jpg','107.jpg','109.jpg','11.jpg','110.jpg','111.jpg','112.jpg','113.jpg','114.jpg','115.jpg','116.jpg','117.jpg','118.jpg','119.jpg','12.jpg','120.jpg','121.jpg','122.jpg','123.jpg','124.jpg','125.jpg','126.jpg','127.jpg','128.jpg','129.jpg','13.jpg','130.jpg','131.jpg','132.jpg','133.jpg','135.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','2.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','3.jpg','30.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','4.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','5.jpg','56.jpg','57.jpg','58.jpg','59.jpg','6.jpg','60.jpg','61.jpg','62.jpg','63.jpg','64.jpg','65.jpg','66.jpg','67.jpg','69.jpg','7.jpg','70.jpg','71.jpg','75.jpg','76.jpg','77.jpg','78.jpg','79.jpg','8.jpg','81.jpg','82.jpg','83.jpg','84.jpg','87.jpg','88.jpg','89.jpg','9.jpg','90.jpg','91.jpg','92.jpg','93.jpg','94.jpg','96.jpg','97.jpg','98.jpg','99.jpg'
        ])
      );
  }
  let totalItems = images.length;
  const pageSize = 30; let page = 1;
  const totalPages = Math.max(1, Math.ceil(Math.max(0, totalItems) / pageSize));

  async function render(){
    grid.innerHTML = '';
    if (totalItems === 0) {
      const empty = document.createElement('div');
      empty.className = 'card';
      empty.style.padding = '12px';
      empty.textContent = 'No images found. Please add entries to contents/manifest.json under laptopSkinImages.';
      grid.appendChild(empty);
      if (pageInfo) pageInfo.textContent = '';
      prevBtn && (prevBtn.disabled = true);
      nextBtn && (nextBtn.disabled = true);
      return;
    }
    const start = (page-1)*pageSize; const end = Math.min(start+pageSize, totalItems);
    const frag = document.createDocumentFragment();
    for(let i=start;i<end;i++){
      const n = i + 1; // display number starts from 1
      const card = document.createElement('div');
      card.className = 'card';
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = `Skin #${n}`;
      img.src = images[i];
      img.addEventListener('click', ()=> openLightbox(images[i]));
      thumb.appendChild(img);
      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.innerHTML = `<span class="badge">#${n}</span><span>Image</span>`;
      card.appendChild(thumb);
      card.appendChild(meta);
      frag.appendChild(card);
    }
    grid.appendChild(frag);
    if (pageInfo) pageInfo.textContent = `Page ${page} / ${totalPages}`;
    if (prevBtn) prevBtn.disabled = page<=1;
    if (nextBtn) nextBtn.disabled = page>=totalPages;
  }

  prevBtn && prevBtn.addEventListener('click', ()=>{ if (page>1){ page--; render(); } });
  nextBtn && nextBtn.addEventListener('click', ()=>{ if (page<totalPages){ page++; render(); } });
  render();
})();

// Lightweight lightbox implementation
(function(){
  let lb, lbImg;
  function ensure(){
    if (lb) return;
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lb-close">✕</button>';
    lbImg = document.createElement('img');
    lb.appendChild(lbImg);
    document.body.appendChild(lb);
    lb.addEventListener('click', (e)=>{
      if (e.target === lb || e.target.closest('.lb-close')) closeLightbox();
    });
    document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeLightbox(); });
  }
  window.openLightbox = function(src){
    ensure();
    lbImg.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeLightbox = function(){
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
  };
})();


