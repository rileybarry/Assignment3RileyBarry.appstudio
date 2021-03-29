let arr = ['Crocheted Dog Toy', '$10.00', 'Slow Feeder Bowl', '$14.00', 'Pawz Grey Treat Jar', '$20.00', 'Blue Sweet Dreams Thermal Pajamas', '$30.00', 'Checker Chewy Vuiton Bowl', '$32.00', 'Red Heart Sweater Dress', '$27.00', 'Velvet Hair Bow - Sun Kissed', '$12.00', 'Into the Wild Leash', '$27.00']
len = arr.length
lblList.value =  ''
let i = 0
let wishList = []


dogStore.onshow=function() {
  for(i = 0; i < len; i = i + 2){
   lblTwo.value = `${lblTwo.value} ${wishList[i]}\n`
   }
}

