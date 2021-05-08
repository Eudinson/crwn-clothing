const INITIAL_STATE = {
    sections: [
        {
            id:1,
            title: 'hats',
            linkUrl: 'shop/hats',
            imageUrl:'https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80'
        },
        {
            id:2,
            title: 'jackets',
            linkUrl: 'shop/jackets',
            imageUrl:'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        },
        {
            id:3,
            title: 'sneakers',
            linkUrl: 'shop/sneakers',
            imageUrl:'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        },
        {
            id:4,
            title: 'womens',
            size: 'large',
            linkUrl: 'shop/womens',
            imageUrl:'https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            id:5,
            title: 'mens',
            size: 'large',
            linkUrl: 'shop/mens',
            imageUrl:'https://images.unsplash.com/photo-1531161057497-183cd5a42ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;