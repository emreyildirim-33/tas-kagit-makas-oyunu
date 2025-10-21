function tasKagitMakas(user) { 
  const randomNumber=Math.floor(Math.random()*3);

  let computer;
  if (randomNumber === 0) { 
  computer = "taş";
} else if (randomNumber === 1) { 
  computer = "kağıt";
}  else { 
  computer ="makas";
}

  if (user === computer) {
  return `Senin seçimin: ${user}. Bilgisayarın seçimi: ${computer}. Beraberlik!`;
}

  else if ( 
    ( user ==="taş" && computer ==="makas") ||
    (user=== "kağıt" && computer ==="taş")||
    (user === "makas" && computer ==="kağıt")
  ) { 
  return `Senin seçimin:${user}. Bilgisayarın seçimi:${computer}. Kazandın!`
  }
  else { 
  return `Senin seçimin:${user}.Bilgisayarın seçimi:${computer}.Kaybettin!`
   }
  }
console.log(tasKagitMakas("taş"))
  
