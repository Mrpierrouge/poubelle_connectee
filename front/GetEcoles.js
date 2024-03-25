let GetEcoles = () => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/poids")
        .then((response) => response.json())
        .then((data) => {
          let ecoles = [];
          data.forEach((pesee) => {
            if (!ecoles.includes(pesee.ecole)) {
              ecoles.push(pesee.ecole);
            }
          });
  
          resolve(ecoles);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  GetEcoles().then((Ecoles) => {
    console.log(Ecoles);
  });
  