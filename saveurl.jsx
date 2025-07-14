  function saveurl(originalurl) {
          const id = generateId();
          const data = {
            originalurl,
            createdAt : Date.now(),
            clicks: 0,
            logs: [],


          };
          localStorage.setItem(id, JSON.stringify(data));
          return id;
        }

        export default saveurl