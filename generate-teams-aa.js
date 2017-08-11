const fs=require('fs');

const shuffle=require('shuffle-array');

const first = new Promise(
    (resolve,reject) => {
        fs.readFile('details.json', 'utf8', (err,data) => {
            if(err){
                console.log(err);
                reject(err);
            }
            console.log('before');
            resolve(data);
            console.log('after');
            

        });
         console.log('first promise');
});
console.log(first);


async function second(data){
    return new Promise(
        (resolve,reject) => {
             const d=JSON.parse(data);
             let newarray=d.members,
                 size=d.numberofteams;
                
            /* if(newarray.length%size == 0){
                 shuffle(newarray);
                 third(newarray,size);
             }
             else{
                 var reason = new Error('cannot make teams');
                 reject(reason);
             }*/
             shuffle(newarray);
             third(newarray,size);
        })
}

async function third(newarray,size){
     let j=1,
         m=Math.round(newarray.length/size);
     for(let i=0;i<newarray.length;i++){
         if(i%m==0){
         console.log();
         console.log('team '+j+':');
         j++;
         }
         console.log(newarray[i]);
     }
}

async function main(){
    console.log('main function');
    try{
       var data = await first;
       await second(data);
    }
    catch(Error){
            console.log(Error.message);
    }
}


main();
