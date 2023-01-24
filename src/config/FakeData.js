const cityies = [
    { id: 1, name: 'Washington DC' },
    { id: 2, name: 'New York' },
    { id: 3, name: 'China Town' },
];

const USERLIST = [
    { id: 1, name: 'Jhon Whick', timestap: '9:41 PM', newmsg: 3 },
    { id: 2, name: 'David Dic', timestap: '9:41 PM', newmsg: 0 },
    { id: 4, name: 'Mukthayar', timestap: 'Yesterday', newmsg: 5 },
    { id: 5, name: 'David Dic', timestap: '24-Jun-2022', newmsg: 0 },
    { id: 6, name: 'Mukthayar', timestap: '21-JUL-2022', newmsg: 1 },
    { id: 7, name: 'Jhon Whick', timestap: '01-AUG-2022', newmsg: 0 },
    { id: 8, name: 'David Dic', timestap: '12-SEP-2022', newmsg: 0 },
    { id: 9, name: 'David Dic', timestap: '24-Jun-2022', newmsg: 4 },
    { id: 10, name: 'Mukthayar', timestap: '21-JUL-2022', newmsg: 0 },
    { id: 11, name: 'Jhon Whick', timestap: '01-AUG-2022', newmsg: 1 },
    { id: 12, name: 'David Dic', timestap: '12-SEP-2022', newmsg: 0 },
    { id: 13, name: 'David Dic', timestap: '24-Jun-2022', newmsg: 2 },
    { id: 14, name: 'Mukthayar', timestap: '21-JUL-2022', newmsg: 0 },
    { id: 15, name: 'Jhon Whick', timestap: '01-AUG-2022', newmsg: 1 },
    { id: 16, name: 'David Dic', timestap: '12-SEP-2022', newmsg: 0 },
]

const PofilePost = [
    {
        id: 'id123',
        imgURL:
            'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
        text: 'Pioneer LHS Chaise Lounger in Grey Colour',
    },
    {
        id: 'id124',
        imgURL:
            'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
        text: 'Precedant Furniture',
    },
    {
        id: 'id125',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
        text: 'Leverette Upholstered Platform Bed',
    },
    {
        id: 'id126',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
        text: 'Briget Accent Table',
    },
    {
        id: 'id127',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Rivet Emerly Media Console',
    },
    {
        id: 'id128',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Drew Barrymore Flower Home Accent Chair',
    },
    {
        id: 'id129',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Ecobirdy Charlie Chair',
    },
    {
        id: 'id130',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
        text: 'Hailey Sofa',
    },
    {
        id: 'id131',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
        text: 'Farmhouse Dining Table',
    },
    {
        id: 'id132',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Evelyn Coffee Table',
    },
    {
        id: 'id133',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Slope Nomad Leather Sofa',
    },
    {
        id: 'id134',
        imgURL:
            'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
        text: 'Chair and Table',
    },
    {
        id: 'id223',
        imgURL:
            'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
        text: 'Pioneer LHS Chaise Lounger in Grey Colour',
    },
    {
        id: 'id224',
        imgURL:
            'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
        text: 'Precedant Furniture',
    },
    {
        id: 'id225',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
        text: 'Leverette Upholstered Platform Bed',
    },
    {
        id: 'id226',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
        text: 'Briget Accent Table',
    },
    {
        id: 'id227',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Rivet Emerly Media Console',
    },
    {
        id: 'id228',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Drew Barrymore Flower Home Accent Chair',
    },
    {
        id: 'id229',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Ecobirdy Charlie Chair',
    },
    {
        id: 'id230',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
        text: 'Hailey Sofa',
    },
    {
        id: 'id231',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
        text: 'Farmhouse Dining Table',
    },
    {
        id: 'id232',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Evelyn Coffee Table',
    },
    {
        id: 'id233',
        imgURL:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
        text: 'Slope Nomad Leather Sofa',
    },
    {
        id: 'id234',
        imgURL:
            'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
        text: 'Chair and Table',
    },
];

const GENDERLIST = [{ label: 'Male', value: 'male' },
{ label: 'Female', value: 'female' },
{ label: 'Other', value: 'other' }]

export {
    cityies,
    USERLIST,
    PofilePost,
    GENDERLIST
}