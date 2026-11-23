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
    description: "La Fortaleza de Kuélap es una ciudadela amurallada construida por la cultura Chachapoya alrededor del siglo VI d.C. y ampliada durante los siglos siguientes, sobre una cresta montañosa a casi 3,000 metros de altitud. Sus muros de piedra caliza alcanzan hasta 19 metros de altura y protegen más de 400 construcciones circulares, muchas con frisos geométricos y accesos estrechos pensados para la defensa. Fue incorporada al dominio inca y luego abandonada tras la llegada de los españoles. Hoy se visita en un recorrido que combina arqueología, bosque nublado y vistas del valle del Utcubamba. El teleférico inaugurado en 2017 facilitó su acceso y la volvió una de las experiencias más espectaculares del norte del Perú.",
    location: "Distrito de Tingo, provincia de Luya, región Amazonas. A 2,860 msnm.",
    howToGetThere: "Desde Chachapoyas vía terrestre a Tingo (3h) y luego teleférico de 20 min. También en tours desde Chachapoyas.",
    funFact: "Se dice que sus muros contienen más piedra que la Gran Pirámide de Giza. Fue dada a conocer en 1843 por el juez Juan Crisóstomo Nieto."
  },
  {
    slug: "ancash",
    name: "Áncash",
    attraction: "Laguna 69",
    description: "La Laguna 69 es una laguna glaciar de aguas turquesa intenso ubicada en la Cordillera Blanca, dentro del Parque Nacional Huascarán, Patrimonio Natural de la Humanidad. A unos 4,600 metros de altitud, su espejo de agua recibe la cascada que baja desde el nevado Chacraraju, de más de 6,000 metros. El color se debe a los sedimentos glaciares finos disueltos en el agua, que dispersan la luz de manera particular. La caminata de unas tres a cuatro horas de subida atraviesa praderas, lagunas menores y valles donde pastan vacas y caballos. Es una de las excursiones de un día más populares de los Andes peruanos, aunque exige buena aclimatación por la altura y el frío de la zona.",
    location: "Parque Nacional Huascarán, provincia de Yungay, Áncash. A 4,600 msnm.",
    howToGetThere: "Desde Huaraz (3h en bus) hasta Cebollapampa, luego caminata de 7 km ida. Requiere aclimatación previa.",
    funFact: "Su nombre no hace referencia a ningún significado especial: es simplemente la laguna número 69 registrada en el inventario del Parque Nacional Huascarán."
  },
  {
    slug: "apurimac",
    name: "Apurímac",
    attraction: "Monolito de Saywite",
    description: "El Monolito de Saywite es una gran roca de andesita, de varios metros de diámetro, tallada con más de doscientas figuras en altorrelieve que representan animales, plantas, canales, terrazas y pequeñas construcciones. Se encuentra dentro del Conjunto Arqueológico de Saywite, un sitio ceremonial asociado al culto al agua y a la fertilidad agrícola durante la época inca. Los investigadores debaten su función: algunos lo interpretan como una maqueta del territorio del Tahuantinsuyo, otros como un mapa de riego o un objeto ritual. El conjunto incluye además plazas, fuentes y estructuras de piedra que muestran la maestría inca en el manejo del agua. Su visita es una buena parada para quienes recorren la ruta entre Cusco y Abancay, con paisajes de valle y campos de anís.",
    location: "Distrito de Curahuasi, provincia de Abancay, Apurímac. A 3,500 msnm.",
    howToGetThere: "Desde Abancay, 47 km por la carretera Cusco-Abancay (45 min). Acceso con transporte público y privado.",
    funFact: "Fue documentada en 1865 por el explorador italiano Antonio Raimondi. En 2012, el BCR la inmortalizó en una moneda de la Serie 'Riqueza y Orgullo del Perú'."
  },
  {
    slug: "arequipa",
    name: "Arequipa",
    attraction: "Valle del Colca",
    description: "El Valle del Colca es uno de los destinos naturales y culturales más visitados del sur del Perú. Su cañón, formado por el río Colca entre los volcanes Ampato y Hualca Hualca, se cuenta entre los más profundos del mundo, con tramos que superan los 3,000 metros. El valle conserva andenerías preincas que aún se cultivan, pueblos coloniales como Yanque, Chivay y Maca con iglesias barrocas, y aguas termales en La Calera. El mirador Cruz del Cóndor permite ver el vuelo del cóndor andino, sobre todo en las primeras horas de la mañana. Su población, de tradición collagua y cabana, mantiene vivos sus trajes bordados y danzas como el Wititi, declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.",
    location: "Provincias de Caylloma y Castilla, Arequipa. A 150 km de la ciudad de Arequipa.",
    howToGetThere: "Desde Arequipa, 3.5h en bus o auto por la ruta Arequipa–Chivay. Tours diarios desde la ciudad.",
    funFact: "La danza del Wititi, originaria del valle, es Patrimonio Cultural Inmaterial de la Humanidad (UNESCO). El cañón supera casi al doble la profundidad del Gran Cañón de EE. UU."
  },
  {
    slug: "ayacucho",
    name: "Ayacucho",
    attraction: "Pampa de Ayacucho",
    description: "La Pampa de Ayacucho, en las alturas de Quinua, fue el escenario de la batalla del 9 de diciembre de 1824, que puso fin al dominio español en Sudamérica. Allí, el ejército patriota comandado por el mariscal Antonio José de Sucre derrotó a las fuerzas realistas del virrey La Serna. Hoy forma parte del Santuario Histórico Pampa de Ayacucho, un área protegida de 300 hectáreas, y es núcleo de la Reserva de Biosfera del Bicentenario. En el lugar se alza un obelisco de 44 metros que conmemora la victoria, rodeado de un paisaje andino de campos y quebradas. Cada diciembre se realizan ceremonias y escenificaciones que reúnen a miles de visitantes, y el cercano pueblo de Quinua es famoso por su cerámica.",
    location: "Distrito de Quinua, provincia de Huamanga, Ayacucho. A 37 km de la ciudad.",
    howToGetThere: "Desde Ayacucho, 45 min en auto o combi hacia Quinua. La pampa está a 1 km del pueblo.",
    funFact: "Quinua, a un kilómetro de la pampa, fue reconocido por ONU Turismo como Best Tourism Village. Cada 9 de diciembre se escenifica la batalla."
  },
  {
    slug: "cajamarca",
    name: "Cajamarca",
    attraction: "Cuarto del Rescate",
    description: "El Cuarto del Rescate es la única construcción inca que se conserva en pie en la ciudad de Cajamarca. Según la tradición, en esta sala el Inca Atahualpa permaneció cautivo de Francisco Pizarro en 1532 y ofreció llenarla de oro hasta la altura que alcanzaba con el brazo en alto, y de plata dos veces. Sus muros de piedra, con hornacinas trapezoidales, muestran la técnica constructiva inca y aún conservan una línea que marcaría ese nivel. Aunque se reunió una enorme cantidad de metales, Atahualpa fue ejecutado en 1533. El monumento, declarado Monumento Histórico Nacional, se visita en pocos minutos y es parada obligada del centro histórico de Cajamarca, junto a la Plaza de Armas y las iglesias coloniales cercanas.",
    location: "Jirón Amalia Puga 750, centro histórico de Cajamarca.",
    howToGetThere: "A pie desde la Plaza de Armas de Cajamarca, a 2 cuadras. Acceso directo sin transporte.",
    funFact: "Se cuenta que el rescate pactado fue una sala llena de oro y dos de plata; aun así, Atahualpa fue ejecutado el 26 de julio de 1533."
  },
  {
    slug: "cusco",
    name: "Cusco",
    attraction: "Machu Picchu",
    description: "Machu Picchu es una ciudad inca del siglo XV levantada sobre una cresta entre las montañas Machu Picchu y Huayna Picchu, a unos 2,430 metros de altitud, sobre el cañón del río Urubamba. Fue probablemente una residencia real del emperador Pachacútec, con sectores religiosos, agrícolas y urbanos conectados por escalinatas y canales de agua. Su arquitectura de piedra perfectamente encajada resiste los sismos y se integra con el paisaje de selva alta. Es Patrimonio Mundial de la UNESCO desde 1983 y una de las Nuevas Siete Maravillas del Mundo, elegida en 2007. Para protegerla, el ingreso se regula por horarios y circuitos. Su visita suele combinarse con el Valle Sagrado, el Camino Inca y la ciudad de Cusco.",
    location: "Distrito de Machu Picchu, provincia de Urubamba, Cusco. A 2,430 msnm.",
    howToGetThere: "Desde Cusco: tren desde Poroy u Ollantaytambo hasta Aguas Calientes (2–3h), luego bus al santuario (30 min). También caminata por el Camino Inca (4 días).",
    funFact: "Fue construida alrededor de 1450 d.C. y abandonada apenas 100 años después. Los españoles nunca la encontraron. Hiram Bingham la 'redescubrió' para el mundo occidental en 1911."
  },
  {
    slug: "huancavelica",
    name: "Huancavelica",
    attraction: "Aguas Termales de San Cristóbal",
    description: "Los baños termales de San Cristóbal se ubican en la ciudad de Huancavelica y son uno de los atractivos más accesibles de la región. Sus aguas brotan de manantiales naturales y se canalizan hacia pozas de distinta temperatura, donde los visitantes encuentran alivio al frío de la sierra, pues la ciudad se halla a unos 3,700 metros de altitud. La población local los usa por sus propiedades relajantes y su contenido de minerales. Los baños pueden complementarse con un recorrido por el centro histórico, con sus iglesias coloniales de fachadas labradas en piedra, y con la visita a mercados donde se ofrecen textiles tradicionales y productos de la región, como la papa nativa y el queso.",
    location: "A 1.5 km del centro de Huancavelica, orillas del río Ichu, región Huancavelica.",
    howToGetThere: "Desde la Plaza de Armas de Huancavelica, 15 min a pie o 5 min en mototaxi.",
    funFact: "Huancavelica fue clave en la época colonial: de sus minas de mercurio salía el azogue usado para procesar la plata de Potosí."
  },
  {
    slug: "huanuco",
    name: "Huánuco",
    attraction: "Cueva de las Lechuzas",
    description: "La Cueva de las Lechuzas es el atractivo más conocido del Parque Nacional Tingo María, en la selva alta de Huánuco. Es una caverna amplia, con estalactitas y galerías iluminadas por aberturas naturales, donde habitan guácharos, aves nocturnas que se orientan por ecolocalización, además de murciélagos. El recorrido se hace a pie por un sendero de baja dificultad, con guías locales. El parque alberga también la silueta montañosa conocida como La Bella Durmiente, cascadas, bosques tropicales y una rica diversidad de aves. Es uno de los destinos naturales más visitados del centro del país, y su gestión ha recibido reconocimientos internacionales en turismo sostenible, lo que refuerza su papel como motor económico para las comunidades vecinas.",
    location: "Parque Nacional Tingo María, provincia de Leoncio Prado, Huánuco. A 5 km de Tingo María.",
    howToGetThere: "Desde Tingo María, 10 min en mototaxi o auto. El parque está sobre la carretera Fernando Belaúnde Terry.",
    funFact: "Los guácharos que habitan la cueva son las únicas aves del mundo que se orientan mediante ecolocalización, igual que los murciélagos. Su grasa era usada históricamente para alumbrar lámparas."
  },
  {
    slug: "ica",
    name: "Ica",
    attraction: "Líneas de Nazca",
    description: "Las Líneas y Geoglifos de Nazca y Palpa son gigantescas figuras trazadas en el desierto de Ica por la cultura Nazca, entre aproximadamente los años 500 a.C. y 500 d.C. Para crearlas se retiró la capa oscura de piedras del suelo y se dejó al descubierto el terreno más claro, formando representaciones de un colibrí, un mono, una araña, un cóndor y largas líneas rectas. Algunas figuras superan los 100 metros y se aprecian mejor desde el aire, por lo que los sobrevuelos son la experiencia más popular. Fueron declaradas Patrimonio Mundial por la UNESCO en 1994. Su propósito sigue en estudio: se plantean hipótesis rituales, astronómicas y vinculadas al culto del agua. La investigadora alemana María Reiche dedicó décadas a estudiarlas y protegerlas.",
    location: "Pampa de Nazca y Pampas de Jumana, provincia de Nazca, Ica. A 450 km de Lima.",
    howToGetThere: "Desde Lima, 7h en bus hacia Nazca. Sobrevuelos en avioneta desde el aeródromo de Nazca (30–45 min). Mirador terrestre gratuito en la Panamericana Sur.",
    funFact: "La matemática alemana María Reiche, 'la Dama de la Pampa', dedicó más de cuatro décadas a estudiar y proteger las líneas."
  },
  {
    slug: "junin",
    name: "Junín",
    attraction: "Laguna Chinchaycocha",
    description: "El lago Chinchaycocha, también llamado lago Junín, es el segundo lago más grande del Perú, ubicado a más de 4,000 metros de altitud en la meseta de Bombón. Está protegido por la Reserva Nacional de Junín y es un humedal de importancia internacional reconocido por la Convención Ramsar. Sus totorales y aguas poco profundas sirven de refugio a más de un centenar de especies de aves, entre ellas el zambullidor de Junín y la gallineta de Junín, endémicos de este lago y en grave peligro de extinción. También se observan flamencos andinos, patos y parihuanas. La zona es importante además por su historia, pues cerca se libró la batalla de Junín en 1824, y por su paisaje de puna abierta.",
    location: "Provincias de Junín y Pasco, región Junín. A 4,082 msnm.",
    howToGetThere: "Desde Huancayo, 2.5h en auto hacia la ciudad de Junín. Acceso por carretera central.",
    funFact: "El zambullidor de Junín no puede volar: es un ave endémica de este lago y una de las especies más amenazadas de Sudamérica."
  },
  {
    slug: "la-libertad",
    name: "La Libertad",
    attraction: "Chan Chan",
    description: "Chan Chan fue la capital del reino Chimú y es la ciudad de adobe más grande de América precolombina. Se extiende por varios kilómetros cuadrados cerca del océano Pacífico, en Trujillo, y alcanzó su apogeo entre los siglos IX y XV. Su núcleo está formado por grandes ciudadelas amuralladas o palacios, con plazas, depósitos, reservorios y recintos funerarios. Los muros conservan frisos en relieve con motivos de peces, aves, olas y figuras geométricas que reflejan la relación de los chimúes con el mar. Fue declarada Patrimonio Mundial de la UNESCO en 1986, y su conservación enfrenta retos por la fragilidad del adobe frente a la lluvia y la humedad. Se visitan el palacio Nik An, el museo de sitio y los sectores restaurados.",
    location: "Distrito de Huanchaco, provincia de Trujillo, La Libertad. A 5 km del centro de Trujillo.",
    howToGetThere: "Desde Trujillo, 15 min en combi o taxi hacia Huanchaco. Acceso directo por la avenida Mansiche.",
    funFact: "Sus muros de adobe tienen hasta 10 metros de altura y 4 metros de grosor. Los frisos representan peces, aves y redes, reflejando la profunda relación del pueblo Chimú con el océano Pacífico."
  },
  {
    slug: "lambayeque",
    name: "Lambayeque",
    attraction: "Museo Tumbas Reales de Sipán",
    description: "El Museo Tumbas Reales de Sipán, en la ciudad de Lambayeque, exhibe los hallazgos de las tumbas de la cultura Mochica descubiertas en Huaca Rajada desde 1987 por el arqueólogo Walter Alva. Su edificio, inspirado en una pirámide truncada, presenta en tres niveles la reproducción del descubrimiento: se recorre desde la parte alta hacia los niveles inferiores, imitando el descenso a las tumbas. Reúne el ajuar del Señor de Sipán, con orejeras, collares, pectorales y un tocado de oro, plata y cobre, además de las tumbas del Sacerdote y del Viejo Señor de Sipán. Es considerado uno de los museos más importantes del Perú y su hallazgo es comparado con el de Tutankamón. Se complementa con la visita al sitio de Huaca Rajada.",
    location: "Avenida Juan Pablo Vizcardo y Guzmán, Lambayeque ciudad.",
    howToGetThere: "Desde Chiclayo, 12 km al norte (20 min en combi o taxi). Acceso directo por la Panamericana Norte.",
    funFact: "El descubrimiento fue calificado por National Geographic como uno de los más importantes del siglo XX. El arqueólogo Walter Alva llegó al sitio en 1987 alertado por el robo de piezas que aparecían en el mercado negro."
  },
  {
    slug: "lima",
    name: "Lima",
    attraction: "Malecón de Miraflores",
    description: "El Malecón de Miraflores es un paseo peatonal y ciclista que recorre los acantilados de la Costa Verde de Lima con vistas al océano Pacífico. Une varios parques, como el Parque del Amor, el Parque Domodossola y el Parque Salazar, donde se encuentra el centro comercial Larcomar construido sobre el acantilado. Allí se practica el parapente, se pasea en bicicleta y se aprecian atardeceres sobre el mar. El Parque del Amor, con la escultura El Beso del artista Víctor Delfín y bancas de mosaicos inspirados en Gaudí, es uno de los puntos más fotografiados. La zona cuenta con jardines cuidados, restaurantes y miradores, y es un símbolo de la vida urbana moderna de la capital, muy cerca de barrios como Barranco.",
    location: "Distrito de Miraflores, Lima Metropolitana. Sobre los acantilados del Pacífico.",
    howToGetThere: "Desde el centro de Lima, 30 min en bus o taxi. Estación Benavides del Metropolitano, a 15 min a pie.",
    funFact: "El Parque del Amor, diseñado por el artista Víctor Delfín en 1993, está inspirado en el Parque Güell de Gaudí en Barcelona. La escultura central 'El Beso' se ha convertido en el símbolo romántico de Lima."
  },
  {
    slug: "loreto",
    name: "Loreto",
    attraction: "Iquitos",
    description: "Iquitos es la capital de la región Loreto y la ciudad más grande del mundo que no puede alcanzarse por carretera: solo se llega por avión o por río. Está en plena Amazonía, junto a los ríos Amazonas, Nanay e Itaya, y es el punto de partida de expediciones a reservas como Pacaya Samiria. Su centro histórico guarda huellas del auge del caucho, con casonas revestidas de azulejos portugueses y la Casa de Fierro, de estructura metálica atribuida al taller de Gustave Eiffel. El barrio de Belén, con casas flotantes y un gran mercado, muestra la vida ribereña. También destacan el malecón Tarapacá, la plaza de Armas y la gastronomía amazónica, con platos como el juane, el tacacho y el paiche.",
    location: "Provincia de Maynas, región Loreto. Orillas del río Amazonas, a 369 km de la desembocadura.",
    howToGetThere: "Vuelos diarios desde Lima (1h 40 min) y desde otras ciudades amazónicas. También por río desde Pucallpa (3–4 días en lancha rápida).",
    funFact: "Muchos azulejos de las fachadas fueron traídos de Portugal durante el auge del caucho (1880–1914), cuando la ciudad se enriqueció con su exportación."
  },
  {
    slug: "madre-de-dios",
    name: "Madre de Dios",
    attraction: "Reserva Nacional Tambopata",
    description: "La Reserva Nacional Tambopata, en la región Madre de Dios, protege cerca de 275,000 hectáreas de selva amazónica del sudeste peruano y forma parte, junto con el Parque Nacional Bahuaja-Sonene, de uno de los espacios de mayor biodiversidad del planeta. Allí se han registrado cientos de especies de aves, mamíferos, reptiles y mariposas. Es famosa por sus collpas o saladeros de arcilla, donde se reúnen guacamayos y loros, y por la posibilidad de ver nutrias gigantes en lagos como el Sandoval. Los albergues ecoturísticos ofrecen caminatas nocturnas, navegación en canoa y torres de observación sobre el dosel del bosque. Su acceso comienza en Puerto Maldonado, una ciudad con aeropuerto, desde donde se continúa por el río Tambopata.",
    location: "Provincia de Tambopata, Madre de Dios. A 15–60 km de Puerto Maldonado.",
    howToGetThere: "Vuelo desde Lima a Puerto Maldonado (1h 40 min), luego lancha por el río Tambopata (1–3h según albergue).",
    funFact: "La nutria gigante amazónica (Pteronura brasiliensis) puede alcanzar 1.8 metros de longitud, siendo el mustélido más grande del mundo. Su población en Tambopata es una de las más saludables del planeta."
  },
  {
    slug: "moquegua",
    name: "Moquegua",
    attraction: "Cerro Baúl",
    description: "Cerro Baúl es una imponente meseta de origen volcánico que se eleva sobre el valle de Torata, en Moquegua, y que guarda una de las historias arqueológicas más singulares de los Andes. En su cima, entre los siglos VII y X d.C., el Imperio Wari instaló una colonia, con templos, residencias de élite, talleres y una cervecería ritual, en territorio cercano a la esfera de influencia de Tiwanaku, la gran civilización del altiplano. Las investigaciones revelan producción de chicha y festines ceremoniales. Cuando los wari lo abandonaron, realizaron un último banquete y quemaron sus edificios. Hoy se visita mediante senderos que ofrecen vistas del valle y de los restos arqueológicos, y forma parte del circuito cultural de Moquegua junto al museo Contisuyo.",
    location: "Distrito de Torata, provincia de Mariscal Nieto, Moquegua. A 25 km de la ciudad de Moquegua.",
    howToGetThere: "Desde Moquegua, 30 min en auto por la ruta hacia Torata. Acceso con vehículo propio o tour local.",
    funFact: "Investigaciones del Field Museum de Chicago hallaron una cervecería wari; al abandonar el sitio, realizaron un banquete y quemaron los edificios."
  },
  {
    slug: "pasco",
    name: "Pasco",
    attraction: "Bosque de Piedras de Huayllay",
    description: "El Bosque de Piedras de Huayllay es un paisaje de formaciones rocosas de origen volcánico, esculpidas por el viento, la lluvia y el hielo durante millones de años, en las alturas de Pasco, a más de 4,000 metros de altitud. Forma parte de la Reserva Nacional de Huayllay, que protege cerca de 6,800 hectáreas de puna. Las rocas adoptan formas que la imaginación popular asocia con animales y objetos, como la tortuga, el elefante o el cóndor. El lugar guarda además pinturas rupestres antiguas y sitios arqueológicos que evidencian su uso por pueblos prehispánicos desde hace miles de años. También ofrece aguas termales, lagunas y fauna andina como vicuñas y vizcachas. Es un destino ideal para la escalada en roca, la fotografía y el senderismo.",
    location: "Distrito de Huayllay, provincia de Pasco, región Pasco. A 4,100 msnm.",
    howToGetThere: "Desde Cerro de Pasco, 30 km (45 min en auto). Desde Lima, 6h por la carretera central hasta Cerro de Pasco.",
    funFact: "Las formas más conocidas reciben nombres populares, como el elefante, la tortuga o el cóndor, según lo que sugiere cada silueta."
  },
  {
    slug: "piura",
    name: "Piura",
    attraction: "Máncora",
    description: "Máncora es el balneario más famoso del norte del Perú, en la costa de Piura, conocido por su clima soleado casi todo el año y por sus playas de arena clara y aguas más cálidas que en el resto del litoral peruano. Es un destino para el surf y el kitesurf, con olas constantes en distintas épocas del año, y también para el descanso y la vida nocturna. En las cercanías se encuentran Punta Sal, Los Órganos y Vichayito, además de baños de barro y aguas termales. Entre diciembre y marzo se vive la temporada de mayor afluencia, y entre julio y octubre llegan las ballenas jorobadas. Su oferta incluye hoteles frente al mar, restaurantes de pescados y mariscos y excursiones de pesca.",
    location: "Distrito de Máncora, provincia de Talara, Piura. A 187 km de Piura.",
    howToGetThere: "Desde Lima, vuelo a Piura (1h 20 min) y luego 3h en bus. También bus directo Lima–Máncora (16–18h).",
    funFact: "Máncora es parte del mar tropical peruano, de aguas tibias gran parte del año, algo poco común en un país bañado por la fría corriente de Humboldt."
  },
  {
    slug: "puno",
    name: "Puno",
    attraction: "Lago Titicaca",
    description: "El lago Titicaca, compartido entre Perú y Bolivia, es el lago navegable más alto del mundo, a unos 3,810 metros de altitud, y uno de los mayores de Sudamérica. En su lado peruano, la ciudad de Puno es el punto de partida hacia las islas flotantes de los Uros, construidas con totora, y hacia las islas Amantaní y Taquile, donde las comunidades mantienen tradiciones textiles y comunitarias. Taquile fue reconocida por la UNESCO por su arte textil. Según la leyenda inca, de sus aguas emergieron Manco Cápac y Mama Ocllo, fundadores del Cusco. También se visitan las chullpas de Sillustani, torres funerarias preincas junto a la laguna Umayo. El paisaje altiplánico, de cielos amplios y atardeceres intensos, completa una experiencia cultural única.",
    location: "Provincias de Puno y Huancané, región Puno. Frontera Peru–Bolivia a 3,812 msnm.",
    howToGetThere: "Desde Lima, vuelo a Juliaca (1h 20 min) y luego 45 min en auto a Puno. Desde Cusco, bus o tren (6–7h por la ruta panorámica).",
    funFact: "Según la leyenda inca, de sus aguas emergieron Manco Cápac y Mama Ocllo. Las islas de los Uros se construyen con totora y se renuevan constantemente."
  },
  {
    slug: "san-martin",
    name: "San Martín",
    attraction: "El Gran Pajatén",
    description: "El Gran Pajatén es un complejo arqueológico de la cultura Chachapoya, ubicado en el corazón del Parque Nacional del Río Abiseo, en San Martín, a unos 2,850 metros de altitud, entre bosques nublados y quebradas profundas. Sus edificios circulares de piedra, levantados sobre plataformas escalonadas y decorados con frisos de figuras humanas y aves, aparecen cubiertos de vegetación, lo que lo vuelve una de las imágenes más enigmáticas de la arqueología peruana. El parque fue declarado Patrimonio Mundial Mixto por la UNESCO, por su valor cultural y natural, y alberga especies como el mono choro de cola amarilla. Su acceso es restringido y requiere varios días de caminata con autorización del SERNANP, lo que ha ayudado a conservar su entorno casi intacto.",
    location: "Provincia de Mariscal Cáceres, San Martín. Interior del Parque Nacional Río Abiseo, a 2,850 msnm.",
    howToGetThere: "Desde Juanjuí, varios días de caminata con guía especializado. Requiere permiso del SERNANP con anticipación.",
    funFact: "El mono choro de cola amarilla, creído extinto, fue redescubierto en 1974 en esta zona. El parque además es núcleo de una Reserva de Biosfera."
  },
  {
    slug: "tacna",
    name: "Tacna",
    attraction: "Complejo Arqueológico de Miculla",
    description: "El Complejo Arqueológico de Miculla, en las faldas áridas del valle de Tacna, es el mayor conjunto de petroglifos del Perú y uno de los más importantes de Sudamérica. En sus extensas laderas se han registrado miles de grabados en piedra, con figuras de animales, serpientes, personajes y motivos geométricos, además de geoglifos, antiguos caminos y estructuras vinculadas al culto del agua y la fertilidad. Se piensa que fue un espacio ritual y de tránsito utilizado por distintos pueblos desde hace milenios hasta la época inca. Se visita con guías, mejor por la mañana o al atardecer. Su investigación y puesta en valor continúan, y se busca promoverlo como atractivo cultural de alcance internacional.",
    location: "A 20 km de la ciudad de Tacna, en el valle del río Caplina, camino a Pachia.",
    howToGetThere: "Desde Tacna, 25 min en auto por la carretera a Pachia. Solo acceso en vehículo privado o tour local.",
    funFact: "Sus grabados tienen miles de años de antigüedad y el sitio fue ocupado por distintos pueblos hasta la época inca."
  },
  {
    slug: "tumbes",
    name: "Tumbes",
    attraction: "Manglares de Tumbes",
    description: "El Santuario Nacional Los Manglares de Tumbes protege cerca de 2,900 hectáreas del único bosque de manglar del Perú, en la desembocadura del río Zarumilla, junto a la frontera con Ecuador. Es un ecosistema donde conviven especies de agua dulce y salada, y sirve de criadero natural para peces, cangrejos, conchas negras y camarones, base de la pesca artesanal local. Alberga también cocodrilos americanos, nutrias y numerosas aves migratorias y residentes. Está reconocido como sitio Ramsar y forma parte de la Reserva de Biosfera del Noroeste. Los visitantes recorren canales en bote o kayak, observan aves desde miradores y conocen el trabajo de los recolectores de conchas negras, una tradición local. Se complementa con la visita a Puerto Pizarro, desde donde parten las excursiones.",
    location: "Provincia de Zarumilla, Tumbes. Frontera con Ecuador, en el estuario del río Zarumilla.",
    howToGetThere: "Desde Tumbes, 30 min en auto a Zarumilla y luego lancha por los canales del manglar (20 min).",
    funFact: "El manglar es la guardería natural de muchas especies marinas y marca el límite sur de este ecosistema en el Pacífico sudamericano."
  },
  {
    slug: "ucayali",
    name: "Ucayali",
    attraction: "Laguna Yarinacocha",
    description: "La laguna de Yarinacocha es un antiguo meandro del río Ucayali, convertido en un espejo de agua de unas 1,300 hectáreas junto a la ciudad de Pucallpa. Es el principal destino de recreación de Pucallpa. Se navega en botes por sus aguas tranquilas para observar aves, delfines de río y paisajes de selva baja. En sus orillas viven comunidades indígenas shipibo-konibo, como San Francisco y 11 de Agosto, conocidas por sus textiles bordados con diseños kené, símbolo de su cosmovisión. También hay playas de arena en época seca, gastronomía con pescados de río y centros de rescate de fauna silvestre. Cada 24 de junio, en la fiesta de San Juan, la laguna recibe a miles de visitantes.",
    location: "Distrito de Yarinacocha, provincia de Coronel Portillo, Ucayali. A 7 km del centro de Pucallpa.",
    howToGetThere: "Desde Pucallpa, 15 min en mototaxi o combi hacia Puerto Callao. Acceso directo y económico.",
    funFact: "El arte Kené shipibo —diseños geométricos fractales que representan el cosmos amazónico— fue declarado Patrimonio Cultural de la Nación. Sus patrones, transmitidos de madres a hijas, representan el 'mapa del universo' según la cosmovisión shipibo-konibo."
  }
];
