let selectedCar = CARS[0], lastSimulation = null;
function renderCars(){
 const q=($('carSearch')?.value||'').toLowerCase().trim(), cat=$('categoryFilter')?.value||'', sort=$('sortCars')?.value||'featured';
 let list=CARS.filter(c=>(c.name+' '+c.variant+' '+c.category).toLowerCase().includes(q)&&(!cat||c.category===cat));
 if(sort==='low') list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity)); if(sort==='high') list.sort((a,b)=>(b.price??-1)-(a.price??-1));
 $('carGrid').innerHTML=list.map(c=>`<article class="car-card"><div class="car-image"><img src="${c.image}" alt="${c.name}" loading="lazy" onerror="hondaPhotoError(this)"><span class="car-tag">${c.tag}</span></div><div class="car-info"><h3>${c.name}</h3><span class="variant">${c.variant} · ${c.year}</span><div class="car-price">${c.price==null?"Hubungi dealer":money(c.price)} <small style="font-size:10px;color:#777;font-weight:500">mulai dari</small></div><div class="car-specs"><span>⚙ ${c.transmission}</span><span>⛽ ${c.fuel}</span><span>▦ ${c.category}</span><span>${c.engine}</span><span>${c.power}</span><span>${c.seats==="—"?"Kapasitas: cek dealer":c.seats+" kursi"}</span></div><div class="car-buttons"><button class="btn btn-outline" data-detail="${c.id}">Detail</button><button class="btn btn-red" data-ask="${c.id}">Tanya Sales</button></div></div></article>`).join('');
 $('emptyCars').classList.toggle('hidden',list.length>0);
 renderPhotoWall(list);
}
function renderPhotoWall(source=CARS){
 const wall=$('photoWall'); if(!wall) return;
 const items=(source.length?source:CARS).slice(0,12);
 wall.innerHTML=items.map(c=>`<article class="gallery-card"><img src="${c.image}" alt="${c.name}" loading="lazy" onerror="hondaPhotoError(this)"><div class="gallery-copy"><p>${c.category}</p><h3>${c.name}</h3><span>${c.variant}</span><strong>${c.price==null?'Hubungi dealer':money(c.price)}</strong><button class="btn btn-outline" data-detail="${c.id}">Lihat detail</button></div></article>`).join('');
}
function populateSelects(){['financeCar','contactCar'].forEach(id=>{const el=$(id);el.innerHTML=CARS.filter(c=>id!=='financeCar'||c.price!=null).map(c=>`<option value="${c.id}">${c.name} — ${c.variant}</option>`).join('')});$('financePrice').value=CARS[0].price;}
function calculate(e){if(e)e.preventDefault();const price=Number($('financePrice').value),dp=Number($('financeDp').value),months=Number($('financeTenor').value),rate=Number($('financeRate').value);if(!price||dp<0||dp>=price||rate<0){alert('Periksa harga mobil, DP, dan bunga. DP harus lebih kecil dari harga mobil.');return}const principal=price-dp,interest=principal*(rate/100)*(months/12),monthly=(principal+interest)/months;lastSimulation={price,dp,principal,interest,monthly,months,car:CARS.find(c=>c.id===Number($('financeCar').value))};$('monthlyResult').textContent=money(monthly);$('resultPrice').textContent=money(price);$('resultDp').textContent=money(dp);$('resultPrincipal').textContent=money(principal);$('resultInterest').textContent=money(interest);$('resultTenor').textContent=months+' bulan';}
function openModal(id){$(id)?.classList.remove('hidden');document.body.style.overflow='hidden'}function closeModal(id){$(id)?.classList.add('hidden');document.body.style.overflow=''}
function whatsapp(message){const phone=localStorage.getItem('hondaDealerWhatsapp')||'6281234567890';window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
function askCar(id){const c=CARS.find(x=>x.id===Number(id));selectedCar=c;$('contactCar').value=String(c.id);$('contactMessage').value=`Saya tertarik dengan ${c.name} ${c.variant}. Mohon informasi harga dan ketersediaan.`;openModal('contactModal')}
function showDetail(id){
 const c=CARS.find(x=>x.id===Number(id));
 const related=CARS.filter(x=>x.id!==c.id && (x.category===c.category || x.name===c.name)).slice(0,4);
 selectedCar=c;
 $('detailContent').innerHTML=`<div class="detail-layout"><div><img class="detail-main-photo" src="${c.image}" alt="${c.name}" onerror="hondaPhotoError(this)"><div class="detail-mini-gallery">${[c,...related].slice(0,5).map(item=>`<button type="button" class="detail-thumb ${item.id===c.id?'active':''}" data-detail-photo="${item.image}" data-photo-name="${item.name}"><img src="${item.image}" alt="${item.name}" onerror="hondaPhotoError(this)"></button>`).join('')}</div></div><div><p class="eyebrow">${c.category.toUpperCase()} · ${c.year}</p><h2>${c.name}</h2><p class="muted">${c.variant}</p><p>${c.desc}</p><div class="detail-price">${c.price==null?"Hubungi dealer":money(c.price)}</div><div class="detail-specs"><span>Transmisi: ${c.transmission}</span><span>Bahan bakar: ${c.fuel}</span><span>Mesin: ${c.engine}</span><span>Daya: ${c.power}</span><span>Torsi: ${c.torque}</span><span>Kapasitas: ${c.seats==="—"?"Konfirmasi dealer":c.seats+" penumpang"}</span><span>Fitur: ${c.features}</span><span>Harga referensi OTR Jakarta, dapat berubah.</span><span><a href="${c.source}" target="_blank" rel="noopener noreferrer">Spesifikasi resmi Honda Indonesia</a></span><span>Foto utama dan galeri disesuaikan dengan model Honda yang tersedia.</span></div>${related.length?`<div class="related-cars"><p class="eyebrow">FOTO & MODEL TERKAIT</p><div class="related-grid">${related.map(item=>`<button type="button" class="related-card" data-detail="${item.id}"><img src="${item.image}" alt="${item.name}" onerror="hondaPhotoError(this)"><strong>${item.name}</strong><span>${item.variant}</span></button>`).join('')}</div></div>`:''}<button class="btn btn-red btn-block" id="detailAsk">Tanya Sales via WhatsApp</button></div></div>`;
 openModal('detailModal');
 $('detailAsk').addEventListener('click',()=>{closeModal('detailModal');askCar(c.id)});
 $('detailContent').querySelectorAll('[data-detail-photo]').forEach(btn=>btn.addEventListener('click',()=>{
   const main=$('detailContent').querySelector('.detail-main-photo');
   if(main){delete main.dataset.photoTried;main.src=btn.dataset.detailPhoto;main.alt=btn.dataset.photoName;}
   $('detailContent').querySelectorAll('.detail-thumb').forEach(x=>x.classList.toggle('active',x===btn));
 }));
}
document.addEventListener('click',e=>{const d=e.target.closest('[data-detail]'),a=e.target.closest('[data-ask]'),close=e.target.closest('[data-close]');if(d)showDetail(d.dataset.detail);if(a)askCar(a.dataset.ask);if(close)closeModal(close.dataset.close)});
const menu=$('mainNav'), menuToggle=$('navToggle');
function closeMenu(){if(menu.open)menu.close();}
menuToggle.addEventListener('click',()=>{if(!menu.open){menu.showModal();menuToggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');}});
$('navClose').addEventListener('click',closeMenu);
menu.addEventListener('close',()=>{menuToggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');menuToggle.focus({preventScroll:true});});
menu.addEventListener('click',e=>{if(e.target===menu){const r=menu.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeMenu();}});
menu.querySelectorAll('nav a,nav button').forEach(a=>a.addEventListener('click',closeMenu));
['carSearch','categoryFilter','sortCars'].forEach(id=>$(id).addEventListener(id==='carSearch'?'input':'change',renderCars));
$('financeCar').addEventListener('change',()=>{$('financePrice').value=CARS.find(c=>c.id===Number($('financeCar').value)).price});$('financeForm').addEventListener('submit',calculate);
$('financeContact').addEventListener('click',()=>{if(!lastSimulation)calculate();if(lastSimulation)whatsapp(`Halo, saya ingin bertanya tentang simulasi ${lastSimulation.car.name}. Harga: ${money(lastSimulation.price)}, DP: ${money(lastSimulation.dp)}, tenor: ${lastSimulation.months} bulan, estimasi cicilan: ${money(lastSimulation.monthly)}/bulan.`)});
$('testDriveTop').addEventListener('click',()=>openModal('contactModal'));$('contactBottom').addEventListener('click',()=>openModal('contactModal'));
$('contactForm').addEventListener('submit',e=>{e.preventDefault();const car=CARS.find(c=>c.id===Number($('contactCar').value));whatsapp(`Halo Honda Dealer, saya ${$('contactName').value}. Nomor saya ${$('contactPhone').value}. Saya tertarik dengan ${car.name} ${car.variant}. Pesan: ${$('contactMessage').value||'-'}`);closeModal('contactModal')});
$('year').textContent=new Date().getFullYear();
$('newsGrid').innerHTML=[['Pilih Kendaraan','Kenali kebutuhan perjalanan dan bandingkan model yang sesuai.'],['Rencanakan Pembelian','Gunakan simulasi cicilan sebagai perkiraan awal.'],['Konsultasi Sales','Konfirmasi harga, promo, dan ketersediaan langsung dengan tim sales.']].map((n,i)=>`<article class="news-card"><span class="news-no">INFO 0${i+1}</span><h3>${n[0]}</h3><p>${n[1]}</p></article>`).join('');
populateSelects();renderCars();calculate();
