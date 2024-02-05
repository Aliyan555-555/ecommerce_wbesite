export default {
    name:'Product',
    title:'Product',
    type:'document',
    fields: [
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'oldprice',
            title:'Old Price',
            type:'number',
        },
        {
            name:'detail',
            title:'Detail',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:90

            }
        },
        {
            title:'Image',
            name:'image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:true,
            }

        },
        {
            title:'Colors',
            name:'color',
            type:'array',
            of:[{type:'string'}],
            

        },
        {
            title:'Size',
            name:'size',
            type:'array',
            of:[{type:'string'}],
            

        },
       
       
       


    ],
}