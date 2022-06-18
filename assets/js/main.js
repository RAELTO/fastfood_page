//LOGIC

var app = new Vue({
    el: '#app',
    data: {
        hb: [
            {
                id: 1,
                img: './assets/images/hb1.jpg',
                name: 'Hamb. Doble + Papas',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), dos carnes de res artesanales 
                de 125 gr cada una, doble queso, doble tocineta, jamón, cebolla caramelizada, vegetales frescos y salsas de la casa.
                Incluye papas a la francesa. 
                `,
                price: 30000,
                idm: 1,
                modal_id: 'hb1',
                modalw: '#hb1',
                order_amount: 0,
            },
            {
                id: 2,
                img: './assets/images/hb2.jpg',
                name: 'Hamb. Pollo + Papas',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), 150 gr de pollo apanado, 
                doble queso, tocineta, jamón, cebolla caramelizada, vegetales frescos y salsas de la casa. 
                Incluye papas a la francesa. 
                `,
                price: 30000,
                idm: 2,
                modal_id: 'hb2',
                modalw: '#hb2',
                order_amount: 0,
            },
            {
                id: 3,
                img: './assets/images/hb3.jpg',
                name: 'Hamb. De Res + Papas',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), dos carnes de res artesanales 
                de 125 gr cada una, doble queso, doble tocineta, jamón, cebolla caramelizada, 
                vegetales frescos y salsas de la casa. 
                `,
                price: 30000,
                idm: 3,
                modal_id: 'hb3',
                modalw: '#hb3',
                order_amount: 0,
            },
            {
                id: 4,
                img: './assets/images/hb4.jpg',
                name: 'Hamb. Super + Gaseosa',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), dos carnes de res artesanales 
                de 125 gr cada una, doble queso, doble tocineta, jamón, cebolla caramelizada, 
                vegetales frescos y salsas de la casa. 
                `,
                price: 30000,
                idm: 4,
                modal_id: 'hb4',
                modalw: '#hb4',
                order_amount: 0,
            },
        ],
        hd: [
            {
                id: 1,
                img: './assets/images/hd1.jpg',
                name: 'Hot Dog 1',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                idm: 1,
                modal_id: 'hd1',
                modalw: '#hd1',
                order_amount: 0,
            },
            {
                id: 2,
                img: './assets/images/hd2.jpg',
                name: 'Hot Dog 2',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                idm: 2,
                modal_id: 'hd2',
                modalw: '#hd2',
                order_amount: 0,
            },
            {
                id: 3,
                img: './assets/images/hd3.jpg',
                name: 'Hot Dog 3',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                idm: 3,
                modal_id: 'hd3',
                modalw: '#hd3',
                order_amount: 0,
            },
            {
                id: 4,
                img: './assets/images/hd4.jpg',
                name: 'Hot Dog 4',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                idm: 4,
                modal_id: 'hd4',
                modalw: '#hd4',
                order_amount: 0,
            },
        ],
        employees: [
            {id: 1, charge: 'Cocinero', password: '1234'}
        ],
        cart: [
            {id: 1, prod: 'TEST1', qty: 1, price: 30000},
            {id: 2, prod: 'TEST2', qty: 1, price: 30000},
        ],
        cheftable: [
            {id: 1, order: 'abcd', qty: 0, status: 'Completado'},
        ],
        waitertable: [
            {id: 1, order: 'efgh', qty: 0, status: 'Pendiente'},
        ],
        totalCart: 0,
        //variables below
    },
    methods: {
        minusbtn(item){
            if (item.order_amount > 0) {
                item.order_amount -= 1;
            } 
        },
        plusbtn(item){
            if (item.order_amount < 20) {
                item.order_amount += 1;
            } 
        },
        closemodal(item){
            item.order_amount = 0;
        },
        cartClick(){
            if (this.cart.length > 0) {
                const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
            }
        },
        addToCart(item){
            if(item.order_amount > 0 && item.order_amount < 20) {
                this.cart.push({
                    id: this.cart.length + 1,
                    prod: item.name,
                    qty: item.order_amount,
                    price: item.price,
                });
                alert(`Se agregaron ${item.order_amount} ${item.name} al carrito`);
                item.order_amount = 0;
            }else{
                alert('Debe agregar mínimo un producto');
            }
        },
        delFromCart(index){
            this.cart.splice(index, 1);
            const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
            this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
        },
        cancel(){
            if (this.cart.length > 0) {
                this.cart.splice(0, this.cart.length);
                const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
                alert('Su pedido fue cancelado satisfactoriamente');
                this.hb.forEach(element => element.order_amount = 0);
                this.hd.forEach(element => element.order_amount = 0);
            }else{
                const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
                alert('No hay pedidos, por favor cierre el carrito y agregue un nuevo producto');
            }
        },
        login(){

        }
    },
    beforeMoun(){

    }
});
