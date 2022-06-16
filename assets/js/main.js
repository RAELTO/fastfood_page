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
                modal_id: 'hb1',
                modalw: '#hb1',
            },
            {
                id: 2,
                img: './assets/images/hb2.jpg',
                name: 'Hamb. Pollo + Papas',
                desc: `Deliciosa hamburguesa de pollo, pan tipo brioche, vegetales frescos y salsas de la casa`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), 150 gr de pollo apanado, 
                doble queso, tocineta, jamón, cebolla caramelizada, vegetales frescos y salsas de la casa. 
                Incluye papas a la francesa. 
                `,
                price: 30000,
                modal_id: 'hb2',
                modalw: '#hb2',
            },
            {
                id: 3,
                img: './assets/images/hb3.jpg',
                name: 'Hamb. 3',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), dos carnes de res artesanales 
                de 125 gr cada una, doble queso, doble tocineta, jamón, cebolla caramelizada, 
                vegetales frescos y salsas de la casa. 
                `,
                price: 30000,
                modal_id: 'hb3',
                modalw: '#hb3',
            },
            {
                id: 4,
                img: './assets/images/hb4.jpg',
                name: 'Hamb. 4',
                desc: `Deliciosa hamburguesa doble carne artesanal, pan tipo brioche y vegetales frescos`,
                descmodal: `Ingredientes: Pan artesanal (mantequilla, orégano), dos carnes de res artesanales 
                de 125 gr cada una, doble queso, doble tocineta, jamón, cebolla caramelizada, 
                vegetales frescos y salsas de la casa. 
                `,
                price: 30000,
                modal_id: 'hb4',
                modalw: '#hb4',
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
                modal_id: 'hd1',
                modalw: '#hd1',
            },
            {
                id: 2,
                img: './assets/images/hd2.jpg',
                name: 'Hot Dog 2',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                modal_id: 'hd2',
                modalw: '#hd2',
            },
            {
                id: 3,
                img: './assets/images/hd3.jpg',
                name: 'Hot Dog 3',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                modal_id: 'hd3',
                modalw: '#hd3',
            },
            {
                id: 4,
                img: './assets/images/hd4.jpg',
                name: 'Hot Dog 4',
                desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet`,
                descmodal: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat voluptatibus sapiente aliquid deleniti, rem nisi!`,
                price: 25000,
                modal_id: 'hd4',
                modalw: '#hd4',
            },
        ]
        //variables below
    },
    methods: {
        abc(){

        },
    }
});
