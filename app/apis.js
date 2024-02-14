import axios from "axios";
import Cookies from "js-cookie";

export const fetchData = async () => {
  const latestProducts = [];
  let categories;
  let brands;
  let homeOffers;
    try {
            { // products api
                const {data} = await axios({
                method:'get',
                url:`${process.env.apiBaseUrl}/api/v2/product/latest`,
                headers:{
                    'Content-Type':'application/json',
                },
                data:{
                    id:1,
                    method:'get',
                    params:{}
                }
                }) ;
                for (const key in data.result.data) {
                    data.result.data[key].map(pro => {
                        latestProducts.push(pro);
                    })
                }
                console.log(latestProducts);
            }
            { // categories api
                const {data} = await axios({
                    method:'get',
                    url:`${process.env.apiBaseUrl}/api/v2/product/categories/list`,
                    headers:{
                        'Content-Type':'application/json',
                    },
                    data:{
                        id:1,
                        method:'get',
                        params:{}
                    }
                }) ;
                console.log(data);
                categories = data;
            }
            { // brands api
                const {data} = await axios({
                    method:'get',
                    url:`${process.env.apiBaseUrl}/api/v2/product/brand/get`,
                    headers:{
                        'Content-Type':'application/json',
                    },
                    data:{
                        id:1,
                        method:'get',
                        params:{}
                    }
                }) ;
                console.log(data);
                brands = data;
            }
            { // home offers api
                const {data} = await axios({
                    method:'get',
                    url:`${process.env.apiBaseUrl}/api/v2/home/offer/get`,
                    headers:{
                        'Content-Type':'application/json',
                    },
                    data:{
                        id:1,
                        method:'get',
                        params:{}
                    }
                }) ;
                console.log(data);
                homeOffers = data;
            }
            
    } catch (error) {
        console.log(error);
    }
  return { latestProducts , categories , brands , homeOffers};
};

export const addToCartLogic = async (id , quantity , product = {}) => {
    const Authorization = Cookies.get('accessKey');
    let totalCartPrice =parseInt(localStorage.getItem('totalCartPrice')) || 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    try {
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/add`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product_id": id,
                    "quantity": quantity
                }
            }

        });
        console.log(data);
        if(data.result.status == 'error' && !Authorization){
            product.quantity = quantity;
            if(cartItems.length){
                console.log('if');
                const checkConflict = cartItems.find(item => {
                    if(item.id == id){
                        const newItem = item;
                        newItem.quantity += quantity;
                        cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                        return true;
                    };
                    return false;
                });
                console.log(checkConflict);
                if(!checkConflict){
                    cartItems.push(product);
                }
                totalCartPrice += product.list_price * quantity ;
                localStorage.setItem('totalCartPrice' , totalCartPrice);
                localStorage.setItem('cartItems' , JSON.stringify(cartItems));
            }else{
                console.log('else');
                cartItems.push(product);
                totalCartPrice += product.list_price * quantity ;
                localStorage.setItem('totalCartPrice' , totalCartPrice);
                localStorage.setItem('cartItems' , JSON.stringify(cartItems));
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        product.quantity = quantity;
        if(cartItems.length){
            console.log('if');
            const checkConflict = cartItems.find(item => {
                if(item.id == id){
                    const newItem = item;
                    newItem.quantity += quantity;
                    cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                    return true;
                };
                return false;
            });
            console.log(checkConflict);
            if(!checkConflict){
                cartItems.push(product);
            }
            totalCartPrice += product.list_price * quantity ;
            localStorage.setItem('totalCartPrice' , totalCartPrice);
            localStorage.setItem('cartItems' , JSON.stringify(cartItems));
        }else{
            console.log('else');
            cartItems.push(product);
            totalCartPrice += product.list_price * quantity ;
            localStorage.setItem('totalCartPrice' , totalCartPrice);
            localStorage.setItem('cartItems' , JSON.stringify(cartItems));
        }
        return false;
    }
};

export const removeCartItemsLogic = async (id ) => {
    const Authorization = Cookies.get('accessKey');
    let totalCartPrice =parseInt(localStorage.getItem('totalCartPrice')) || 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('remove' , id);
    try {
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/remove`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product_id": id
                }
            }

        });
        console.log(data);
        if(data.result.status == 'error' && !Authorization){
            if(cartItems.length){
                if(cartItems.length == 1){
                    localStorage.removeItem('cartItems');
                    localStorage.setItem('totalCartPrice' , 0);
                }else{
                    console.log('if');
                    cartItems.map(item => {
                        if(item.id == id){
                            totalCartPrice = totalCartPrice - (item.list_price * item.quantity);
                            cartItems.splice(cartItems.indexOf(item) , 1);
                        }
                    });
                    localStorage.setItem('totalCartPrice' , totalCartPrice);
                    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                }
                
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        if(cartItems.length){
            if(cartItems.length == 1){
                localStorage.removeItem('cartItems');
                localStorage.setItem('totalCartPrice' , 0);
            }else{
                console.log('if');
                cartItems.map(item => {
                    if(item.id == id){
                        totalCartPrice = totalCartPrice - (item.list_price * item.quantity);
                        cartItems.splice(cartItems.indexOf(item) , 1);
                    }
                });
                localStorage.setItem('totalCartPrice' , totalCartPrice);
                localStorage.setItem('cartItems' , JSON.stringify(cartItems));
            }
        }
        return false;
    }
};

