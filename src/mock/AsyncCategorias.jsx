// -------------------------------------------------------- +
//
// Contiene un array "categorias" para simular una base de datos
// y dos funciones asíncronas: getCategorias() y getUnaCategoria(id)
// Son las "categorias" que se muestran en el menú de navegación
//     y corresponden al array "productos" definido en "/mock/AsyncMock.jsx" 
// 
// No lo estamos usando en la preentrega #2
// 
// -------------------------------------------------------- +

const categorias=[
    
  {id:'0100',categoria:'01',nombre:'Ropa Bebe',descripcion:'Ropa Bebe',imagen:'../imgShop/0100 Ropa Bebe_171x221px.png'        },
  {id:'0200',categoria:'02',nombre:'Ropa Mujer',descripcion:'Ropa Mujer',imagen:'../imgShop/0200 Ropa Mujer _171x221px.png'     },
  {id:'0300',categoria:'03',nombre:'Ropa Hombre',descripcion:'Ropa Hombre',imagen:'../imgShop/0300 Ropa Hombre _171x221px.png'   },
  {id:'0400',categoria:'04',nombre:'Herramientas',descripcion:'Herramientas',imagen:'../imgShop/0400 Herramientas _171x221px.png' },

]

export const getCategorias = () => {
    let error = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde');
        } else {
            resolve(categorias);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }

export const getUnaCategoria = (id) => {
    let error = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (error) {
            reject('Hubo un error, intente más tarde');
        } else {
            let cat = categorias.find((categ)=> categ.id === id)
            resolve(cat);
        }
        }, 2000); // 2000 = Simulating a 2-second delay
    });
    }