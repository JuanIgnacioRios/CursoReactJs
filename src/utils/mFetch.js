let products = [
    { id: '1', category: 'corsets', name: 'Black Corset', stock: 5, price: 80, photo: "/black-corset-main.jpeg" },
    { id: '2', category: 'corsets', name: 'Jean Corset', stock: 7, price: 60, photo: "/jean-corset-main.jpeg" },
    { id: '3', category: 'tops', name: 'B&W Top', stock: 3, price: 70, photo: "/b&w-top-main.jpeg" },
    { id: '4', category: 'tops', name: 'Black Leather Top', stock: 4, price: 80, photo: "/leather-black-top-main.jpeg" },
    { id: '5', category: 'tops', name: 'White Top', stock: 6, price: 40, photo: "/white-top-main.jpeg" },
    { id: '6', category: 'sets', name: 'Leather Set', stock: 2, price: 130, photo: "/leather-set-main.jpeg" },
]

export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}