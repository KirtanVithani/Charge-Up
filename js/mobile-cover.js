// Render two phone cover images with PDF links below, centered and stacked on mobile
(async function(){
  const grid = document.getElementById('coversGrid');
  if (!grid) return;
  const items = [
    {
      pdf: 'contents/Phone Cover/Em-123 to EM-220 (6).pdf.pdf',
      imageCandidates: [ 'contents/Phone Cover/image1.jpg' ]
    },
    {
      pdf: 'contents/Phone Cover/Em-221 TO 286 done.pdf.pdf',
      imageCandidates: [ 'contents/Phone Cover/image2.jpg' ]
    }
  ];
  grid.innerHTML = '';
  grid.classList.remove('grid');
  grid.classList.add('covers-center');
  const wrapper = document.createElement('div');
  wrapper.className = 'cover-pdfs';
  items.forEach((it, idx) => {
    const item = document.createElement('div');
    item.className = 'cover-item card';
    const img = document.createElement('img');
    img.className = 'cover-thumb';
    img.alt = `Phone cover ${idx+1}`;
    img.src = it.imageCandidates[0];
    img.onerror = function(){
      if (img.dataset.triedJpeg !== '1' && it.imageCandidates[1]) {
        img.dataset.triedJpeg = '1';
        img.src = it.imageCandidates[1];
      } else {
        img.style.display = 'none';
      }
    };
    const link = document.createElement('a');
    link.className = 'btn';
    link.href = it.pdf;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = `Download PDF ${idx+1}`;
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.style.justifyContent = 'center';
    item.appendChild(img);
    item.appendChild(meta);
    meta.appendChild(link);
    wrapper.appendChild(item);
  });
  grid.appendChild(wrapper);
})();


