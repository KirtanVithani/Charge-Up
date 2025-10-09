// Render two phone cover images with PDF links below, centered and stacked on mobile
// Build gallery from Phone Cover folders with global numbering and category filters
(function(){
  const grid = document.getElementById('coversGrid');
  if (!grid) return;

  // Define categories and source directories
  const categories = [
    { key: 'cars', label: 'Cars and Bikes', dir: 'contents/Phone Cover/Cars and Bikes' },
    { key: 'anime', label: 'Anime and Cartoon', dir: 'contents/Phone Cover/Anime and Cartoon' },
    { key: 'marvel', label: 'Marvel', dir: 'contents/Phone Cover/Marvel' },
    { key: 'natural', label: 'Natural', dir: 'contents/Phone Cover/Natural' },
    { key: 'spiritual', label: 'Spiritual', dir: 'contents/Phone Cover/Spiritual' },
    { key: 'others', label: 'Movies and Others', dir: 'contents/Phone Cover/Movies and Others' }
  ];

  // Hard-coded manifest generated from folder scan. Add files to extend.
  // Only include supported image extensions
  const manifest = [];

  function addMany(catKey, dir, files){
    files.forEach(name => {
      manifest.push({ dir, name, category: catKey });
    });
  }

  // NOTE: The file lists below were not auto-generated at runtime; if new files are added,
  // this script will still work for previously listed files. For full automation, a backend or a generated JSON would be needed.

  // Cars and Bikes
  addMany('cars','contents/Phone Cover/Cars and Bikes', [
    '_A futuristic sports motorcycle in a cyberpunk….jpeg',
    '#background #cars.jpeg',
    '#carstagram #luxurycars #mk #e #bmwm #cargram….jpeg',
    '#dodge.jpeg',
    '#luxury #car.jpeg',
    '#spiderman #spidermanfarfromhome….jpeg',
    '#supra #gtr #mustang #MwB.jpeg',
    '1188ab7b-45da-4b74-8852-fd9e2ec70fd1.jpeg',
    '1b5f558f-4552-47b0-9857-aa6498406f94.jpeg',
    '1ce5bf6f-4882-408c-94a3-1f2f52a3fb12.jpeg',
    '2c91e50a-c931-4804-880a-53530d0f81b6.jpeg',
    '2f476d01-e7f9-41df-b755-4e6f66d15829.jpeg',
    '33160608-650b-49d4-8e31-f6956f9216ad.jpeg',
    '337fe0e7-caa6-4a14-8fb5-8fdca41d65b1.jpeg',
    '394d975b-ed36-40d2-b22d-f687f0111887.jpeg',
    '3fc3492d-6bab-46a5-8106-45bd2b4c26dd.jpeg',
    '4939b184-6e1a-4972-b929-7438ea2560e2.jpeg',
    '505f1f2a-59f3-4cec-b834-c7f0924474f3.jpeg',
    '51596cad-c355-4484-b9ed-29779defc7f9.jpeg',
    '55b69dd2-185a-4b96-8993-51cab070f3f4.jpeg',
    '5da3432d-a415-4596-9135-1a86170f1269.jpeg',
    '66bc92df-d26e-4bcb-9dff-82a68d8ab916.jpeg',
    '6c80b2e3-d04b-4808-8324-576e710d3a19.jpeg',
    '74972851-612c-4439-83e6-c0874a925c43.jpeg',
    '7db8abad-359b-4760-a290-9bb30c42a87a.jpeg',
    '9260eb3c-03cf-41a4-b61a-222aa6936ab3.jpeg',
    '930acdb9-1c81-46c7-91d0-7ea84774744b.jpeg',
    '965102af-99bd-4a0c-bfd4-d2418fb20f8d.jpeg',
    '9bcad87f-9226-4413-8de1-05a7b2e56c41.jpeg',
    'A breathtaking close-up of the Kawasaki Ninja H2R….jpeg',
    'a5a165e0-e47e-4cd7-89ba-c64c7ebd2b07.jpeg',
    'Adventure begins where limits end — on two….jpeg',
    'Audi R8.jpeg',
    'b572495e-437a-45ac-aa23-7d2b28518d58.jpeg',
    'b8b9ff0c-c040-4099-99cc-9a65c840a867.jpeg',
    'bbaa1feb-bbc6-499b-a7b8-cd99568aad64.jpeg',
    'bce573d1-ed70-4c5f-899d-31f6da929bc7.jpeg',
    'c46e2161-c540-4703-a5fd-37aaa01b0575.jpeg',
    'c92539aa-f21e-46e6-8772-c260dcf65fe6.jpeg',
    'Capturing the timeless elegance of a classic car….jpeg',
    'cc407037-0aca-4485-a7a8-9f4fe44979b3.jpeg',
    'd7800149-987c-4a11-b621-f65ac833ad73.jpeg',
    'd9fd3609-8540-482e-85cb-6c79d2bbb99e.jpeg',
    'dd9e5f46-9d4e-4417-b300-f9a18e851fde.jpeg',
    'Download this tuned BMW M4 exudes power and….jpeg',
    'eb37adcf-f8f8-4102-9a42-118f4a06c03b.jpeg',
    'Elegant, Luxurious, Majestic, Refined, Powerful….jpeg',
    'Experience the enchanting beauty of nature with….jpeg',
    'f6e7dcec-3cea-4491-82e3-eeef556aca6d.jpeg',
    'faaeaae5-6f08-4ba3-a017-0775de48cdd0.jpeg',
    'fc2f7b8b-562d-4a5c-bb07-4917214ceaeb.jpeg',
    'fd408e04-29f9-4cb0-ad38-6a8f9f5bc95e.jpeg',
    'fecb3c5e-035f-46be-be36-b29b958ec201.jpeg',
    'High-quality Sports Bike wall art will bring….jpeg',
    'https___pin_it_2qVkjxSKr.jpeg',
    'If you want something new come to my channel.jpeg',
    'Kawasaki Super Bike  Kawasaki ninja  Kawasaki Jatt….jpeg',
    'MARVEL 4K WALLPAPERS AND DP - IRONMAN.jpeg',
    'Speed, smoke, and soul — these five F1 machines….jpeg',
    'Spider man & Iron man Mobile Hd wallpaper image.jpeg',
    'Stunning digital print of abstract car art - a….jpeg',
    'The Porsche 911 GT3_ a track-ready powerhouse….jpeg',
    'Unleash the legacy — BMW M5 in full throttle_🖤✨….jpeg',
    'Which beast would you take for a spin — the BMW….jpeg'
  ]);

  // Anime and Cartoon
  addMany('anime','contents/Phone Cover/Anime and Cartoon', [
    '#anime #japan #narutoshippuden #pain #yahiko….jpeg',
    '#Gengar #Pokémon #wallpaper #pokemon.jpeg',
    '150a80d4-1f0d-4de1-9723-d428ee1cf50a.jpeg',
    '179a7a3e-8671-47db-8b5b-5a4d4b7e1045.jpeg',
    '1abeaa63-5828-420b-9026-677bdc568492.jpeg',
    '1c464239-a60b-451e-9901-991abc8e44a8.jpeg',
    '1db18f62-41fd-4215-ac29-29aa97c11899.jpeg',
    '1e06d6df-1e03-42d8-98dd-9b0f6a32e343.jpeg',
    '20ed3b82-5e1d-460c-8b77-74420bfe496d.jpeg',
    '2696b40d-fee2-4bf2-b5b4-0da61a3f1dd6.jpeg',
    '29dd67c2-1f75-4382-b02c-c96ffef4ecc6.jpeg',
    '338b6484-709d-4709-9d1e-8cd831245608.jpeg',
    '36d00c18-1ee9-40c0-8972-c2068b82c60c.jpeg',
    '42032577-320d-44a4-9fb4-9f6cf2979d19.jpeg',
    '52529eaf-c891-4069-ba50-f846a62add12.jpeg',
    '58d850d4-4823-4ffa-9c35-30086cc8bf23.jpeg',
    '5bfcbfc3-bc4d-47a0-b6fd-0a5180c9384f.jpeg',
    '6359175c-bde4-4d0a-ab60-c5f5544bf4b0.jpeg',
    '6613c5eb-9a68-4bd2-8e4a-b9fb4e2961eb.jpeg',
    '6ef962bf-e09c-4f00-9a18-3d51fd81c1e9.jpeg',
    '721955c3-39d4-45ad-b43f-18017f29aff6.jpeg',
    '76f9b4e1-9275-44e8-8099-19db708e1566.jpeg',
    '78c6fd40-63c7-40b6-91a9-c0a755cbec4e.jpeg',
    '8aaab5b7-49c5-4174-916b-c4c4f50d8c44.jpeg',
    '8ab29c97-8a50-410e-a6d0-0d3e07abdde4.jpeg',
    '90f1b8e4-1f2d-4da3-8fb6-af928afd7f84.jpeg',
    'a35dcfb3-0469-493f-884d-5177d9684b7b.jpeg',
    'b5bcdbc7-6ad1-4b23-9077-e9595a0816a1.jpeg',
    'b5cb25e0-71bc-46d5-86b1-2e011b141abb.jpeg',
    'b6717512-efec-434f-9213-8b5ecac07076.jpeg',
    'Cartoon Wallpaper Aesthetics….jpeg',
    'cd5c4f41-7347-4b78-8df2-042b380322f1.jpeg',
    'dc192649-af40-409a-b021-97e0d93c27b2.jpeg',
    'Discover the beauty of Pokemon official art! From….jpeg',
    'DM FOR COLLABORATION.jpeg',
    'Download our latest and FULL SIZE Dragon Ball….jpeg',
    'ebc43bae-35f3-46f1-a62f-138114e65405.jpeg',
    'f2b53593-aecd-475e-bff2-18d59e32ee45.jpeg',
    'f4fe45a0-385d-42b3-a228-622378d7cc55.jpeg',
    'f806483c-9d4f-4e45-a806-27c3f54186b7.jpeg',
    'fdce5bec-9447-4053-80d2-35c369b4da34.jpeg',
    'Kamado Tanjiro Sun Hashira.jpeg',
    'Naruto Wallpaper 4K, Naruto Uzumaki #naruto….jpeg',
    'Pokémon legends arceus God 🏔️ wallpaper 4K….jpeg',
    'Poplar Anime Characters in Peace _ _  🧠 AI….jpeg',
    'Step into the storm with this electrifying anime… (1).jpeg',
    'Step into the storm with this electrifying anime….jpeg'
  ]);

  // Marvel
  addMany('marvel','contents/Phone Cover/Marvel', [
    '#spiderman #marvel #hollywood.jpeg',
    '#thor #marvel #disney #wallpaper….jpeg',
    '#wallpaper.jpeg',
    '27dd902d-0f44-4d73-9be2-1ed246dde5b8.jpeg',
    '40f9dcb5-f2b9-4f30-bf11-24a591d0290a.jpeg',
    '625984fb-b8b0-4dcb-9d56-5bcf42574aa0.jpeg',
    '8b400a4a-818c-4852-b98e-2be62d05ee55.jpeg',
    '8c892997-31f8-42a4-b17e-2d3656c86ee0.jpeg',
    '8fcf812d-d998-400c-9778-2c6cc6162fd0.jpeg',
    '95e16046-1f61-4715-82b0-6ebb274705ac.jpeg',
    'Amazing wallpaper of baby captain America….jpeg',
    'bca9775c-532c-4aa2-bcb3-bf0ea35529a1.jpeg',
    'c234aee7-81c8-4a78-b350-8d53f340b6d6.jpeg',
    'c5433a32-563f-4c54-9b4a-e8034e4114ce.jpeg',
    'd453a89e-05f8-4373-9bd7-d7352e66cfa6.jpeg',
    'd5d1d451-2616-491c-a4c0-157669994207.jpeg',
    'dabdd924-0e44-4f2a-ae11-7b75f341c3c3.jpeg',
    'eb83b4de-3783-45e5-b201-5b982a682dc5.jpeg',
    'ef58ac1e-ebfd-4033-8252-c01e2d54125f.jpeg',
    'Instagram.jpeg',
    'Lo puedes usar como wallpaper de un celular o….jpeg',
    'MARVEL 4K WALLPAPERS AND DP - IRONMAN (1).jpeg',
    'Spider-Man Wallpaper #spiderman #marvel #wallpaper.jpeg',
    'Thor y su martillo, personaje de Marvel Comics….jpeg'
  ]);

  // Natural
  addMany('natural','contents/Phone Cover/Natural', [
    '#manga #anime #comic #cartoonm #wallpaper….jpeg',
    '065bdd5a-e753-440f-b5a1-522b169aea8d.jpeg',
    '1810954b-1d37-474a-891a-c9b53d663488.jpeg',
    '2107d986-525b-4a56-a7af-181c69879878.jpeg',
    '2c7b1e1d-e7c9-4f1e-b5bc-50b7efeb9685.jpeg',
    '3134b72d-b53b-45f7-ab12-1f9d81272dbd.jpeg',
    '3199fceb-8fb3-49dd-9465-7cb3207e97ed.jpeg',
    '37896831-0d3a-4cb6-b398-38fbe7fc39e1.jpeg',
    '3af93ccc-009e-4427-ad78-c4cca4b9db7f.jpeg',
    '47d0469e-e7a0-41cd-a2e5-894f9d03cd9a.jpeg',
    '53b84ca0-fe99-4d3c-9d3d-150c2a6ba2fe.jpeg',
    '5c173f7e-6d61-4216-91d7-725b26cbda94.jpeg',
    '6867cc5e-59f3-45ec-b756-8c24c2508684.jpeg',
    '6a5352f4-82f5-420d-84e7-f5fcdfd59ed2.jpeg',
    '6f315c99-8303-4c32-8ec5-8c7a8f204100.jpeg',
    '78e94cf6-1db6-4b6d-a2a4-b8d1d1b3e226.jpeg',
    '88673196-4db5-4306-b785-52219c33ccfb.jpeg',
    'A serene bonsai tree grows on rocks, showcasing….jpeg',
    'a9ef2ddb-abef-4441-aef4-198a55ff6229.jpeg',
    'ada3e361-a546-48e0-8b79-8e38d9ec00db.jpeg',
    'b0c63775-9013-451a-ac82-b4d52e5413d3.jpeg',
    'b1bd8bc7-0393-4a5d-9d34-155c412d1bda.jpeg',
    'Bright Exotic Bird In a Tropical Garden Sunlight….jpeg',
    'ca62ab15-019a-49ef-84d4-5111e3ab7759.jpeg',
    'cece1b66-2b10-4dc7-8179-4d12c968d3e5.jpeg',
    'db5eaf8f-e3a6-47b3-900c-d0afba671ebc.jpeg',
    'e023ac25-7b2f-4cf0-be64-15f25a9e7619.jpeg',
    'e0d850fe-5f8d-48c3-814e-459fb5154895.jpeg',
    'e87ef41d-4ae9-44b5-9487-e1be65ed21f4.jpeg',
    'e9af4435-fb80-44da-8c70-72c19dd22b2e.jpeg',
    'Eagle flying wildlife animal nature_ _ premium….jpeg',
    'Give your device a magical makeover with our….jpeg',
    'Looking to update your phone for the season_….jpeg',
    'Nature\'s raw power captured! ⚡️ Witness the storm….jpeg',
    'Pin by John Emery on My Dream Place♥️ _ Landscape….jpeg',
    'Pin by Tudy on Pittura _ Cute fall wallpaper, Cute….jpeg',
    'Product Description_ Indulge in the allure of the….jpeg'
  ]);

  // Spiritual
  addMany('spiritual','contents/Phone Cover/Spiritual', [
    '_Divine Melody in the Heart of Nature_ Bathed in….jpeg',
    '☝☝☝ Download our aesthetic and high quality Buda… (1).jpeg',
    '☝☝☝ Download our aesthetic and high quality Buda….jpeg',
    '0b109c3a-6efc-46bc-a459-b0528b0b9d78.jpeg',
    '35b6510d-1c37-4990-9940-44201c576e2d.jpeg',
    '5cffce77-5ecf-4694-b8a0-e9f2a4ff3ab6.jpeg',
    '6fa72262-d32a-404c-a5be-6009fc32070b.jpeg',
    '74679352-b1c2-4f55-99d3-95c350c442df.jpeg',
    '7616d7b2-0042-4570-a730-c69ad7f46054.jpeg',
    '83f34c0e-6ffb-4c45-8d12-bdea441b5f23.jpeg',
    '9c82e1f0-8739-4ec5-8f24-69a5d7c71427.jpeg',
    'a4d7d26b-2c58-4abd-b311-729fa91b83fb.jpeg',
    'ab904686-5791-4bf8-af13-e2f6a2e1f5e7.jpeg',
    'ae4cb2d2-4678-4706-bb5f-65ec68f99409.jpeg',
    'bd49124a-974d-48dc-a69d-f03669d7adc5.jpeg',
    'bf0fcfa9-758c-4973-9974-caee8146a87f.jpeg',
    'c8f3f495-303a-4e9f-867e-d5b77c7647d7.jpeg',
    'd03e8086-035a-473d-a9b1-9fa297356db9.jpeg',
    'd25b0293-eb02-4777-9ad2-8ebbca746176.jpeg',
    'Discover the mystical resonance of Om chanting….jpeg',
    'Discover tranquility with a breathtaking statue….jpeg',
    'e5a293a2-a705-4f33-9b9d-c53dc78789c2.jpeg',
    'e60baf42-e7fc-4a82-9d28-df9517405037.jpeg',
    'e94e8651-54fe-43eb-953f-6a6a770fef45.jpeg',
    'Experience the profound beauty of mindfulness in….jpeg',
    'Explore divine Shiva wallpaper to inspire peace….jpeg',
    'lord Rama is an unparalleled warrior, possessing….jpeg',
    'Mahadev, Shivling, Shivling In Water.jpeg',
    'Pinterest Image Title_ _Divine Power of Lord….jpeg',
    'Radha Krishna wallpaper, Radha krishna sitting on….jpeg',
    'save for later   #shiva #mahadev #bholenath….jpeg',
    'The golden mandala  represents the flow of….jpeg',
    'The Trishul of Lord Shiva – a symbol of….jpeg'
  ]);

  // Movies and Others (optional folder, safe if missing)
  addMany('others','contents/Phone Cover/Movies and Others', [
  ]);

  // Fallback: also include two PDF preview images if present
  const extra = [
    { dir: 'contents/Phone Cover', name: 'image1.jpg', category: 'others' },
    { dir: 'contents/Phone Cover', name: 'image2.jpg', category: 'others' }
  ];
  extra.forEach(e => manifest.push(e));

  // Global numbering across all items
  let globalIndex = 1;
  const withNumbers = manifest.map(m => ({...m, n: globalIndex++ }));

  function encodePath(path){
    // Encode each path segment to handle spaces and special characters like '#'
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function buildSrc(dir, name){
    // Use root-relative URLs so assets load on nested routes like /mobile-cover
    return `/${encodePath(dir)}/${encodeURIComponent(name)}`;
  }

  function readHash(){
    const h = (location.hash || '').replace('#','').trim().toLowerCase();
    const valid = categories.find(c => c.key === h);
    return valid ? valid.key : 'all';
  }

  function render(){
    const filter = readHash();
    grid.className = 'grid';
  grid.innerHTML = '';
    const list = filter === 'all' ? withNumbers : withNumbers.filter(it => it.category === filter);
    list.forEach(it => {
      const card = document.createElement('div');
      card.className = 'card';
    const img = document.createElement('img');
      img.className = 'thumb';
      img.loading = 'lazy';
      img.src = buildSrc(it.dir, it.name);
      img.alt = `${it.category} #${it.n}`;
      img.onerror = function(){ img.style.display = 'none'; };
      const meta = document.createElement('div');
      meta.className = 'meta';
      const left = document.createElement('span');
      left.className = 'badge';
      left.textContent = `#${it.n}`;
      const right = document.createElement('span');
      var cat = null;
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].key === it.category) { cat = categories[i]; break; }
      }
      right.textContent = (cat && cat.label) ? cat.label : it.category;
      meta.appendChild(left);
      meta.appendChild(right);
      card.appendChild(img);
      card.appendChild(meta);
      grid.appendChild(card);
    });

    if (list.length === 0){
      const empty = document.createElement('div');
      empty.style.gridColumn = '1 / -1';
      empty.style.textAlign = 'center';
      empty.textContent = 'No images found in this category.';
      grid.appendChild(empty);
    }
  }

  // Add one simple, ASCII-only test asset to ensure visibility on deploys
  manifest.push({ dir: '/contents', name: 'images.jpeg', category: 'others' });

  window.addEventListener('hashchange', () => {
    try { render(); } catch (err) { console.error(err); }
  });
  try {
    render();
  } catch (err){
    console.error('Failed to render covers grid', err);
    grid.innerHTML = '';
    const msg = document.createElement('div');
    msg.style.gridColumn = '1 / -1';
    msg.style.textAlign = 'center';
    msg.textContent = 'Error loading gallery. Please refresh.';
    grid.appendChild(msg);
  }
})();


