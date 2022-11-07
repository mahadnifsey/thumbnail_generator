/* Function for background Image */
function img(x){
  /* Clear Selection */
   if(x==0){
    document.getElementById('myimg').style.display='none';
   }
  /* First selection */
   if(x==1){
    document.getElementById('myimg').style.display='block';
    } else {
        document.getElementById('myimg').style.display='none';
      }

  /* Second selection */
   if(x==2){
    document.getElementById('myimg2').style.display='block';
    } else {
        document.getElementById('myimg2').style.display='none';
     }

   /* Third selection */
   if(x==3){
    document.getElementById('myimg3').style.display='block';
    } else {
        document.getElementById('myimg3').style.display='none';
        }

    /* Third selection */
    if(x==4){
      document.getElementById('myimg4').style.display='block';
    } else {
        document.getElementById('myimg4').style.display='none';
        }
}


/* Function for background Image */
function txt(y){
  /* Clear Selection */
   if(y==0){
    document.getElementById('mytxt').style.display='none';
   }

   /* First selection */
    if(y==1){
     document.getElementById('mytxt').style.display='block';
     } else {
         document.getElementById('mytxt').style.display='none';
       }

   /* Second selection */
    if(y==2){
     document.getElementById('mytxt2').style.display='block';
     } else {
         document.getElementById('mytxt2').style.display='none';
       }

}

/* Additional Image Options */
function imgs(z){
  /* Clear Selection */
   if(z==0){
    document.getElementById('myimgs').style.display='none';
   }
  /* First selection */
   if(z==1){
    document.getElementById('myimgs').style.display='block';
    } else {
        document.getElementById('myimgs').style.display='none';
      }

  /* Second selection */
   if(z==2){
    document.getElementById('myimgs2').style.display='block';
    } else {
        document.getElementById('myimgs2').style.display='none';
     }

   /* Third selection */
   if(z==3){
    document.getElementById('myimgs3').style.display='block';
    } else {
        document.getElementById('myimgs3').style.display='none';
        }

    /* Third selection */
    if(z==4){
      document.getElementById('myimgs4').style.display='block';
    } else {
        document.getElementById('myimgs4').style.display='none';
        }
}
