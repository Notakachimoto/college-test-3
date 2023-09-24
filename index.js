export default function solution(content) {
  // BEGIN
  const splitim = content.split('\n');
  const deleat = splitim.slice(2); 
  console.log(deleat.length);

  const arr = (content) => {
    const elemen = { namee:content[0],place:content[1],type:content[2],time:content[3],danger:content[4]
    } 
    return elemen
   }

   const rows = deleat.map((row) => row 
   .split('|') 
    .filter((row) => row)) 
   .map((array) => array  
       .map((element) => element.trim()) 
        ); 

    const sortirovka = rows.map((row) => arr(row));
    const spisok = sortirovka.map((row) => row.namee);
    const upRegistor = spisok.map((row) => row[0].toUpperCase() + row.slice(1))
    console.log(upRegistor.sort().join(', '));
  // END
}