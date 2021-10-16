var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","sesheka.jpeg","vinoshan.jpeg","hanshikka.jpeg","haniya.jpeg","sujitha.jpeg","pradeep.jpeg","preethi.png","arasu.jpeg","nirmala.jpeg","nataraj.jpeg"];
var names = ["Fmaily Book","Sesheka", "Vinoshan", "Hanshikka", "Haniya", "Sujitha","Pradeep","Preethi","Arasu","Nirmala","Nataraj"];
var i = 0;
function next()
{
    
    var numbers_of_family_member_in_array = 10
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
}
