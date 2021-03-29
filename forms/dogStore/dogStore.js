let arr = ['Crocheted Dog Toy', '$10.00', 'Slow Feeder Bowl', '$14.00', 'Pawz Grey Treat Jar', '$20.00', 'Blue Sweet Dreams Thermal Pajamas', '$30.00', 'Checker Chewy Vuiton Bowl', '$32.00', 'Red Heart Sweater Dress', '$27.00', 'Velvet Hair Bow - Sun Kissed', '$12.00', 'Into the Wild Leash', '$27.00']
let len = arr.length
lblList.value =  ''
let i = 0

dogStore.onshow=function() {
  for(i = 0; i < len; i = i + 2){
   lblList.value = `${lblList.value} ${arr[i]}\n`
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