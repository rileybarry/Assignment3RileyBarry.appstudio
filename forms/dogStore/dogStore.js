let products = ['Crocheted Dog Toy', 'Slow Feeder Bowl', 'Pawz Grey Treat Jar', 'Blue Sweet Dreams Thermal Pajamas', 'Checker Chewy Vuiton Bowl', 'Red Heart Sweater Dress', 'Velvet Hair Bow - Sun Kissed', 'Into the Wild Leash']
let prices = ['$10.00', '$14.00', '$20.00', '$30.00', '$32.00', '$27.00', '$12.00', '$27.00']
let len = prices.length
lblList.value =  ''
let i = 0

dogStore.onshow=function() {
  for(i = 0; i < len; i ++){
   lblList.value = `${lblList.value} ${products[i]}: ${prices[i]}\n`
   }
}

let wishList = []

btnPet.onclick=function(){
  let petInpt = inpPet.value
  wishList.push(petInpt)
  let len2 = wishList.length
  for(i = 0; i < len2; i ++){
    lblTwo.value = `${wishList}\n`
   //lblTwo.value = `${lblTwo.value} ${wishList[i]}\n`
   }
}