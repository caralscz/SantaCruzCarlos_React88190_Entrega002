// -------------------------------------------------------- +
//
// Contiene un array "productos" para simular una base de datos
// y dos funciones asíncronas: getProductos() y getUnProducto(id)
// 
// La llamamos desde "ItemListContainer.jsx" para mostrar los productos
// y desde "ItemDetailContainer.jsx" para mostrar el detalle de un producto
//
// -------------------------------------------------------- +

const productos=[
    
// 'Ropa Bebe'  
  {id:'0101',categoria:'01',prodNro:'01',stock:50,precio:22885, nombreCateg:'Ropa Bebe', descripcion:'Body Manga Larga Bebé Pack X 3                                 ',imagen:'../imgShop/0101 Body Manga Larga Bebe Pack X 3 _171x221px.png            ',nombre:'Body Manga Larga Bebé'},
  {id:'0102',categoria:'01',prodNro:'02',stock:50,precio:20000, nombreCateg:'Ropa Bebe', descripcion:'Enterito Para Recién Nacido De Polar Soft.                     ',imagen:'../imgShop/0102 Enterito Para Recien Nacido De Polar Soft _171x221px.png ',nombre:'Enterito Para Recién Nacido'},
  {id:'0103',categoria:'01',prodNro:'03',stock:50,precio:18850, nombreCateg:'Ropa Bebe', descripcion:'Campera Bebe Polar Soft - Piel - Corderito                     ',imagen:'../imgShop/0103 Campera Bebe Polar Soft - Piel - Corderito _171x221px.png',nombre:'Campera Bebe Polar'},
  {id:'0104',categoria:'01',prodNro:'04',stock:50,precio:23850, nombreCateg:'Ropa Bebe', descripcion:'Ajuar Conjunto Invierno Plush                                  ',imagen:'../imgShop/0104 Ajuar Conjunto Invierno Plush _171x221px.png             ',nombre:'Ajuar Conjunto Invierno'},
  {id:'0105',categoria:'01',prodNro:'05',stock:50,precio:177000,nombreCateg:'Ropa Bebe', descripcion:'Ajuar Bebé Set 7 - 13 Piezas Batita, Ranita, Toallón, Manta Etc',imagen:'../imgShop/0105 Ajuar Bebe Set 7 -recien Nacido _171x221px.png           ',nombre:'Ajuar Bebé Set n Piezas'},
 
// 'Ropa Mujer'  
  {id:'0201',categoria:'02',prodNro:'01',stock:50,precio:13999, nombreCateg:'Ropa Mujer', descripcion:'Buzo Mujer Peluche Elastizado Bifaz Varios Colores Canguro     ',imagen:'../imgShop/0201 Buzo Mujer Peluche Elastizado _171x221px.png             ',nombre:'Buzo Mujer Peluche'},
  {id:'0202',categoria:'02',prodNro:'02',stock:50,precio:32000, nombreCateg:'Ropa Mujer', descripcion:'Jean Mujer Dama Oxford Elastizado Calce Perfecto               ',imagen:'../imgShop/0202 Jean Mujer Dama Oxford _171x221px.png                    ',nombre:'Jean Mujer Dama'},
  {id:'0203',categoria:'02',prodNro:'03',stock:50,precio:99990, nombreCateg:'Ropa Mujer', descripcion:'Campera De Abrigo Parka Mujer Impermeable                      ',imagen:'../imgShop/0203 Campera De Abrigo Parka _171x221px.png                   ',nombre:'Campera De Abrigo'},
  {id:'0204',categoria:'02',prodNro:'04',stock:50,precio:55000, nombreCateg:'Ropa Mujer', descripcion:'Conjunto Deportivo Jogging Pantalón Buzo Canguro Capucha       ',imagen:'../imgShop/0204 Conjunto Deportivo _171x221px.png                        ',nombre:'Conjunto Deportivo'},
  {id:'0205',categoria:'02',prodNro:'05',stock:50,precio:49000, nombreCateg:'Ropa Mujer', descripcion:'Pollera Falda Jean De Mujer Larga Rigida Tajo Cenitho Jeans    ',imagen:'../imgShop/0205 Pollera Falda Jean _171x221px.png                        ',nombre:'Pollera Falda Jean'},

// 'Ropa Hombre'  
  {id:'0301',categoria:'03',prodNro:'01',stock:50,precio:31500, nombreCateg:'Ropa Hombre', descripcion:'Campera Inflable Super Abrigada Con Capucha Desmontable        ',imagen:'../imgShop/0301 Campera Inflable _171x221px.png                          ',nombre:'Campera Inflable'},
  {id:'0302',categoria:'03',prodNro:'02',stock:50,precio:24575, nombreCateg:'Ropa Hombre', descripcion:'Campera Friza Con Piel Corderito Por Dentro Varios Colores     ',imagen:'../imgShop/0302 Campera Friza Con Piel Corderito _171x221px.png          ',nombre:'Campera Friza'},
  {id:'0303',categoria:'03',prodNro:'03',stock:50,precio:31999, nombreCateg:'Ropa Hombre', descripcion:'Pack X 5 Remeras Algodon Premium Lisas Varios Colores          ',imagen:'../imgShop/0303 Pack X 5 Remeras Algodon _171x221px.png                  ',nombre:'Remeras Algodon'},
  {id:'0304',categoria:'03',prodNro:'04',stock:50,precio:35100, nombreCateg:'Ropa Hombre', descripcion:'Pack 3 Camiseta Musculosa Tres Ases Algodon Morley             ',imagen:'../imgShop/0304 Pack 3 Camiseta Musculosa _171x221px.png                 ',nombre:'Camiseta Musculosa'},
  {id:'0305',categoria:'03',prodNro:'05',stock:50,precio:55000, nombreCateg:'Ropa Hombre', descripcion:'Pantalón De Gabardina Pinzado Clásico Hombre Pierre Cardin     ',imagen:'../imgShop/0305 Pantalon De Gabardina Pinzado _171x221px.png             ',nombre:'Pantalón De Gabardina'},

// 'Herramientas' 
  {id:'0401',categoria:'04',prodNro:'01',stock:50,precio:17600, nombreCateg:'Herramientas', descripcion:'Prensa Sargento 50 X 200 Carpinteria X4 Unidades               ',imagen:'../imgShop/0401 Prensa Sargento _171x221px.png                           ',nombre:'Prensa Sargento'},
  {id:'0402',categoria:'04',prodNro:'02',stock:50,precio:129300,nombreCateg:'Herramientas', descripcion:'Fresadora Router Tupi Rebajador 1400w Lusqtoff 3 Boquillas 220V',imagen:'../imgShop/0402 Fresadora Router Tupi _171x221px.png                     ',nombre:'Fresadora'},
  {id:'0403',categoria:'04',prodNro:'03',stock:50,precio:110500,nombreCateg:'Herramientas', descripcion:'Gamma G1930ar sierra circular 1300w 220V                       ',imagen:'../imgShop/0403 Gamma G1930ar sierra circular _171x221px.png             ',nombre:'Sierra circular'},
  {id:'0404',categoria:'04',prodNro:'04',stock:50,precio:7200,  nombreCateg:'Herramientas', descripcion:'Formón 1 Mango Comfort Grip, Truper                            ',imagen:'../imgShop/0404 Formon 1 Mango Comfort _171x221px.png                    ',nombre:'Formón'},
  {id:'0405',categoria:'04',prodNro:'05',stock:50,precio:63400, nombreCateg:'Herramientas', descripcion:'Sierra Caladora Skil 4400jb 400w Velocidad Variable + Hoja     ',imagen:'../imgShop/0405 Sierra Caladora Skil _171x221px.png                      ',nombre:'Sierra Caladora'},
  {id:'0406',categoria:'04',prodNro:'06',stock:50,precio:10300, nombreCateg:'Herramientas', descripcion:'Serrucho Carpintero Tipo Aleman Acero 40 Cm. 16 Pulgadas       ',imagen:'../imgShop/0406 Serrucho Carpintero _171x221px.png                       ',nombre:'Serrucho'},
  {id:'0407',categoria:'04',prodNro:'07',stock:50,precio:7800,  nombreCateg:'Herramientas', descripcion:'Escuadra Con Nivel 30cm Combinada Corrediza Carpinteria Acer   ',imagen:'../imgShop/0407 Escuadra Con Nivel _171x221px.png                        ',nombre:'Escuadra Con Nivel'}

]

export const getProductos = () => {
    let error = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde*2*');
        } else {
            resolve(productos);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }


export const getUnProducto = (id) => {
    let error = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde*1*');
        } else {
            let pr = productos.find((prod)=> prod.id === id)
            resolve(pr);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }