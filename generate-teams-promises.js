const fs=require('fs');

const shuffle=require('shuffle-array');

const first = new Promise(
    (resolve,reject) => {
        fs.readFile('details.json', 'utf8', (err,data) => {
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(data)
        });
});

console.log(first);

const second = function(data){
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

const third = function(newarray,size){
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

function main(){
    first
    .then(second)
    .catch(function (Error){
            console.log(Error.message);
    });
   
}

main();
 console.log('hello');