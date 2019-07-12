let dbconfig=require('../dbconfig/db-connect');
dbconfig.connect(function (error) {
    if (error){
        console.log('db connection error');
        process.exit(1);

    } else
    {
        console.log('db connected successfully')
        dbconfig.get().collection('product').insertMany([
            {
                imagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png",
                title: 'Gothic video game',
                description:'awesome game!!!!',
                prise: '20'

            },
            {
                imagePath: "https://cf4.s3.souqcdn.com/item/2018/12/24/42/77/93/47/item_L_42779347_7ec89f3cd04b4.jpg",
                title: 'PUBG',
                description:'Popular game!!!!',
                prise: '20'

            },
            {
                imagePath: "https://i.pinimg.com/736x/92/9f/08/929f087a2e1f00cc426b2422d64a3b9b.jpg",
                title: 'fortninte',
                description:'thriller game!!!!',
                prise: '20'

            },
            {
                imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7c7MW9_OFfbU0auM1rJyhbDemFxAWkv0NDIJFCmX9aHaaGdMPOY6ZPjRW",
                title: 'super mario',
                description:'super game!!!!',
                prise: '20'

            }, {
                imagePath: "https://i.pinimg.com/736x/92/9f/08/929f087a2e1f00cc426b2422d64a3b9b.jpg",
                title: 'fortninte',
                description:'thriller game!!!!',
                prise: '20'

            },
            {
                imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7c7MW9_OFfbU0auM1rJyhbDemFxAWkv0NDIJFCmX9aHaaGdMPOY6ZPjRW",
                title: 'super mario',
                description:'super game!!!!',
                prise: '20'

            }
        ]);
    }

});
