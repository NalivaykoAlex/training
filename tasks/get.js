  /**
 * Нужно написать функцию get. 
 * На вход функция принимает объект и путь до поля объекта. 
 * Путь – это строка, разделенная точкой. 
 * Функция должна вернуть соответствующее поле объекта. 
 * Запрашиваемого поля в объекте может не быть.
 */

function get(obj, paths) {
    const arrayPath = paths.split('.'); // [ 'a', 'b']
    let findObj = obj;
    let count = 0;
  
     while (count !== arrayPath.length) {
       const index = arrayPath[count];
  
       if (findObj[index]) {
         findObj = findObj[index];
        } else {
          findObj = undefined;
  
          count++;
        }
        count++;
     }
  
    return findObj
   }
  
  const obj = { 
    a: { 
      b: { 
        c: 'd' 
      },
      e: 'f'
    }
  };
  
  console.log(get(obj, 'a.b')); // { c : 'd' }
  console.log(get(obj, 'a.b.c'));  // 'd'
  console.log(get(obj, 'a.e'));  // 'f'
  console.log(get(obj, 'a.x.e')); // undefined
  