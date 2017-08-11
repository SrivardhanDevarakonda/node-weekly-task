var promise=require('Bluebird');
const isMomHappy = true;
// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
            console.log(message);
          
        }
    );
}

// call our promise
function askMom() {
        console.log('asking mom');
        willIGetNewPhone .then(showOff).catch(function (error){
            console.log(error.message);
        });

       
}

askMom(); 
