export type Department = {
  slug: string;
  name: string;
  attraction: string;
  description: string;
  location: string;
  howToGetThere: string;
  funFact: string;
};

export const departments: Department[] = [
  {
    slug: "amazonas",
    name: "Amazonas",
    attraction: "Fortaleza de Kuélap",
    description:
      "Ciudadela amurallada de la cultura Chachapoyas, construida sobre un cerro a 3,000 msnm. Sus muros de piedra caliza de hasta 19 metros de altura albergan más de 400 estructuras circulares y una biodiversidad única en la selva alta peruana.",
    location: "Distrito de Tingo, provincia de Luya, región Amazonas. A 2,860 msnm.",
    howToGetThere:
      "Desde Chachapoyas, viaja por carretera hasta Tingo (3 h) y continúa en el teleférico (20 min). También hay tours desde Chachapoyas.",
    funFact:
      "Sus muros tienen mayor volumen de piedra que cualquier pirámide egipcia. Fue descubierta oficialmente en 1843 por Juan Crisóstomo Nieto.",
  },
  {
    slug: "ancash",
    name: "Áncash",
    attraction: "Laguna 69",
    description:
      "Laguna de aguas turquesas a 4,600 msnm, enmarcada por el nevado Chacraraju. Es una de las lagunas de alta montaña más fotografiadas del Perú por el azul cobalto de sus aguas y el paisaje glaciar que la rodea.",
    location: "Parque Nacional Huascarán, provincia de Yungay, Áncash. A 4,600 msnm.",
    howToGetThere:
      "Desde Huaraz, viaja unas 3 h en bus hasta Cebollapampa y continúa con una caminata de 7 km de ida. Se recomienda aclimatarse previamente.",
    funFact:
      "Su nombre no tiene un significado especial: es la laguna número 69 registrada en el inventario del Parque Nacional Huascarán.",
  },
  {
    slug: "apurimac",
    name: "Apurímac",
    attraction: "Monolito de Saywite",
    description:
      "Piedra tallada de 2.5 metros de diámetro con más de 200 figuras en relieve: animales, plantas y estructuras de las tres regiones del Perú. Algunos arqueólogos la consideran una maqueta del Tahuantinsuyo o una piedra ceremonial del cosmos andino.",
    location: "Distrito de Curahuasi, provincia de Abancay, Apurímac. A 3,500 msnm.",
    howToGetThere:
      "Desde Abancay, recorre 47 km por la carretera Cusco–Abancay (unos 45 min). Hay acceso en transporte público y privado.",
    funFact:
      "Fue documentado en 1865 por el explorador italiano Antonio Raimondi. En 2012, el BCR lo incluyó en una moneda de la serie Riqueza y Orgullo del Perú.",
  },
  {
    slug: "arequipa",
    name: "Arequipa",
    attraction: "Valle del Colca",
    description:
      "Uno de los cañones más profundos del mundo, hogar del cóndor andino. Sus paisajes reúnen andenería preinca, aguas termales y el mirador Cruz del Cóndor.",
    location: "Provincias de Caylloma y Castilla, Arequipa. A 150 km de la ciudad de Arequipa.",
    howToGetThere:
      "Desde Arequipa, son unas 3.5 h en bus o auto por la ruta Arequipa–Chivay. También hay tours diarios desde la ciudad.",
    funFact:
      "El cañón del Colca es dos veces más profundo que el Gran Cañón del Colorado. La danza del Wititi, originaria del Colca, es Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.",
  },
  {
    slug: "ayacucho",
    name: "Ayacucho",
    attraction: "Pampa de Ayacucho",
    description:
      "El campo de batalla donde se selló la independencia de Sudamérica. El 9 de diciembre de 1824, el general Sucre derrotó aquí al ejército realista español. El lugar forma parte de una zona núcleo de reserva de biósfera reconocida por la UNESCO.",
    location: "Distrito de Quinua, provincia de Huamanga, Ayacucho. A 37 km de la ciudad.",
    howToGetThere:
      "Desde Ayacucho, son unos 45 min en auto o combi hasta Quinua. La pampa está a 1 km del pueblo.",
    funFact:
      "Quinua, a un kilómetro de la pampa, fue reconocido por ONU Turismo como Best Tourism Village 2023. Cada 9 de diciembre se escenifica la batalla con miles de participantes.",
  },
  {
    slug: "cajamarca",
    name: "Cajamarca",
    attraction: "Cuarto del Rescate",
    description:
      "La única estructura inca en pie en Cajamarca. Aquí estuvo prisionero el inca Atahualpa en 1532. En sus paredes aún se señala la altura hasta la que prometió llenar la habitación de oro a cambio de su libertad.",
    location: "Jirón Amalia Puga 750, centro histórico de Cajamarca.",
    howToGetThere:
      "Se llega a pie desde la Plaza de Armas de Cajamarca, a dos cuadras. No se necesita transporte.",
    funFact:
      "El rescate prometido fue de 5,770 kg de oro y 11,800 kg de plata. Atahualpa fue ejecutado el 26 de julio de 1533.",
  },
  {
    slug: "cusco",
    name: "Cusco",
    attraction: "Machu Picchu",
    description:
      "Ciudad inca del siglo XV, enclavada a 2,430 msnm entre montañas andinas y selva alta. Es Patrimonio Cultural y Natural de la Humanidad por la UNESCO y una de las Siete Maravillas del Mundo Moderno.",
    location: "Distrito de Machu Picchu, provincia de Urubamba, Cusco. A 2,430 msnm.",
    howToGetThere:
      "Desde Cusco, toma el tren desde Poroy u Ollantaytambo hasta Aguas Calientes (2–3 h) y luego el bus al santuario (30 min). También se puede llegar caminando por el Camino Inca.",
    funFact:
      "Fue construida alrededor de 1450 d. C. y abandonada aproximadamente un siglo después. Hiram Bingham la dio a conocer internacionalmente en 1911.",
  },
  {
    slug: "huancavelica",
    name: "Huancavelica",
    attraction: "Aguas Termales de San Cristóbal",
    description:
      "Complejo de baños termales junto al río Ichu. Sus aguas minerales, que alcanzan altas temperaturas, lo convierten en uno de los atractivos más accesibles de la ciudad de Huancavelica.",
    location: "A 1.5 km del centro de Huancavelica, a orillas del río Ichu.",
    howToGetThere:
      "Desde la Plaza de Armas de Huancavelica, son 15 min a pie o 5 min en mototaxi.",
    funFact:
      "Las aguas contienen azufre, calcio y magnesio, y alcanzan entre 60 °C y 70 °C. Los incas ya las usaban con fines rituales y medicinales.",
  },
  {
    slug: "huanuco",
    name: "Huánuco",
    attraction: "Cueva de las Lechuzas",
    description:
      "Caverna de 200 metros de longitud dentro del Parque Nacional Tingo María. Es hogar de guácharos —aves que se orientan mediante ecolocalización— y murciélagos.",
    location: "Parque Nacional Tingo María, provincia de Leoncio Prado, Huánuco. A 5 km de Tingo María.",
    howToGetThere:
      "Desde Tingo María, son unos 10 min en mototaxi o auto. El parque está junto a la carretera Fernando Belaúnde Terry.",
    funFact:
      "Los guácharos que habitan la cueva son de las pocas aves que se orientan mediante ecolocalización, como los murciélagos. Históricamente, su grasa se usaba para alumbrar lámparas.",
  },
  {
    slug: "ica",
    name: "Ica",
    attraction: "Líneas de Nazca",
    description:
      "Geoglifos trazados en el desierto hace más de 2,000 años. Representan figuras de animales, plantas y formas geométricas de hasta 300 metros. Son Patrimonio de la Humanidad por la UNESCO desde 1994 y su propósito aún genera debate científico.",
    location: "Pampa de Nazca y Pampas de Jumana, provincia de Nazca, Ica. A 450 km de Lima.",
    howToGetThere:
      "Desde Lima, viaja unas 7 h en bus hasta Nazca. Hay sobrevuelos desde el aeródromo local y un mirador terrestre gratuito en la Panamericana Sur.",
    funFact:
      "Algunas figuras alcanzan los 300 metros. Entre ellas está una araña que reproduce una constelación visible desde el hemisferio norte.",
  },
  {
    slug: "junin",
    name: "Junín",
    attraction: "Laguna Chinchaycocha",
    description:
      "Segundo lago más grande del Perú, a 4,082 msnm. Este humedal Ramsar es hábitat del zambullidor de Junín, ave en peligro crítico que solo existe aquí, además de otras especies altoandinas.",
    location: "Provincias de Junín y Pasco, región Junín. A 4,082 msnm.",
    howToGetThere:
      "Desde Huancayo, son unas 2.5 h en auto hacia la ciudad de Junín por la carretera Central.",
    funFact:
      "El zambullidor de Junín (Podiceps taczanowskii) es una especie endémica del lago. No puede volar: sus alas evolucionaron para nadar.",
  },
  {
    slug: "la-libertad",
    name: "La Libertad",
    attraction: "Chan Chan",
    description:
      "La ciudad de adobe más grande del mundo y antigua capital del Imperio Chimú. Sus 20 km² albergan nueve ciudadelas reales con frisos ornamentales únicos. Es Patrimonio Mundial de la UNESCO desde 1986.",
    location: "Distrito de Huanchaco, provincia de Trujillo, La Libertad. A 5 km del centro de Trujillo.",
    howToGetThere:
      "Desde Trujillo, son unos 15 min en combi o taxi hacia Huanchaco, por la avenida Mansiche.",
    funFact:
      "Sus muros de adobe tienen hasta 10 metros de altura y 4 metros de grosor. Los frisos representan peces, aves y redes, en homenaje a la relación Chimú con el océano Pacífico.",
  },
  {
    slug: "lambayeque",
    name: "Lambayeque",
    attraction: "Museo Tumbas Reales de Sipán",
    description:
      "Alberga el ajuar funerario del Señor de Sipán, gobernante mochica del siglo III d. C. Sus piezas de oro y plata cuentan una historia central de la arqueología peruana.",
    location: "Avenida Juan Pablo Vizcardo y Guzmán, ciudad de Lambayeque.",
    howToGetThere:
      "Desde Chiclayo, viaja 12 km al norte (unos 20 min en combi o taxi). El acceso está junto a la Panamericana Norte.",
    funFact:
      "El hallazgo del Señor de Sipán fue comparado con el descubrimiento de Tutankamón. El arqueólogo Walter Alva llegó al sitio en 1987, alertado por el saqueo de piezas.",
  },
  {
    slug: "lima",
    name: "Lima",
    attraction: "Malecón de Miraflores",
    description:
      "Paseo costero de 4 km sobre los acantilados del Pacífico, con parques, miradores y el Parque del Amor. Ofrece vistas panorámicas al océano y acceso al circuito de playas de Miraflores y Barranco.",
    location: "Distrito de Miraflores, Lima Metropolitana, sobre los acantilados del Pacífico.",
    howToGetThere:
      "Desde el centro de Lima, son unos 30 min en bus o taxi. La estación Benavides del Metropolitano queda a unos 15 min a pie.",
    funFact:
      "El Parque del Amor, diseñado por Víctor Delfín en 1993, está inspirado en el Parque Güell de Barcelona. Su escultura central, El Beso, es un símbolo romántico de Lima.",
  },
  {
    slug: "loreto",
    name: "Loreto",
    attraction: "Iquitos",
    description:
      "La ciudad más grande del mundo sin conexión terrestre: solo se llega por río o avión. Su arquitectura de azulejos y la Casa de Fierro evocan el auge del caucho en la Amazonía durante el siglo XIX.",
    location: "Provincia de Maynas, región Loreto. A orillas del río Amazonas.",
    howToGetThere:
      "Hay vuelos diarios desde Lima (aprox. 1 h 40 min) y otras ciudades amazónicas. También se puede viajar por río desde Pucallpa en lancha.",
    funFact:
      "Durante el auge del caucho (1880–1914), Iquitos fue una de las ciudades más ricas de Sudamérica. Tuvo electricidad y teléfono antes que muchas capitales latinoamericanas.",
  },
  {
    slug: "madre-de-dios",
    name: "Madre de Dios",
    attraction: "Reserva Nacional Tambopata",
    description:
      "Una de las zonas con mayor biodiversidad del planeta. Sus colpas de guacamayos y la presencia de nutrias gigantes la convierten en un destino destacado de ecoturismo amazónico.",
    location: "Provincia de Tambopata, Madre de Dios. A 15–60 km de Puerto Maldonado.",
    howToGetThere:
      "Vuela desde Lima a Puerto Maldonado (aprox. 1 h 40 min) y continúa en lancha por el río Tambopata. El trayecto toma entre 1 y 3 h, según el albergue.",
    funFact:
      "La nutria gigante amazónica (Pteronura brasiliensis) puede alcanzar 1.8 metros de largo y es el mustélido más grande del mundo.",
  },
  {
    slug: "moquegua",
    name: "Moquegua",
    attraction: "Cerro Baúl",
    description:
      "Meseta volcánica donde convivieron los imperios Wari y Tiwanaku entre los siglos VI y XI d. C. Sus 8 hectáreas conservan vestigios de cuatro culturas distintas y se elevan a 2,590 msnm.",
    location: "Distrito de Torata, provincia de Mariscal Nieto, Moquegua. A 25 km de la ciudad.",
    howToGetThere:
      "Desde Moquegua, son unos 30 min en auto por la ruta hacia Torata. Se recomienda ir en vehículo propio o con un tour local.",
    funFact:
      "Investigaciones de la Universidad de Florida hallaron evidencia de una cervecería ritual Wari en la cima. Antes de dejar el sitio, sus habitantes celebraron un banquete ceremonial.",
  },
  {
    slug: "pasco",
    name: "Pasco",
    attraction: "Bosque de Piedras de Huayllay",
    description:
      "Campo de formaciones rocosas volcánicas de hasta 10 metros, distribuidas en 6,815 hectáreas a 4,100 msnm. Más de 6,000 figuras reconocibles de animales, personas y objetos forman este paisaje de altura.",
    location: "Distrito de Huayllay, provincia y región de Pasco. A 4,100 msnm.",
    howToGetThere:
      "Desde Cerro de Pasco, son 30 km (unos 45 min en auto). Desde Lima, el viaje por la carretera Central toma alrededor de 6 h hasta Cerro de Pasco.",
    funFact:
      "Entre las formaciones más conocidas están El Fraile, La Tortuga y Los Enamorados.",
  },
  {
    slug: "piura",
    name: "Piura",
    attraction: "Máncora",
    description:
      "Playa de aguas cálidas durante todo el año y olas ideales para el surf. Es uno de los destinos de playa más conocidos de la costa norte peruana.",
    location: "Distrito de Máncora, provincia de Talara, Piura. A 187 km de la ciudad de Piura.",
    howToGetThere:
      "Desde Lima, vuela a Piura (aprox. 1 h 20 min) y continúa unas 3 h en bus. También hay buses directos desde Lima.",
    funFact:
      "Máncora recibe la corriente marina de El Niño, que mantiene sus aguas por encima de los 22 °C y permite disfrutar la playa durante todo el año.",
  },
  {
    slug: "puno",
    name: "Puno",
    attraction: "Lago Titicaca",
    description:
      "El lago navegable más alto del mundo, a 3,812 msnm, y hogar de las islas flotantes de los Uros y la isla Taquile. Según la tradición inca, de sus aguas emergieron Manco Cápac y Mama Ocllo.",
    location: "Provincias de Puno y Huancané, región Puno. Frontera entre Perú y Bolivia, a 3,812 msnm.",
    howToGetThere:
      "Desde Lima, vuela a Juliaca (aprox. 1 h 20 min) y continúa 45 min en auto a Puno. Desde Cusco, hay rutas panorámicas en bus o tren.",
    funFact:
      "El Titicaca contiene el 95% de toda el agua dulce superficial del Perú. Según la cosmología inca, de sus aguas emergieron Manco Cápac y Mama Ocllo, fundadores del Imperio del Tahuantinsuyo.",
  },
  {
    slug: "san-martin",
    name: "San Martín",
    attraction: "El Gran Pajatén",
    description:
      "Complejo arqueológico de torres circulares chachapoya con frisos de figuras humanas, en medio del bosque nublado. Se encuentra dentro del Parque Nacional Río Abiseo y destaca por su conservación y difícil acceso.",
    location: "Provincia de Mariscal Cáceres, San Martín. Interior del Parque Nacional Río Abiseo, a 2,850 msnm.",
    howToGetThere:
      "Desde Juanjuí, el acceso requiere varios días de caminata con guía especializado y permiso previo del SERNANP.",
    funFact:
      "El mono choro de cola amarilla, considerado extinto durante décadas, fue redescubierto en 1974 en el Parque Nacional Río Abiseo.",
  },
  {
    slug: "tacna",
    name: "Tacna",
    attraction: "Complejo Arqueológico de Miculla",
    description:
      "Campo de petroglifos con miles de grabados y geoglifos en el desierto. Sus figuras representan escenas de caza, rituales y vida andina de hace más de 4,000 años.",
    location: "A 20 km de la ciudad de Tacna, en el valle del río Caplina, camino a Pachia.",
    howToGetThere:
      "Desde Tacna, son unos 25 min en auto por la carretera a Pachia. Se llega en vehículo privado o mediante un tour local.",
    funFact:
      "Las figuras de Miculla muestran escenas cotidianas y rituales de antiguos habitantes del valle del Caplina, grabadas sobre la roca del desierto.",
  },
  {
    slug: "tumbes",
    name: "Tumbes",
    attraction: "Manglares de Tumbes",
    description:
      "El único ecosistema de manglares del Perú y uno de los más productivos del Pacífico sudamericano. Es hábitat de especies como el cocodrilo americano y la nutria.",
    location: "Provincia de Zarumilla, Tumbes. Frontera con Ecuador, en el estuario del río Zarumilla.",
    howToGetThere:
      "Desde Tumbes, viaja unos 30 min en auto hasta Zarumilla y continúa en lancha por los canales del manglar (20 min).",
    funFact:
      "Los manglares de Tumbes marcan el límite austral de este ecosistema en el Pacífico sudamericano y sirven de refugio natural para numerosas especies marinas.",
  },
  {
    slug: "ucayali",
    name: "Ucayali",
    attraction: "Laguna Yarinacocha",
    description:
      "Antiguo meandro del río Ucayali convertido en una laguna de 1,340 hectáreas. Es uno de los principales atractivos de Pucallpa y un espacio para conocer la cultura Shipibo-Konibo y su arte Kené.",
    location: "Distrito de Yarinacocha, provincia de Coronel Portillo, Ucayali. A 7 km del centro de Pucallpa.",
    howToGetThere:
      "Desde Pucallpa, son unos 15 min en mototaxi o combi hasta Puerto Callao, junto a la laguna.",
    funFact:
      "El arte Kené shipibo, hecho de diseños geométricos que representan el cosmos amazónico, fue declarado Patrimonio Cultural de la Nación.",
  },
];
