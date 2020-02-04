routes = [
   // default routes
   {
      path: '/',
      url: './index.html',
   },
   {
      path: '/login/',
      componentUrl: './pages/login.html',
   },

   // bpp routes
   {
      path: '/bpp-home/',
      componentUrl: './pages/bpp/bpp-home.html',
   },
   {
      path: '/bpp-profil/',
      componentUrl: './pages/bpp/bpp-profil.html',
   },
   {
      path: '/bpp-profil-tentang/',
      componentUrl: './pages/bpp/bpp-profil-tentang.html',
   },
   {
      path: '/bpp-profil-fungsi/',
      componentUrl: './pages/bpp/bpp-profil-fungsi.html',
   },
   {
      path: '/bpp-profil-tujuan/',
      componentUrl: './pages/bpp/bpp-profil-tujuan.html',
   },
   {
      path: '/bpp-profil-visi-misi/',
      componentUrl: './pages/bpp/bpp-profil-visi-misi.html',
   },
   {
      path: '/bpp-profil-kode-etik/',
      componentUrl: './pages/bpp/bpp-profil-kode-etik.html',
   },
   {
      path: '/bpp-organisasi/',
      componentUrl: './pages/bpp/bpp-organisasi.html',
   },
   {
      path: '/bpp-anggota/',
      componentUrl: './pages/bpp/bpp-anggota.html',
   },
   {
      path: '/bpp-sertifikasi/',
      componentUrl: './pages/bpp/bpp-sertifikasi.html',
   },
   {
      path: '/bpp-agenda/',
      componentUrl: './pages/bpp/bpp-agenda.html',
   },
   {
      path: '/bpp-info/',
      componentUrl: './pages/bpp/bpp-info.html',
   },
   {
      path: '/bpp-news/',
      componentUrl: './pages/bpp/bpp-news.html',
   },
   {
      path: '/bpp-regulasi/',
      componentUrl: './pages/bpp/bpp-regulasi.html',
   },
   {
      path: '/bpp-galeri/',
      componentUrl: './pages/bpp/bpp-galeri.html',
   },
   {
      path: '/bpp-kontak/',
      componentUrl: './pages/bpp/bpp-kontak.html',
   },
   {
      path: '/bpp-pengurus/',
      componentUrl: './pages/bpp/bpp-pengurus.html',
   },
   {
      path: '/bpp-pengurus-detail/',
      componentUrl: './pages/bpp/bpp-pengurus-detail.html',
   },


   // bpd routes
   {
      path: '/bpd-list/',
      componentUrl: './pages/bpd/bpd-list.html',
   },
   {
      path: '/bpd-home/:id/',
      componentUrl: './pages/bpd/bpd-home.html',
   },

   // bpc routes
   {
      path: '/bpc-home/',
      componentUrl: './pages/bpc/bpc-home.html',
   },

   // if routes page file not found
   {
      path: '(.*)',
      url: './pages/404.html',
   },
];
