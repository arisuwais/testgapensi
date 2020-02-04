// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
   root: '#app', // App root element
   id: 'io.framework7.testapp', // App bundle ID
   name: 'Framework7', // App name
   theme: 'auto', // Automatic theme detection


   // list app root
   data: function () {
      return {
         // Bpd List Section (34 List)
         BpdList: [{
               id: '1',
               title: 'BPD Aceh'
            },
            {
               id: '2',
               title: 'BPD Sumatera Utara'
            },
            {
               id: '3',
               title: 'BPD Sumatera Barat'
            },
            {
               id: '4',
               title: 'BPD Riau'
            },
            {
               id: '5',
               title: 'BPD Kepulauan Riau'
            },
            {
               id: '6',
               title: 'BPD Jambi'
            },
            {
               id: '7',
               title: 'BPD Sumatera Selatan'
            },
            {
               id: '8',
               title: 'BPD Bangka Belitung'
            },
            {
               id: '9',
               title: 'BPD Bengkulu'
            },
            {
               id: '10',
               title: 'BPD Lampung'
            },
            {
               id: '11',
               title: 'BPD DKI Jakarta'
            },
            {
               id: '12',
               title: 'BPD Jawa Barat'
            },
            {
               id: '13',
               title: 'BPD Banten'
            },
            {
               id: '14',
               title: 'BPD Banten'
            },
            {
               id: '15',
               title: 'BPD D.I Yogyakarta'
            },
            {
               id: '16',
               title: 'BPD Jawa Timur'
            },
            {
               id: '17',
               title: 'BPD Bali'
            },
            {
               id: '18',
               title: 'BPD Nusa Tenggara Barat'
            },
            {
               id: '19',
               title: 'BPD Nusa Tenggara Timur'
            },
            {
               id: '20',
               title: 'BPD Nusa Tenggara Timur'
            },
            {
               id: '21',
               title: 'BPD Kalimantan Barat'
            },
            {
               id: '22',
               title: 'BPD Kalimantan Tengah'
            },
            {
               id: '23',
               title: 'BPD Kalimantan Selatan'
            },
            {
               id: '24',
               title: 'BPD Kalimantan Timur'
            },
            {
               id: '25',
               title: 'BPD Sulawesi Utara'
            },
            {
               id: '26',
               title: 'BPD Sulawesi Barat'
            },
            {
               id: '27',
               title: 'BPD Sulawesi Tengah'
            },
            {
               id: '28',
               title: 'BPD Sulawesi Tenggara'
            },
            {
               id: '29',
               title: 'BPD Sulawesi Selatan'
            },
            {
               id: '30',
               title: 'BPD Gorontalo'
            },
            {
               id: '31',
               title: 'BPD Maluku'
            },
            {
               id: '32',
               title: 'BPD Maluku Utara'
            },
            {
               id: '33',
               title: 'BPD Papua Barat'
            },
            {
               id: '34',
               title: 'BPD Papua'
            },
         ],
         // Bpd List End
      };
   },


   // App root methods
   methods: {
      helloWorld: function () {
         app.dialog.alert('Hello World!');
      },
   },

   // App routes
   routes: routes,
});


// tab views in home bpp
var homeBppView = app.views.create('#view-bpp-home', {
   url: '/bpp-home/'
});
var listBpdView = app.views.create('#view-bpd-list', {
   url: '/bpd-list/'
});
var loginBppView = app.views.create('#view-bpp-login', {
   url: '/login/'
});