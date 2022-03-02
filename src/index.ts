


function a() {
    return new Promise(function (a, b) {
        setTimeout(() => {
            a('1')
        }, 1000);
    })
}

a().then((e)=>{
    console.log(e);
})