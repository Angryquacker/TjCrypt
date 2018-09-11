const crypt = {
  newHash: (input) => {
    let hash = [];
    let key = [];

    for (let i = 0;i < 10;i++) {
      let num = Math.round(Math.random() * 10);
      hash.push(num);
      key.push(num);

      for (let j = 0;j < input.length;j++) {
        let char = input[Math.floor(Math.random() * input.length)];
        hash.push(char);
      }
    }

    for (let i = 0;i < input.length;i++) {
      key.push(input[i].charCodeAt(0).toString());
    }

    let result = {
      hash: hash.join(''),
      key: key
    };

    return result;
   },
   
   removeHash: (hash, key) => {
    let result = [];

    for (let i = 0;i < key.length;i++) {
      if (typeof key[i] !== 'string') {
        continue;
      }
      else {
        result.push(String.fromCharCode(key[i]));
      }
    }

    return result.join('');
   }
}
