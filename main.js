var images=["https://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2017/05/24/z_jun-p11-TMy-broth.jpg?itok=8Sh8ArjJ",
    "https://mpng.subpng.com/20180402/gcw/kisspng-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-5ac2e6adb7c3e6.6325109915227224777527.jpg",
    "https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-father-png-image_2457414.jpg",
    "https://www.pngall.com/wp-content/uploads/1/Mother.png"];

var names = ["Family Book", "Harold", "Johny", "Victor", "Samantha"];
var i = 0; 
function update()
{
    i++;

    var numbers_of_family_member_in_array = 4
    if (i>numbers_of_family_member_in_array)
    {
        i=0;
    }
    var updatedImage=images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}




