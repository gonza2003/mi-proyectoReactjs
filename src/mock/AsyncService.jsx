const productos = [
    { id: 1, nombre: "The Most Wanted Azzaro", precio: 150000, img: "https://i.postimg.cc/0NRwSnV2/azzaro.jpg", descripcion: "Una fragancia vibrante y masculina con notas de limón, lavanda y vetiver.", stock: 10, categoria: "home" },
    { id: 2, nombre: "Le Male Elixir", precio: 185000, img: "https://i.postimg.cc/3wktrYt0/le-male-elixir.webp", descripcion: "Una fragancia intensa y seductora con notas de menta, lavanda y vainilla.", stock: 8, categoria: "home" },
    { id: 3, nombre: "One Millon", precio: 100000, img: "https://i.postimg.cc/SNt8S83V/one-millon.jpg", descripcion: "Una fragancia audaz y lujosa que combina notas de canela, cuero y ámbar.", stock: 5, categoria: "home" },
    { id: 4, nombre: "Invictus", precio: 160000, img: "https://i.postimg.cc/MKhT3Yhk/invictus.webp", descripcion: "Una fragancia fresca y deportiva que evoca la victoria y la fuerza.", stock: 10, categoria: "home"},
    { id: 5, nombre: "Bleu de Chanel", precio: 250000, img: "https://i.postimg.cc/0QMW2P2H/blue-de-chanel.jpg", descripcion: "Una fragancia elegante y atemporal con notas de cítricos, incienso y madera.", stock: 7, categoria: "nuevos"},
    { id: 6, nombre: "Dior Sauvage", precio: 300000, img: "https://i.postimg.cc/Y28GqgZZ/dior-suavage.jpg", descripcion: "Una fragancia fresca y poderosa con notas de bergamota, pimienta y ambroxan.", stock: 12, categoria: "ofertas"},
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(p => p.id === Number(id));
            if (producto) {
                resolve(producto);
            } else {
                reject("Producto no encontrado");
            }
        }, 1000);
    });
};