export const decrementCartItemsLogic = async (id) => {
    const Authorization = Cookies.get('accessKey');
    let totalCartPrice =parseInt(localStorage.getItem('totalCartPrice')) || 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('remove' , id);
    try {
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/decrease`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product_id": id
                }
            }

        });
        console.log(data);
        if(data.result.status == 'error' && !Authorization){
            if(cartItems.length){
                console.log('if');
                cartItems.map(item => {
                    if(item.id == id){
                        if(item.quantity == 1 && cartItems.length == 1){
                            localStorage.removeItem('totalCartPrice');
                            localStorage.removeItem('cartItems');
                        }else if(item.quantity == 1){
                            totalCartPrice = totalCartPrice - item.list_price;
                            cartItems.splice(cartItems.indexOf(item) , 1);       
                            localStorage.setItem('totalCartPrice' , totalCartPrice);
                            localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                        }else{
                            totalCartPrice = totalCartPrice - item.list_price;
                            let newItem = item;
                            newItem.quantity--;
                            cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                            localStorage.setItem('totalCartPrice' , totalCartPrice);
                            localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                        }

                    }
                });
                
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        if(cartItems.length){
            console.log('if');
            cartItems.map(item => {
                if(item.quantity == 1 && cartItems.length == 1){
                    localStorage.removeItem('totalCartPrice');
                    localStorage.removeItem('cartItems');
                }else if(item.id == id){
                    if(item.quantity == 1){
                        totalCartPrice = totalCartPrice - item.list_price;
                        cartItems.splice(cartItems.indexOf(item) , 1);       
                        localStorage.setItem('totalCartPrice' , totalCartPrice);
                        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                    }else{
                        totalCartPrice = totalCartPrice - item.list_price;
                        let newItem = item;
                        newItem.quantity--;
                        cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                        localStorage.setItem('totalCartPrice' , totalCartPrice);
                        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                    }
                }
            });
            
        }
        return false;
    }
};

export const increamentCartItemsLogic = async (id) => {
    const Authorization = Cookies.get('accessKey');
    let totalCartPrice =parseInt(localStorage.getItem('totalCartPrice')) || 0;
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('remove' , id);
    try {
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/increase`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product_id": id
                }
            }

        });
        console.log(data);
        if(data.result.status == 'error' && !Authorization){
            if(cartItems.length){
                console.log('if');
                cartItems.map(item => {
                    if(item.id == id){
                        totalCartPrice = totalCartPrice + item.list_price;
                        let newItem = item;
                        newItem.quantity++;
                        cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                        localStorage.setItem('totalCartPrice' , totalCartPrice);
                        localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                    }
                });
                
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        if(cartItems.length){
            console.log('if');
            cartItems.map(item => {
                if(item.id == id){
                    totalCartPrice = totalCartPrice + item.list_price;
                    let newItem = item;
                    newItem.quantity++;
                    cartItems.splice(cartItems.indexOf(item) , 1 , newItem);
                    localStorage.setItem('totalCartPrice' , totalCartPrice);
                    localStorage.setItem('cartItems' , JSON.stringify(cartItems));
                }
            });
            
        }
        return false;
    }
};


export const removeFromWishlistLogic = async (id) => {
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/product/favorite/remove`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product": id,
                }
            }

        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const addToWishlistLogic = async (id) => {
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/product/favorite/add`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                params:{
                    "product": id,
                }
            }

        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const addNewAddress = async (name , address) => {
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/user/address/add`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                "params": {
                    "name": name,
                    "address_url": address
                }
            }

        });

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const cartCheckOut = async (address_id) => {
    console.log(address_id);
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/checkout`,
            headers:{
                'Content-Type':'application/json',
                Authorization,
            },
            data:{
                id:1,
                method:'post',
                "params":{
                    "address_id": address_id // When Checkout, address_id is required
                }
            }

        });

        console.log(data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getCartOffers = async() =>{
    try {
        const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/customer/offers`,
            headers:{
                Authorization,
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'get',
                params:{}
            }
        });
        return data.result.data;
    } catch (error) {
        console.log(error);
        console.log('error');
        return false;
    }
};

export const acceptCartOffer = async (id) => {
    try {
        const Authorization = Cookies.get('accessKey');
        console.log(Authorization);
        const {data} = await axios({
            method:'post',
            url:`${process.env.apiBaseUrl}/api/v2/customer/offer/accept/${id}`,
            headers:{
                Authorization,
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'post',
                params:{}
            }
        });
        console.log('success');
        console.log(data);
        return true;
    } catch (error) {
        console.log(error);
        console.log('error');
        return false;
    }
};

export const getUserOrders =async (Authorization) => {
    try {
        // const Authorization = Cookies.get('accessKey');
        const {data} = await axios({
            method:'get',
            url:`${process.env.apiBaseUrl}/api/v2/customer/cart/get/all`,
            headers:{
                Authorization,
                'Content-Type':'application/json',
            },
            data:{
                id:1,
                method:'get',
                params:{}
            }
        });
        console.log(data);
        return data.result.data;
    } catch (error) {
        console.log(error);
        console.log('error');
        return false;
    }
}