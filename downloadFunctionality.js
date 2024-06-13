
document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelector('#download').addEventListener('click', button=>{
    button.preventDefault();
    let inputUrl = document.querySelector('#file-url');

    document.querySelector('#download').value = "Donwloading ...";
    downloadFile(inputUrl.value);
    
    inputUrl.value = '';
  });
});

function downloadFile(url)
{
  fetch(url)
  .then(response=> response.blob() )
  .then( file => {
    console.log(file);

    let tempUrl = URL.createObjectURL(file);

    let anchor = document.createElement('a');
    anchor.href = tempUrl;
    anchor.download = url.replace(/^.*[\\\/]/, '');
    anchor.style.display = 'none'; 

    document.querySelector('body').append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(tempUrl);
    document.querySelector('#download').value = "Donwload";
    
  })
  .catch(()=>{
    document.querySelector('#download').value = "Donwload";
    alert('Could not download file');
  });
}


