     function generateId (length=6){
          const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          return Array.from({length}, () => chars[Math.floor(Math.random()* chars.length)]).join('');
        }

        export  default generateId