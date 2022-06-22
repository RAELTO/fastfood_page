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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
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
                order_amount: 1,
            },
        ],
        employees: [
            {id: '1234', charge: 'Cocinero', password: '12345678'},
            {id: '5678', charge: 'Mesero', password: '87654321'},
            {id: '3333', charge: 'Admin', password: '3333'},
        ],
        cart: [],//empty array that will store the client's orders
        order: [],
        waitertable: [
            {id: 1, order: 'efgh', qty: 0, status: 'Pendiente'},
        ],
        totalCart: 0,
        //variables below
        fcartN: '',
        modaltrigger: 0,
        logspan: 0,
        userinput: '',
        passinput: '',
        ptrigger: 0,
        paymethod: '',
        totalsales: 0,
        totalcancelled: 0,
        nonsold: 0,
        npurchased: 0,
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
            item.order_amount = 1;
        },
        closepayments(){
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
                    img: item.img,
                    prod: item.name,
                    qty: item.order_amount,
                    price: item.price,
                });

                /*acc -> accumulator; cv -> current value*/
                this.cart = this.cart.reduce((acc, cv) => {
                    const elementExists = acc.find(e => e.prod === cv.prod);
                    if (elementExists) {
                    return acc.map((e) => {
                        if (e.prod === cv.prod) {
                        return {
                            ...e,
                            qty: e.qty + cv.qty
                        }
                        }
                        return e;
                    });
                    }
                    return [...acc, cv];
                }, []);

                this.fcartN = this.cart.length;

                alert(`Se agregaron ${item.order_amount} ${item.name} al carrito`);
                item.order_amount = 1;

            }else{
                alert('Debe agregar mínimo un producto');
            }
        },
        payments(){
            if (this.cart.length > 0) {
                this.ptrigger = 1;
            }else{
                alert('El carrito está vacío, por favor agregue al menos un producto');
            }
            
        },
        cancelpurchase(){
            if (confirm("¿Esta seguro de que desea cancelar su compra?") === true){
                const totalc = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.order.push({
                    id: this.order.length + 1,
                    order: [],
                    statusEmpl: 'Cancelado',
                    totalp: 0,
                    statusAdmin: 'Cancelado',
                    totalc: totalc,
                });

                const prodqty = this.cart.map(e => {
                    return{
                        prod: e.prod,
                        qty: e.qty
                    }
                });

                this.order[this.order.length - 1].order = prodqty;
                if (this.order[this.order.length - 1].statusAdmin === 'Cancelado') {
                    this.totalcancelled += 1;
                }
                const sumtotals = this.order.map(element => element.totalc).reduce((a, b) => a + b, 0);
                this.nonsold = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(sumtotals);;
                alert('Su compra fue cancelada satisfactoriamente');
                this.cancel();
            }
        },
        sendorder(){
            if (this.cart.length > 0) {

                if (this.paymethod.length <= 0) {
                    alert('Por favor seleccione un método de pago');
                }else{
                    const totalp = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                    this.order.push({
                        id: this.order.length + 1,
                        order: [],
                        statusEmpl: 'Pendiente',
                        totalp: totalp,
                        statusAdmin: 'Pagado',
                        totalc: 0,
                    });
                    
                    const prodqty = this.cart.map(e => {
                        return{
                            prod: e.prod,
                            qty: e.qty
                        }
                    });
    
                    this.order[this.order.length - 1].order = prodqty;
                    if (this.order[this.order.length - 1].statusAdmin === 'Pagado') {
                        this.npurchased += 1;
                    }
                    const sumtotals = this.order.map(element => element.totalp).reduce((a, b) => a + b, 0);
                    this.totalsales = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(sumtotals);
                    
                    alert('Tu pedido se está preparando, lo recibirás muy pronto');
                    this.cancel();
                }
            }else{
                alert('No hay productos en el carrito, por favor agregue al menos uno');
            }
        },
        delFromCart(index){
            this.cart.splice(index, 1);
            const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
            this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
            if (this.cart.length > 0) {
                this.fcartN = this.cart.length;
            }else{
                this.fcartN = '';
            }
        },
        cancel(){
            if (this.cart.length > 0) {
                this.cart.splice(0, this.cart.length);
                const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
                //alert('Su pedido fue cancelado satisfactoriamente');
                this.hb.forEach(element => element.order_amount = 1);
                this.hd.forEach(element => element.order_amount = 1);
                this.fcartN = '';
                this.ptrigger = 0;
                this.paymethod = '';
            }else{
                alert('No hay productos en el carrito, por favor agregue al menos uno');
                const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
                this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
            }
        },
        login(){

            if (this.userinput.length > 0 && this.passinput.length > 0) {
                const index = this.employees.findIndex((object) => {
                    return object.id == this.userinput;
                });
    
                if(index != -1 && this.passinput === this.employees[index].password){
                    this.modaltrigger = 1;
                    this.logspan = 0;
                }else{
                    this.logspan = 1;
                }
            }else{
                this.logspan = 2;
            }

        },
        closelogin(){
            this.logspan = 0;
            this.userinput = '';
            this.passinput = '';
        },
        logout(){
            if (confirm("¿Esta seguro de que desea cerrar sesión?") === true){
                this.modaltrigger = 0;
                this.logspan = 0;
                this.userinput = '';
                this.passinput = '';
            }
        }
    }
});
