module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'vazmir' : "'Vazirmatn', sans-serif"
      },
      colors:{
        'navbar' : '#F8F8F8',
        'orange' : '#ff5722',
        'nav-text-color' : '#545454',
        'icon-service-text' : '#5e5e5e',
        'text-color' : '#333333',
        'blue-button' : '#0065dc',
        'iran-count' :'#f8f8f9'
      },
      spacing:{
        '153px' : '153px',
        '563px' : '543px',
        '478px' : '478px',
        '511px' : '490px',
        '400px' : '400px',
        '463px' : '463px',
        '783px' : '693px',
        '500px' : '500px',
        '528px' : '528px',
        '710px' : '710px',
        '55%'  : '50%',
        '58%'  : '58%',
        '15%' : '15%',
        '10%' : '10%',
        '18%' : '25%',
        '31%' : '31.5%',
        '270px' : '270px',
        '388px' : '388px',
        '282px' : '282px',
        '300px' : '300px',
        '332px' : '332px',
        '95px' : '95px',
        '85px' : '85px',
        '25px' : '25px',
       },
       fontSize:{
        '15px'  : '15px'
       },
       backgroundImage:{
         'back-mobile' : "url('../public/images/banner-mobile.webp')",
         'back' : "url('../public/images/banner.jpg')",
       }
    },
  },
  plugins: [],
}
