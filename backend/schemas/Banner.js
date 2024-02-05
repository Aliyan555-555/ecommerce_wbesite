export default {
    name:'Banner',
    title:'Banner',
    type:'document',
    fields: [
        {
            name:'SmallText',
            title:'SmallText',
            type:'string',
        },
        {
            name:'MediumHeading',
            title:'MediumHeading',
            type:'string',
        },
        {
            name:'LargeHeading',
            title:'LargeHeading',
            type:'string',
        },
        {
            name:'ProductDetail',
            title:'Product Description',
            type:'string',
        },
        {
            name:'ButtonText',
            title:'ButtonText',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'LargeHeading',
                maxLength:90

            }
        },
        {
            title:'Image',
            name:'image',
            type:'image',
            options:{
                hotspot:true,
            }

        },]
}