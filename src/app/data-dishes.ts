import { Dish } from './dish';

const url = '../assets/img/recipes/';

export const DISHES: Dish[] = [ // http://www.restauranteelcampero.es/carta-de-tapas-el-campero.pdf
  {
    id: 1,
    name:      'Huevas de atún rojo de almadraba',
	category:   'Pequeños Susurros',
	description: 'La hueva de atún tiene un sabor intenso, bastante más potente que las de merluza, a las que estamos más acostumbrados. Son de mayor tamaño, aunque el sitema de preparación es similar. Esta receta pertenece a Juan Carlos Borrell Cela de la taberna La Sorpresa',
	pic:        url+'01.jpg',
	price:      3.95
  },
  {
    id: 2,
    name:      'Mormo de atún rojo cocido en aceite',
	category:   'Pequeños Susurros',
	description: 'El atún encebollao es un guiso que abunda en las costas andaluzas, pero en Barbate se hace de una forma singular, “en colorao”, ya que al guiso se le agrega pimentón. Esta versión de El Campero se ha convertido en una receta mítica de la provincia y es una versión de matrícula de honor del guiso tradicional.',
	pic:        url+'02.jpg',
	price:      3.95
  },
  {
    id: 3,
    name:      'Atún picante',
	category:   'Pequeños Susurros',
	description: 'Atún rojo picante en fritada. Una variedad del atún frito con tomate, en este caso, va rebozado en harina y frito, con guindillas, ajos, y una fritada de cebolla y tomate, queda jugoso, y rico.',
	pic:        url+'03.jpg',
	price:      10.50
  },
  {
    id: 4,
    name:      'Lasaña fría de atún',
	category:   'Pequeños Susurros',
	description: 'La lasaña es un plato de origen italiano, muy extendido y conocido internacionalmente. Los primeros datos sobre él nos remontan a la época de los etruscos en Italia, donde se hacía referencia a una pasta “aplanada” trabajada en un mesado. Más tarde, en tiempos de Cicerón (Imperio Romano), se mencionaba la “lasagna” tal como la conocemos hoy en día, como un plato presente en su gastronomía.',
	pic:        url+'04.jpg',
	price:      5.75
  },
  {
    id: 5,
    name:      'Tosta de semimojama',
	category:   'Pequeños Susurros',
	description: 'El contraste de la tosta crujiente con la semimojama tierna resulta muy agradable a nivel de textura y la combinación de sabores con el queso y la vinagreta cierran perfectamente este bocado.',
	pic:        url+'05.jpg',
	price:      3.95
  },
  {
    id: 6,
    name:      'Espineta de atún asada',
	category:   'Pequeños Susurros',
	description: 'Espineta de atún rojo de almadraba con auténtica salsa barbacoa, una de las tapas de la nueva temporada en el Restaurante La Almadraba.',
	pic:        url+'06.jpg',
	price:      9.75
  },
  {
    id: 7,
    name:      'Tosta de atún y trufa',
	category:   'Pequeños Susurros',
	description: 'Es una tosta clásica pero que triunfa con los toques aportados por la trufa. Un inolvidable.',
	pic:        url+'07.jpg',
	price:      7.95
  },
  {
    id: 8,
    name:      'Won-ton crocante de atún rojo',
	category:   'Pequeños Susurros',
	description: 'Pura poesía, colores y formas que rememoran influencias asiáticas. Envueltos en una fina masa, el won-ton, presenta unos trozos de tarantelo que una vez fritos, quedan poco hechos en su interior. Jugoso y sabroso.',
	pic:        url+'08.jpg',
	price:      6.75
  },
  {
    id: 9,
    name:      'Brochetita de atún en tempura',
	category:   'Pequeños Susurros',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'09.jpg',
	price:      5.95
  },
  {
    id: 10,
    name:      'Croquetas caseras de bacalao',
	category:   'Pequeños Susurros',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'10.jpg',
	price:      9.00
  },
  {
    id: 11,
    name:      'Jamón ibérico de bellota (100 gr)',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'11.jpg',
	price:      23.00
  },
  {
    id: 12,
    name:      'Queso payoyo de cabra',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'12.jpg',
	price:      8.00
  },
  {
    id: 13,
    name:      'Anchoas en salazón',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'13.jpg',
	price:      19.50
  },
  {
    id: 14,
    name:      'Carpaccio de carabineros',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'14.jpg',
	price:      17.00
  },
  {
    id: 15,
    name:      'Tartar de calamar con bombón de marisco',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'15.jpg',
	price:      3.95
  },
  {
    id: 16,
    name:      'Almejas a la marinera',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'16.jpg',
	price:      22.00
  },
  {
    id: 17,
    name:      'Calamares fritos',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'17.jpg',
	price:      17.00
  },
  {
    id: 18,
    name:      'Cazuela de gambas al ajillo',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'18.jpg',
	price:      18.00
  },
  {
    id: 19,
    name:      'Taquitos de pescado frito',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'19.jpg',
	price:      18.00
  },
  {
    id: 20,
    name:      'Ortigas de mar fritas',
	category:   'Para Compartir',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'20.jpg',
	price:      3.95
  },
  {
    id: 21,
    name:      'Ensalada de algas, pepino, gambón, pulpo y calamar',
	category:   'Ensaladas, Mariscos y Arroces',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'21.jpg',
	price:      15.00
  },
  {
    id: 22,
    name:      'Ensalada templada de langostinos con vinagreta de mango y nueces',
	category:   'Ensaladas, Mariscos y Arroces',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'22.jpg',
	price:      18.50
  },
  {
    id: 23,
    name:      'Ensalada de atún rojo en tataki con helado de wasabi',
	category:   'Ensaladas, Mariscos y Arroces',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'23.jpg',
	price:      17.75
  },
  {
    id: 24,
    name:      'Ensalada de alcachofas con vinagreta de mojama',
	category:   'Ensaladas, Mariscos y Arroces',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'24.jpg',
	price:      15.00
  },
  {
    id: 25,
    name:      'Ensalada de presa ibérica semicurada con sorbete de apio y lima',
	category:   'Ensaladas, Mariscos y Arroces',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'25.jpg',
	price:      15.00
  },
  {
    id: 26,
    name:      'Mojama de almadraba',
	category:   'Atuneando',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'26.jpg',
	price:      9.00
  },
  {
    id: 27,
    name:      'Hueva de atún rojo de almadraba curada',
	category:   'Atuneando',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'27.jpg',
	price:      12.00
  },
  {
    id: 28,
    name:      'Combinado de salazones, ahumados y semiconservas',
	category:   'Atuneando',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'28.jpg',
	price:      21.00
  },
  {
    id: 29,
    name:      'Corazón a la plancha',
	category:   'Atuneando',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'29.jpg',
	price:      8.00
  },
  {
    id: 30,
    name:      'Ventresca en salazón',
	category:   'Atuneando',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium dui pellentesque ex hendrerit, at volutpat urna eleifend. Proin aliquet eget orci id feugiat.',
	pic:        url+'30.jpg',
	price:      8.00
  },
];
