var university = {
    name : "nejafabad" ,
    address : {
        city : "isfahan" ,
        postalcode : "3131851414" ,
        phonenumber : "03142292929" ,
    },
    faculty : [
        {
            name : "faculty of Engineering",
            head : {
                name :"Dr.Sharif",
                nationalcode : "123",
                phonenumber : "03159321",
            },
        },
        {
            name : "faculty of Science",
            head : {
                name : "Dr.Fazel",
                nationalcode : "124",
                phonenumber : "03155621",
            },
        },
        {
            name : "faculty of Computer",
            head : {
                name : "Dr.Ahmadi",
                nationalcode : "135",
                phonenumber : "031945671",
            },
        },
        {
            name : "faculty of Art",
            head : {
                name : "Dr.Karami",
                nationalcode : "134",
                phonenumber : "0319463171",
            },
        },
    ],
}
console.log(university.faculty[1].head.nationalcode);
console.log(university.address.phonenumber);