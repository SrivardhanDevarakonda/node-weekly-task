const fs=require('fs');

const shuffle=require('shuffle-array');

const f='./details.json';

fs.readFile(f, 'utf8', (err,data) => {
     if(err)console.log(err);
    
     let d=JSON.parse(data);
     
             let array1=(shuffle(d.members));
                let size = array1.length/d.numberofteams;
                var array2=[],i;
                    
                    for(i=0;i<array1.length;i+=size){
                        array2.push(array1.slice(i,i+size));
                    }
               console.log(array2);
    
});

            